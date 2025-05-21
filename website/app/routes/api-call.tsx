import { useLoaderData } from "react-router-dom";
import Card from '../common/Card';
import type { Route } from './+types/about';

export function loader() {
  return [
    {
      title: "Markmap for GPTs",
      description: "Use Markdown-inspired text definitions to create mind maps with GPTs.",
    },
    {
      title: "Mermaid for GPTs",
      description: "Use Markdown-inspired text definitions to create diagrams with GPTs.",
    },
    {
      title: "NASA APOD for GPTs",
      description: "Get NASA's Astronomy Picture of the Day for GPTs.",
    },
    {
      title: "SEO Analyzer for GPTs",
      description: "Analyze your site and give the SEO advices with GPTs.",
    },
    {
      title: "Chinese character util for GPTs",
      description: "Learn Chinese characters with GPTs.",
    },
    {
      title: "Astrology for GPTs",
      description: "Help you analyze your natal chart, comb through your personal growth path and opportunities.",
    },
  ];
}

export function meta({ }: Route.MetaArgs) {
  return [{ title: 'About Us' }, { name: 'description', content: 'Learn more about our company.' }]
}

export default function ApiCall() {
  const data = useLoaderData() as Array<{ title: string; description: string }>;
  return (
    <>
      <main className="flex flex-col items-center text-center mt-16 px-8">
        <h1 className="text-4xl font-bold text-white">
          最大限度地利用 Serverless 函数 提高开发的效率
        </h1>
        <p className="text-gray-400 text-lg mt-4">
          从数据处理到自动化，无需复杂地编写即可在几秒钟内完成部署调用。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl">
          {data.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </main>
    </>
  )
}
