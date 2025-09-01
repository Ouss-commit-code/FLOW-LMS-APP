// data/certificationExams.ts
export interface CertificationExam {
  id: string;
  title: string;
  provider: string;
  description: string;
  questions: number;
  timeLimit: number; // in minutes
  passingScore: number;
  marketInfo: string;
  nextExamDate: string;
  worth: string;
  icon: string;
  color: string;
}

export const certificationExams: CertificationExam[] = [
  {
    id: "ccna",
    title: "CCNA",
    provider: "Cisco",
    description: "Cisco Certified Network Associate - Networking fundamentals",
    questions: 25,
    timeLimit: 10,
    passingScore: 75,
    marketInfo: "CCNA is one of the most recognized networking certifications worldwide",
    nextExamDate: "2026-01-15",
    worth: "$70,000 - $100,000 average salary",
    icon: "🌐",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "aws",
    title: "AWS Certified",
    provider: "Amazon",
    description: "Amazon Web Services Cloud Practitioner",
    questions: 25,
    timeLimit: 10,
    passingScore: 75,
    marketInfo: "AWS certifications are highly valued in cloud computing roles",
    nextExamDate: "2026-01-20",
    worth: "$90,000 - $130,000 average salary",
    icon: "☁️",
    color: "from-orange-500 to-yellow-500"
  },
  {
    id: "agile",
    title: "Agile Certified",
    provider: "Scrum Alliance",
    description: "Agile methodologies and Scrum framework",
    questions: 25,
    timeLimit: 10,
    passingScore: 75,
    marketInfo: "Agile certifications are essential for project management roles",
    nextExamDate: "2026-01-18",
    worth: "$85,000 - $120,000 average salary",
    icon: "🔄",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "java",
    title: "Java Certification",
    provider: "Oracle",
    description: "Java SE/EE Developer Certification",
    questions: 25,
    timeLimit: 10,
    passingScore: 75,
    marketInfo: "Java remains one of the most in-demand programming languages",
    nextExamDate: "2026-01-22",
    worth: "$80,000 - $120,000 average salary",
    icon: "☕",
    color: "from-red-500 to-orange-500"
  },
  {
    id: "pcep",
    title: "PCEP",
    provider: "Python Institute",
    description: "Python Certified Entry-Level Programmer",
    questions: 25,
    timeLimit: 10,
    passingScore: 75,
    marketInfo: "Python certifications are valuable for data science and development roles",
    nextExamDate: "2026-01-25",
    worth: "$75,000 - $110,000 average salary",
    icon: "🐍",
    color: "from-yellow-500 to-blue-500"
  },
  {
    id: "ceh",
    title: "CEH",
    provider: "EC-Council",
    description: "Certified Ethical Hacker",
    questions: 25,
    timeLimit: 10,
    passingScore: 75,
    marketInfo: "Cybersecurity certifications are in high demand",
    nextExamDate: "2026-01-28",
    worth: "$90,000 - $140,000 average salary",
    icon: "🔒",
    color: "from-gray-500 to-black"
  },
  {
    id: "comptia-security",
    title: "CompTIA Security+",
    provider: "CompTIA",
    description: "Foundation-level cybersecurity certification",
    questions: 25,
    timeLimit: 10,
    passingScore: 75,
    marketInfo: "Widely recognized baseline security certification",
    nextExamDate: "2026-02-01",
    worth: "$70,000 - $100,000 average salary",
    icon: "🛡️",
    color: "from-blue-500 to-purple-500"
  },
  {
    id: "uml",
    title: "UML Certified",
    provider: "OMG",
    description: "Object Management Group UML Certification",
    questions: 25,
    timeLimit: 10,
    passingScore: 75,
    marketInfo: "Important for software architects and designers",
    nextExamDate: "2026-02-05",
    worth: "$85,000 - $125,000 average salary",
    icon: "📊",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "tosa-js",
    title: "TOSA JavaScript",
    provider: "TOSA",
    description: "JavaScript certification for web developers",
    questions: 25,
    timeLimit: 10,
    passingScore: 75,
    marketInfo: "JavaScript remains the backbone of web development",
    nextExamDate: "2026-02-08",
    worth: "$75,000 - $115,000 average salary",
    icon: "📜",
    color: "from-yellow-500 to-red-500"
  }
];