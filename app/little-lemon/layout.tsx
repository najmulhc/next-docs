import { Metadata } from "next";
import Nav from "./nav";

export const metadata: Metadata = {
  title: "Little Lemon | Traditional foods"
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
