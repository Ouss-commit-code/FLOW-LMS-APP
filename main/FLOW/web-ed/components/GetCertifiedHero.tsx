

function Hero() {

  return (
    <div className="relative h-[45vh] w-full">
        
        <div className="absolute inset-0 bg-gradient-to-b
         from-black/10 to-black/55 dark:from-white/15 dark:to-black/40" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background 
        via-background/80 to-background/20"/>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            
            <div className="max-w-3xl"><br /><br /><br />
              <h1 className=" text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 
                 bg-clip-text">Test your knowledge with our exams preparation resources</h1>  
              
              <p className="text-x2 text-muted-foreground">
                  Practice Exams helps you practice where you need additional preparation to accelerate your chances of succeeding on most recognized IT certifications</p>  
            </div> 
        </div>
    </div>
  );
}

export default Hero