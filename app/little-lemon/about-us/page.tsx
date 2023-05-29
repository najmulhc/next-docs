"use client";
import { usePathname } from "next/navigation";
const Page = () => {
  const pathName = usePathname();
  console.log({
    currentPath: pathName,
  });
  return (
    <main>
      <h1>About Us: </h1>
      <p>we are a good resturant that serves traditional Italian Food</p>
    </main>
  );
};

export default Page;
