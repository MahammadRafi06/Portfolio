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
  username: "Mahammad Rafi",
  title: "Hello! I'm Mahammad Rafi.",
  subTitle: emoji(
    "Passionate about the end-to-end lifecycle of 🚀 ML/AI solutions, from data engineering to scalable deployments."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16RcFzj5TZz-QrUqjxtCL07bNfm-zOC-X/view?usp=sharing",
  displayGreeting: true
};
// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MahammadRafi06",
  linkedin: "https://www.linkedin.com/in/mahammadrafi/",
  gmail: "mrafi@uw.edu",
  gitlab: "https://gitlab.com/MahammadRafi",
// facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@mrafi_55507",
//  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Building and scaling ML/AI solutions with a focus on robust pipelines and cloud technologies",
  skills: [
    emoji(
      "⚡ Architecting and developing end-to-end Machine Learning and Artificial Intelligence pipelines."
    ),
    emoji("⚡ Expertise in data cleaning, preprocessing, feature engineering, model development, and deployment."),
    emoji(
      "⚡ Leveraging cloud platforms (AWS, Azure) to build scalable and efficient ML/AI infrastructure."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      imageSrc: require("./assets/tech-icons/python.png")
    },
    {
      skillName: "pytorch",
      imageSrc: require("./assets/images/pytorch.png")
    },
    {
      skillName: "scikit-learn",
      imageSrc: require("./assets/tech-icons/scikit-learn.png")
    },
    {
      skillName: "mlflow",
      imageSrc: require("./assets/tech-icons/mlflow.png")
    },
    {
      skillName: "docker",
      imageSrc: require("./assets/tech-icons/docker.png")
    },
    {
      skillName: "kubernetes",
      imageSrc: require("./assets/tech-icons/kubernetes.png")
    },
    {
      skillName: "aws",
      imageSrc: require("./assets/tech-icons/aws.png")
    },
    {
      skillName: "azure",
      imageSrc: require("./assets/tech-icons/azure.png")
    },
    {
      skillName: "sql",
      imageSrc: require("./assets/tech-icons/sql.png")
    },
    
    // You can add more relevant skills here, e.g., Spark, Kafka, etc.
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington-Seattle",
      logo: require("./assets/images/UWlogo.png"),
      subHeader: "Master of Science in Information Management",
      duration: "September 2024 - April 2025",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "IIT-Bombay",
      logo: require("./assets/images/IITBlogo.png"),
      subHeader: "Master of Management(IT)",
      duration: "June 2015 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ML/AI Development & Deployment", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Platforms (AWS/Azure)",
      progressPercentage: "75%"
    },
    {
      Stack: "Data Engineering & Pipelines",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Healthcare Consultant",
      company: "CitiusTech",
      companylogo: require("./assets/images/citiustechlogo.png"), // Assuming you have a CitiusTech logo
      date: "May 2017 – September 2024",
      desc: "Leveraged data analysis and technology to provide strategic insights and solutions for healthcare clients.",
      descBullets: [
        "Analyzed large healthcare datasets to identify trends and predict patient outcomes.",
        "Developed and presented data-driven recommendations to improve healthcare delivery and efficiency.",
        "Collaborated with cross-functional teams to implement data solutions and integrate machine learning models."
      ]
    }, 
        {
      role: "MSIM(AI)",
      company: "University of Washington-Seattle",
      companylogo: require("./assets/images/UWlogo.png"), // Assuming you have a CitiusTech logo
      date: "September 2025 – June 2025",
      desc: "Leveraged data analysis and technology to provide strategic insights and solutions for healthcare clients.",
      descBullets: [
        "Analyzed large healthcare datasets to identify trends and predict patient outcomes.",
        "Developed and presented data-driven recommendations to improve healthcare delivery and efficiency.",
        "Collaborated with cross-functional teams to implement data solutions and integrate machine learning models."
      ]
    }, 
        {
      role: "M.Mgt(IT)",
      company: "IIT Bombay",
      companylogo: require("./assets/images/IITBlogo.png"), // Assuming you have a CitiusTech logo
      date: "June 2015 – April 2017",
      desc: "Leveraged data analysis and technology to provide strategic insights and solutions for healthcare clients.",
      descBullets: [
        "Analyzed large healthcare datasets to identify trends and predict patient outcomes.",
        "Developed and presented data-driven recommendations to improve healthcare delivery and efficiency.",
        "Collaborated with cross-functional teams to implement data solutions and integrate machine learning models."
      ]
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Notable Projects",
  subtitle: "Key projects where I applied my expertise in data science and machine learning to drive innovation.",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Contributed to the development of data-driven solutions for personalized mental healthcare, potentially involving predictive modeling or natural language processing techniques for patient support.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here, e.g., a link to a case study if available.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Helped enhance their platform through the implementation of intelligent features, possibly involving recommendation systems or data analytics pipelines to improve user engagement or business insights.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    // You can add more projects here that specifically highlight your ML/AI work.
    // For example:
    // {
    //   image: require("./assets/images/your_ml_project_logo.webp"),
    //   projectName: "AI-Powered Fraud Detection System",
    //   projectDesc: "Designed and implemented a machine learning model to detect fraudulent transactions, resulting in a significant reduction in financial losses.",
    //   footerLink: [
    //     {
    //       name: "View Details",
    //       url: "#" // Replace with a link to a case study or more info
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CKA: Certified Kubernetes Administrator",
//      subtitle:
//        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/ckalogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "CKAD: Certified Kubernetes Application Developer ​",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/ckadlogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Azure AI Engineer Associate | Azure Data Scientist Associate",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/azuredslogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },
    
    {
      title: "Machine Learning Engineer: University of Toronto​",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/UTlogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
    "Sharing insights and learnings from my journey in data science, machine learning, and AI applications in healthcare.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@mrafi_55507/revolutionizing-medical-coding-workflows-with-agentic-ai-ac4bafdb3073",
      title: "Revolutionizing Medical Coding Workflows with Agentic AI",
      description:
        "An exploration of how Agentic AI can transform and optimize medical coding workflows, leading to increased efficiency and accuracy."
    },
    {
      url: "https://medium.com/@mrafi_55507/identifying-healthcare-claim-fraud-using-data-science-b50da68aef24",
      title: "Identifying Healthcare Claim Fraud Using Data Science",
      description:
        "An exploration of how data science techniques can be effectively applied to detect and prevent fraudulent activities in healthcare claims processing."
    },
    // You can keep or remove other older blog entries as you see fit.
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss an opporunity or just want to say hi? My Inbox is open for all.",
  number: "+1-5052897395",
  email_address: "mrafi@uw.edu"
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
  achievementSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
