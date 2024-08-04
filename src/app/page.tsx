import { Component } from "@/components/component";

export default function Home() {
  return (
    <div className="flex-grow flex justify-center items-start w-full overflow-x-hidden">
      <div className="w-full max-w-[2000px] mx-auto">
        <Component />
      </div>
    </div>
  );
}