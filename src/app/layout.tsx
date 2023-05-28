"use client";
import "./global.scss";
import localFont from "next/font/local";
import Script from "next/script";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const openSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/OpenSans-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/assets/fonts/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/OpenSans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/assets/fonts/OpenSans-SemiBold.ttf",
      weight: "600",
      style: "semiBold",
    },
    {
      path: "../../public/assets/fonts/OpenSans-Bold.ttf",
      weight: "700",
      style: "Bold",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/icons/icon.png" />
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="google-tag-manager"
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WLF3HBM');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={openSans.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLF3HBM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
