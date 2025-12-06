// Nandini Sonar - Resume Data
export const resumeData = {
  personal: {
    name: "Nandini Sonar",
    title: "Computer Engineering Student & Full Stack Developer",
    email: "nandinisonar248@gmail.com",
    phone: "+91-9421169931",
    location: "Dhule, Maharashtra, India",
    tagline: "Building Interactive & Scalable Web Applications | Technical Head at ACM Student Chapter",
    bio: "Self-driven and detail-oriented Computer Engineering student with strong programming skills and hands-on experience in full-stack web development. Passionate about building interactive, scalable, and user-friendly applications. Seeking challenging opportunities to contribute technical expertise, creativity, and strong problem-solving mindset to real-world tech solutions.",
    objective: "3rd-year Computer Engineering student at SVKM's Institute of Technology, Dhule. Skilled in front-end and back-end web development with solid understanding of Data Structures, Algorithms, and software development lifecycle. Committed to continuous learning, collaboration, and delivering impactful results.",
    resumeFile: "Nandini New Resume.pdf",
    socialLinks: {
      github: "https://github.com/NandiniSonar248",
      linkedin: "https://www.linkedin.com/in/nandini-sonar-801849304",
      twitter: "",
      portfolio: ""
    }
  },

  skills: {
    technical: [
      { name: "C", level: 85, category: "Programming" },
      { name: "C++", level: 85, category: "Programming" },
      { name: "Java", level: 80, category: "Programming" },
      { name: "Python", level: 80, category: "Programming" },
      { name: "HTML5", level: 90, category: "Frontend" },
      { name: "CSS3", level: 90, category: "Frontend" },
      { name: "JavaScript", level: 85, category: "Frontend" },
      { name: "PHP", level: 80, category: "Backend" },
      { name: "MySQL", level: 85, category: "Database" },
      { name: "Data Structures", level: 80, category: "Concepts" },
      { name: "Algorithms", level: 80, category: "Concepts" },
      { name: "DBMS", level: 85, category: "Concepts" },
      { name: "OOP", level: 85, category: "Concepts" },
      { name: "Operating System", level: 75, category: "Concepts" },
      { name: "Computer Network", level: 75, category: "Concepts" },
      { name: "Git & GitHub", level: 85, category: "Tools" },
      { name: "VS Code", level: 90, category: "Tools" },
      { name: "XAMPP", level: 85, category: "Tools" },
      { name: "AWS", level: 70, category: "Cloud" },
      { name: "MS Office", level: 85, category: "Tools" }
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Leadership",
      "Technical Communication",
      "Time Management",
      "Critical Thinking"
    ]
  },

  experience: [
    {
      id: 1,
      company: "CodSoft",
      position: "Web Developer Intern",
      duration: "Jul 2025 - Aug 2025",
      location: "Remote",
      description: "Developed responsive web applications and enhanced user experience",
      achievements: [
        "Built multiple responsive web applications using HTML, CSS, and JavaScript",
        "Implemented modern UI/UX design principles for better user engagement",
        "Collaborated with team on various client projects",
        "Gained hands-on experience in full-stack web development"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      id: 2,
      company: "Octanet Services Pvt. Ltd.",
      position: "Java Developer Intern",
      duration: "Apr 2025 - May 2025",
      location: "Remote",
      description: "Developed Java applications and worked on backend solutions",
      achievements: [
        "Developed Java-based applications with focus on OOP principles",
        "Implemented data structures and algorithms for efficient solutions",
        "Debugged and optimized existing code for better performance",
        "Enhanced problem-solving skills through real-world projects"
      ],
      technologies: ["Java", "OOP", "Data Structures", "Algorithms"]
    },
    {
      id: 3,
      company: "CodeAlpha",
      position: "Python Intern",
      duration: "Feb 2025 - Mar 2025",
      location: "Remote",
      description: "Worked on Python projects and data analytics tasks",
      achievements: [
        "Developed Python scripts for data processing and automation",
        "Applied data analytics concepts learned from NPTEL certification",
        "Created efficient solutions using Python libraries",
        "Enhanced programming skills through practical assignments"
      ],
      technologies: ["Python", "Data Analytics", "Automation"]
    },
    {
      id: 4,
      company: "Passion Software Solution",
      position: "PHP Web Development Intern",
      duration: "Jan 2025 - Mar 2025",
      location: "Jalgaon, Maharashtra",
      description: "Developed dynamic web applications using PHP and MySQL",
      achievements: [
        "Built dynamic web applications with PHP and MySQL integration",
        "Implemented CRUD operations and database management",
        "Worked on real client projects with professional development workflow",
        "Gained practical experience in backend web development"
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech) in Computer Engineering",
      institution: "SVKM's Institute of Technology, Dhule",
      duration: "2024 - 2027 (Expected)",
      location: "Dhule, Maharashtra",
      grade: "Pursuing (3rd Year)",
      achievements: [
        "Technical Head at ACM Student Chapter",
        "Led C Programming Refresher Course engaging 100+ students",
        "Active participant in technical events and competitions",
        "Strong focus on Data Structures, Algorithms, and Software Development"
      ]
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic, Dhule",
      duration: "2021 - 2024",
      location: "Dhule, Maharashtra",
      grade: "88.11%",
      achievements: [
        "Secured 88.11% - First Class with Distinction",
        "Strong foundation in programming and web development",
        "Completed multiple technical certifications",
        "Built academic project on Civic Issue Reporting Platform"
      ]
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Kamlabai Girl's Highschool, Dhule",
      duration: "2021",
      location: "Dhule, Maharashtra",
      grade: "93.20%",
      achievements: [
        "Secured 93.20% - Outstanding Academic Performance",
        "Strong foundation in Mathematics and Science",
        "Active participation in school activities"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "LocalBridge - Civic Issue Reporting Platform",
      description: "Responsive web application for reporting and tracking civic issues in local communities",
      longDescription: "A comprehensive civic engagement platform built to promote community participation and real-time issue resolution. Features user authentication, issue submission with categorization, voting system, and comment handling for community discussions.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "XAMPP"],
      features: [
        "User authentication and authorization system",
        "Issue submission with category filtering",
        "Community voting system for issue prioritization",
        "Comment and discussion threads",
        "localStorage integration for vote persistence",
        "Clean and intuitive user interface",
        "Responsive design for all devices",
        "Real-time issue status tracking"
      ],
      github: "https://github.com/NandiniSonar248/LocalBridge",
      live: "",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Interactive and responsive personal portfolio showcasing projects and skills",
      longDescription: "Modern portfolio website built with React and Tailwind CSS featuring smooth animations, dark mode, and comprehensive sections highlighting education, experience, skills, and projects.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      features: [
        "Responsive design with mobile-first approach",
        "Dark/Light theme toggle with persistence",
        "Smooth scroll animations using Framer Motion",
        "Interactive project showcase with modal views",
        "Contact form with validation",
        "Resume download functionality",
        "SEO optimized"
      ],
      github: "https://github.com/NandiniSonar248/portfolio",
      live: "",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Web Development Projects",
      description: "Collection of responsive web applications built during internships",
      longDescription: "Various web development projects completed during internships at CodSoft, showcasing proficiency in HTML, CSS, JavaScript, and modern web development practices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      features: [
        "Landing pages with modern UI/UX",
        "Responsive layouts for all screen sizes",
        "Interactive user interfaces",
        "Form validation and handling",
        "CSS animations and transitions",
        "Cross-browser compatibility"
      ],
      github: "https://github.com/NandiniSonar248",
      live: "",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop"
    }
  ],

  certifications: [
    {
      name: "NPTEL Data Analytics with Python (Elite)",
      issuer: "IIT Roorkee",
      date: "2024",
      description: "Advanced certification in data analytics using Python"
    },
    {
      name: "e-Yantra Basics of Embedded Systems and Robotics",
      issuer: "IIT Bombay",
      date: "2024",
      description: "Comprehensive course on embedded systems and robotics fundamentals"
    },
    {
      name: "ISRO Remote Sensing Technology Course",
      issuer: "Indian Space Research Organisation",
      date: "2022",
      description: "Specialized training in remote sensing technologies"
    },
    {
      name: "AWS Solutions Architecture Job Simulation",
      issuer: "Forage - Amazon Web Services",
      date: "Jun 2025",
      description: "Built scalable architecture using Elastic Beanstalk and created architecture diagrams with pricing"
    },
    {
      name: "Mastercard Cybersecurity Virtual Experience",
      issuer: "Forage - Mastercard",
      date: "Jan 2025",
      description: "Worked as security analyst, identified phishing threats, and proposed internal training"
    },
    {
      name: "Typing Certification",
      issuer: "Typing Authority",
      date: "2022",
      description: "30 WPM typing speed certification"
    }
  ],

  achievements: [
    "Technical Head at ACM Student Chapter, SVKM IOT Dhule - Leading technical initiatives and organizing events",
    "Led C Programming Refresher Course (Aug 2025) engaging 100+ students through coding sessions, quizzes, and hands-on practice",
    "Completed AWS Solutions Architecture Job Simulation (Forage, Jun 2025) - Built scalable architecture using Elastic Beanstalk",
    "Completed Mastercard Cybersecurity Virtual Experience (Forage, Jan 2025) - Identified phishing threats as security analyst",
    "Participated in AICAT 2025 - Naukri Campus Career Aptitude Test",
    "Participated in Technocave 2025 - AVISHKAR Idea Competition: Quantum-Resistant Cybersecurity",
    "Actively participated in DSA Olympiad, Robotics Workshop, and Technofest 2025 - Tech Squid Game",
    "Successfully completed 4 technical internships in Web Development, PHP, Python, and Java",
    "Built LocalBridge - Civic Issue Reporting Platform as academic project",
    "Achieved 88.11% in Diploma in Computer Engineering with First Class Distinction",
    "Secured 93.20% in SSC with outstanding academic performance"
  ]
};
