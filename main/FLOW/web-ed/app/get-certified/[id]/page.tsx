// app/get-certified/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle, XCircle, RotateCcw, Download } from "lucide-react";
import { certificationExams } from "@/lib/data/certificationExams";
import { getExamQuestions } from "@/lib/data/certificationQuestions";
import CertificateForm from "@/components/CertificateForm";

export default function ExamPage() {
  const params = useParams();
  const examId = params.id as string;
  const exam = certificationExams.find(e => e.id === examId);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ questionId: number; selectedAnswer: number; correct: boolean }[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(exam?.timeLimit ? exam.timeLimit * 60 : 600);
  const [showCertificateForm, setShowCertificateForm] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);

  // Load questions for the exam
  useEffect(() => {
    const examQuestions = getExamQuestions(examId);
    setQuestions(examQuestions);
  }, [examId]);

  const currentQ = questions[currentQuestion] || { question: "Loading...", answers: [] };
  const quizLength = questions.length;

  useEffect(() => {
    if (timeLeft > 0 && !quizFinished && questions.length > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizFinished) {
      setQuizFinished(true);
    }
  }, [timeLeft, quizFinished, questions.length]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null || !currentQ.answers) return;

    const isCorrect = currentQ.answers[selectedAnswer]?.correct || false;
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
    setTimeLeft(exam?.timeLimit ? exam.timeLimit * 60 : 600);
    setShowCertificateForm(false);
  };

  const correctCount = userAnswers.filter((a) => a.correct).length;
  const percentage = quizLength > 0 ? Math.round((correctCount / quizLength) * 100) : 0;
  const passed = percentage >= (exam?.passingScore || 75);

  if (!exam) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested exam could not be found.</p>
          <Button onClick={() => window.location.href = "/get-certified"}>
            Back to Exams
          </Button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">Loading exam questions...</p>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mt-20 mb-6 mx-auto px-4 py-8">
          {!showCertificateForm ? (
            <div className="max-w-2xl mx-auto text-center">
              {passed ? (
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              ) : (
                <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
              )}

              <h1 className="text-3xl font-bold mb-4">
                {passed ? "Congratulations!" : "Exam Failed"}
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

              <div className="flex gap-4 justify-center flex-wrap">
                <Button onClick={() => window.location.href = "/get-certified"}>
                  Back to Exams
                </Button>
                {!passed && (
                  <Button onClick={handleRetry} variant="destructive">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Retry Exam
                  </Button>
                )}
                {passed && (
                  <Button onClick={() => setShowCertificateForm(true)} variant="default">
                    <Download className="w-4 h-4 mr-2" />
                    Get Certificate
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <CertificateForm 
              exam={exam} 
              score={percentage} 
              onBack={() => setShowCertificateForm(false)} 
            />
          )}
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quizLength) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mt-20 mb-6 mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{exam.title} Preparation Exam</h1>
          <p className="text-muted-foreground">{exam.description}</p>
        </div>

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
            <p className="text-xs text-muted-foreground mt-1 text-right">
              Question {currentQuestion + 1} of {quizLength}
            </p>
          </div>
        </div>

        {/* Question Card */}
        <Card>
          <CardHeader>
            <CardTitle>Question {currentQuestion + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium mb-4">{currentQ.question}</p>
            <div className="space-y-2">
              {currentQ.answers.map((opt: any, i: number) => (
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
                {currentQuestion === quizLength - 1 ? "Finish Exam" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}