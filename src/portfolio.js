/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

//yarn build
//yarn add gh-pages --save-dev
//npm run deploy

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import pytorchImg from "./assets/images/pytorch-icon.png"; // Rename to your file name for custom animation
import tensorflowImg from "./assets/images/tensorflow-logo.png"; // Rename to your file name for custom animation
import springbootImg from "./assets/images/springboot-logo.png"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arnav Agarwal",
  title: "Hi all, I'm Arnav Agarwal",
  subTitle: emoji(
    "A passionate Software developer focusing in Machine Learning and Generative AI using Pytorch / Tensorflow libraries and also explored full stack software development with JavaScript / Reactjs / Nodejs / React Native / Springboot / Kubernetes and some other cool libraries and frameworks. 🚀"
  ),
  resumeLink: "https://arnav-agarwal.com/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arnavagarwal-14/",
  linkedin: "https://www.linkedin.com/in/arnavagarwal14/",
  gmail: "arnav.agarwalpro@gmail.com",
  // gitlab: "https://gitlab.com/dhamasunny98",
  // facebook: "https://www.facebook.com/beingsunnydhama",
  // medium: "https://medium.com/@dhamasunny98",
  // stackoverflow: "https://stackoverflow.com/users/10656906/sunny-dhama",
  instagram: "https://instagram.com/arnavagarwal__",
  // twitter: "https://twitter.com/sunny_dhama_",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ML & AI DEVELOPER WHO WANTS TO EXPLORE EVERY FRAMEWORK",
  skills: [
    emoji("⚡ Develop and implement advanced AI and machine learning models for data analysis and optimization."),
    emoji("⚡ Build and enhance scalable web applications by integrating AI functionalities and utilizing cloud platforms like AWS and Azure."),
    emoji("⚡ Design full-stack web solutions using Spring Boot, Docker, Kubernetes, and RESTful APIs, ensuring robustness and scalability.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fab",
      className: "generic-icon",
      image:pytorchImg
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fab",
      className: "generic-icon",
      image:tensorflowImg
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab",
      className: "generic-icon",
      image:springbootImg
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
   
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Florida",
      logo: require("./assets/images/uf-logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - Dec 2024",
      desc: "CGPA: 3.70/4.0",
      descBullets: [
        "Advanced Data Science",
        "Software Engineering",
        "Distributed Operating Systems Principles",
        "Advanced Data Structures and Algorithms",
        "Database Management Systems",
        "Computer Networks"
      ]
    },
    {
      schoolName: "Manipal University Jaipur",
      logo: require("./assets/images/Manipal_University_Jaipur_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "Aug 2019 - May 2023",
      desc: "CGPA: 8.85/10",
      descBullets: [
        "Artificial Intelligence & Machine Learning",
        "Software Development Fundamentals",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Database Management Systems",
        "Software Engineering & Operating Systems",
        "Computer Networks",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Pytorch", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Tensorflow", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Generative AI ML Intern",
      company: "Skan AI",
      location: "CA, USA",
      companylogo: require("./assets/images/skan_ai_logo.jpeg"),
      date: "May 2024 - Aug 2024",
      desc: "During my internship at Skan AI I led the development of a generative transformer model, achieving a 25% improvement in accuracy. This model featured KAN layers for noise reduction and advanced data processing techniques, generating optimal task sequences for user workflows. I also implemented advanced clustering, mixed-precision training, and memory optimization, significantly enhancing model efficiency and analytical outcomes."
      // descBullets: [
      //   "Spearheaded the development and optimization of a React and Django-based educational platform, impacting over 100 students.",
      //   "Enhanced platform efficiency, achieving a 30% reduction in computation on virtual cores using Docker and ALB.",
      //   "Pioneered the use of Flutter applications for real-time health metric sharing, reducing smartwatch battery consumption by 22%."
      // ]
    },
    {
      role: "Summer Research Intern",
      company: "IIT Roorkee",
      location: "India",
      companylogo: require("./assets/images/iitr-logo.jpeg"),
      date: "Jul 2021 - Sept 2021",
      desc: "During my Summer Research Internship at IIT Roorkee I first-authored a research paper on deep learning for COVID-19 X-ray image classification, alongside an IIT-Roorkee Professor. We enhanced the model’s accuracy by 10% and reduced its processing time by 20% compared to existing methods. Additionally, I developed an accelerated diagnosis model that improved efficiency by 50%, offering a significant advancement over conventional approaches."
      // descBullets: [
      //   "Led the development of a React-based Monaco editor code editor, resulting in 7 million yearly code submissions.",
      //   "Engineered a JavaScript-based video streaming solution, enhancing user engagement by 50% and reducing instructor load.",
      //   "Optimized JavaScript and Webpack configurations, reducing dashboard load times significantly."
      // ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Remedico",
    //   companylogo: require("./assets/images/remedico-logo.png"),
    //   date: "May 2020 - August 2020",
    //   desc: "At Remedico, I improved the codebase by developing reusable React components and updating the Doctor's onboarding portal with React Native, focusing on UI enhancements and code efficiency."
    //   // descBullets: [
    //   //   "Developed reusable React components, reducing codebase by 30% and improving code quality.",
    //   //   "Modernized the Doctor's onboarding portal using React Native, enhancing user interface and experience."
    //   // ]
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some big projects that I created and worked on.",
  projects: [
    {
      image: require("./assets/images/eventsigator-logo.webp"),
      projectName: "Eventsigator",
      projectDesc:
        "Event finder using microsoft power platform and OpenAI's GPT-4-Turbo API",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "https://www.interviewbit.com/problems/text-editor/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/convogenie-logo.png"),
      projectName: "ConvoGenie",
      projectDesc:
        "Generative AI Conversational Avatar with Advanced Content Summarization",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "https://app.nlp4science.org"
      //   }
      // ]
    },
    {
      image: require("./assets/images/motionspeak-logo.png"),
      projectName: "MotionSpeak",
      projectDesc:
        "Sign language transcriber using machine learning.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "https://amby.campdialogs.org"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft certified Azure / Azure AI fundamentals",
      subtitle:
        "Certified with Microsoft Azure and Azure AI fundamentals.",
      image: require("./assets/images/Microsoft_Azure.png"),
      imageAlt: "Microsoft Azure Logo",
      footerLink: [
        {
          name: "Certifications",
          url: "https://arnav-agarwal.com/microsoftCertificate.pdf"
        }
      ]
    },
    {
      title: "Google Cloud Computing Fundamentals",
      subtitle:
        "Certified in 1. Cloud Computing Fundamentals, 2. Infrastructure in Google Cloud, 3. Networking and Security in Google Cloud, 4. Data, ML, and AI in Google Cloud",
      image: require("./assets/images/gcp-logo.png"),
      imageAlt: "Google Cloud Platform Logo",
      footerLink: [
        {
          name: "Certifications",
          url: "https://www.cloudskillsboost.google/public_profiles/9d93d28a-c059-4436-b544-82b514dbaef1"
        }
      ]
    },
    {
      title: "Even more Certifications!",
      subtitle:
        "Certificates in Python, Data Science, SQL, UI/UX and more on the way.",
      image: require("./assets/images/certificate-icon.png"),
      imageAlt: "Certificates Alt Image",
      footerLink: [
        {
          name: "Certification",
          url: "https://arnav-agarwal.com/certificatesMerged.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "With scale React and React Native Web Apps",
      subtitle: "Build and Scale",
      event_url:
        "https://www.linkedin.com/posts/build-and-scale_webapps-react-reactnative-activity-6640689248817254400-PbJg?utm_source=share&utm_medium=member_desktop"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://www.youtube.com/embed/oCMFRl6a9t4"],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-3527094251",
  email_address: "arnav.agarwalpro@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "arnavagarwal_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
