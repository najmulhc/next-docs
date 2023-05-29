
export const metadata = {
  title: "testing",
};
const StaticRouteLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    post: string;
  };
}) => {
  metadata.title = params.post
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default StaticRouteLayout;
