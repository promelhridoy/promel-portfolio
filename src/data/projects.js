/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} description       - short card description
 * @property {string} longDescription   - detail page overview
 * @property {string} problem           - what problem the project solves
 * @property {string} solution          - how it was solved
 * @property {string} image             - cover image
 * @property {string[]} gallery         - additional screenshots
 * @property {string[]} tech
 * @property {string} liveUrl
 * @property {string} githubUrl
 * @property {string[]} features
 * @property {string[]} challenges
 * @property {string[]} futureImprovements
 * @property {boolean} featured
 */

export const PROJECTS = [
  {
  slug: "legalease",
  title: "LegalEase",
  description:
    "An online lawyer hiring platform bridging the gap between legal seekers and verified legal professionals.",
  longDescription:
    "LegalEase is a premium digital marketplace built on top of Next.js that democratizes access to legal aid. It enables users to discover, filter, and hire verified legal professionals seamlessly while providing role-based dashboards for clients, lawyers, and administrators.",
  problem:
    "Individuals and businesses often struggle to quickly find verified, trustworthy legal experts, transparent fee structures, and streamlined consultation management without navigating slow, opaque traditional channels.",
  solution:
    "Built a modern full-stack marketplace with Next.js App Router and Express/MongoDB, offering real-time lawyer filtering, secure Stripe checkout for accepted proposals, verified client feedback systems, and multi-role administrative controls.",
  image: "https://i.ibb.co.com/prPqHqQH/Screenshot-2026-07-21-133307.png",
  gallery: [
    "https://i.ibb.co.com/23rZWmyJ/Screenshot-2026-07-21-133335.png",
    "https://i.ibb.co.com/FkbkZd8N/Screenshot-2026-07-21-133350.png",
    "https://i.ibb.co.com/QF06Zktf/Screenshot-2026-07-21-133405.png",
    "https://i.ibb.co.com/tPD014YW/Screenshot-2026-07-21-133423.png",
    "https://i.ibb.co.com/hx68hqSq/Screenshot-2026-07-21-133513.png",
    "https://i.ibb.co.com/7JMwQ3d5/Screenshot-2026-07-21-133525.png",
    "https://i.ibb.co.com/hJzxDX5V/Screenshot-2026-07-21-133540.png",
  ],
  tech: [
    "Next.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Stripe",
    "Framer Motion"
  ],
  liveUrl: "https://legalease-red.vercel.app/",
  githubUrl: "https://github.com/promelhridoy/LegelEase",
  features: [
    "Secure multi-method authentication (Email/Password, Google OAuth) with role-based routing (User, Lawyer, Admin)",
    "Dynamic global lawyer search with multi-filtering by name, specialization, fee range, and availability",
    "Integrated Stripe payment flow for accepted consultation requests directly from user dashboard",
    "Verified client review system linked to actual hiring history via MongoDB aggregation pipelines",
    "Comprehensive Admin control tower with platform analytics ($group, revenue metrics) and user management"
  ],
  challenges: [
    "Ensuring secure JWT token verification across API endpoints via remote JWKS and role-specific route guards (userVerifyToken, lawyerVerifyToken, adminVerifyToken)",
    "Aggregating dynamic user feedback summaries with lawyer details using complex MongoDB aggregation pipelines ($lookup, $unwind)",
    "Atomically handling transaction state updates in MongoDB when Stripe payment confirmations trigger"
  ],
  futureImprovements: [
    "Implement real-time direct messaging/chat between clients and lawyers using WebSockets",
    "Add video consultation capabilities directly within the platform platform",
    "Integrate automated legal document template sharing and digital signing"
  ],
  featured: true,
},
{
  slug: "studynook",
  title: "StudyNook",
  description:
    "A library study room booking platform for searching, reserving, and managing private study spaces.",
  longDescription:
    "StudyNook is a responsive single-page application built with React and Express/MongoDB that allows students and library users to discover, filter, and book private study rooms in real time. It offers interactive cost calculation, room creation/management for owners, and secure JWT-protected booking management.",
  problem:
    "Students and library visitors often face difficulty finding available private study spaces, checking real-time amenities, and calculating room usage fees without manual coordination or fragmented booking tools.",
  solution:
    "Developed a centralized study room reservation system featuring live search filters, an instant cost calculator based on selected time slots, authenticated user dashboards for tracking bookings, and MongoDB regex/range queries for seamless availability filtering.",
  image: "https://i.ibb.co.com/XrgVdM5B/Screenshot-2026-07-21-130400.png",
  gallery: [
    "https://i.ibb.co.com/ks7SWN7L/Screenshot-2026-07-21-132132.png",
    "https://i.ibb.co.com/B5tpxvwN/Screenshot-2026-07-21-131607.png",
    "https://i.ibb.co.com/prxByRfT/Screenshot-2026-07-21-131651.png",
    "https://i.ibb.co.com/hFTTTzwD/Screenshot-2026-07-21-131714.png",
    "https://i.ibb.co.com/HDYZmKB3/Screenshot-2026-07-21-131736.png",
  ],
  tech: [
    "React.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "DaisyUI",
    "Framer Motion"
  ],
  liveUrl: "https://study-nook-kappa.vercel.app/",
  githubUrl: "https://github.com/promelhridoy/study-nook",
  features: [
    "Real-time cost calculator modal that auto-computes hourly rate totals based on selected start and end time slots",
    "Advanced search & filtering matrix using MongoDB operators ($regex, $in, $gte, $lte) for capacity, floor, badge, and amenities",
    "Secure route persistence and JWT authentication with JOSE + JWKS verification on protected endpoints",
    "User management dashboard for adding rooms, editing owner listings, and tracking booking statuses (confirmed/cancelled)",
    "Persistent dark/light theme switching stored via localStorage and micro-interactions powered by Framer Motion"
  ],
  challenges: [
    "Implementing persistent authenticated route guards across browser reloads without unintended redirects",
    "Designing robust backend query pipelines in MongoDB to handle complex combinations of array matching ($in), text regex, and numerical ranges ($gte, $lte)",
    "Building accurate client-side time-slot math to auto-calculate hourly costs dynamically inside modal forms"
  ],
  futureImprovements: [
    "Integrate interactive room floor-map views to visually select study spaces",
    "Add automated email/SMS reminder notifications prior to booked study slots",
    "Implement real-time room availability status indicators using WebSockets"
  ],
  featured: true,
},
{
  slug: "qurbanihat",
  title: "QurbaniHat",
  description:
    "A livestock marketplace platform for exploring, filtering, and booking Qurbani animals like cows and goats.",
  longDescription:
    "QurbaniHat is a responsive livestock marketplace built with React designed for effortless discovery and booking of Qurbani animals. Users can explore categorized livestock listings, sort animals by price, view detailed attributes (weight, age, breed, location), and submit secure booking requests through an authenticated flow.",
  problem:
    "Buyers often face challenges finding healthy Qurbani livestock with verified details, transparent pricing, and clear location data without visiting crowded physical markets.",
  solution:
    "Created a modern digital livestock hat featuring dynamic price sorting, specialized category browsing, detailed health and origin specs, and a streamlined booking flow with BetterAuth / Google OAuth authentication.",
  image: "https://i.ibb.co.com/Z6xL09Hp/Screenshot-2026-07-21-132715.png",
  gallery: [
    "https://i.ibb.co.com/pv0jV1M0/Screenshot-2026-07-21-132751.png",
    "https://i.ibb.co.com/SXL2K8zL/Screenshot-2026-07-21-132832.png",
    "https://i.ibb.co.com/FbBCsjP1/Screenshot-2026-07-21-132859.png",
    "https://i.ibb.co.com/F41J130H/Screenshot-2026-07-21-132922.png",
  ],
  tech: [
    "React.js",
    "Tailwind CSS",
    "React Router DOM",
    "BetterAuth",
    "Framer Motion / Lottie",
    "React Hot Toast"
  ],
  liveUrl: "https://qurbanir-hat-tau.vercel.app/",
  githubUrl: "https://github.com/promelhridoy/Qurbanir-Hat",
  features: [
    "Secure user authentication (Email/Password & Google OAuth) with private route protection for animal details and profile pages",
    "Dynamic price sorting and animal categorization across livestock (Cow, Goat, Large/Medium Animals)",
    "Interactive booking workflow with real-time feedback, form reset, and non-blocking toast notifications",
    "Dedicated user profile management with instant account info updates (Name and Photo URL)",
    "Curated extra sections including Qurbani Guidelines, Top Breeds showcase, and smooth micro-animations using Lottie"
  ],
  challenges: [
    "Ensuring client-side SPA route persistence across manual browser reloads on deployment platforms like Vercel",
    "Integrating BetterAuth profile synchronization to update user credentials (name, photo URL) seamlessly across the layout state",
    "Managing smooth state transitions and loading states between JSON data fetches and authentication route guards"
  ],
  futureImprovements: [
    "Integrate full database persistence (MongoDB) for saving animal listings and real user booking history",
    "Implement real-time messaging between animal farm owners and buyers",
    "Add Stripe or local mobile banking integration (bKash/Nagad) for advance token payments"
  ],
  featured: true,
}
];
