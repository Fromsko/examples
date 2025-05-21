import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    route("/api-call", "routes/api-call.tsx"),
    route("/website", "routes/website.tsx")
] satisfies RouteConfig;
