// app/get-certified/page.tsx
import GetCertifiedHero from "@/components/GetCertifiedHero";
import ExamCard from "@/components/ExamCard";
import { certificationExams } from "@/lib/data/certificationExams";

export default function GetCertified() {
  return (
    <div className="min-h-screen bg-background">
      <GetCertifiedHero />
      
      {/* Exams Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
          <span className="text-sm font-medium text-muted-foreground">
            Featured Certification Exams
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
        </div>
        
        {/* Exam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
        
        {/* Information Section */}
        <div className="mt-16 bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Why Get Certified?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-semibold mb-2">Career Advancement</h3>
              <p className="text-sm text-muted-foreground">
                Certifications validate your skills and open doors to better job opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2">Higher Earnings</h3>
              <p className="text-sm text-muted-foreground">
                Certified professionals typically earn 10-20% more than non-certified peers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold mb-2">Industry Recognition</h3>
              <p className="text-sm text-muted-foreground">
                Gain recognition from employers and peers in your industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}