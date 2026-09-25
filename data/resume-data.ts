// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site —
// you shouldn't need to touch any component to change text, links, or add
// projects.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Himanshu Raj",
  role: "Full-Stack Developer",
  status: "Final-year CSE · Open to SDE / SWE roles",
  location: "Ranchi, Jharkhand",
  email: "himanshu.tech37@gmail.com",
  phone: "",
  linkedin: "https://linkedin.com/in/himanshur4",
  github: "https://github.com/himanshur4",
  resumeUrl: "/Himanshu_Raj_Resume.pdf",
  summary:
    "I build full-stack products end to end — real-time systems, backend services, and developer-facing tools. Final-year Computer Science student, currently looking for SDE / SWE roles.",
};

export const education = {
  institution: "Indian Institute of Information Technology Ranchi",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  period: "2023 - 2027",
  detail: "CGPA 8.02 / 10.0",
};

export const experience = [
  {
    role: "Full-Stack Developer Intern",
    org: "CreditSea",
    location: "Remote",
    period: "Sep 2025 — Oct 2025",
    points: [
      "Engineered a completely new Notification Model for push notifications",
      "Collaborated with cross-functional teams to develop RESTful APIs serving 50,000+ daily users",
      "Optimized database queries using pipelining",
      "Improved admin panel UI and resolved 20+ bugs across applications",
    ],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const projects = [
  {
    title: "Chatter – Real Time Chat Platform",
    period: "",
    description:
      "Microservices-based real-time chat platform featuring secure OTP authentication, Redis rate limiting, live messaging with dynamic typing indicators, and background task management.",
    stack: ["Next.js", "Node.js", "Prisma", "Socket.io", "RabbitMQ", "Redis", "AWS EC2", "Nginx"],
    highlights: [],
    live: "https://chatter-t.me",
    source: "https://github.com/himanshur4/chatter",
  },
  {
    title: "Lernix-Learning Platform",
    period: "",
    description:
      "Full-stack LMS with course management, interactive UI, and secure user authentication.",
    stack: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Clerk Auth", "Stripe"],
    highlights: [],
    live: "https://lernix-psi-two.vercel.app",
    source: "https://github.com/himanshur4/lernix-learning-platform",
  },
  {
    title: "VibeCall",
    period: "",
    description:
      "Real-time video calling and chat platform with friend requests and presence indicators.",
    stack: ["React", "Express.js", "Streamify", "MongoDB", "TanStack Query", "Zustand"],
    highlights: [],
    live: "https://vibe-call.vercel.app",
    source: "https://github.com/himanshur4/VibeCall",
  },
  {
    title: "ExpenseWise",
    period: "",
    description:
      "Simple expense tracking web app for managing personal finances efficiently.",
    stack: ["GraphQL", "React.js", "Node.js", "Express.js", "Mongoose", "Apollo Client", "Chart.js"],
    highlights: [],
    live: "https://expense-wise-o97x.onrender.com",
    source: "https://github.com/himanshur4/Expense-wise",
  },
  {
    title: "TripNest",
    period: "",
    description: "Simple Trip planner app for planning next trips.",
    stack: ["React.js", "Firebase", "Tailwind CSS", "Gemini API"],
    highlights: [],
    live: "https://trip-nest-1.web.app/",
    source: "https://github.com/himanshur4/trip-nest",
  }
];

export const skills = [
  {
    category: "Languages",
    items: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "GraphQL",
      "Redux",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2)", "Docker", "Nginx", "Linux"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "RabbitMQ", "Socket.IO"],
  },
];

export const achievements = {
  stats: [
    { label: "DSA problems solved", value: "1400+", href: "https://codolio.com/profile/rajhimanshu" },
    { label: "LeetCode max rating", value: "1828", href: "https://leetcode.com/u/rajhimanshu403" },
    { label: "Codeforces", value: "Pupil", href: "https://codeforces.com/profile/himanshur4" },
    { label: "CodeChef", value: "3★", href: "https://www.codechef.com/users/himanshur4" },
  ],
  note: "Participated in 100+ competitive programming contests across LeetCode, Codeforces, CodeChef, and GeeksforGeeks.",
  community: "",
};

export const sections = [
  { id: "work", label: "Experience", number: "01" },
  { id: "projects", label: "Projects", number: "02" },
  { id: "skills", label: "Skills", number: "03" },
  { id: "achievements", label: "Achievements", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
];
