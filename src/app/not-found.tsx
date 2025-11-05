import NotFoundContent from "@/components/NotFoundContent";
import { buildMetadata } from "@/seo/meta";

export const metadata = buildMetadata({
  title: "Page Not Found | RTR Technologies",
  description:
    "The page you’re looking for doesn’t exist. Explore RTR Technologies’ services, portfolio, or contact our team.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return <NotFoundContent />;
}
