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
  animated: false // Set to false to use static SVG
};

const greeting = {
  
  title: "Christian Josh Flores",
  subTitle:(
    "A motivated IT student seeking an internship opportunity. Eager to learn and gain new experiences, with strengths in data entry, basic figma, and technical skills. I’m excited to apply my abilities in the real world. Driven to solve problems and eager to contribute to a team where I can grow."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/christianjosh8",
  gmail: "christianjosh0917@gmail.com",
  facebook: "https://www.facebook.com/chrisjoshh9",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
 

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
  ],
 
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Mindanao",
      logo: require("./assets/images/University_of_Mindanao_Logo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "2024",
     
    },
    {
      schoolName: "University of Mindanao",
      logo: require("./assets/images/University_of_Mindanao_Logo.png"),
      subHeader: "Science, Technology, Engineering and Mathematics",
      duration: "2016-2018",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
   
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Annotation",
      company: "Whale LSS Remotask",
      companylogo: require("./assets/images/whale-logo.png"),
      date: "2020",
      desc: "Labeling objects such as vehicles, trees, pedestrian in the LIDAR data.",
      
    },
    
   
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
  title: "Big Projects",
  
  projects: [
    {
      image: require("./assets/images/ched-logo.png"),
      projectName: "CHED HemiSense",
      projectDesc: "Higher Education Information Management System",
      
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications  "),
 

  achievementsCards: [
    {
      title: "NCII Computer System Servicing",
      subtitle:
        "2023",
      image: require("./assets/images/tesda-logo.png"),
      
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1h1mZ9PZ2X5Aj9mIVS_nuzxDpTVCWX181/view?usp=sharing"
        },
       
      ]
    },
    {
      title: "Information Technology Specialist Networking",
      subtitle:
        "2023",
      
      image: require("./assets/images/its-logo.png"),
      
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1GNaTh15Kir_x6DhGVbRFZUMJPVeEgyGY/view?usp=sharing"
        }
      ]
    },
     {
      title: "Information Technology Specialist Network Security",
      subtitle:
        "2023",
      
      image: require("./assets/images/its-logo.png"),
      
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1EwQldARGE___QYEI8qB0IHHhpAkOVLvQ/view?usp=sharing"
        }
      ]
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  
};

// Talks Sections

const talkSection = {
  
};

// Podcast Section

const podcastSection = {
 
};

// Resume Section
const resumeSection = {
  
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  number: "09162711738",
  email_address: "christianjosh0917@gmail.com"
};

// Twitter Section

const twitterDetails = {
  
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
