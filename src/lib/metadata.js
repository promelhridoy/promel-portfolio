export const siteConfig = {
  name: "Promel Hossain Hridoy",
  role: "MERN Stack Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://promelhridoy.vercel.app",
  description:
    "Promel Hossain Hridoy is a MERN stack developer specializing in React, Node.js, Express, and MongoDB — building fast, responsive, and well-structured web applications.",
  keywords: [
    "Promel Hossain Hridoy",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Fresher Software Engineer",
    "Frontend Developer",
  ],
  github: "https://github.com/PromelHridoy",
  linkedin: "https://linkedin.com/in/promel-hridoy",
  facebook: "https://www.facebook.com/promel.hossain.hridoy",
  email: "promel.hridoy12@gmail.com",
  phone: "+8801878874477",
  location: "Kasba, Brahmanbaria, Bangladesh",
  ogImage: "/og-image.png",
};

/** Builds a consistent Next.js Metadata object for any page. */
export function buildMetadata({ title, description, path = "" } = {}) {
  const url = `${siteConfig.url}${path}`;
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.role}`;
  const desc = description || siteConfig.description;

  return {
    title: pageTitle,
    description: desc,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    openGraph: {
      title: pageTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}
