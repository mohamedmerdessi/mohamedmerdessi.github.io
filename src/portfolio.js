/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mohamed Merdessi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mohamed Merdessi's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Mohamed Merdessi",
  logo_name: "Mohamed Merdessi",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1kZuy4WD76RrTN-SUmYDbWyQP4H0wi2k1/view?usp=drive_link",
  portfolio_repository: "https://github.com/mohamedmerdessi/PersonalPortfolio",
  githubProfile: "https://github.com/mohamedmerdessi?tab=repositories",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/mohamedmerdessi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohamed-merdessi-9337a52a9/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mohamed.merdessi@outlook.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
 
    {
      title: "FullStack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and interactive front-end interfaces using modern web technologies like HTML, CSS, and JavaScript",
        "⚡ Developing robust server-side applications and APIs using frameworks like Node.js, Express, or Django",
        "⚡ Integrating front-end and back-end systems to create seamless user experiences",
        "⚡ Working with databases and data modeling using technologies like SQL or MongoDB",
        "⚡ Implementing security measures to protect web applications from common vulnerabilities",
        "⚡ Collaborating with cross-functional teams to deliver high-quality software solutions",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "teenyicons:typescript-outline",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "ReactNative",
          fontAwesomeClassname: "tabler:brand-react-native",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJs",
          fontAwesomeClassname: "file-icons:nextjs",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "SocketIo",
          fontAwesomeClassname: "devicon:socketio",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "ExpressJs",
          fontAwesomeClassname: "skill-icons:expressjs-light",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon:nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "mdi:github",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "devicon:tailwindcss",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "axure",
          fontAwesomeClassname: "fluent:phone-20-filled",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "ProtoPie",
          fontAwesomeClassname: "openmoji:pie",
          style: {
            color: "#000000",
          },
          
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Baccalaureate Economy Management",
      logo_path: "iiitk_logo.png",
      alt_name: "Lycée Manzah 6",
      duration: "2021-2022",
      descriptions: [
        "⚡ Studied fundamental subjects in economics, management, accounting, finance, and business administration.",
        "⚡ Completed courses covering topics such as microeconomics, macroeconomics, organizational behavior, marketing, and strategic management.",
        "⚡ Participated in projects and case studies focusing on economic analysis, market research, financial planning, and business strategy.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "FullStack Web Developer",
      logo_path: "rbk_logo.jpg",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      logo_path: "ibm_logo.png",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Building RESTful APIs with Node.js and Express",
      logo_path: "niit_logo.png",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Node.js Backend Basics with Best Practices",
      logo_path: "coursera_project.png",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },

    {
      title: "React Basics",
      logo_path: "coursera_logo.png",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Advanced React",
      logo_path: "coursera_logo.png",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Frontend Development using React",
      logo_path: "coursera_logo.png",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Google Maps Platform For Web",
      logo_path: "google_logo.png",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Google Maps Platform For Ios",
      logo_path: "google_logo.png",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Google Maps Platform for Android",
      logo_path: "google_logo.png",
      alt_name: "GCP",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Scrum Master and  WebDeveloper, Designer . I have also worked with some well established companies mostly as a FullStack Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AGILE DEVELOPMENT PROJECT",
          company: "RebootKamp (RBK)",
          company_url: "https://www.rbktunisia.com",
          logo_path: "rbk_logo.jpg",
          duration: "Sep 2023-Jan 2024",
          location: "Tunisia",
          description:
          "Acted as both Scrum Master for 10 sprints and Frontend Developer, completing 120 user stories, while also designing and prototyping a website/mobile app in Figma with 30 screens over 5 iterations. Additionally, created a scalable Sequelize-powered database schema comprising 12 tables and 15 relationships, and implemented secure JWT authentication in Node.js/Express.js using Sequelize, securing 5 endpoints and developing 2 middleware functions.",
          color: "#0879bf",
        },
        {
          title: "WEB DEVELOPER",
          company: "CAFPI TUNISIE          ",
          company_url: "https://www.linkedin.com/company/cafpi-groupe/?originalSubdomain=fr",
          logo_path: "cafpi_logo.jpg",
          duration: "Apr 2022-Aug 2023          ",
          location: "Tunisia",
          description:"Developed 25 RESTful APIs using Node.js, Express.js, and Sequelize, resulting in a 30% improvement in data communication and a 40% enhancement in server-client integration. Translated 10 complex design mockups into functional web elements, achieving 95% design fidelity and meeting 100% user experience standards. Implemented role-based access control with JWT and Sequelize, creating 5 user roles with a 99% security level and securing 100% user permissions. Additionally, resolved 20 critical bugs, leading to a 50% enhancement in system stability, through 10 collaborative troubleshooting and debugging sessions.",
          color: "#9b1578",
        },
        {
          title: "GAME SERVER DEVELOPMENT          ",
          company: "FIVEM",
          company_url: "https://fivem.net",
          logo_path: "fivem_logo.png",
          duration: "Jan 2020-Mar 2022          ",
          location: "tunisia",
          description:"Designed and implemented FiveM game servers in Lua, developing 3 servers with a total of 5000 lines of Lua code. Established server infrastructure and optimized settings, resulting in an 80% optimization and a 30% improvement in uptime. Identified and resolved server-side issues, resolving 50 issues with an average resolution time of 1 hour. Collaborated on bug resolution, resulting in the resolution of 20 bugs and a 50% improvement in system stability.",
                    color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Vehicle Rental Agent          ",
          company: "Eclipse Car Rental",
          logo_path: "eclipse_logo.jpg",
          duration: "6 months",
          location: "Tunisia",
          description:
          "       Cultivated relationships with new and existing clients to identify opportunities for improved customer service. Utilized various sales techniques to expand the client base and identify potential customers. Effectively addressed customer inquiries regarding vehicle rentals, managed reservations, and provided detailed information on pricing and policies.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [    
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description:
    "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [

    {
      id: "",
      name: "",
      createdAt: "",
      description: "",
      url:
        "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with  Development Issues.",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "",
    subtitle:
      "",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
