import React from 'react'

import { BookMarkedIcon, BookOpenTextIcon, ChartBar, GraduationCap, ListTodoIcon } from 'lucide-react';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import DarkModeToggle from './DarkModeToggle';
import { Button } from './ui/button';
import SearchInput from './SearchInput';
 


export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80
     backdrop-blur-sm border-b border-border">
    <div className="container mx-auto px-4">
      <div className="flex h-16 items-center justify-between gap-4">
            {/* LEFT CONTAINER */ }      
        <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            > 
              <BookOpenTextIcon className="h-6 w-6 text-primary" /> <strong>FLOW</strong>
              <span className="text-xl font-bold bg-gradient-to-r
               from-primary/0 to-primary bg-clip-text text-transparent">
                

              </span>
            </Link>
           <SearchInput/>  

        </div>
            
            
            
            {/* RIGHT CONTAINER */ }
            <div className="flex items-center space-x-2 md:space-x-4">
                <nav>
                    <SignedIn>
                    <Link
                    
                    href="/my-courses"
                    className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
                    >
                    <BookMarkedIcon className="h-4 w-4" />
                    <span className="hidden md:block">My Courses</span>
                    </Link>
                    </SignedIn>
                </nav>
                <nav>
                <SignedIn>
              <Link
                
                href="/my-quizzes"
                className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
              >
                <ListTodoIcon className="h-4 w-4" />
                <span className="hidden md:block">My quizzes</span>
              </Link>
              </SignedIn>
            </nav>
            <nav>
                <SignedIn>
              <Link
                
                href="/my-stats"
                className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
              >
                <ChartBar className="h-4 w-4" />
                <span className="hidden md:block">My Stats</span>
              </Link>
              </SignedIn>
            </nav>
            <nav>
                <SignedIn>
              <Link
                
                href="/get-certified"
                className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
              >
                <GraduationCap className="h-4 w-4" />
                <span className="hidden md:block">Get Certified</span>
              </Link>
              </SignedIn>
            </nav>

            <DarkModeToggle/>

            <SignedIn>
                <UserButton/>
            </SignedIn>

            <SignedOut>
                <SignInButton mode='modal'>
                    <Button variant="outline" size="lg">Sign In</Button>
                </SignInButton>
            </SignedOut>    
            </div>
        </div>          
    </div>
    </header>
  );
}

