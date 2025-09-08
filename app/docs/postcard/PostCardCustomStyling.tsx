import React from "react";
import PostCard from "./PostCard";

const PostCardCustomStyling = () => {
  return (
    <PostCard
      thumbnail="https://images.pexels.com/photos/28468503/pexels-photo-28468503.jpeg"
      title="Ceramics Under Pressure"
      description="Exploring the craft, science, and innovation of ceramics in underwater environments."
      author={{
        profilePicture:
          "https://images.pexels.com/photos/20224062/pexels-photo-20224062.jpeg",
        fullname: "Bouander Med Rafik",
        role: "Underwater Ceramic Technician",
      }}
      category="Research"
      customClassNames={{
        wrapper:
          "relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300",
        thumbnail:
          "rounded-t-xl h-52 w-full object-cover transition-transform duration-500 hover:scale-105",
        contentWrapper: "p-5 text-slate-800",
        categoryLabel:
          "uppercase tracking-wide text-[11px] font-semibold text-slate-500",
        title:
          "font-serif text-lg font-bold mt-2 text-slate-900 hover:text-slate-700 transition-colors",
        description: "mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2",
        divider: "my-4 h-px w-full bg-slate-200",
        authorWrapper: "flex items-center gap-3 mt-3",
        authorProfilePic:
          "w-9 h-9 rounded-full ring-1 ring-slate-300 object-cover",
        authorFullName:
          "font-medium text-slate-900 hover:text-slate-700 transition-colors",
        authorRole: "text-xs text-slate-500 italic",
      }}
    />
  );
};

export default PostCardCustomStyling;
