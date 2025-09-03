import type { Route } from "./+types/home";
import { AI } from "./data/Korone";
import AICard from "./components/AiCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lab01 by nong mean" },
    { name: "description", content: "รวมเครื่องมือ AI ที่น่าสนใจ" },
  ];
}

export default function Home() {
  return (
    <div className="p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">AI Tools Showcase</h1>
        <p className="text-gray-600">รวมเครื่องมือ AI ที่น่าสนใจ</p>
      </header>

      {/* Grid ของ AI Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {AI.map((tool) => (
          <AICard key={tool.Code} tool={tool} />
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center mt-8 text-sm text-gray-500">
        ข้อมูลจาก https://www.datawow.co.th/th/blogs/top-15-applications-of-artificial
      </footer>
    </div>
  );
}