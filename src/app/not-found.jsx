"use client";

import "./globals.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const routerPath = usePathname();
  const locale = routerPath.split("/")[1];

  return (
    <html lang={locale}>
      <head>
        <title>Page Not Found | Apis India</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          body {
            background: #FFF9F0;
            font-family: 'Jost', 'Satoshi', sans-serif;
            margin: 0;
          }
          .notfound-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #FFF9F0;
          }
          .notfound-card {
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(174, 132, 74, 0.12);
            padding: 2.5rem 2rem;
            max-width: 600px;
            text-align: center;
            border: 2px solid #AE844A;
          }
          .notfound-logo {
            width: 100px;
            margin-bottom: 1.5rem;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .notfound-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #AE844A;
            margin-bottom: 0.5rem;
            font-family: 'Literata', serif;
          }
          .notfound-desc {
            font-size: 1.1rem;
            color: #454545;
            margin-bottom: 2rem;
          }
          .notfound-btn {
            display: inline-block;
            background: #AE844A;
            color: #fff;
            font-weight: 600;
            font-size: 1rem;
            padding: 0.75rem 2rem;
            border-radius: 999px;
            text-decoration: none;
            box-shadow: 0 2px 8px rgba(174, 132, 74, 0.10);
            transition: background 0.2s;
          }
          .notfound-btn:hover {
            background: #9F7B49;
          }
        `}</style>
      </head>
      <body>
        <div className="notfound-container">
          <div className="notfound-card">
            <img
              src="/apis-logo-new.webp"
              alt="Apis India Logo"
              className="notfound-logo"
            />
            <div className="notfound-title">404 - Page Not Found</div>
            <div className="notfound-desc">
              Oops! The page you’re looking for doesn’t exist.
              <br />
              Let’s get you back to something sweet.
            </div>
            <Link href={`/${locale}`} className="notfound-btn">
              Go to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
