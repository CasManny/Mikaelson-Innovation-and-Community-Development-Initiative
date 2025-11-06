export const footerLinks = [
  {
    section: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Community", href: "/community" },
      { label: "Labs", href: "/labs" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    section: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    section: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
    ],
  },
];
export interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
  department?: FilterType;
}

// Filter options
export const FILTERS = {
  ALL: "All",
  TECH: "Tech team",
  OPERATIONS: "Operations",
  MENTORS: "Mentors",
  ADVISORS: "Advisors & Patrons",
  TRUSTEES: "Board of Trustees",
} as const;

export type FilterType = keyof typeof FILTERS;

// Team data
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Samuel Addai",
    department: "TRUSTEES",
    role: "Chairman of the Board",
    img: "/assets/images/dummy-user.png",
    bio: "Distinguished leader with 25+ years experience in governance and strategic oversight. Chairs the board with expertise in organizational development and fiduciary responsibility.",
  },
  {
    name: "Bashir Imam Abdulwahab",
    role: "Secretary of the Board",
    department: "TRUSTEES",

    img: "/assets/images/dummy-user.png",

    bio: "Dedicated board secretary with expertise in governance documentation and administrative oversight. Ensures proper record-keeping and compliance with organizational policies and procedures.",
  },
  {
    name: "Prof. Elizabeth Okonkwo",
    department: "TRUSTEES",

    role: "Board Trustee",
    img: "/assets/images/dummy-user.png",

    bio: "Academic leader and governance expert with extensive experience in nonprofit board management. Provides oversight on academic partnerships and research initiatives.",
  },
  {
    name: "Chief Adebayo Olumide",
    role: "Board Trustee",
    department: "TRUSTEES",

    img: "/assets/images/dummy-user.png",

    bio: "Traditional leader and community elder with deep understanding of African cultural values. Ensures community alignment and cultural preservation in all initiatives.",
  },
  {
    name: "Dr. Fatima Bello",
    department: "TRUSTEES",

    role: "Board Trustee",
    img: "/assets/images/dummy-user.png",

    bio: "Development finance expert with track record in sustainable funding models. Provides strategic oversight on financial sustainability and impact measurement.",
  },
  {
    name: "Ambassador John Asante",
    department: "TRUSTEES",

    role: "Board Trustee",
    img: "/assets/images/dummy-user.png",

    bio: "Former diplomat and international relations expert. Guides global partnerships and policy advocacy initiatives for maximum regional impact.",
  },

  {
    name: "Dr. Kofi Mensah",
    department: "ADVISORS",
    role: "Strategic Advisor",
    img: "/assets/images/dummy-user.png",

    bio: "Former UN Development Programme director with 20+ years experience in African development initiatives. Provides strategic guidance on policy and partnerships.",
  },
  {
    name: "Sarah Williams",
    role: "Technology Advisor",
    department: "ADVISORS",

    img: "/assets/images/dummy-user.png",

    bio: "Tech industry veteran and former Silicon Valley executive. Advises on technology strategy and market expansion across global markets.",
  },
  {
    name: "Prof. Adaora Nnaji",
    department: "ADVISORS",

    role: "Academic Advisor",
    img: "/assets/images/dummy-user.png",

    bio: "Leading researcher in sustainable development and social entrepreneurship. Bridges academic research with practical implementation.",
  },
  {
    name: "James McKenzie",
    department: "ADVISORS",

    role: "Business Advisor",
    img: "/assets/images/dummy-user.png",

    bio: "Serial entrepreneur and business strategist with deep experience in scaling social impact ventures across emerging markets.",
  },
  {
    name: "Dr. Fatou Diallo",
    department: "ADVISORS",

    role: "Regional Advisor",
    img: "/assets/images/dummy-user.png",

    bio: "Regional development expert with extensive knowledge of West African markets and policy landscape. Guides expansion strategies.",
  },
  {
    name: "Robert Thompson",
    role: "Investment Advisor",
    department: "ADVISORS",

    img: "/assets/images/dummy-user.png",

    bio: "Impact investment specialist with track record in sustainable finance. Advises on funding strategies and investor relations.",
  },
  {
    name: "Dr. Nalaka Silva",
    role: "Research Advisor",
    department: "ADVISORS",

    img: "/assets/images/dummy-user.png",

    bio: "Academic researcher in sustainable technology and social innovation. Provides evidence-based insights for program development.",
  },
  {
    name: "Elena Rodriguez",
    department: "ADVISORS",

    role: "Partnership Advisor",
    img: "/assets/images/dummy-user.png",

    bio: "Partnership development expert with global NGO experience. Facilitates strategic alliances and collaborative initiatives.",
  },
  {
    name: "Dr. Kwame Nkrumah",
    department: "ADVISORS",

    role: "Policy Advisor",
    img: "/assets/images/dummy-user.png",

    bio: "Policy expert and former government official. Provides guidance on regulatory frameworks and government relations.",
  },
  {
    name: "Amina Al-Zahra",
    role: "Cultural Advisor",
    department: "ADVISORS",

    img: "/assets/images/dummy-user.png",

    bio: "Cultural liaison specialist ensuring community-centered approach. Bridges cultural understanding in program implementation.",
  },
  {
    name: "Dr. Amina Hassan",
    department: "MENTORS",
    role: "Leadership Mentor",
    img: "/assets/images/dummy-user.png",

    bio: "Executive leadership coach with 15+ years experience mentoring entrepreneurs and business leaders across Africa. Specializes in strategic thinking and organizational development.",
  },
  {
    name: "Marcus Johnson",
    department: "MENTORS",

    role: "Tech Industry Mentor",
    img: "/assets/images/dummy-user.png",

    bio: "Former CTO of major tech companies with expertise in scaling technology teams. Mentors engineers and technical leaders in career advancement.",
  },
  {
    name: "Priya Sharma",
    department: "MENTORS",

    role: "Product Development Mentor",
    img: "/assets/images/dummy-user.png",

    bio: "Product management expert with deep experience in user-centered design and agile methodologies. Guides product teams in building impactful solutions.",
  },
  {
    name: "Ibrahim Al-Mahmoud",
    department: "MENTORS",

    role: "Business Strategy Mentor",
    img: "/assets/images/dummy-user.png",

    bio: "Strategic business consultant with track record in emerging markets. Mentors entrepreneurs in business model development and market entry strategies.",
  },
  {
    name: "Catherine Osei",
    department: "MENTORS",

    role: "Finance & Operations Mentor",
    img: "/assets/images/dummy-user.png",

    bio: "Financial operations specialist with nonprofit and social enterprise experience. Provides guidance on sustainable funding and operational efficiency.",
  },
  {
    name: "Dr. James Mwangi",
    department: "MENTORS",

    role: "Research & Innovation Mentor",
    img: "/assets/images/dummy-user.png",

    bio: "Research director with expertise in innovation management and technology transfer. Mentors teams in research methodology and commercialization.",
  },
  {
    name: "Sofia Rodriguez",
    department: "MENTORS",

    role: "Marketing & Communications Mentor",
    img: "/assets/images/dummy-user.png",

    bio: "Brand strategy expert with global campaign experience. Mentors marketing teams in digital strategy and brand development for social impact.",
  },
  {
    name: "Dr. Kwaku Asante",
    department: "MENTORS",

    role: "Academic & Career Mentor",
    img: "/assets/images/dummy-user.png",

    bio: "University professor and career counselor specializing in professional development. Guides students and young professionals in career planning.",
  },
  {
    name: "Oluwasegun M. Olukayode",
    department: "OPERATIONS",
    role: "Founder & Executive Director",
    img: "/assets/images/20240726_164330.jpeg",
    bio: "Visionary leader with over 10 years of experience in sustainable technology and community development. Passionate about empowering African communities through innovative solutions.",
  },
  {
    name: "Amara Okafor",
    department: "OPERATIONS",

    role: "Product Manager",
    img: "/assets/images/dummy-user.png",

    bio: "Strategic product leader with expertise in developing user-centered solutions for emerging markets. Drives innovation at the intersection of technology and social impact.",
  },
  {
    name: "Irene Ezechi",
    role: "Program Management Lead",
    department: "OPERATIONS",

    img: "/assets/images/Irene-Ezechi.jpg",
    bio: "Program management lead coordinating planning, execution, and impact across initiatives.",
  },
  {
    name: "Zara Mwangi",
    department: "OPERATIONS",

    role: "Community Manager",
    img: "/assets/images/dummy-user.png",

    bio: "Community engagement specialist with a passion for fostering meaningful connections and driving grassroots initiatives across Africa.",
  },
  {
    name: "Michael Johnson",
    role: "Operations Coordinator",
    department: "OPERATIONS",

    img: "/assets/images/dummy-user.png",

    bio: "Operations expert with extensive experience in project management and organizational efficiency. Ensures smooth execution of all initiatives.",
  },
  {
    name: "Aisha Patel",
    department: "OPERATIONS",

    role: "Finance Manager",
    img: "/assets/images/dummy-user.png",

    bio: "Financial strategist with expertise in sustainable funding models and impact measurement. Manages resources to maximize community benefit.",
  },
  {
    name: "Alex Kim",
    department: "OPERATIONS",

    role: "UX Designer",
    img: "/assets/images/dummy-user.png",

    bio: "Creative designer focused on creating intuitive and accessible user experiences that bridge cultural and technological gaps.",
  },
  {
    name: "Maya Singh",
    department: "OPERATIONS",

    role: "Marketing Coordinator",
    img: "/assets/images/dummy-user.png",

    bio: "Digital marketing specialist with expertise in social media strategy and content creation. Amplifies our mission through compelling storytelling.",
  },
  {
    name: "David Chen",
    department: "OPERATIONS",

    role: "Data Analyst",
    img: "/assets/images/dummy-user.png",

    bio: "Data science expert focused on impact measurement and analytics. Transforms complex data into actionable insights for decision-making.",
  },
  {
    name: "Eniola Glory",
    department: "OPERATIONS",

    role: "HR Manager",
    img: "/assets/images/Eniola-Glory.jpeg",
    bio: "My name is Eniola-Glory, an Hr manager and vocal artist, an introvert who loves growing, learning and being impactful.",
  },
  {
    name: "Ireti Ogunmola",
    department: "OPERATIONS",
    role: "Product Manager",
    img: "/assets/images/Ireti.jpeg",
    bio: "I'm a Product Manager who loves understanding user needs and turning them into products that feel effortless to use. I collaborate with designers and engineers to plan, build, and launch features that solve real problems and create value. I enjoy working with data, learning continuously, and shipping meaningful improvements one iteration at a time.",
  },
  {
    name: "Inioluwa Afolabi",
    department: "OPERATIONS",
    role: "Project Manager",
    img: "/assets/images/Afolabi-Inioluwa.jpg",
    bio: "My name is Inioluwa Afolabi. I'm a project manager passionate about learning, growth, leadership and making positive impact that leads to betterment of livelihood. In addition, I'm an advocate for sustainability and digital transformation.",
  },
  {
    name: "Grace Okoye",
    role: "HR Coordinator",
    department: "OPERATIONS",

    img: "/assets/images/dummy-user.png",

    bio: "Human resources professional with passion for building inclusive workplace culture. Ensures team development and organizational growth.",
  },
  {
    name: "Ahmed Hassan",
    department: "OPERATIONS",

    role: "Legal Advisor",
    img: "/assets/images/dummy-user.png",

    bio: "Legal expert specializing in nonprofit law and compliance. Ensures all operations meet regulatory requirements and ethical standards.",
  },
  {
    name: "Ayomide Oladele",
    department: "TECH",
    role: "Product Designer",
    img: "/assets/images/dummy-user.png",

    bio: "Product designer focused on user-centered design, prototyping, and creating polished, accessible interfaces for web and mobile.",
  },
  {
    name: "Motolani Faloyo",
    department: "TECH",
    role: "Frontend Developer",
    img: "/assets/images/Faloyo-Deborah.jpg",
    bio: "A Frontend Developer passionate about building clean, responsive, and user-friendly web applications. My journey began with a love for design and problem-solving, and I’ve grown into creating modern interfaces using frameworks like Vue.js and other web technologies. I enjoy turning ideas into interactive digital experiences and continuously improving my craft.",
  },
  {
    name: "Fatima Al-Rashid",
    department: "TECH",
    role: "Mobile Developer",
    img: "/assets/images/dummy-user.png",

    bio: "Mobile app specialist with expertise in React Native and Flutter. Focused on creating seamless mobile experiences for diverse user bases.",
  },
  {
    name: "Ariyo Aresa",
    department: "TECH",
    role: "Frontend Developer",
    img: "/assets/images/Ariyo-Aresa.jpg",
    bio: "I'm Ariyo Olatunji-Aresa Aresa, a Frontend engineer with about 4 years of experience who has worked on several projects across several industries. I'm also a 400 level engineering student",
  },
  {
    name: "Samuel Osei",
    department: "TECH",
    role: "Backend Engineer",
    img: "/assets/images/dummy-user.png",

    bio: "Backend systems expert with strong knowledge in cloud infrastructure and database optimization. Ensures robust and scalable platform performance.",
  },
  {
    name: "Lisa Chen",
    department: "TECH",
    role: "DevOps Engineer",
    img: "/assets/images/dummy-user.png",

    bio: "DevOps specialist focused on automation, CI/CD pipelines, and cloud infrastructure. Streamlines development processes for maximum efficiency.",
  },
  {
    name: "Mercy kalu",
    department: "TECH",
    role: "Product Designer",
    img: "/assets/images/Mercy-Kalu.jpg",
    bio: "I’m a product designer who creates simple, useful, and meaningful digital products",
  },
  {
    name: "Neh Glory",
    department: "TECH",
    role: "IT Specialist",
    img: "/assets/images/Neh-Glory.jpeg",
    bio: "I am a certified IT specialist and a tier1 SOC analyst. A tech enthusiast passionate about securing systems and empowering others through training programs.",
  },
  {
    name: "Chukwu Ajah Sebastian",
    department: "TECH",
    role: "Frontend Developer",
    img: "/assets/images/chukwu-ajah.jpg",
    bio: "I'm chukwu Ajah sabastine A front end developer with 2 years of experience. I love building products that solves real problems and participates actively when in a team to make sure the teams vision and mission are accomplished",
  },
  {
    name: "Boluwatife Mercy",
    department: "TECH",
    role: "Tech Savy",
    img: "/assets/images/Boluwatife-Mercy.jpeg",
    bio: "Boluwatife Adeleke is a purpose-driven social impact leader working at the intersection of education, youth empowerment, and operational systems building.",
  },
  {
    name: "Juliana Sarya",
    department: "TECH",
    role: "IT Professional",
    img: "/assets/images/Juliana-Sarya.jpg",
    bio: "I am Juliana Sarya, an IT professional, digital activist, and social innovator passionate about using technology to solve real community challenges. Over the past years, I have led initiatives that empower young people, women, and persons with disabilities through digital literacy, IoT, robotics, and human-centered design. I led IOTeach, an EdTech project that equips students with future-ready skills and encourages them to create solutions for issues such as education gaps, inclusion, and community development",
  },
  {
    name: "Hammed Adedamola",
    department: "OPERATIONS",
    role: "Product Manager",
    img: "/assets/images/Hammed-Adedamola.JPG",
    bio: "I am a Product Manager who is people-driven and passionate about exploring new ideas, connecting with others, and expanding my knowledge. Outside of work, I enjoy watching movies, learning new things, and meeting new people.",
  },
];
