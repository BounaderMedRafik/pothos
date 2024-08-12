import SideBar from "@/components/dashboard/SideBar";
import React from "react";

export default function DashBoardPage() {
  return (
    <div className="relative">
      <div>
        <SideBar />
      </div>
      <div className="pl-[20%] w-full">
        <div className="p-5">stuff</div>
      </div>
    </div>
  );
}
