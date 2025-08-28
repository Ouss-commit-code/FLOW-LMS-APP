"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { getQuizData } from "@/lib/quizData";
import QuizForm from "@/components/QuizForm"; // ✅ import QuizForm

interface QuizResult {
  score: number;
  percentage: number;
  passed: boolean;
  answers: { questionId: number; selectedAnswer: number; correct: boolean }[];
}

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<
    { questionId: number; selectedAnswer: number; correct: boolean }[]
  >([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [quizStarted, setQuizStarted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const quizData = getQuizData(quizId);

  if (!quizData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Quiz not found</h1>
          <Button onClick={() => router.push("/my-quizzes")}>
            Back to Quizzes
          </Button>
        </div>
      </div>
    );
  }

  // Timer countdown
  useEffect(() => {
    if (quizStarted && timeLeft > 0 && !quizResult) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleQuizComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [quizStarted, timeLeft, quizResult]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const currentQ = quizData.questions[currentQuestion];
    const isCorrect = currentQ.answers[selectedAnswer].correct;

    setUserAnswers((prev) => [
      ...prev,
      { questionId: currentQ.id, selectedAnswer, correct: isCorrect },
    ]);

    setShowAnswer(true);

    setTimeout(() => {
      setShowAnswer(false);
      setSelectedAnswer(null);

      if (currentQuestion < quizData.questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        handleQuizComplete();
      }
    }, 1500);
  };

  const handleQuizComplete = () => {
    const correctAnswers = userAnswers.filter((a) => a.correct).length;
    const totalQuestions = quizData.questions.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    const passed = percentage >= 70;

    setQuizResult({
      score: correctAnswers,
      percentage,
      passed,
      answers: userAnswers,
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setQuizResult(null);
    setTimeLeft(300);
    setQuizStarted(true);
    setShowAnswer(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  // ⏳ Before quiz starts
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/my-quizzes")}
            className="mt-20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Quizzes
          </Button>

          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-r ${quizData.color} flex items-center justify-center mx-auto mb-6`}
              >
                <span className="text-4xl">{quizData.icon}</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{quizData.title}</h1>
              <p className="text-muted-foreground mb-8">{quizData.description}</p>
            </motion.div>

            <Card className="text-left">
              <CardHeader>
                <CardTitle>Quiz Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Total Questions:</span>
                  <Badge variant="secondary">
                    {quizData.questions.length}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Time Limit:</span>
                  <Badge variant="secondary">5 minutes</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Passing Score:</span>
                  <Badge variant="secondary">70%</Badge>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-4">
                    Answer all questions within the time limit. You need to
                    score at least 70% to pass.
                  </p>
                  <Button onClick={startQuiz} className="w-full">
                    Start Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Show results
  if (quizResult) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              {quizResult.passed ? (
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              ) : (
                <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
              )}

              <h1 className="text-3xl font-bold mb-4">
                {quizResult.passed ? "Congratulations!" : "Quiz Failed"}
              </h1>

              <div className="text-6xl font-bold mb-4">
                {quizResult.percentage}%
              </div>

              <p className="text-muted-foreground mb-8">
                You scored {quizResult.score} out of{" "}
                {quizData.questions.length} questions correctly
              </p>
            </motion.div>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {quizResult.score}
                    </div>
                    <div className="text-sm text-muted-foreground">Correct</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">
                      {quizData.questions.length - quizResult.score}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Incorrect
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      {quizData.questions.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Total</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center">
              {!quizResult.passed && (
                <Button onClick={resetQuiz} variant="destructive">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retry Quiz
                </Button>
              )}
              <Button variant="outline" onClick={() => router.push("/my-quizzes")}>
                Back to Quizzes
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Active Quiz (just pass full quiz object to QuizForm)
  return (
    <QuizForm
      quiz={quizData}
      currentQuestion={currentQuestion}
      selectedAnswer={selectedAnswer}
      showAnswer={showAnswer}
      timeLeft={timeLeft}
      formatTime={formatTime}
      handleAnswerSelect={handleAnswerSelect}
      handleNextQuestion={handleNextQuestion}
      quizLength={quizData.questions.length}
    />
  );
}
