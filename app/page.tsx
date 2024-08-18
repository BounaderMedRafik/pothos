import { Gallery } from "@/components/marketing/Gallery";
import Hero from "@/components/marketing/Hero";

const images = [
  {
    image: "hello",
    link: "/hello",
  },
];

export default function Home() {
  return (
    <main className="relative">
      <div className="h-24 w-1/2 absolute left-1/2 -translate-x-1/2 -top-24 blur-3xl rounded-full bg-primary" />
      <div>
        <Hero />
      </div>
      <div>
        <Gallery items={images} speed="slow" />
      </div>
    </main>
  );
}