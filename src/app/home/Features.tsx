import Image from "next/image";
import arrow from "public/assets/arrowright.png";
// import featureUSSrc from "public/assets/feature-us.svg";
// import featurePrivacySrc from "public/assets/feature-privacy.svg";
// import featureOpenSourceSrc from "public/assets/feature-open-source.svg";
import { Link } from "components/documentation";
import featureImage from "public/assets/about1.png"; // Update this path to your actual image path

const FEATURES = [
  {
    src: arrow,
    title: "Free Forever",
    text: "TTS Resume Builder  is created with the belief that everyone should have free and easy access to a modern professional resume design",
  },
  {
    src: arrow,
    title: "U.S. Best Practices",
    text: "TTS Resume Builder  has built-in best practices for the U.S. job market and works well with top ATS platforms such as Greenhouse and Lever",
  },
  {
    src: arrow,
    title: "Privacy Focus",
    text: "TTS Resume Builder  stores data locally in your browser so only you have access to your data and with complete control",
  },
  {
    src: arrow,
    title: "Open-Source",
    text: (
      <>
        TTS Resume Builder  is an open-source project, and its source code can be viewed
        by anyone on its{" "}
        <Link href="https://github.com/xitanggg/open-resume">
          GitHub repository
        </Link>
      </>
    ),
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-14 mb-6 mt-10" style={{ background: 'linear-gradient(to bottom,#fcdad8, #f6fefe)' }}>
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-start">
        <div className="lg:w-1/2 p-4">
          <Image src={featureImage} alt="Feature Image" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 p-4">
          <ul className="list-none space-y-10">  {/* Space between each li element */}
            {FEATURES.map(({ src, title, text }) => (
              <li key={title}>
                <div className="flex items-start">
                  <Image src={src} alt={title} className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-sm">{text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
