// components/CertificateForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, ArrowLeft } from "lucide-react";
import { CertificationExam } from "@/lib/data/certificationExams";
import { generateCertificate } from "@/lib/certificate-generator";

interface CertificateFormProps {
  exam: CertificationExam;
  score: number;
  onBack: () => void;
}

export default function CertificateForm({ exam, score, onBack }: CertificateFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    if (!fullName.trim() || !email.trim()) return;
    
    setIsGenerating(true);
    try {
      await generateCertificate(fullName, exam, score);
    } catch (error) {
      console.error("Error generating certificate:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Button variant="outline" onClick={onBack} className="mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Results
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Download Your Certificate</CardTitle>
          <p className="text-sm text-muted-foreground">
            Congratulations on passing the {exam.title} preparation exam! Fill out your details to download your certificate.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">About {exam.title}</h4>
            <p className="text-sm text-muted-foreground">{exam.marketInfo}</p>
            <p className="text-sm mt-2">
              <strong>Average Salary:</strong> {exam.worth}
            </p>
            <p className="text-sm">
              <strong>Next Official Exam:</strong> {new Date(exam.nextExamDate).toLocaleDateString()}
            </p>
          </div>

          <Button 
            className="w-full" 
            onClick={handleDownload}
            disabled={!fullName.trim() || !email.trim() || isGenerating}
          >
            <Download className="w-4 h-4 mr-2" />
            {isGenerating ? "Generating..." : "Download Certificate"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}