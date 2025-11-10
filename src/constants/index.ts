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
  country: string;
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
    name: "Juliana Sarya",
    country: "TZ",
    department: "OPERATIONS",
    role: "Project Manager Associate",
    img: "/assets/images/Juliana-Sarya.jpg",
    bio: "I am Juliana Sarya, an IT professional, digital activist, and social innovator passionate about using technology to solve real community challenges. Over the past years, I have led initiatives that empower young people, women, and persons with disabilities through digital literacy, IoT, robotics, and human-centered design. I led IOTeach, an EdTech project that equips students with future-ready skills and encourages them to create solutions for issues such as education gaps, inclusion, and community development",
  },
  {
    role: "Secretary, Board of Trustees",
    department: "TRUSTEES",
    country: "NG",
    name: "Imam Bashir",
    img: "/assets/images/Imam-Bashir.JPG",
    bio: "Imam Bashir serves as the Secretary of the Trustees, supporting the organization with clear communication, record stewardship, and dependable coordination. He is committed to using technology and organized systems to strengthen community service and improve how people connect with support resources. His work reflects a dedication to uplift humanity, encourage understanding, and promote meaningful social impact.",
  },
  {
    name: "Khadijah Abdul Juma",
    department: "ADVISORS",
    country: "KE",
    role: "Advisor on Partnership and Growth Network",
    img: "/assets/images/Khadija-Abdul.png",
    bio: "Khadija Abdul Juma is a results-driven technology and media leader with over 12 years of experience advancing digital transformation and economic opportunities across Africa. She is passionate about improving lives and livelihoods through innovation, community empowerment, and strategic partnerships.",
  },
  {
    name: "Oluwasegun M. Olukayode",
    department: "OPERATIONS",
    country: "NG",
    role: "Founder & Executive Director",
    img: "/assets/images/20240726_164330.jpeg",
    bio: "Visionary leader with over 10 years of experience in sustainable technology and community development. Passionate about empowering African communities through innovative solutions.",
  },

  {
    name: "Irene Ezechi",
    role: "Program Management Lead",
    department: "OPERATIONS",
    country: "NG",
    img: "/assets/images/Irene-Ezechi.jpg",
    bio: "Program management lead coordinating planning, execution, and impact across initiatives.",
  },
  {
    name: " Okikiolu Eniola-Glory",
    department: "OPERATIONS",
    country: "NG",
    role: "Community Operations Lead",
    img: "/assets/images/eniola.jpeg",
    bio: "My name is Eniola-Glory, an Hr manager and vocal artist, an introvert who loves growing, learning and being impactful.",
  },
  {
    name: "Iretioluwa Ogunmola",
    department: "OPERATIONS",
    role: "Product Management Lead",
    country: "NG",
    img: "/assets/images/Ireti.jpeg",
    bio: "I'm a Product Manager who loves understanding user needs and turning them into products that feel effortless to use. I collaborate with designers and engineers to plan, build, and launch features that solve real problems and create value. I enjoy working with data, learning continuously, and shipping meaningful improvements one iteration at a time.",
  },
  {
    name: "Hammed Adedamola",
    department: "OPERATIONS",
    country: "NG",
    role: "Product Manager",
    img: "/assets/images/Hammed.JPG",
    bio: "I am a Product Manager who is people-driven and passionate about exploring new ideas, connecting with others, and expanding my knowledge. Outside of work, I enjoy watching movies, learning new things, and meeting new people.",
  },
  {
    name: "Inioluwa Afolabi",
    department: "OPERATIONS",
    country: "NG",
    role: "Project Manager – 30 Days Reset Challenges",
    img: "/assets/images/afolabi.jpeg",
    bio: "My name is Inioluwa Afolabi. I'm a project manager passionate about learning, growth, leadership and making positive impact that leads to betterment of livelihood. In addition, I'm an advocate for sustainability and digital transformation.",
  },

  {
    name: "Ariyo Aresa",
    department: "TECH",
    country: "NG",
    role: "Frontend Developer",
    img: "/assets/images/Ariyo-Aresa.jpg",
    bio: "I'm Ariyo Olatunji-Aresa Aresa, a Frontend engineer with about 4 years of experience who has worked on several projects across several industries. I'm also an engineering student",
  },
  {
    name: "Mercy kalu",
    department: "TECH",
    country: "NG",
    role: "Product Designer",
    img: "/assets/images/Mercy-Kalu.jpg",
    bio: "I’m a product designer who creates simple, useful, and meaningful digital products",
  },
  {
    name: "Neh Glory",
    department: "OPERATIONS",
    country: "NG",
    role: "Project Manager – Digital Literacy (Cybersecurity)",
    img: "/assets/images/Neh-Glory.jpeg",
    bio: "I am a certified IT specialist and a tier1 SOC analyst. A tech enthusiast passionate about securing systems and empowering others through training programs.",
  },
  {
    name: "Chukwu Ajah Sebastian",
    department: "TECH",
    country: "NG",
    role: "Frontend Developer",
    img: "/assets/images/chukwu-ajah.jpg",
    bio: "I'm chukwu Ajah sabastine A front end developer with 2 years of experience. I love building products that solves real problems and participates actively when in a team to make sure the teams vision and mission are accomplished",
  },
  {
    name: "Boluwatife Adeleke",
    department: "TECH",
    role: "Product Marketing Manager",
    country: "NG",
    img: "/assets/images/Boluwatife-Mercy.jpeg",
    bio: "Boluwatife Adeleke is a purpose-driven social impact leader working at the intersection of education, youth empowerment, and operational systems building.",
  },
];
