import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalStoreProvider } from "@/providers/modal-store-provider";
import { ToasterProvider } from "@/providers/toast-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalStoreProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
