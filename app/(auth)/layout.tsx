import { Children } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-full flex items-center justify-center ">
      {children}
    </div>
  );
}
