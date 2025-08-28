"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Quiz {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  questionCount: number;
  estimatedTime: string;
  color: string;
}

interface QuizCardProps {
  quiz: Quiz;
}

export default function QuizCard({ quiz }: QuizCardProps) {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push(`/my-quizzes/${quiz.id}`);
  };

  const difficultyColors: Record<Quiz["difficulty"], string> = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Advanced: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group"
    >
      <Card className="h-full flex flex-col overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300 bg-card">
        <CardHeader className="pb-3">
          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${quiz.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
          >
            <span className="text-2xl">{quiz.icon}</span>
          </div>

          {/* Title & description */}
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {quiz.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {quiz.description}
            </p>
          </div>
        </CardHeader>

        <CardContent className="flex-1 pb-3">
          {/* Difficulty Badge */}
          <div className="mb-3">
            <Badge
              variant="secondary"
              className={`text-xs px-2 py-1 ${difficultyColors[quiz.difficulty]}`}
            >
              {quiz.difficulty}
            </Badge>
          </div>

          {/* Meta info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4" />
              <span>{quiz.questionCount} Questions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{quiz.estimatedTime}</span>
            </div>
          </div>
        </CardContent>

        {/* Start button */}
        <CardFooter className="pt-0">
          <Button
            onClick={handleStartQuiz}
            className="w-full group-hover:bg-primary/90 transition-colors"
            size="sm"
          >
            <Trophy className="w-4 h-4 mr-2" />
            Start Quiz
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
