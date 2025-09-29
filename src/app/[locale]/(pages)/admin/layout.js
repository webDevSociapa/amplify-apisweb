"use client";

import Sidebar from "@/components/admin/common/sidebar";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = usePathname(); // To get the current route
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLoggedInStatus = localStorage.getItem("isLoggedIn");
      if (isLoggedInStatus === "true") {
        setIsLoggedIn(true);
      } else {
        // Save the current route for redirection after login
        localStorage.setItem("redirectAfterLogin", pathname);
        router.push("/admin/login");
      }
      setIsLoading(false);
    }
  }, [router, pathname]);

  // If still loading, show a loading screen or null
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <html lang="en">
        <body>
          {isLoggedIn && <Sidebar />}
        <main className="px-20 align-item-center">
        {children}
        </main>
        </body>
      </html>
    </>
  );
}
