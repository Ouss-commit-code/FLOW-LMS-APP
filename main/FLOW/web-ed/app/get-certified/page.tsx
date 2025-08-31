import GetCertifiedHero from "@/components/GetCertifiedHero";

export default async function Home() {
  return (
    <div className="min-h-screen bg-background">
      <GetCertifiedHero />
      
      {/* Exams Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
          <span className="text-sm font-medium text-muted-foreground">
            Featured Exams
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
        </div>
        
        
       
      </div>
    </div>
  );
}