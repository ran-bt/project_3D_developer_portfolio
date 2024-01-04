import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logo,
  auto,
  plant,
  furniture,
  tech,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Shopify Theme Dev",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "E-commerce Digital Marketer, Freelance",
    company_name: "Freelancer",
    icon: logo,
    iconBg: "#383E56",
    date: "Aug 2019 - Feb 2021",
    points: [
      "Developed tailored marketing strategies to improve customer acquisition, resulting in up to 40% increase in website traffic for multiple clients.",
      "Built and maintained Shopify e-commerce stores, including website customization and basic coding.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Managed web content and developed digital media strategies for clients",
    ],
  },

  {
    title: "Technical Support",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2021 - Jul 2022",
    points: [
      "Resolved technical issues for Shopify merchants by providing step-by-step guidance, resulting in high customer satisfaction rates.",
      "Collaborated with internal and third-party developers to identify and resolve status errors and bugs, improving overall site performance.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Develop responsive and mobile-friendly websites to enhance user experience and drive engagement.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Present",
    points: [
      "Use technical troubleshooting and problem-solving skills to quickly and efficiently resolve technical issues for clients.",
      "Deploy and configure websites on popular CMS platforms including Wordpress and Shopify, ensuring high-quality website performance and functionality.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Develop responsive and mobile-friendly websites to enhance user experience and drive engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Accessories",
    description:
      "Recently, I crafted a dynamic e-commerce platform for a client that pride themselves as the premier destination for premium car accessories. I prioritized a user-friendly design, ensuring a seamless browsing experience for customers exploring sleek interior upgrades and cutting-edge car gadgets. This stylish and functional  design reflects the brand elevates the shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: auto,
    source_code_link: "https://github.com/",
  },
  {
    name: "Plant Store",
    description:
      "Infused with user-friendly navigation this indoor plant store design, offers users an immersive experience. With a focus on aesthetics and functionality, the website showcases a diverse collection of lush greenery. From sleek succulents to elegant ferns, this store ensures a seamless shopping experience for plant enthusiasts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: plant,
    source_code_link: "https://github.com/",
  },

  {
    name: "Tech Store",
    description:
      "This store boasts a sleek design and seamless functionality, providing a user-friendly experience for tech enthusiasts. From the latest gadgets to innovative accessories, this website ensured a modern and dynamic online shopping journey.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: plant,
    source_code_link: "https://github.com/",
  },
  {
    name: "Furniture Store",
    description:
      "Melding sleek design with seamless functionality, the site offers an immersive shopping experience. From chic furniture to stylish decor, this platform ensures a user-friendly interface for those seeking to elevate their living spaces.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: furniture,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
