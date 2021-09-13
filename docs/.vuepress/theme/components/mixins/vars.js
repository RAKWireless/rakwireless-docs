export default {
  baseURL: 'https://docs.rakwireless.com',
  homePath: '/Introduction/',
  zendesk: `
    <script id='ze-snippet' src='https://static.zdassets.com/ekr/snippet.js?key=1a5ac733-fac6-4769-9091-f47005c3893d' async />
    <script>
      var waitForZopim = setInterval(function () {
        if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
          return;
        }
        zE('webWidget', 'open');
        var display = zE('webWidget:get', 'display');
        if (display === "chat") {
          zE('webWidget', 'close');
          clearInterval(waitForZopim);
        }
      }, 100);
    </script>
  `,
  homeScript: `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "RAKwireless Documentation Center",
      "alternateName": "RAK Documentation Center",
      "url": "https://docs.rakwireless.com/",
      "logo": "https://docs.rakwireless.com/assets/rakwireless/RAK-favicon-blue.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+86-755-86108311",
        "contactType": "customer service",
        "contactOption": "HearingImpairedSupported",
        "areaServed": "CN",
        "availableLanguage": ["en","Chinese"]
      },
      "sameAs": [
        "https://www.facebook.com/RakwirelessIoT/",
        "https://twitter.com/RAKwireless",
        "https://www.instagram.com/rak_wireless/",
        "http://www.youtube.com/c/RAKwireless",
        "https://www.linkedin.com/company/rak-wireless",
        "https://pinterest.com/rakwireless",
        "https://docs.rakwireless.com/",
        "https://www.rakwireless.com/"
      ]
    }
    </script>
  `,
  googleAnalytics: `
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143608822-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-143608822-1');
    </script>
  `,
  homeOG: `
    <meta name="title" content="RAKwireless Documentation Center">
    <meta property="og:type" content="website">
    <meta property="og:title" content="The Official Website of RAKwireless - Where IoT Is Made Easy - RAKwireless - IoT Made Easy">
    <meta property="og:description" content="RAKwireless is a leading IoT solutions provider that constantly commits to the production of high-quality LoRa® gateways, sensors, kits and accessories for everyone to use.">
    <meta property="og:image" content="https://www.rakwireless.com/resources/rak/logo/blue-dark-c.png">
    <meta property="og:url" content="https://www.rakwireless.com/en-us">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:site_name" content="RAK Documentation Center">
    <meta property="og:url" content="https://docs.rakwireless.com/">
    <meta property="og:image" content="https://docs.rakwireless.com/assets/rakwireless/RAK-favicon-blue.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@RAKwireless">
    <meta name="twitter:title" content="RAKwireless Documentation Center">
    <meta name="twitter:description" content="The RAK® Documentation Center is a perfect place to find comprehensive documents curated by our tech experts that help you explore the potential of our products on the Internet of Things (IoT).">
  `,
  pageOG: `
    <meta property="og:title" content="<title>">
    <meta property="og:site_name" content="RAK Documentation Center">
    <meta property="og:url" content="<pageURL>">
    <meta property="og:description" content="<og_description>">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<imgURL>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@RAKwireless">
    <meta name="twitter:title" content="<title>">
    <meta name="twitter:description" content="<twitter_description>">
    <meta name="twitter:image" content="<imgURL>">
    <meta name="description" content="<description>">
  `,
  canonical: `<link rel='canonical' href='<pageURL>'/>`
}


{/* <meta name="title" content="RAKwireless Documentation Center">
<meta name="description" content="The RAK® Documentation Center is a perfect place to find comprehensive documents curated by our tech experts that help you explore the potential of our products on the Internet of Things (IoT).">
<meta property="og:title" content="RAKwireless Documentation Center">
<meta property="og:site_name" content="RAK Documentation Center">
<meta property="og:url" content="https://docs.rakwireless.com/">
<meta property="og:description" content="The RAK® Documentation Center is a perfect place to find comprehensive documents curated by our tech experts that help you explore the potential of our products on the Internet of Things (IoT).">
<meta property="og:type" content="website">
<meta property="og:image" content="https://docs.rakwireless.com/assets/rakwireless/RAK-favicon-blue.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@RAKwireless">
<meta name="twitter:title" content="RAKwireless Documentation Center">
<meta name="twitter:description" content="The RAK® Documentation Center is a perfect place to find comprehensive documents curated by our tech experts that help you explore the potential of our products on the Internet of Things (IoT).">
<meta name="twitter:image" content="https://docs.rakwireless.com/assets/rakwireless/RAK-favicon-blue.png"> */}
