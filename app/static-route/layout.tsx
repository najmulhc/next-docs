import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Static route",
  description: "lorem ipsum dolor sit amet.",
};

const StaticRouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default StaticRouteLayout;
