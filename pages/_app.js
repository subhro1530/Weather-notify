// pages/_app.js
import { useEffect } from "react";
import Head from "next/head";
import "@/styles/globals.css"; // Import your global styles here

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Include OneSignal initialization script
    const script = document.createElement("script");
    script.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize OneSignal
      window.OneSignal = window.OneSignal || [];
      window.OneSignal.push(function () {
        window.OneSignal.init({
          appId: "YOUR_ONESIGNAL_APP_ID", // Replace with your OneSignal App ID
        });
      });
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
