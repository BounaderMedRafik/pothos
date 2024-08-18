import SingleDocContent from "@/components/docs/SingleDocContent";
import React from "react";

export default function SingleDocPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="p-5">
      <div>
        <SingleDocContent id={params.id} />
      </div>
    </div>
  );
}
