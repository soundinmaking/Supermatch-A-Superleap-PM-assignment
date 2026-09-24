import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Super Match — a PM case study for Superleap",
  description:
    "A Product Manager case study for Superleap: a real-estate CRM feature that keeps matching leads against inventory on its own, with a working prototype.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-shell-bg text-shell-ink">
        {children}
      </body>
    </html>
  );
}
