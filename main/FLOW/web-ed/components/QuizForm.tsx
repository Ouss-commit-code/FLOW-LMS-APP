"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface Answer {
  text: string;
  correct: boolean;
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  icon: string;
  color: string;
}

interface QuizFormProps {
  quiz: Quiz;
  timeLeft: number;
  formatTime: (seconds: number) => string;
}

// Function to save quiz results to localStorage
const saveQuizResults = (quizId: string, score: number, timeSpent: number) => {
  if (typeof window === 'undefined') return;
  
  try {
    const results = {
      quizId,
      score,
      timeSpent,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem("quiz-results", JSON.stringify(results));
  } catch (error) {
    console.error("Error saving quiz results:", error);
  }
};

export default function QuizForm({ quiz, timeLeft, formatTime }: QuizFormProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<
    { questionId: number; selectedAnswer: number; correct: boolean }[]
  >([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [startTime] = useState(Date.now()); // Track when quiz started

  const currentQ = quiz.questions[currentQuestion];
  const quizLength = quiz.questions.length;

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const isCorrect = currentQ.answers[selectedAnswer].correct;
    setUserAnswers((prev) => [
      ...prev,
      { questionId: currentQ.id, selectedAnswer, correct: isCorrect },
    ]);

    setShowAnswer(true);

    setTimeout(() => {
      setShowAnswer(false);
      setSelectedAnswer(null);

      if (currentQuestion < quizLength - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        // Calculate time spent on quiz
        const timeSpent = Math.floor((Date.now() - startTime) / 1000); // in seconds
        const correctCount = userAnswers.filter((a) => a.correct).length + (isCorrect ? 1 : 0);
        const percentage = Math.round((correctCount / quizLength) * 100);
        
        // Save results to localStorage for stats tracking
        saveQuizResults(quiz.id, percentage, timeSpent);
        
        setQuizFinished(true);
      }
    }, 1500);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setShowAnswer(false);
    setQuizFinished(false);
  };

  const correctCount = userAnswers.filter((a) => a.correct).length;
  const percentage = Math.round((correctCount / quizLength) * 100);
  const passed = percentage >= 70;

  if (quizFinished) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mt-20 mb-6 mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            {passed ? (
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            ) : (
              <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
            )}

            <h1 className="text-3xl font-bold mb-4">
              {passed ? "Congratulations!" : "Quiz Failed"}
            </h1>

            <div className="text-6xl font-bold mb-4">{percentage}%</div>
            <p className="text-muted-foreground mb-8">
              You scored {correctCount} out of {quizLength} questions correctly
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{correctCount}</div>
                    <div className="text-sm text-muted-foreground">Correct</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{quizLength - correctCount}</div>
                    <div className="text-sm text-muted-foreground">Incorrect</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{quizLength}</div>
                    <div className="text-sm text-muted-foreground">Total</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center">
              <Button onClick={() => window.location.href = "/my-quizzes"}>
                Back to Quizzes
              </Button>
              {!passed && (
                <Button onClick={handleRetry} variant="destructive">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retry Quiz
                </Button>
              )}
              <Button onClick={() => window.location.href = "/my-stats"} variant="outline">
                View Stats
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quizLength) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mt-20 mb-6 mx-auto px-4 py-8">
        {/* Timer and Progress */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4" />
            <span className={timeLeft < 60 ? "text-red-500 font-bold" : ""}>
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="w-1/2">
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Card */}
        <Card>
          <CardHeader>
            <CardTitle>
              Question {currentQuestion + 1} of {quizLength}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium mb-4">{currentQ.question}</p>
            <div className="space-y-2">
              {currentQ.answers.map((opt, i) => (
                <label
                  key={i}
                  className={`flex items-center gap-2 w-full p-3 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedAnswer === i
                      ? showAnswer
                        ? opt.correct
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-red-500 bg-red-50 text-red-700"
                        : "border-primary bg-primary/10"
                      : showAnswer && opt.correct
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-border hover:border-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQ.id}`}
                    checked={selectedAnswer === i}
                    onChange={() => handleAnswerSelect(i)}
                    disabled={showAnswer}
                    className="w-4 h-4"
                  />
                  <span>{opt.text}</span>
                </label>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null || showAnswer}
              >
                {currentQuestion === quizLength - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}