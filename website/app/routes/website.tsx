import Card from "~/common/Card";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Docs-文档" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: "Hello from Docs" };
}

export default function Docs({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col items-center text-center mt-16 px-8">
      <h1 className="text-4xl font-bold text-white">
        欢迎访问我部署的项目
      </h1>
      <p className="text-gray-400 text-lg mt-4">
        希望我的产品能为 '您' 提供一丝丝灵感，构建出色的应用程序。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl">
        <Card title="Getting Started" description="Learn how to set up your project in minutes." />
        <Card title="API Reference" description="Explore detailed documentation for all APIs." />
        <Card title="Best Practices" description="Discover tips and tricks for optimal usage." />
        <Card title="Examples" description="Check out real-world examples to inspire your projects." />
        <Card title="FAQs" description="Find answers to common questions here." />
        <Card title="Community" description="Join our community to share and learn from others." />
      </div>
    </div>
  )
}
