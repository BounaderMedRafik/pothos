import React from "react";
import { cn } from "@/lib/utils";

const PostCard = ({
  thumbnail,
  title,
  description,
  author,
  category,
  customClassNames,
}: {
  thumbnail: string;
  title: string;
  description: string;
  author: {
    profilePicture: string;
    fullname: string;
    role: string;
  };
  category: string;
  customClassNames?: {
    wrapper?: string;
    thumbnail?: string;
    contentWrapper?: string;
    categoryLabel?: string;
    title?: string;
    description?: string;
    divider?: string;
    authorWrapper?: string;
    authorProfilePic?: string;
    authorFullName?: string;
    authorRole?: string;
  };
}) => {
  return (
    <div className={cn("max-w-sm group w-fit", customClassNames?.wrapper)}>
      <img
        src={thumbnail}
        alt={title + " thumbnail"}
        className={cn("w-full h-52 rounded-lg", customClassNames?.thumbnail)}
      />
      <div className={cn("p-2", customClassNames?.contentWrapper)}>
        <div
          className={cn("text-xs opacity-75", customClassNames?.categoryLabel)}
        >
          {category}
        </div>
        <div
          className={cn(
            "text-lg leading-tight line-clamp-1",
            customClassNames?.title
          )}
        >
          {title}
        </div>
        <div
          className={cn(
            "text-sm mt-2 opacity-75",
            customClassNames?.description
          )}
        >
          {description}
        </div>

        <div
          className={cn(
            "my-3 h-px w-full border-dashed border",
            customClassNames?.divider
          )}
        />

        <div
          className={cn(
            "flex items-center gap-3",
            customClassNames?.authorWrapper
          )}
        >
          <img
            className={cn(
              "size-10 rounded-full shadow-lg object-cover",
              customClassNames?.authorProfilePic
            )}
            src={author.profilePicture}
            alt={author.fullname + " profile picture"}
          />

          <div>
            <div className={cn("text-sm", customClassNames?.authorFullName)}>
              {author.fullname}
            </div>
            <div
              className={cn("text-xs opacity-75", customClassNames?.authorRole)}
            >
              {author.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
