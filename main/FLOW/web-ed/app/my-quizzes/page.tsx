import QuizHero from "@/components/QuizHero";
import QuizCard from "@/components/QuizCard";

// Quiz data with topics you requested
const quizzes = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Test your knowledge of HTML, CSS, JavaScript, and modern frameworks",
    icon: "💻",
    difficulty: "Intermediate",
    questionCount: 20,
    estimatedTime: "5 mins",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Architecture patterns, scalability, and distributed systems",
    icon: "🏗️",
    difficulty: "Advanced",
    questionCount: 20,
    estimatedTime: "5 mins",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Statistics, data analysis, and visualization techniques",
    icon: "📊",
    difficulty: "Intermediate",
    questionCount: 20,
    estimatedTime: "5 mins",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    description: "Arrays, trees, graphs, sorting, and algorithmic thinking",
    icon: "🔍",
    difficulty: "Advanced",
    questionCount: 20,
    estimatedTime: "5 mins",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "networking",
    title: "Networking",
    description: "TCP/IP, protocols, network security, and infrastructure",
    icon: "🌐",
    difficulty: "Intermediate",
    questionCount: 20,
    estimatedTime: "4 mins",
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: "uml",
    title: "Unified Modeling Language",
    description: "UML diagrams, modeling techniques, and software design",
    icon: "📐",
    difficulty: "Intermediate",
    questionCount: 20,
    estimatedTime: "4 mins",
    color: "from-teal-500 to-cyan-500"
  },
  {
    id: "agile-development",
    title: "Agile Software Development",
    description: "Scrum, Kanban, agile principles, and project management",
    icon: "🚀",
    difficulty: "Beginner",
    questionCount: 20,
    estimatedTime: "3 mins",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "ML algorithms, neural networks, and AI fundamentals",
    icon: "🤖",
    difficulty: "Advanced",
    questionCount: 20,
    estimatedTime: "5 mins",
    color: "from-violet-500 to-purple-500"
  }
];

export default async function Home() {
  return (
    <div className="min-h-screen bg-background">
      <QuizHero />
      
      {/* Quizzes Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
          <span className="text-sm font-medium text-muted-foreground">
            Featured Quizzes
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
        </div>
        
        {/* Quiz Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </div>
  );
}