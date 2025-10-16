import { SiteSettings, Program, Staff, Testimonial, GalleryImage, NewsPost } from '@/types';

export const siteSettings: SiteSettings = {
  title: "St. Augustine's Academy",
  tagline: "Excellence in Learning. Leadership in Life.",
  logo: "/logo.svg",
  contact: {
    address: "12 Oak Avenue, Education District, New Delhi, 110001",
    phone: "+91-11-23456789",
    email: "admissions@staugustine.edu"
  },
  social: {
    facebook: "https://facebook.com/staugustinesacademy",
    twitter: "https://twitter.com/staugustines",
    instagram: "https://instagram.com/staugustinesacademy",
    linkedin: "https://linkedin.com/school/staugustines",
    youtube: "https://youtube.com/@staugustinesacademy"
  }
};

export const programs: Program[] = [
  {
    id: "p1",
    title: "IB Diploma Programme",
    shortDescription: "International Baccalaureate with holistic focus on critical thinking and global citizenship.",
    longDescription: "Our IB Diploma Programme prepares students for university success through rigorous academics, creativity, action, and service. Students develop into confident, caring, and internationally-minded individuals.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop",
    slug: "ib-diploma",
    category: "Academic"
  },
  {
    id: "p2",
    title: "STEM Scholars",
    shortDescription: "Advanced laboratories, robotics, and cutting-edge research projects for future innovators.",
    longDescription: "Our STEM Scholars program combines theoretical knowledge with hands-on experience in state-of-the-art laboratories. Students engage in robotics, coding, and research projects that prepare them for careers in science and technology.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    slug: "stem-scholars",
    category: "Academic"
  },
  {
    id: "p3",
    title: "Performing Arts Conservatory",
    shortDescription: "Music, theatre, and visual arts excellence with professional-grade facilities.",
    longDescription: "Our Performing Arts Conservatory nurtures creative expression through music, drama, and visual arts. Students perform in our professional theater and showcase their talents in annual productions.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    slug: "performing-arts",
    category: "Arts"
  }
];

export const staff: Staff[] = [
  {
    id: "s1",
    name: "Dr. Asha Verma",
    role: "Principal",
    bio: "Dr. Verma brings over 20 years of educational leadership experience, with a PhD in Educational Administration from Delhi University. She is passionate about holistic student development and innovative teaching methodologies.",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop",
    email: "principal@staugustine.edu",
    highlight: true
  },
  {
    id: "s2",
    name: "Mr. Raj Kapoor",
    role: "Head of Science Department",
    bio: "Mr. Kapoor holds a PhD in Chemistry from IIT Delhi and has 15 years of teaching experience. He leads our STEM initiatives and has published numerous research papers in international journals.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
    email: "raj.kapoor@staugustine.edu",
    highlight: true
  },
  {
    id: "s3",
    name: "Ms. Leena Shah",
    role: "Head of Arts Department",
    bio: "Ms. Shah has an MFA in Fine Arts and 15 years of experience in arts education. She has exhibited her work internationally and leads our award-winning performing arts program.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
    email: "leena.shah@staugustine.edu",
    highlight: true
  },
  {
    id: "s4",
    name: "Dr. Michael Thompson",
    role: "Head of Languages",
    bio: "Dr. Thompson specializes in multilingual education with expertise in English, French, and Spanish. He has developed innovative language learning programs adopted by schools nationwide.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    email: "michael.thompson@staugustine.edu"
  },
  {
    id: "s5",
    name: "Ms. Priya Sharma",
    role: "Head of Mathematics",
    bio: "Ms. Sharma is a gold medalist in Mathematics from St. Stephen's College and has been teaching advanced mathematics for 12 years. She mentors students for international math olympiads.",
    photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&h=600&fit=crop",
    email: "priya.sharma@staugustine.edu"
  },
  {
    id: "s6",
    name: "Mr. David Wilson",
    role: "Sports Director",
    bio: "Mr. Wilson is a former national-level athlete with certifications in multiple sports. He has led our teams to numerous inter-school championships and promotes fitness and sportsmanship.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop",
    email: "david.wilson@staugustine.edu"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Malhotra",
    role: "Alumni - Class of 2018, Now at Harvard University",
    quote: "St. Augustine's didn't just prepare me academically; it shaped my character and gave me the confidence to pursue my dreams. The holistic education approach here is truly exceptional.",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop"
  },
  {
    id: "t2",
    name: "Mr. Rajesh Singh",
    role: "Parent of Arjun Singh (Grade 10)",
    quote: "The faculty's dedication and the school's focus on individual attention has helped my son excel not just in academics but also discover his passion for robotics. Outstanding institution!",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    id: "t3",
    name: "Sarah Johnson",
    role: "Alumni - Class of 2020, Now at Oxford University",
    quote: "The IB program at St. Augustine's opened doors I never imagined possible. The teachers here don't just teach; they mentor and inspire. Forever grateful for this foundation.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    caption: "Aerial view of our beautiful campus with modern facilities",
    category: "Campus"
  },
  {
    id: "g2",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    caption: "State-of-the-art library with over 50,000 books and digital resources",
    category: "Facilities"
  },
  {
    id: "g3",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    caption: "Olympic-standard sports complex and swimming pool",
    category: "Sports"
  },
  {
    id: "g4",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    caption: "Interactive smart classrooms with modern technology",
    category: "Classroom"
  },
  {
    id: "g5",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop",
    caption: "Students engaged in collaborative learning",
    category: "Classroom"
  },
  {
    id: "g6",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    caption: "Advanced science laboratories for hands-on experiments",
    category: "Facilities"
  },
  {
    id: "g7",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    caption: "Annual cultural fest showcasing student talents",
    category: "Events"
  },
  {
    id: "g8",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
    caption: "Students participating in inter-school sports competition",
    category: "Sports"
  },
  {
    id: "g9",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    caption: "Graduation ceremony celebrating student achievements",
    category: "Events"
  }
];

export const newsArticles: NewsPost[] = [
  {
    id: "n1",
    title: "St. Augustine's Students Win National Robotics Championship",
    slug: "national-robotics-championship-win",
    excerpt: "Our STEM Scholars team secured first place at the National Robotics Championship, competing against 200+ schools nationwide.",
    body: "In a remarkable display of innovation and teamwork, the St. Augustine's STEM Scholars team has won the prestigious National Robotics Championship. The team, comprising students from grades 9-12, spent months preparing their autonomous robot that could navigate complex challenges and complete tasks with precision. This victory marks the third consecutive year our school has placed in the top three at this national competition.",
    author: staff[1], // Mr. Raj Kapoor
    publishedAt: "2025-02-10",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    tags: ["STEM", "Robotics", "Achievement", "Competition"]
  },
  {
    id: "n2",
    title: "New Science Wing Opens with State-of-the-Art Facilities",
    slug: "new-science-wing-opening",
    excerpt: "The newly constructed science wing features advanced laboratories, a planetarium, and collaborative research spaces for enhanced learning.",
    body: "St. Augustine's Academy proudly inaugurated its new science wing, a testament to our commitment to providing world-class educational facilities. The three-story building houses 12 specialized laboratories, including biotechnology, nanotechnology, and environmental science labs. The centerpiece is our new digital planetarium, offering immersive astronomy experiences. These facilities will support our expanding STEM programs and research initiatives.",
    author: staff[0], // Dr. Asha Verma
    publishedAt: "2024-12-05",
    coverImage: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop",
    tags: ["Infrastructure", "Science", "Facilities", "Innovation"]
  },
  {
    id: "n3",
    title: "International Exchange Program Launches with Partner Schools",
    slug: "international-exchange-program-launch",
    excerpt: "Students can now participate in semester-long exchanges with prestigious schools in UK, Canada, and Australia.",
    body: "We are excited to announce the launch of our International Exchange Program, partnering with renowned schools across three continents. This program offers our students the opportunity to experience different educational systems, cultures, and perspectives. The first cohort of 15 students will travel to our partner schools in September 2025, while we welcome international students to our campus. This initiative aligns with our mission to develop globally-minded citizens.",
    author: staff[3], // Dr. Michael Thompson
    publishedAt: "2024-11-20",
    coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=400&fit=crop",
    tags: ["International", "Exchange", "Global", "Culture"]
  }
];
