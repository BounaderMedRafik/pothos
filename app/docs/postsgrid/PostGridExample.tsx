import React from "react";
import PostsGrid from "./PostsGrid";

const samplePosts = [
  {
    thumbnail: "https://placehold.co/600x400",
    title: "Exploring React 18",
    description:
      "A quick dive into React 18 features and concurrent rendering.",
    author: {
      profilePicture: "https://placehold.co/100x100",
      fullname: "Jane Doe",
      role: "Frontend Dev",
    },
    category: "React",
    tags: ["react", "frontend"],
  },
  {
    thumbnail: "https://placehold.co/600x400",
    title: "Next.js App Router",
    description: "Why the new App Router changes everything.",
    author: {
      profilePicture: "https://placehold.co/100x100",
      fullname: "John Smith",
      role: "Fullstack Dev",
    },
    category: "Next.js",
    tags: ["nextjs", "webdev"],
  },
  {
    thumbnail: "https://placehold.co/600x400",
    title: "Styling with Tailwind",
    description: "Utility-first CSS done right for modern apps.",
    author: {
      profilePicture: "https://placehold.co/100x100",
      fullname: "Alice Johnson",
      role: "UI/UX Designer",
    },
    category: "CSS",
    tags: ["tailwind", "design"],
  },
  {
    thumbnail: "https://placehold.co/600x400",
    title: "Styling with Tailwind",
    description: "Utility-first CSS done right for modern apps.",
    author: {
      profilePicture: "https://placehold.co/100x100",
      fullname: "Alice Johnson",
      role: "UI/UX Designer",
    },
    category: "CSS",
    tags: ["tailwind", "design"],
  },
  {
    thumbnail: "https://placehold.co/600x400",
    title: "Styling with Tailwind",
    description: "Utility-first CSS done right for modern apps.",
    author: {
      profilePicture: "https://placehold.co/100x100",
      fullname: "Alice Johnson",
      role: "UI/UX Designer",
    },
    category: "CSS",
    tags: ["tailwind", "design"],
  },
  {
    thumbnail: "https://placehold.co/600x400",
    title: "Styling with Tailwind",
    description: "Utility-first CSS done right for modern apps.",
    author: {
      profilePicture: "https://placehold.co/100x100",
      fullname: "Alice Johnson",
      role: "UI/UX Designer",
    },
    category: "CSS",
    tags: ["tailwind", "design"],
  },
  {
    thumbnail: "https://placehold.co/600x400",
    title: "Styling with Tailwind",
    description: "Utility-first CSS done right for modern apps.",
    author: {
      profilePicture: "https://placehold.co/100x100",
      fullname: "Alice Johnson",
      role: "UI/UX Designer",
    },
    category: "CSS",
    tags: ["tailwind", "design"],
  },
  {
    thumbnail: "https://placehold.co/600x400",
    title: "Styling with Tailwind",
    description: "Utility-first CSS done right for modern apps.",
    author: {
      profilePicture: "https://placehold.co/100x100",
      fullname: "Alice Johnson",
      role: "UI/UX Designer",
    },
    category: "CSS",
    tags: ["tailwind", "design"],
  },
  {
    thumbnail: "https://placehold.co/600x400",
    title: "Styling with Tailwind",
    description: "Utility-first CSS done right for modern apps.",
    author: {
      profilePicture: "https://placehold.co/100x100",
      fullname: "Alice Johnson",
      role: "UI/UX Designer",
    },
    category: "CSS",
    tags: ["tailwind", "design"],
  },
  {
    thumbnail: "https://placehold.co/600x400",
    title: "Styling with Tailwind",
    description: "Utility-first CSS done right for modern apps.",
    author: {
      profilePicture: "https://placehold.co/100x100",
      fullname: "Alice Johnson",
      role: "UI/UX Designer",
    },
    category: "CSS",
    tags: ["tailwind", "design"],
  },
  {
    thumbnail: "https://placehold.co/600x400",
    title: "Styling with Tailwind",
    description: "Utility-first CSS done right for modern apps.",
    author: {
      profilePicture: "https://placehold.co/100x100",
      fullname: "Alice Johnson",
      role: "UI/UX Designer",
    },
    category: "CSS",
    tags: ["tailwind", "design"],
  },

  // 🔥 Add more objects if you want to see pagination kick in
];

const PostGridExample = () => {
  return (
    <div className="p-6">
      <PostsGrid
        posts={samplePosts}
        title="Latest Posts"
        description="Check out some of the most recent articles from our blog."
      />
    </div>
  );
};

export default PostGridExample;
