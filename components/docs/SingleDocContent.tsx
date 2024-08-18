import { docs } from "@/data/documents";
import React from "react";

const SingleDocContent = ({ id }: { id: string }) => {
  const document = docs.filter((item) => item.id == id);
  return (
    <div>
      {document.map((item, i) => (
        <div key={i}>{item.description}</div>
      ))}
    </div>
  );
};

export default SingleDocContent;
