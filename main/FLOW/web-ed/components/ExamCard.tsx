// components/ExamCard.tsx
"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Trophy } from "lucide-react";
import { CertificationExam } from "@/lib/data/certificationExams";

interface ExamCardProps {
  exam: CertificationExam;
}

export default function ExamCard({ exam }: ExamCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className={`h-2 bg-gradient-to-r ${exam.color}`}></div>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{exam.icon}</span>
            <h3 className="text-xl font-semibold">{exam.title}</h3>
          </div>
          <Badge variant="secondary" className="bg-secondary/80">
            {exam.provider}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{exam.description}</p>
      </CardHeader>
      <CardContent className="pb-3 flex-grow">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-2" />
            {exam.questions} questions
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {exam.timeLimit} minutes
          </div>
          <div className="flex items-center">
            <Trophy className="w-4 h-4 mr-2" />
            {exam.passingScore}% to pass
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-muted rounded-lg">
          <p className="text-xs font-medium">Next exam: {new Date(exam.nextExamDate).toLocaleDateString()}</p>
          <p className="text-xs mt-1">Market value: {exam.worth}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => window.location.href = `/get-certified/${exam.id}`}
        >
          <Trophy className="w-4 h-4 mr-2" />
          Start Preparation Exam
        </Button>
      </CardFooter>
    </Card>
  );
}