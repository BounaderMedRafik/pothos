import React from "react";
import PostsGrid from "./PostsGrid";
import { CheckCircle } from "lucide-react";

const samplePosts = Array.from({ length: 6 }, (_, i) => ({
  thumbnail: "https://placehold.co/600x400",
  title: `Vertical Post ${i + 1}`,
  description: "This is a post displayed in vertical list layout.",
  author: {
    profilePicture: "https://placehold.co/100x100",
    fullname: `Author ${i + 1}`,
    role: "Content Writer",
  },
  category: i % 2 === 0 ? "Development" : "Design",
  tags: i % 2 === 0 ? ["dev", "code"] : ["ux", "ui"],
}));

const PostGridVerticalLayout = () => {
  return (
    <div className="p-6">
      <PostsGrid
        posts={samplePosts}
        title="Vertical Layout Example"
        description="Posts displayed in a full-width vertical list."
        layout="list" //  vertical layout
        gap="gap-4" //  tighter spacing between items
        itemsPerPage={4} //  only 4 per page
        order="asc" //  oldest to newest
        tags={["dev", "code", "ux", "ui"]}
        customClassNames={{
          wrapper: "bg-background p-6 rounded-lg shadow-sm",
          headerWrapper: "mb-6",
          title: "text-xl font-semibold",
          description: "text-sm text-muted-foreground",
          gridWrapper: "space-y-4", //  ensures vertical spacing
          paginationWrapper: "mt-6",
        }}
        listIcon={<CheckCircle className="h-4 w-4 text-green-500" />}
      />
    </div>
  );
};

export default PostGridVerticalLayout;
