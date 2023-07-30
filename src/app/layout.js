import React from "react";
import { AuthProvider } from "@/utils/useAuth";
import Nav from "@/components/Nav";
import "../../styles/global.css";

export const metadata = {
  title: "Idemy",
  description: "Learn Skills and make Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AuthProvider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
