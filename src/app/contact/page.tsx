import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <article
      id="the-post"
      className="container mx-auto px-4 py-8  shadow-lg my-8 border rounded-lg"
    >
      <header className="entry-header-outer">
        <nav id="breadcrumb" className="text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            <span className="tie-icon-home" aria-hidden="true"></span> Home
          </Link>
          <em className="mx-2">»</em>
          <span className="current">Contact Us</span>
        </nav>

        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "@id": "#Breadcrumb",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "item": {
                "name": "Home",
                "@id": "https://techhelpbd.com/"
              }
            }]
          }`}
        </script>

        <div className="entry-header">
          <h1 className="post-title entry-title text-4xl font-semibold">
            Contact Us
          </h1>
        </div>
      </header>

      <div className="entry-content entry clearfix mt-6">
        <div className="container">
          <div id="container" className="space-y-6">
            <div className="static-container">
              <div className="static-pages-wrapper">
                <div className="static-pages-content">
                  <p className="font-semibold text-xl">Email</p>
                  <p>
                    For any kind of issue:{" "}
                    <a
                      href="mailto:ContactTechHelpBD@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      ContactTechHelpBD@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="stream-item stream-item-below-post-content">
              <div className="border-3 border-black text-center p-5">
                <div className="bg-blue-600 py-3 mb-4">
                  <a
                    href="https://facebook.com/TechHelpBDdotCom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold"
                  >
                    LIKE US ON FACEBOOK
                  </a>
                </div>
                <div className="bg-blue-500 py-3 mb-4">
                  <a
                    href="https://www.facebook.com/groups/techhelpbangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold"
                  >
                    JOIN OUR FACEBOOK GROUP
                  </a>
                </div>
                <div className="bg-green-700 py-3 mb-4">
                  <a
                    href="https://chat.whatsapp.com/KsnXhnqsG9g3lxXE6nMheE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold"
                  >
                    JOIN OUR WHATSAPP GROUP
                  </a>
                </div>
                <div className="bg-indigo-600 py-3 mb-4">
                  <a
                    href="https://discord.gg/Gb3wqdsRyp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold"
                  >
                    JOIN OUR DISCORD SERVER
                  </a>
                </div>
                <div className="bg-teal-500 py-3 mb-4">
                  <a
                    href="http://t.me/techhelpbangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold"
                  >
                    JOIN OUR TELEGRAM GROUP
                  </a>
                </div>
                <div className="bg-red-600 py-3 mb-4">
                  <a
                    href="https://youtube.com/TechHelpBangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold"
                  >
                    SUBSCRIBE OUR YOUTUBE CHANNEL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactPage;
