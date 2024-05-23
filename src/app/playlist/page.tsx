"use client"
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="w-full md:h-[80vh] h-[600px] bg-gradient-to-r bg-slate-800 flex items-center justify-center mt-10">
      <div className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden ${isFullScreen ? "w-1/2 h-1/2" : "w-96 h-auto"}`}>
        <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-4 py-2">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">UltraV Music</h2>
          <div className="flex space-x-2">
            <ExpandIcon className="text-gray-900 dark:text-gray-100 cursor-pointer hidden md:block" onClick={toggleFullScreen} />
            <ConstructionIcon className="text-gray-900 dark:text-gray-100" />
            <MenuIcon className="text-gray-900 dark:text-gray-100" />
          </div>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex items-center space-x-4">
            <img
              alt="Album Art"
              height="64"
              src="/leaving-you.jpg"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width="64"
            />
            <div className="flex-1 space-y-1">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Leaving You</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">UltraV</p>
            </div>
          </div>
          <Slider className="flex-1" value={[0]} />
          <div className="flex items-center justify-between">
            <Button size="icon" variant="ghost">
              <ArrowLeftIcon className="text-gray-900 dark:text-gray-100" />
            </Button>
            <Button className="p-2" size="icon" variant="primary">
              <PlayIcon className="text-gray-900 dark:text-gray-100" />
            </Button>
            <Button size="icon" variant="ghost">
              <ArrowRightIcon className="text-gray-900 dark:text-gray-100" />
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Playlist</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-900 dark:text-gray-100">Be With You</p>
              <PlayIcon className="text-gray-900 dark:text-gray-100" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-900 dark:text-gray-100">Summertime</p>
              <PlayIcon className="text-gray-900 dark:text-gray-100" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-900 dark:text-gray-100">Nothin' At All</p>
              <PlayIcon className="text-gray-900 dark:text-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRightIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ConstructionIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  );
}

function ExpandIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={props.onClick}
    >
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  );
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PlayIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
