import React from "react";

const AboutComponent = () => {
  return (
    <article id="the-post" className="container mx-auto px-4 py-8 shadow-lg my-8 border rounded-lg">
      <header className="entry-header-outer">
        <nav id="breadcrumb" className="text-sm text-gray-600">
          <a href="/" className="hover:underline">
            <span className="tie-icon-home" aria-hidden="true"></span> Home
          </a>
          <em className="mx-2">»</em>
          <span className="current">About Us</span>
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
          <h1 className="post-title entry-title text-4xl font-semibold">About Us</h1>
        </div>
      </header>

      <div className="entry-content entry clearfix mt-6">
        <div
          id="ez-toc-container"
          className="ez-toc-v2_0_72 counter-hierarchy ez-toc-counter ez-toc-grey mb-8"
        >
          <p className="ez-toc-title text-xl mb-4">Table of Contents</p>
          <nav>
            <ul className="ez-toc-list">
              <li>
                <a
                  className="ez-toc-link hover:underline"
                  href="#What_is_Tech_Help_BD"
                  title="What is Tech Help BD"
                >
                  What is Tech Help BD
                </a>
              </li>
              <li>
                <a
                  className="ez-toc-link hover:underline"
                  href="#How_we_started"
                  title="How we started"
                >
                  How we started
                </a>
              </li>
              <li>
                <a
                  className="ez-toc-link hover:underline"
                  href="#Our_Team"
                  title="Our Team"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <h2 id="What_is_Tech_Help_BD" className="text-2xl font-bold mt-8">
          What is Tech Help BD
        </h2>
        <p>
          Tech Help BD is one of the best technology-based knowledge-sharing sites in
          Bangladesh.
        </p>

        <h2 id="How_we_started" className="text-2xl font-bold mt-8">
          How we started
        </h2>
        <p>
          We started our journey from a small tech-related Facebook group called{" "}
          <a
            href="//facebook.com/groups/TechHelpBangladesh"
            target="_blank"
            rel="noopener"
            className="text-blue-500 hover:underline"
          >
            Tech Help BD
          </a>
          , where we tried to solve tech-related problems of our group members for free. Eventually, we realized that a website would be better for detailed solutions, tech news, and tips. So, we launched TechHelpBD.com to contribute more to the tech world.
        </p>

        <figure
          id="attachment_152"
          aria-describedby="caption-attachment-152"
          className="wp-caption alignnone mt-8"
        >
          <a href="https://techhelpbd.com/wp-content/uploads/2021/07/img_60ea90164ba9d.png">
            <img
              className="lazy-loaded"
              src="https://techhelpbd.com/wp-content/uploads/2021/07/img_60ea90164ba9d.png"
              alt="Tech Help BD"
              width="720"
              height="361"
              title="About Us 1"
            />
          </a>
          <figcaption id="caption-attachment-152" className="wp-caption-text text-center">
            Facebook group of Tech Help BD
          </figcaption>
        </figure>

        <h2 id="Our_Team" className="text-2xl font-bold mt-8">
          Our Team
        </h2>
        <p>
          We work together to help people. Our volunteer team members, including admins and moderators, contribute to the Tech Help BD group without any benefit.
        </p>

        <figure
          id="attachment_153"
          aria-describedby="caption-attachment-153"
          className="wp-caption alignnone mt-8"
        >
          <a href="https://techhelpbd.com/wp-content/uploads/2021/07/img_60ea9226e5ae2.png">
            <img
              className="lazy-loaded"
              src="https://techhelpbd.com/wp-content/uploads/2021/07/img_60ea9226e5ae2-1024x771.png"
              alt="Tech Help BD Team"
              width="645"
              height="486"
              title="About Us 2"
            />
          </a>
          <figcaption id="caption-attachment-153" className="wp-caption-text text-center">
            Tech Help BD Team
          </figcaption>
        </figure>

        <p>Hope this site will be helpful to our fellow group members and visitors 🙂</p>

        <p>Sincerely,</p>

        <p>
          <strong>
            <a
              href="//www.facebook.com/MahbubDev"
              target="_blank"
              rel="noopener"
              className="text-blue-500 hover:underline"
            >
              Kazi Mahbubur Rahman
            </a>
            <br />
          </strong>
          Founder, Tech Help BD
        </p>

        <div className="text-center mt-6">
          <div className="bg-blue-600 p-4 mb-4 rounded">
            <a
              href="//facebook.com/TechHelpBDdotCom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold"
            >
              LIKE US ON FACEBOOK
            </a>
          </div>

          <div className="bg-blue-700 p-4 mb-4 rounded">
            <a
              href="//www.facebook.com/groups/techhelpbangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold"
            >
              JOIN OUR FACEBOOK GROUP
            </a>
          </div>

          <div className="bg-green-700 p-4 mb-4 rounded">
            <a
              href="//chat.whatsapp.com/KsnXhnqsG9g3lxXE6nMheE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold"
            >
              JOIN OUR WHATSAPP GROUP
            </a>
          </div>

          <div className="bg-indigo-600 p-4 mb-4 rounded">
            <a
              href="//discord.gg/Gb3wqdsRyp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold"
            >
              JOIN OUR DISCORD SERVER
            </a>
          </div>

          <div className="bg-red-600 p-4 mb-4 rounded">
            <a
              href="//www.youtube.com/c/TechHelpBD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold"
            >
              SUBSCRIBE TO OUR YOUTUBE CHANNEL
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutComponent;
