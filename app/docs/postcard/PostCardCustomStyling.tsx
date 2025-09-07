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
      category="Real"
      customClassNames={{
        wrapper:
          "relative overflow-hidden rounded-2xl shadow-xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-800 hover:scale-[1.02] transition-transform duration-300",
        thumbnail:
          "rounded-t-2xl h-56 object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105",
        contentWrapper: "p-5 text-slate-200 backdrop-blur-sm",
        categoryLabel:
          "uppercase tracking-wide text-[10px] font-bold text-teal-400 group-hover:text-teal-300 transition-colors",
        title:
          "font-extrabold text-xl mt-2 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-cyan-500 transition-colors",
        description:
          "mt-2 text-sm text-slate-400 leading-snug line-clamp-2 group-hover:text-slate-300 transition-colors",
        divider:
          "my-4 h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-70",
        authorWrapper: "flex items-center gap-3 mt-3",
        authorProfilePic:
          "ring-2 ring-teal-400 ring-offset-2 ring-offset-slate-900 rounded-full transition-transform group-hover:rotate-3",
        authorFullName: "font-semibold text-slate-200 group-hover:text-white",
        authorRole:
          "text-xs text-slate-400 italic tracking-wide group-hover:text-slate-300",
      }}
    />
  );
};

export default PostCardCustomStyling;
