import type { Curriculum } from '../types/curriculum'

export const curriculum: Curriculum = {
  meta: {
    title: "Web Development Roadmap",
    banglaTitle: "ওয়েব ডেভেলপমেন্ট রোডম্যাপ",
    subtitle: "Build Real Projects with Confidence",
    description: "An interactive learning roadmap for Bangladeshi school students. Track your progress and become a confident full-stack developer.",
    totalPhases: 8,
    targetAudience: "Bangladeshi school students"
  },
  phases: [
    {
      id: "phase-0",
      order: 0,
      title: "Computational Thinking & Digital Foundations",
      banglaTitle: "কম্পিউটেশনাল থিংকিং ও ডিজিটাল ফাউন্ডেশন",
      classRange: "Noob",
      duration: "~3 months",
      timeBudget: "2–3 hrs/week",
      smartGoal: {
        summary: "By the end of month 3, build 3 Scratch projects (an animation, a simple game, a quiz), reach 15+ WPM on a typing test, and be able to explain in your own words what a website, browser, and the internet are.",
        specific: "Build 3 Scratch projects and improve typing speed to 15+ WPM",
        measurable: "3 published Scratch projects, typing test score, oral explanation",
        attainable: "Uses block-based programming suitable for beginners",
        realistic: "Designed for beginners with 2–3 hrs/week commitment",
        timeBound: "3 months"
      },
      topics: [
        {
          id: "phase-0-scratch-tamim",
          title: "Scratch Programming in Bangla",
          banglaTitle: "স্ক্র্যাচ প্রোগ্রামিং বাংলায় — তামিম শাহরিয়ার",
          resource: "Tamim Shahriar",
          link: "https://youtube.com/playlist?list=PLym69wpbTIIEkUnqkOznZfQU6lRxebpO3",
          type: "bangla"
        },
        {
          id: "phase-0-scratch-bdosn",
          title: "Scratch Programming (Alternative)",
          banglaTitle: "স্ক্র্যাচ প্রোগ্রামিং — bdOSN",
          resource: "bdOSN",
          link: "https://youtube.com/playlist?list=PLtEypp6e7UDBfNhRt9x3N89mJKl0PztHH",
          type: "bangla"
        },
        {
          id: "phase-0-typing",
          title: "Typing Speed & Keyboard Comfort",
          banglaTitle: "টাইপিং স্পিড ও কীবোর্ড অভ্যস্ততা",
          resource: "Typing.com",
          link: "https://www.typing.com/student/lessons",
          type: "english"
        },
        {
          id: "phase-0-internet",
          title: "How the Internet Works",
          banglaTitle: "ইন্টারনেট কীভাবে কাজ করে",
          resource: "MDN Web Docs",
          link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work",
          type: "english"
        }
      ],
      milestone: "Publish 2–3 Scratch projects on the Scratch website and share with friends/family.",
      banglaMilestone: "স্ক্র্যাচ ওয়েবসাইটে ২–৩টি প্রজেক্ট প্রকাশ করুন এবং বন্ধু/পরিবারের সাথে শেয়ার করুন।",
      icon: "🧠",
      mascot: "pandi",
      mascotPose: "whiteboard",
      color: "owl"
    },
    {
      id: "phase-1",
      order: 1,
      title: "HTML & CSS: Building Static Web Pages",
      banglaTitle: "HTML ও CSS: স্ট্যাটিক ওয়েব পেজ তৈরি",
      classRange: "Beginner",
      duration: "~3–4 months",
      timeBudget: "3–4 hrs/week",
      smartGoal: {
        summary: "By the end of the phase, build 3 static web pages (a personal 'About Me' page, a one-page resume, a simple landing page) using semantic HTML5 and CSS (including Flexbox), and deploy all 3 live on Netlify.",
        specific: "Build 3 static web pages: About Me, resume, landing page",
        measurable: "3 deployed sites on Netlify with shareable links",
        attainable: "HTML/CSS are the most beginner-friendly web technologies",
        realistic: "Beginners can handle 3–4 hrs/week of web development",
        timeBound: "3–4 months"
      },
      topics: [
        {
          id: "phase-1-html-crash",
          title: "HTML Complete Crash (1 video)",
          banglaTitle: "১ ভিডিওতে HTML সম্পূর্ণ — Rabbil Hasan",
          resource: "Rabbil Hasan",
          link: "https://www.youtube.com/watch?v=Fy7Ao82EEtk",
          type: "bangla"
        },
        {
          id: "phase-1-html-series",
          title: "HTML Step-by-Step Series",
          banglaTitle: "বিগিনারদের জন্য HTML Tutorial (পার্ট ০১+) — Rabbil Hasan",
          resource: "Rabbil Hasan",
          link: "https://www.youtube.com/watch?v=dnHckWHbpL8",
          type: "bangla"
        },
        {
          id: "phase-1-html-alt",
          title: "HTML Alternative Full Course",
          banglaTitle: "HTML Complete Course in Bangla 2021 — Anisul Islam",
          resource: "Anisul Islam",
          link: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3oHBr5dsumGwjUxByN5Lnw3",
          type: "bangla"
        },
        {
          id: "phase-1-css-series",
          title: "CSS Step-by-Step Series",
          banglaTitle: "বিগিনারদের জন্য CSS Tutorial (পার্ট ০১+) — Rabbil Hasan",
          resource: "Rabbil Hasan",
          link: "https://www.youtube.com/watch?v=acRoXiJ0kOA",
          type: "bangla"
        },
        {
          id: "phase-1-css-alt",
          title: "CSS Alternative Full Course",
          banglaTitle: "CSS Complete Course in Bangla 2021 — Anisul Islam",
          resource: "Anisul Islam",
          link: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3qjCBXjTmv7Xeh8MDUUVJDO",
          type: "bangla"
        },
        {
          id: "phase-1-flexbox",
          title: "CSS Flexbox (Layout)",
          banglaTitle: "CSS Flexbox — সম্পূর্ণ গাইড বাংলায় — Learn with Sumit",
          resource: "Learn with Sumit",
          link: "https://github.com/learnwithsumit/css-flexbox-tutorial",
          type: "bangla"
        },
        {
          id: "phase-1-deploy",
          title: "Deploying Your First Site",
          banglaTitle: "কিভাবে Netlify-তে ওয়েবসাইট ডিপ্লয় করবেন — Anisul Islam",
          resource: "Anisul Islam",
          link: "https://www.youtube.com/watch?v=sY4H6f4JbS8",
          type: "bangla"
        }
      ],
      milestone: "A personal 'About Me' page + resume page, live on the internet with a shareable link.",
      banglaMilestone: "একটি ব্যক্তিগত 'আমার সম্পর্কে' পেজ এবং রিজিউম পেজ, ইন্টারনেটে লাইভ।",
      icon: "🌐",
      mascot: "pandi",
      mascotPose: "reading",
      color: "macaw"
    },
    {
      id: "phase-2",
      order: 2,
      title: "JavaScript & Interactivity",
      banglaTitle: "JavaScript ও ইন্টারঅ্যাকটিভিটি",
      classRange: "Apprentice",
      duration: "~4–5 months",
      timeBudget: "4–5 hrs/week",
      smartGoal: {
        summary: "By the end of the phase, build 3 interactive JavaScript projects — a calculator, a to-do list (with add/delete), and a simple quiz app — each manipulating the DOM, with no copy-pasted code you don't understand.",
        specific: "Build 3 interactive JS projects: calculator, to-do list, quiz app",
        measurable: "3 working projects with DOM manipulation, each deployed",
        attainable: "Builds on HTML/CSS foundation from Phase 1",
        realistic: "Apprentice-level learners with 4–5 hrs/week can master JS basics",
        timeBound: "4–5 months"
      },
      topics: [
        {
          id: "phase-2-js-crash",
          title: "JavaScript Complete Crash (1 video)",
          banglaTitle: "১ ভিডিওতে JavaScript সম্পূর্ণ — Rabbil Hasan",
          resource: "Rabbil Hasan",
          link: "https://www.youtube.com/watch?v=ZXUerXTMDvM",
          type: "bangla"
        },
        {
          id: "phase-2-js-series",
          title: "JavaScript Step-by-Step Series",
          banglaTitle: "বিগিনারদের জন্য JavaScript Tutorial — Rabbil Hasan",
          resource: "Rabbil Hasan",
          link: "https://www.youtube.com/watch?v=Gbh1dWsTqWg",
          type: "bangla"
        },
        {
          id: "phase-2-js-beginners",
          title: "JavaScript for Absolute Beginners",
          banglaTitle: "JavaScript for Beginners — Learn with Sumit",
          resource: "Learn with Sumit",
          link: "https://www.youtube.com/watch?v=rePN-VFo1Eo&list=PLHiZ4m8vCp9OkrURufHpGUUTBjJhO9Ghy",
          type: "bangla"
        },
        {
          id: "phase-2-modern-js",
          title: "Modern JS (ES6+)",
          banglaTitle: "Modern JavaScript ES6 Bangla Tutorial — Learn with Sumit",
          resource: "Learn with Sumit",
          link: "https://www.youtube.com/watch?v=PWXkYBmlbB4&list=PLHiZ4m8vCp9MFjMRp9EEHWKArbi0wdgXG",
          type: "bangla"
        },
        {
          id: "phase-2-think-js",
          title: "Think in a JavaScript Way",
          banglaTitle: "Think in a JavaScript Way — Learn with Sumit",
          resource: "Learn with Sumit",
          link: "https://www.youtube.com/watch?v=KuhLGuNxF8U&list=PLHiZ4m8vCp9Nflbo9a0pZuLscG_Xc7DKq",
          type: "bangla"
        },
        {
          id: "phase-2-dom-sumit",
          title: "DOM Manipulation (Making Pages Interactive)",
          banglaTitle: "Play with DOM — Learn with Sumit (Bangla)",
          resource: "Learn with Sumit",
          link: "https://www.youtube.com/playlist?list=PLHiZ4m8vCp9MJDxMOzhYVuTrO1b5n-Tq_",
          type: "bangla"
        },
        {
          id: "phase-2-dom-stack",
          title: "DOM: Client Side JavaScript",
          banglaTitle: "DOM: Client Side JavaScript — Stack Learner",
          resource: "Stack Learner",
          link: "https://www.youtube.com/playlist?list=PL_XxuZqN0xVA10Q5UxbhG3zTPpe_ZdDGg",
          type: "bangla"
        }
      ],
      milestone: "A 'To-Do List' web app where you can add, complete, and delete tasks, saved so it doesn't disappear on refresh.",
      banglaMilestone: "একটি 'টু-ডু লিস্ট' ওয়েব অ্যাপ যেখানে আপনি টাস্ক যোগ, সম্পূর্ণ এবং মুছতে পারেন।",
      icon: "⚡",
      mascot: "pandi",
      mascotPose: "light-work",
      color: "fox"
    },
    {
      id: "phase-3",
      order: 3,
      title: "Git, GitHub, Responsive Design & CSS Frameworks",
      banglaTitle: "Git, GitHub, রেসপনসিভ ডিজাইন ও CSS ফ্রেমওয়ার্ক",
      classRange: "Intermediate",
      duration: "~3 months",
      timeBudget: "3–4 hrs/week",
      smartGoal: {
        summary: "By the end of the phase, push every past project to a public GitHub profile with proper commit history, and build 1 fully responsive multi-page website (mobile + desktop) using Tailwind CSS, with a written README.",
        specific: "Push all past projects to GitHub and build 1 responsive site with Tailwind",
        measurable: "GitHub profile with commit history, 1 deployed responsive site",
        attainable: "Git is straightforward; Tailwind speeds up CSS development",
        realistic: "Intermediate learners can handle 3–4 hrs/week of focused practice",
        timeBound: "3 months"
      },
      topics: [
        {
          id: "phase-3-git-anisul",
          title: "Git & GitHub Complete Course",
          banglaTitle: "Git & GitHub complete course Bangla (Beginner to Advanced) — Anisul Islam",
          resource: "Anisul Islam",
          link: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3qAW8DT6I0XOxC23qnA4FL-",
          type: "bangla"
        },
        {
          id: "phase-3-git-sumit",
          title: "Git & GitHub Crash Course (Alternative)",
          banglaTitle: "সহজ বাংলায় Git & GitHub Crash Course — Sumit Saha",
          resource: "Learn with Sumit",
          link: "https://www.youtube.com/watch?v=oe21Nlq8GS4",
          type: "bangla"
        },
        {
          id: "phase-3-tailwind",
          title: "Tailwind CSS",
          banglaTitle: "Tailwind CSS Bangla Tutorial Series — Learn with Sumit",
          resource: "Learn with Sumit",
          link: "https://youtube.com/playlist?list=PLHiZ4m8vCp9P23SqlHL0QAqiwS_oCofV2",
          type: "bangla"
        },
        {
          id: "phase-3-bootstrap",
          title: "Bootstrap (Alternative CSS Framework)",
          banglaTitle: "Bootstrap 5 and 4 Bangla Tutorials — Anisul Islam",
          resource: "Anisul Islam",
          link: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3oC_wmWEZa2xWxJauIRQ9kG",
          type: "bangla"
        }
      ],
      milestone: "A responsive multi-page portfolio site (Home, About, Projects, Contact) styled with Tailwind, deployed.",
      banglaMilestone: "একটি রেসপনসিভ মাল্টি-পেজ পোর্টফোলিও সাইট, Tailwind দিয়ে স্টাইল করা এবং ডিপ্লয় করা।",
      icon: "🔧",
      mascot: "otter",
      mascotPose: "light-work",
      color: "beetle"
    },
    {
      id: "phase-4",
      order: 4,
      title: "React & Modern Frontend",
      banglaTitle: "React ও আধুনিক ফ্রন্টএন্ড",
      classRange: "Advanced",
      duration: "~3–4 months",
      timeBudget: "10–15 hrs/week",
      smartGoal: {
        summary: "By the end of this phase, build and deploy 2 React projects: (1) a simple API-based app (e.g., a movie/weather search app using a free public API) and (2) a personal portfolio rebuilt in React, both live with public GitHub repos.",
        specific: "Build 2 React projects: API-based app and React portfolio",
        measurable: "2 deployed apps on Vercel with public GitHub repos",
        attainable: "Long break with no school = intensive focused learning",
        realistic: "This is the biggest learning window before university",
        timeBound: "3–4 months"
      },
      topics: [
        {
          id: "phase-4-react-crash",
          title: "React Full Course in One Video",
          banglaTitle: "১ ভিডিওতে রিয়্যাক্ট শিখুন! ফুল কোর্স — Rabbil Hasan",
          resource: "Rabbil Hasan",
          link: "https://www.youtube.com/watch?v=6wilewRV3xQ",
          type: "bangla"
        },
        {
          id: "phase-4-react-series",
          title: "Think in a React Way",
          banglaTitle: "Think in a React Way — Learn with Sumit",
          resource: "Learn with Sumit",
          link: "https://www.youtube.com/watch?v=5Xy-t8k_M4A&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr",
          type: "bangla"
        },
        {
          id: "phase-4-react-redux",
          title: "React + Redux Complete Course",
          banglaTitle: "React - Redux Complete Course — Stack Learner",
          resource: "Stack Learner",
          link: "https://www.youtube.com/playlist?list=PL_XxuZqN0xVAvcGzTEAyPSOqgUQA08rNB",
          type: "bangla"
        },
        {
          id: "phase-4-nextjs",
          title: "Next.js (React Framework — Optional Stretch)",
          banglaTitle: "Next Js Bangla Tutorial Series — dSkill",
          resource: "dSkill",
          link: "https://www.youtube.com/playlist?list=PLwMeE9AWeV59vbQSIArd0-sNB9FPxlWSp",
          type: "bangla"
        },
        {
          id: "phase-4-deploy",
          title: "Deploying React/Next Apps",
          banglaTitle: "How to Deploy a Website on Vercel for FREE",
          resource: "Vercel",
          link: "https://www.youtube.com/watch?v=1HN3RaYb7xo",
          type: "english"
        }
      ],
      milestone: "A React app that fetches real data from a free public API and a React-based portfolio, both deployed on Vercel.",
      banglaMilestone: "একটি React অ্যাপ যা ফ্রি API থেকে ডেটা আনে এবং একটি React-ভিত্তিক পোর্টফোলিও, দুটোই Vercel-এ ডিপ্লয় করা।",
      icon: "🚀",
      mascot: "otter",
      mascotPose: "research-development",
      color: "macaw"
    },
    {
      id: "phase-5",
      order: 5,
      title: "Backend Development: Node.js, Express, Databases",
      banglaTitle: "ব্যাকএন্ড ডেভেলপমেন্ট: Node.js, Express, ডেটাবেস",
      classRange: "Expert",
      duration: "~5–6 months",
      timeBudget: "4–6 hrs/week",
      smartGoal: {
        summary: "By the end of the phase, build a REST API with Node.js + Express + a database (MongoDB or MySQL), implementing full CRUD operations plus basic user login (signup/login), and test every endpoint using Postman.",
        specific: "Build a REST API with CRUD + auth using Node.js, Express, and a database",
        measurable: "Working API with all endpoints tested in Postman",
        attainable: "Node.js ecosystem is mature and well-documented",
        realistic: "4–6 hrs/week is sufficient for backend learning",
        timeBound: "5–6 months"
      },
      topics: [
        {
          id: "phase-5-node-sumit",
          title: "Node.js + Express + MongoDB Series",
          banglaTitle: "Node.js Tutorial Bangla Series for Beginners — Learn with Sumit",
          resource: "Learn with Sumit",
          link: "https://youtube.com/playlist?list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM",
          type: "bangla"
        },
        {
          id: "phase-5-node-stack",
          title: "Node.js (Alternative, Deep Dive)",
          banglaTitle: "Dive Into NodeJS — Stack Learner",
          resource: "Stack Learner",
          link: "https://www.youtube.com/playlist?list=PL_XxuZqN0xVDHFj-ecFSU0SU-B0TuJRk9",
          type: "bangla"
        },
        {
          id: "phase-5-mongo-anisul",
          title: "MongoDB",
          banglaTitle: "MongoDB Bangla Tutorial Series — Anisul Islam",
          resource: "Anisul Islam",
          link: "https://youtube.com/playlist?list=PLgH5QX0i9K3p4ckbNCy71LRr_dG0AWGw9",
          type: "bangla"
        },
        {
          id: "phase-5-mongo-alt",
          title: "MongoDB (Alternative)",
          banglaTitle: "MongoDB Bangla Tutorials — Study Mart",
          resource: "Study Mart",
          link: "https://www.youtube.com/playlist?list=PLKdU0fuY4OFe5tIAh3FB8avnQBD5FFXvE",
          type: "bangla"
        },
        {
          id: "phase-5-sql",
          title: "SQL (MySQL — if you prefer relational DB)",
          banglaTitle: "MySQL Database Bangla Tutorials — Anisul Islam",
          resource: "Anisul Islam",
          link: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3qLcx9DvVDWmNJ7riPvxzCD",
          type: "bangla"
        },
        {
          id: "phase-5-rest-api",
          title: "REST API Design",
          banglaTitle: "REST API Design Workshop — Stack Learner",
          resource: "Stack Learner",
          link: "https://www.youtube.com/playlist?list=PL_XxuZqN0xVAWGDKIzcn6NWikVkljJQZc",
          type: "bangla"
        },
        {
          id: "phase-5-postman",
          title: "Testing Your API",
          banglaTitle: "Pro Postman Workshop — Stack Learner",
          resource: "Stack Learner",
          link: "https://www.youtube.com/playlist?list=PL_XxuZqN0xVAw_wmOs1iVfdFGiAX-wGKF",
          type: "bangla"
        }
      ],
      milestone: "A 'Notes API' or 'Task API' with signup/login and full CRUD, fully tested in Postman, code pushed to GitHub.",
      banglaMilestone: "একটি 'নোটস API' বা 'টাস্ক API' সাইনআপ/লগইন এবং সম্পূর্ণ CRUD সহ, Postman-এ টেস্ট করা।",
      icon: "⚙️",
      mascot: "piglet",
      mascotPose: "confetti",
      color: "cardinal"
    },
    {
      id: "phase-6",
      order: 6,
      title: "Full-Stack Capstone Project & Deployment",
      banglaTitle: "ফুল-স্ট্যাক ক্যাপস্টোন প্রজেক্ট ও ডিপ্লয়মেন্ট",
      classRange: "Master",
      duration: "Spread across the year",
      timeBudget: "2–3 hrs/week before exams, 15+ hrs/week after HSC",
      smartGoal: {
        summary: "Build one complete full-stack capstone project connecting a React (or Next.js) frontend to a Node/Express + database backend, with working authentication, and deploy it live — completed and polished before university admission tests begin.",
        specific: "Build 1 complete full-stack capstone project with auth and deployment",
        measurable: "Live URL + GitHub repo + written README",
        attainable: "Combines all skills learned in previous phases",
        realistic: "Light pace before exams, intensive sprint after HSC",
        timeBound: "Full year (light before exams, heavy after)"
      },
      topics: [
        {
          id: "phase-6-mern-stack",
          title: "Complete MERN Stack Course",
          banglaTitle: "Complete MERN Stack Course in Bangla — Stack Learner",
          resource: "Stack Learner",
          link: "https://www.youtube.com/watch?v=ewBBT6Iph0M&list=PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl",
          type: "bangla"
        },
        {
          id: "phase-6-ecommerce",
          title: "E-commerce Full Project (Reference)",
          banglaTitle: "E-commerce MERN Stack Project in Bangla — Anisul Islam",
          resource: "Anisul Islam",
          link: "https://youtube.com/playlist?list=PLgH5QX0i9K3q_7q9vZ5-EWpoL2bMuFJFV",
          type: "bangla"
        },
        {
          id: "phase-6-typescript",
          title: "TypeScript (Recommended Upgrade)",
          banglaTitle: "TypeScript Bangla Tutorial Series — Learn with Sumit",
          resource: "Learn with Sumit",
          link: "https://youtube.com/playlist?list=PLHiZ4m8vCp9PgOOjdyNpc6AoBmKNrp_u3",
          type: "bangla"
        },
        {
          id: "phase-6-roadmap",
          title: "Full Stack Developer Roadmap (Checklist)",
          banglaTitle: "Full Stack Developer Roadmap — roadmap.sh",
          resource: "roadmap.sh",
          link: "https://roadmap.sh/full-stack",
          type: "english"
        }
      ],
      milestone: "Live URL + GitHub repo + a written README explaining the project, tech stack, and how to run it locally.",
      banglaMilestone: "লাইভ URL + GitHub রিপো + একটি লিখিত README যা প্রজেক্ট, টেক স্ট্যাক এবং লোকালি রান করার পদ্ধতি ব্যাখ্যা করে।",
      icon: "🏗️",
      mascot: "piglet",
      mascotPose: "successful-deployment",
      color: "bee"
    },
    {
      id: "phase-7",
      order: 7,
      title: "Portfolio Polish & University-Ready",
      banglaTitle: "পোর্টফোলিও পলিশ ও বিশ্ববিদ্যালয়-প্রস্তুত",
      classRange: "Legend",
      duration: "Until admission tests start",
      timeBudget: "As much as available",
      smartGoal: {
        summary: "Publish a personal portfolio website showcasing 4–5 completed projects (from Phases 1, 2, 3, 4, 5, 6), each with a 2–3 sentence case study, and be able to explain and defend the code in any of them without hesitation.",
        specific: "Publish portfolio with 4–5 projects, each with a case study",
        measurable: "Live portfolio site with project case studies",
        attainable: "Complete portfolio showcasing all learned skills",
        realistic: "Genuine free window with time to polish everything",
        timeBound: "Until university admission tests"
      },
      topics: [
        {
          id: "phase-7-bootcamp",
          title: "Optional: Structured Bootcamp",
          banglaTitle: "7-month full-stack bootcamp (optional, if budget allows)",
          resource: "Programming Hero",
          link: "https://web.programming-hero.com/home",
          type: "english"
        },
        {
          id: "phase-7-deeper",
          title: "Deeper Backend/Cloud Path (University-Level)",
          banglaTitle: "ব্যাকএন্ড/ক্লাউড স্পেশালাইজেশন — বিশ্ববিদ্যালয়-পর্যায়",
          resource: "Self-directed learning",
          link: "https://roadmap.sh/backend",
          type: "english"
        }
      ],
      milestone: "A polished portfolio website showcasing 4–5 completed projects with case studies.",
      banglaMilestone: "একটি পলিশ করা পোর্টফোলিও ওয়েবসাইট ৪–৫টি সম্পন্ন প্রজেক্ট এবং কেস স্টাডি সহ।",
      icon: "🎓",
      mascot: "piglet",
      mascotPose: "whiteboard",
      color: "beetle"
    }
  ]
}

/**
 * Validates curriculum data integrity
 * @throws Error if validation fails
 */
export function validateCurriculum(data: Curriculum): boolean {
  const phaseIds = new Set<string>()
  for (const phase of data.phases) {
    if (phaseIds.has(phase.id)) {
      throw new Error(`Duplicate phase ID: ${phase.id}`)
    }
    phaseIds.add(phase.id)
  }

  const orders = data.phases.map(p => p.order)
  const sortedOrders = [...orders].sort((a, b) => a - b)
  for (let i = 0; i < sortedOrders.length; i++) {
    if (sortedOrders[i] !== i) {
      throw new Error(`Phase order gap or duplicate at position ${i}`)
    }
  }

  for (const phase of data.phases) {
    const topicIds = new Set<string>()
    for (const topic of phase.topics) {
      if (topicIds.has(topic.id)) {
        throw new Error(`Duplicate topic ID in ${phase.id}: ${topic.id}`)
      }
      topicIds.add(topic.id)
      
      if (!topic.id.startsWith(`${phase.id}-`)) {
        throw new Error(
          `Topic ID "${topic.id}" doesn't match phase ID pattern "${phase.id}-..."`
        )
      }
    }
  }

  for (const phase of data.phases) {
    if (!phase.title || !phase.banglaTitle) {
      throw new Error(`Phase ${phase.id} missing title fields`)
    }
    if (!phase.smartGoal?.summary) {
      throw new Error(`Phase ${phase.id} missing SMART goal summary`)
    }
  }

  return true
}

if (import.meta.env.DEV) {
  validateCurriculum(curriculum)
}
