// app/my-stats/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

// Define types for our quiz data and stats
interface Quiz {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: string;
  questionCount: number;
  estimatedTime: string;
  color: string;
}

interface QuizAttempt {
  id: string;
  quizId: string;
  score: number;
  timestamp: string;
  status: "Completed" | "Failed";
  timeSpent: number; // in seconds
}

interface QuizStats {
  id: string;
  title: string;
  attempts: number;
  completed: number;
  averageScore: number;
  lastAttempt: string | null;
}

// Import shadcn/ui components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ArrowLeft, BarChart3, Trophy, Calendar, Target, RotateCcw } from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle"; // Adjust path as needed

// Your quiz data
const quizzes: Quiz[] = [
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

// Colors for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#ff7c7c', '#8a2be2'];

// Storage key for attempts
const ATTEMPTS_STORAGE_KEY = "quiz-attempts";

export default function MyStats() {
  const router = useRouter();
  const [quizStats, setQuizStats] = useState<QuizStats[]>([]);
  const [recentActivity, setRecentActivity] = useState<QuizAttempt[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load attempts from localStorage
  const loadAttempts = (): QuizAttempt[] => {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem(ATTEMPTS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error loading attempts from localStorage:", error);
      return [];
    }
  };

  // Save attempts to localStorage
  const saveAttempts = (attempts: QuizAttempt[]) => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(attempts));
    } catch (error) {
      console.error("Error saving attempts to localStorage:", error);
    }
  };

  // Reset all attempts
  const resetAllAttempts = () => {
    if (typeof window === 'undefined') return;
    
    localStorage.removeItem(ATTEMPTS_STORAGE_KEY);
    loadData(); // Reload to show empty state
  };

  // Load data from storage
  const loadData = () => {
    setIsLoading(true);
    
    const allAttempts = loadAttempts();
    
    // Sort all attempts by timestamp (most recent first)
    const sortedAttempts = [...allAttempts].sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    
    // Get recent activity (last 5 attempts)
    setRecentActivity(sortedAttempts.slice(0, 5));
    
    // Calculate stats for each quiz
    const stats: QuizStats[] = quizzes.map(quiz => {
      const attempts = allAttempts.filter(a => a.quizId === quiz.id);
      const completed = attempts.filter(a => a.status === "Completed").length;
      const totalScore = attempts.reduce((sum, a) => sum + a.score, 0);
      const averageScore = attempts.length > 0 ? Math.round(totalScore / attempts.length) : 0;
      
      return {
        id: quiz.id,
        title: quiz.title,
        attempts: attempts.length,
        completed,
        averageScore,
        lastAttempt: attempts.length > 0 ? attempts[0].timestamp : null
      };
    });
    
    setQuizStats(stats);
    setIsLoading(false);
  };

  // Check for new quiz attempts
  useEffect(() => {
    const checkForNewAttempts = () => {
      // Check if there are any quiz results in localStorage from quiz completion
      const quizResults = localStorage.getItem("quiz-results");
      
      if (quizResults) {
        try {
          const results = JSON.parse(quizResults);
          
          // Create a new attempt from quiz results
          const newAttempt: QuizAttempt = {
            id: `attempt-${Date.now()}`,
            quizId: results.quizId,
            score: results.score,
            timestamp: new Date().toISOString(),
            status: results.score >= 70 ? "Completed" : "Failed",
            timeSpent: results.timeSpent || Math.floor(Math.random() * 120) + 60
          };
          
          // Add to existing attempts
          const currentAttempts = loadAttempts();
          const updatedAttempts = [...currentAttempts, newAttempt];
          saveAttempts(updatedAttempts);
          
          // Clear the quiz results
          localStorage.removeItem("quiz-results");
          
          // Reload data to show updated stats
          loadData();
        } catch (error) {
          console.error("Error processing quiz results:", error);
        }
      }
    };

    // Initial load
    loadData();
    
    // Set up interval to check for new attempts
    const interval = setInterval(checkForNewAttempts, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Calculate overall stats
  const totalAttempts = quizStats.reduce((sum, quiz) => sum + quiz.attempts, 0);
  const totalCompleted = quizStats.reduce((sum, quiz) => sum + quiz.completed, 0);
  const averageScore = quizStats.length > 0 && totalAttempts > 0
    ? Math.round(quizStats.reduce((sum, quiz) => sum + (quiz.averageScore * quiz.attempts), 0) / totalAttempts)
    : 0;

  // Prepare data for charts
  const quizPerformanceData = quizStats.map(quiz => ({
    name: quiz.title.length > 12 ? quiz.title.substring(0, 10) + '...' : quiz.title,
    fullName: quiz.title,
    Attempts: quiz.attempts,
    Completed: quiz.completed,
    "Avg Score": quiz.averageScore
  }));

  // Generate score trend data (last 7 days)
  const generateScoreTrendData = () => {
    const last7Days = [];
    const allAttempts = loadAttempts();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toLocaleDateString("en-US", { month: 'short', day: 'numeric' });
      
      // Filter attempts for this day
      const dayAttempts = allAttempts.filter(attempt => {
        const attemptDate = new Date(attempt.timestamp);
        return attemptDate.toDateString() === date.toDateString();
      });
      
      const avgScore = dayAttempts.length > 0 
        ? Math.round(dayAttempts.reduce((sum, a) => sum + a.score, 0) / dayAttempts.length)
        : 0;
      
      last7Days.push({ date: dateStr, score: avgScore });
    }
    return last7Days;
  };

  const scoreTrendData = generateScoreTrendData();

  const successRateData = [
    { name: 'Completed', value: totalCompleted },
    { name: 'Incomplete', value: totalAttempts - totalCompleted },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" onClick={() => router.push("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
            <div className="flex items-center gap-4">
              <DarkModeToggle />
            </div>
          </div>
          <div className="flex items-center justify-center p-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-lg">Loading your statistics...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        {/* Header with back button and controls */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={() => router.push("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
          
          <h1 className="text-3xl font-bold flex items-center">
            <BarChart3 className="mr-3" /> My Learning Statistics
          </h1>
          
          <div className="flex items-center gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  <RotateCcw className="mr-2 h-4 w-4" /> Reset Stats
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-background bg-cyan-950 border-2">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-xl font-semibold">Reset All Statistics?</AlertDialogTitle>
                  <AlertDialogDescription className="text-muted-foreground">
                    This will permanently delete all your quiz attempts and statistics. 
                    This action cannot be undone. You'll start with a clean slate.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                
                
                <AlertDialogFooter className="sm:justify-between">
                  <AlertDialogCancel className="mt-0  bg-slate-950">Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={resetAllAttempts}
                    className="bg-destructive bg-slate-950 text-destructive-foreground hover:bg-destructive/80"
                  >
                    Reset All
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            
            <DarkModeToggle />
          </div>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                <CardDescription className="text-blue-600 dark:text-blue-400">Total Attempts</CardDescription>
              </div>
              <CardTitle className="text-4xl text-blue-800 dark:text-blue-200">
                {totalAttempts}
              </CardTitle>
            </CardHeader>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                <CardDescription className="text-green-600 dark:text-green-400">Completion Rate</CardDescription>
              </div>
              <CardTitle className="text-4xl text-green-800 dark:text-green-200">
                {totalAttempts > 0 ? Math.round((totalCompleted / totalAttempts) * 100) : 0}%
              </CardTitle>
            </CardHeader>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-purple-600 dark:text-purple-400" />
                <CardDescription className="text-purple-600 dark:text-purple-400">Average Score</CardDescription>
              </div>
              <CardTitle className="text-4xl text-purple-800 dark:text-purple-200">
                {averageScore}%
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Charts Section - Only show if there are attempts */}
        {totalAttempts > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Quiz Performance Chart */}
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5" /> Quiz Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={quizPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                        <YAxis />
                        <Tooltip 
                          formatter={(value, name) => [value, name]}
                          labelFormatter={(value, payload) => {
                            if (payload && payload.length) {
                              return payload[0].payload.fullName;
                            }
                            return value;
                          }}
                        />
                        <Legend />
                        <Bar dataKey="Attempts" fill="#0088FE" />
                        <Bar dataKey="Completed" fill="#00C49F" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Score Trend Chart */}
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" /> Score Trend (Last 7 Days)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={scoreTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Success Rate Pie Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5" /> Completion Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={successRateData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {successRateData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="mb-8">
            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
              <BarChart3 className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Data Yet</h3>
              <p className="text-muted-foreground">
                Complete some quizzes to see your statistics here. Your progress will be tracked automatically.
              </p>
              <Button onClick={() => router.push("/my-quizzes")} className="mt-4">
                Take a Quiz
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Recent Activity */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" /> Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quiz</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.length > 0 ? (
                  recentActivity.map((activity) => {
                    const quiz = quizzes.find(q => q.id === activity.quizId);
                    return (
                      <TableRow key={activity.id}>
                        <TableCell className="font-medium">
                          {quiz ? quiz.title : activity.quizId}
                        </TableCell>
                        <TableCell>{activity.score}%</TableCell>
                        <TableCell>
                          <Badge variant={activity.status === 'Completed' ? 'default' : 'destructive'}>
                            {activity.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {formatDate(activity.timestamp)}
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground py-6">
                      No quiz attempts yet. Start taking quizzes to see your activity here!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quiz Breakdown Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" /> Quiz Performance Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quiz</TableHead>
                  <TableHead>Attempts</TableHead>
                  <TableHead>Completed</TableHead>
                  <TableHead>Average Score</TableHead>
                  <TableHead>Last Attempt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quizStats.map((quiz) => (
                  <TableRow key={quiz.id}>
                    <TableCell className="font-medium">{quiz.title}</TableCell>
                    <TableCell>{quiz.attempts}</TableCell>
                    <TableCell>{quiz.completed}</TableCell>
                    <TableCell>{quiz.averageScore}%</TableCell>
                    <TableCell>
                      {quiz.lastAttempt ? formatDate(quiz.lastAttempt) : 'Never attempted'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}