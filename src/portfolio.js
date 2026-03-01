/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Moiz",
  title: "Hi, I'm Muhammad Moiz",
  subTitle: emoji(
    "A Senior Software Engineer & Architect with 10+ years of experience designing and implementing high-performance, scalable, fault-tolerant applications. Expert in Java, Spring Boot, React, AWS, Microservices, and AI-powered systems. Known for leading offshore teams, mentoring engineers, and delivering mission-critical applications under tight deadlines."
  ),
  resumeLink:
    "", // Set to empty to hide the button or add your Google Drive resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/muhammadmoiz", // Update with your GitHub username
  linkedin: "https://www.linkedin.com/in/muhammad-m-0a9097241",
  gmail: "muhammadmoiz65@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@",
  // stackoverflow: "https://stackoverflow.com/users/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SENIOR SOFTWARE ARCHITECT WHO BUILDS SCALABLE, HIGH-PERFORMANCE ENTERPRISE SYSTEMS",
  skills: [
    emoji(
      "⚡ Design and implement highly scalable microservices architectures using Java, Spring Boot, and Spring Cloud"
    ),
    emoji(
      "⚡ Build interactive, high-performance frontends with React, TypeScript, Redux, and modern UI frameworks"
    ),
    emoji(
      "⚡ Architect cloud-native solutions on AWS with Kubernetes, Docker, and serverless technologies"
    ),
    emoji(
      "⚡ Develop AI-powered applications integrating Machine Learning models with production systems"
    ),
    emoji(
      "⚡ Lead technical teams, conduct code reviews, and mentor engineers in best practices"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "London South Bank University",
      logo: require("./assets/images/lsbuLogo.png"),
      subHeader: "BSc. Hons, Computer Science (In Progress)",
      duration: "Currently Pursuing",
      desc: "Advancing knowledge in modern computing paradigms and software engineering principles.",
      descBullets: []
    },
    {
      schoolName: "Sukkur IBA University",
      logo: require("./assets/images/sukkurIBALogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "",
      desc: "Advanced studies in computer science with focus on software engineering and system design.",
      descBullets: []
    },
    {
      schoolName: "Sukkur IBA University",
      logo: require("./assets/images/sukkurIBALogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "",
      desc: "Foundation in computer science, algorithms, data structures, and software development.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend (Java, Spring Boot, Microservices)",
      progressPercentage: "95%"
    },
    {
      Stack: "Frontend (React, TypeScript, Angular)",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud & DevOps (AWS, Kubernetes, Docker)",
      progressPercentage: "92%"
    },
    {
      Stack: "System Architecture & Design",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Leader",
      company: "Oliv",
      companylogo: require("./assets/images/olivLogo.png"),
      date: "May 2023 – Present",
      desc: "Leading MENAP Recruitment platform with focus on Internships. Key architect in Linkstar's acquisition of Oliv.",
      descBullets: [
        "Architected Kafka integration for event-driven microservices with real-time communication",
        "Led development of Olivia AI recommendation system using ML models with Java & Spring Boot",
        "Designed CI/CD pipelines with AWS CodePipeline, Docker, and EKS for containerized workloads",
        "Built real-time chat using WebSockets and implemented Stripe subscription system",
        "Trained teams on React Hooks, Context API, Redux for high-performance frontend development"
      ]
    },
    {
      role: "Technical Leader",
      company: "Linkstar",
      companylogo: require("./assets/images/linkstarLogo.png"),
      date: "May 2022 – Aug 2023",
      desc: "No-Code Portfolio Builder and Freelance Marketplace. Architected cloud-native platform transformation.",
      descBullets: [
        "Redesigned monolithic architecture to microservices using Docker, Kubernetes on AWS",
        "Achieved 10x faster disaster recovery, 2x faster deployments, 2x improved database performance",
        "Built RESTful APIs with OAuth2/JWT, employed Kafka for event-driven architecture",
        "Mentored engineers in Spring Cloud, Kafka streams, AWS Lambda, Kubernetes Helm charts",
        "Established monitoring with ELK Stack ensuring 99% uptime"
      ]
    },
    {
      role: "Technical Leader - Consultant",
      company: "Zero Vertical Labs LLC",
      companylogo: require("./assets/images/zeroVerticalLogo.png"),
      date: "Oct 2022 – Present",
      desc: "Consulting for Big 4 firms and drone defense startups on enterprise modernization projects.",
      descBullets: [
        "Modernized legacy Apache Struts apps to microservices with Spring Cloud and Docker",
        "Developed micro frontends using Web Components and single-spa for role-based UI isolation",
        "Built 3D interactive map using WebGL and Three.js for real-time drone path visualization",
        "Integrated SSO with OAuth 2.0, OpenID Connect, and Keycloak across multiple modules",
        "Applied CQRS and Event Sourcing patterns for high-performance systems"
      ]
    },
    {
      role: "Senior Software Engineer - Consultant",
      company: "mLogica LLC",
      companylogo: require("./assets/images/mlogicaCompanyLogo.webp"),
      date: "Dec 2021 – Sept 2024",
      desc: "Led offshore team of 25 engineers for Kaiser Permanente's KP HealthConnect and FedEx modernization.",
      descBullets: [
        "Designed Medicare/Medicaid modules and PreAuth Check for real-time insurance validation",
        "Managed migration from IBM Z/OS Mainframe to AWS infrastructure",
        "Developed AutoML and GenAI modules with Python ML libraries and Spring Boot backend",
        "Built AI-driven database migration tool supporting legacy to modern DB conversions",
        "Utilized HL7 v3 and FHIR standards for healthcare interoperability"
      ]
    },
    {
      role: "Senior Software Engineer - Consultant",
      company: "Aravez",
      companylogo: require("./assets/images/aravezLogo.webp"),
      date: "Dec 2020 – Dec 2021",
      desc: "Built Sawah super app for Saudi tourists and government compliance platforms.",
      descBullets: [
        "Developed scalable apps with Java, Spring Boot, React, AWS Lambda, and DynamoDB",
        "Integrated Nafath SSO for government access standards compliance",
        "Orchestrated microservices using Kubernetes on Amazon EKS",
        "Built Enjz platform integrating secure access to government and private services"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Click Control",
      companylogo: require("./assets/images/clickControlLogo.webp"),
      date: "Dec 2018 – Dec 2020",
      desc: "Designed ERP solution used by 50+ organizations and 300,000+ users worldwide.",
      descBullets: [
        "Built desktop and mobile apps using AngularJS with seamless cross-platform experience",
        "Integrated Stripe, Twilio, and Firebase for payments, communication, and real-time sync",
        "Implemented real-time data processing using Apache Kafka and Apache Spark"
      ]
    },
    {
      role: "Software Developer",
      company: "ShareTheLoad Pty. Ltd.",
      companylogo: require("./assets/images/sharetheloadLogo.webp"),
      date: "Feb 2013 – Dec 2018",
      desc: "Developed real-time parcel delivery iOS app with live tracking and payment features.",
      descBullets: [
        "Built iOS app using Swift/Objective-C with Core Location, WebSocket live tracking",
        "Developed RESTful APIs in Spring MVC for authentication, tracking, and payments",
        "Integrated Apple Push Notifications, Stripe payments, and KYC module with Onfido/Jumio",
        "Designed admin dashboard with Spring MVC and real-time WebSocket data updates"
      ]
    }
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
  subtitle: "ENTERPRISE SYSTEMS AND PRODUCTS I HELPED ARCHITECT AND BUILD",
  projects: [
    {
      image: require("./assets/images/kaiserLogo.webp"),
      projectName: "KP HealthConnect - Kaiser Permanente",
      projectDesc: "Led offshore team of 25 engineers building healthcare portal with EHR, appointments, Medicare/Medicaid modules. Migrated IBM Z/OS Mainframe to AWS.",
      footerLink: []
    },
    {
      image: require("./assets/images/fedexLogo.webp"),
      projectName: "FedEx Warehousing System Modernization",
      projectDesc: "End-to-end cloud migration of warehousing and logistics system to AWS. Re-architected SAS Object Script to Java microservices with zero downtime.",
      footerLink: []
    },
    {
      image: require("./assets/images/mlogicaLogo.webp"),
      projectName: "Cap*M - AutoML and GenAI Platform",
      projectDesc: "Built hyperscale big data platform with ML models using Scikit-learn, TensorFlow, PyTorch. Spring Boot backend with React frontend.",
      footerLink: []
    },
    {
      image: require("./assets/images/starMLogo.webp"),
      projectName: "Star*M - AI Database Migration Tool",
      projectDesc: "Fully automated AI-driven modernization platform addressing 7 Rs of cloud migration with AWS Lambda, Step Functions, and EKS.",
      footerLink: []
    },
    {
      image: require("./assets/images/awsLogo.webp"),
      projectName: "Dahlia & Tulip - Mainframe Modernization",
      projectDesc: "Language conversion tools for COBOL, PL/I, ASSEMBLER to Java. Featured on AWS Mainframe Modernization capabilities.",
      footerLink: []
    },
    {
      image: require("./assets/images/sawahLogo.webp"),
      projectName: "Sawah - Saudi Arabia Tourism Super App",
      projectDesc: "Super app for tourists with social media integration and localization. Built with Java, Spring Boot, React, and AWS services.",
      footerLink: []
    },
    {
      image: require("./assets/images/enjzLogo.webp"),
      projectName: "Enjz - National Events Center",
      projectDesc: "Government platform integrating secure access with MoFA and Nafath. Built with Micronaut, Spring Boot, Kafka, and gRPC.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications & Achievements"),
  subtitle:
    "Professional certifications demonstrating expertise in enterprise software and security",

  achievementsCards: [
    {
      title: "Oracle Certified NAAC & NA TAG Consulting HIPAA and HITECH Trainer",
      subtitle:
        "Certified trainer for healthcare data privacy and security compliance standards.",
      image: require("./assets/images/oracleLogo.png"),
      imageAlt: "Oracle Logo",
      footerLink: []
    },
    {
      title: "Oracle OSSA Global Core Certified Consultant",
      subtitle:
        "Oracle Software Security Assurance certification for secure software development.",
      image: require("./assets/images/oracleLogo.png"),
      imageAlt: "Oracle Logo",
      footerLink: []
    },
    {
      title: "Oracle Software Security Assurance",
      subtitle:
        "Expertise in implementing security best practices in Oracle-based solutions.",
      image: require("./assets/images/oracleLogo.png"),
      imageAlt: "Oracle Logo",
      footerLink: []
    },
    {
      title: "Oracle CISAT Certification",
      subtitle:
        "Oracle's Certified Implementation Specialist certification.",
      image: require("./assets/images/oracleLogo.png"),
      imageAlt: "Oracle Logo",
      footerLink: []
    },
    {
      title: "Kaiser Permanente HIPAA and HITECH Certification",
      subtitle:
        "Healthcare industry compliance certification for handling protected health information.",
      image: require("./assets/images/kaiserLogo.webp"),
      imageAlt: "Kaiser Permanente Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing knowledge about software architecture, best practices, and emerging technologies.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE AND MENTOR ENGINEERS"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY AND ARCHITECTURE",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Looking for a Technical Leader or Architect? Let's discuss your project requirements.",
  number: "+92-318-023-1378",
  email_address: "muhammadmoiz65@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
  isHireable,
  resumeSection
};
