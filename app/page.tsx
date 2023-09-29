"use client";

import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";

export default function Home() {
  const [calcWidth, setCalcWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newWindowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const viewportHeight = newWindowDimensions.height;
      const aspectRatio = 16 / 9;

      if (newWindowDimensions.width < viewportHeight * aspectRatio) {
        setCalcWidth(viewportHeight * aspectRatio);
      } else {
        setCalcWidth(newWindowDimensions.width);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="h-screen">
      <div className="grid-cols-12 relative h-screen overflow-hidden">
        <div>
          <ReactPlayer
            height={(calcWidth / 16) * 9}
            width={calcWidth}
            url="https://vimeo.com/420549018"
            controls
            playing
            muted
            loop
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
              zIndex: -20,
              opacity: 1,
            }}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  controls: 0,
                },
              },
              vimeo: {
                playerOptions: {
                  controls: false,
                },
              },
            }}
          />
        </div>

        <div className="px-20 h-full w-full col-span-12 relative flex flex-col items-center justify-center">
          <div className="m-auto col-span-full grid gap-x-24 sm:grid-cols-12">
            <div className="sm:col-span-6 md:col-span-8 xl:col-span-7 md:space-y-24 z-20">
              <p className="text-sm uppercase text-yellow-300">
                Eyebrow example text
              </p>
              <p className="text-7xl text-white">Title example text</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
