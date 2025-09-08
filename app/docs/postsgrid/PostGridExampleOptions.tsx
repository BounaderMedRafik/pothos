import React from "react";
import PostsGrid from "./PostsGrid";

const samplePosts = Array.from({ length: 12 }, (_, i) => ({
  thumbnail: "https://placehold.co/600x400",
  title: `Demo Post ${i + 1}`,
  description: "This is a sample post used to demonstrate PostsGrid options.",
  author: {
    profilePicture: "https://placehold.co/100x100",
    fullname: `Author ${i + 1}`,
    role: "Writer",
  },
  category: i % 2 === 0 ? "Tech" : "Design",
  tags: i % 2 === 0 ? ["react", "frontend"] : ["ui", "design"],
}));

const PostGridExampleOptions = () => {
  return (
    <div className="p-6">
      <PostsGrid
        posts={samplePosts}
        title="All Posts"
        description="Showing a more customized grid with multiple options."
        titleCentered={true}
        layout="grid"
        cols={4} // ✅ 4 columns
        rows={3} // ✅ 3 rows
        gap="gap-8" // ✅ wider gap
        itemsPerPage={8} // ✅ only 8 per page
        tags={["react", "frontend", "ui", "design"]}
        order="desc"
        customClassNames={{
          wrapper: "bg-muted p-6 rounded-lg",
          headerWrapper: "mb-10",
          title: "text-3xl font-extrabold",
          description: "text-base text-gray-500",
          gridWrapper: "mt-6",
          paginationWrapper: "mt-10",
          tagsWrapper: "mb-8",
          tagButton: "uppercase tracking-wide",
        }}
      />
    </div>
  );
};

export default PostGridExampleOptions;
