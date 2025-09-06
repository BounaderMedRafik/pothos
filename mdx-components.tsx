import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="pt-12 mb-6 text-4xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="mt-10 mb-4 text-2xl md:text-3xl font-semibold text-gray-800 dark:text-zinc-200"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="mt-8 mb-3 text-xl md:text-2xl font-medium text-gray-800 dark:text-zinc-200"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4
      className="mt-6 mb-2 text-lg font-medium text-gray-800 dark:text-zinc-200"
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p
      className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-zinc-300 mb-4"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="text-base md:text-lg text-gray-800 dark:text-zinc-300 list-decimal pl-6 space-y-2 mb-4"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-base md:text-lg text-gray-800 dark:text-zinc-300 list-disc pl-6 space-y-1 mb-4"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-green-600 hover:text-green-700 " +
      "dark:text-green-400 hover:dark:text-green-300 " +
      "underline decoration-wavy decoration-green-600/40 dark:decoration-green-400/40";

    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className="px-1 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-sm font-mono"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-base md:text-lg">
        <thead>
          <tr className="border-b border-gray-300 dark:border-zinc-600">
            {data.headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-zinc-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 dark:border-zinc-700"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2 text-gray-800 dark:text-zinc-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="pl-4 border-l-4 border-gray-300 dark:border-zinc-600 text-base md:text-lg italic text-gray-700 dark:text-zinc-300 my-6"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
