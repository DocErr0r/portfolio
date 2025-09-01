// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
// import glaLogo from './assets/education_logo/gla_logo.png';
// import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
// import githubdetLogo from './assets/work_logo/github_det.png';
// import csprepLogo from './assets/work_logo/cs_prep.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      // { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "",
    company: "Almanac Services",
    role: "Full Stack Developer Intern",
    type: "Remote",
    duration: "Oct 2024 – Feb 2025",
    description:
      "Worked as a Full Stack Developer Intern where I developed and maintained responsive web applications using Next.js, Node.js, and MongoDB. I implemented user-friendly interfaces with Material UI to improve accessibility and user engagement. I also integrated real-time database and authentication using Firebase, collaborated with the backend team to debug and enhance APIs, and worked closely with product managers to ensure timely delivery of features. Additionally, I contributed to the integration of RESTful APIs to enable real-time collaborative updates.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      "Next Js",
    ],
  }
];

export const projects = [
  {
    id:0,
    title: "Airbnb Clone",
    duration: "Mar 2024 – May 2024",
    techStack: ["Next.js", "MongoDB"],
    description:
      "Developed an Airbnb-inspired web application with responsive UI layouts for property listings and booking workflows. I created RESTful APIs for authentication, listings, and bookings while collaborating with a team to deliver a scalable and user-friendly platform.",
    link: null, // no live demo given in resume
    github: "https://github.com/docerr0r/airbnb-clone", // you can replace with correct repo
    image: "/images/projects/airbnb-clone.png"
  },
  {
    id:1,
    title: "E-commerce Platform",
    duration: "Jun 2024 – Sep 2024",
    techStack: ["ReactJS", "Node.js", "Express.js", "JWT", "Tailwind CSS", "MongoDB"],
    description:
      "Built a full-stack e-commerce platform featuring JWT-based authentication and role-based access control. I implemented CRUD operations, a shopping cart system, and integrated PayPal for secure payment processing. The platform delivers a smooth and seamless shopping experience for users.",
    link: "https://eshop-net.netlify.app",
    github: "https://github.com/docerr0r/ecommerce-platform", // replace with correct repo
    image: "/images/projects/ecommerce-platform.png"
  },
  {
    id:2,
    title: "Music Web Application",
    duration: "Jan 2024 – Mar 2024",
    techStack: ["ReactJS", "Jio Saavn API"],
    description:
      "Created a music web application using ReactJS and the Jio Saavn API to fetch song details and album art. The app was designed with a mobile-first, dark-themed interface, which improved user engagement by 20% compared to a standard design.",
    link: "https://musik-web.netlify.app",
    github: "https://github.com/docerr0r/music-web-app", // replace with correct repo
    image: "/images/projects/music-web.png"
  }
];


  
  // export const education = [
  //   {
  //     id: 0,
  //     img: glaLogo,
  //     school: "GLA University, Mathura",
  //     date: "Sept 2022 - July 2024",
  //     grade: "7.81 CGPA",
  //     desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
  //     degree: "Master of Computer Applications - MCA",
  //   },
  //   {
  //     id: 1,
  //     img: bsaLogo,
  //     school: "BSA College, Mathura",
  //     date: "Sept 2018 - Aug 2021",
  //     grade: "73.2%",
  //     desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
  //     degree: "Bachelor of Science - BSC (Computer Science)",
  //   },
  //   {
  //     id: 2,
  //     img: vpsLogo,
  //     school: "Vatsalya Public School Govardhan, Mathura",
  //     date: "Apr 2017 - March 2018",
  //     grade: "78%",
  //     desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
  //     degree: "CBSE(XII) - PCM with Computer Science",
  //   },
  //   {
  //     id: 3,
  //     img: vpsLogo,
  //     school: "Vatsalya Public School Govardhan, Mathura",
  //     date: "Apr 2015 - March 2016",
  //     grade: "87.5%",
  //     desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
  //     degree: "CBSE(X), Science with Computer Application",
  //   },
  // ];
 