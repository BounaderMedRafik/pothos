"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PostCard from "../postcard/PostCard";

interface PostsGridProps {
  posts: any[];
  layout?: "grid" | "list";
  rows?: number;
  cols?: number;
  gap?: string;
  order?: "asc" | "desc";
  title?: string;
  description?: string;
  titleCentered?: boolean;
  tags?: string[];
  itemsPerPage?: number;
  listIcon?: React.ReactNode;
  customClassNames?: {
    wrapper?: string;
    headerWrapper?: string;
    title?: string;
    description?: string;
    gridWrapper?: string;
    paginationWrapper?: string;
    tagsWrapper?: string;
    tagButton?: string;
  };
}

const PostsGrid: React.FC<PostsGridProps> = ({
  posts = [],
  layout = "grid",
  rows = 3,
  cols = 3,
  gap = "gap-6",
  order = "desc",
  title,
  description,
  titleCentered = false,
  tags = [],
  itemsPerPage = 6,
  listIcon,
  customClassNames,
}) => {
  // --- Pagination ---
  const [currentPage, setCurrentPage] = useState(1);

  // --- Tag Filtering ---
  const [activeTag, setActiveTag] = useState<string | null>(null);

  let filteredPosts = activeTag
    ? posts.filter((post) => post.tags?.includes(activeTag))
    : posts;

  // --- Sorting ---
  filteredPosts =
    order === "asc" ? [...filteredPosts].reverse() : filteredPosts;

  // --- Pagination logic ---
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className={cn("w-full", customClassNames?.wrapper)}>
      {/* Header */}
      {(title || description) && (
        <div
          className={cn(
            "mb-8",
            titleCentered && "text-center",
            customClassNames?.headerWrapper
          )}
        >
          {title && (
            <div
              className={cn("text-2xl font-bold mb-2", customClassNames?.title)}
            >
              {title}
            </div>
          )}
          {description && (
            <p
              className={cn(
                "text-sm text-muted-foreground",
                customClassNames?.description
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div
          className={cn(
            "flex flex-wrap gap-2 mb-6",
            customClassNames?.tagsWrapper
          )}
        >
          {tags.map((tag, i) => (
            <button
              key={i}
              className={cn(
                "px-3 py-1 text-xs border rounded-md hover:bg-accent hover:text-accent-foreground transition",
                activeTag === tag && "bg-primary text-primary-foreground",
                customClassNames?.tagButton
              )}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Posts */}
      <div
        className={cn(
          layout === "grid"
            ? `grid ${gap} grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols}`
            : `space-y-4`,
          customClassNames?.gridWrapper
        )}
      >
        {paginatedPosts.map((post, idx) =>
          layout === "list" ? (
            <div key={idx} className="flex items-start gap-3 w-full">
              {/* bullet/indicator (customizable) */}
              <div className="mt-1 shrink-0">
                {listIcon || (
                  <div className="h-2 w-2 rounded-full bg-primary" />
                )}
              </div>

              {/* title + description */}
              <div>
                <a
                  href={post.href || "#"}
                  className="font-medium text-base hover:underline"
                >
                  {post.title}
                </a>
                {post.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {post.description}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <PostCard key={idx} {...post} />
          )
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div
          className={cn(
            "mt-8 flex justify-center",
            customClassNames?.paginationWrapper
          )}
        >
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <button
                    onClick={() => setCurrentPage(i + 1)}
                    className={cn(
                      "px-3 py-1 text-sm rounded-md",
                      currentPage === i + 1
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    {i + 1}
                  </button>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default PostsGrid;
