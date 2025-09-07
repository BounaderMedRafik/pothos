import React from "react";
import PostCard from "./PostCard";

const PostCardExample = () => {
  return (
    <PostCard
      thumbnail={
        "https://images.pexels.com/photos/28468503/pexels-photo-28468503.jpeg"
      }
      title={"Ceramics Under Pressure"}
      description={
        "Exploring the craft, science, and innovation of ceramics in underwater environments."
      }
      author={{
        profilePicture:
          "https://images.pexels.com/photos/20224062/pexels-photo-20224062.jpeg",
        fullname: "Bouander Med Rafik",
        role: "underwater ceramic technician",
      }}
      category={"Real"}
    />
  );
};

export default PostCardExample;
