
# FLOW Educational Web Platform Learning :  

FLOW is built using a modern and powerful technology stack, centered on Next.js 15 for the main framework, which enables server-side rendering and server actions for optimal performance. Sanity CMS is integrated for dynamic content management, offering rich text editing and flexible course structuring (with schemas for courses, modules, and lessons). Authentication is managed by Clerk, which supports secure verification via a code sent by email from the student's Gmail account, ensuring a smooth and protected connection. Other key technologies include TypeScript for strict typing, Tailwind CSS and Shadcn/UI for modern and responsive design, Lucide Icons for icons

Interactive “My Quizzes” section: Creation of an interactive area for practicing multiple quizzes with score recording and attempt history in my-stats.

“My Stats” section: Recording and viewing of student statistics, such as time spent, cumulative scores, and learning trends from quizzes in the “My Quizzes” section.

“Get Certified” section: System for issuing certifications based on preparation exams for recognized certificates completed, with PDF certificate generation.


The project has progressed significantly, with a well-organized code structure and several front-end features implemented. The file and directory structure is clear: 

/app folder contains the main routes such as the dashboard and user pages; 
/api manages API routes; 
/components houses React components; 
/sanity configures Sanity CMS; 
/lib includes utility functions and content schemas. This reflects a modular architecture, facilitating future expansion.

technologies : 

👉 Full-Stack Development with Next.js 15 : 
Server Components & Server Actions for optimal performance
Modern app router architecture
TypeScript for type safety and better development experience

👉 Content Management with Sanity CMS : 
Flexible course, module, and lesson management
Rich text editor for lesson content
Custom schemas and content types
Real-time content updates

👉 Advanced Features :
Multiple video player integrations  (YouTube, Vimeo, Loom , IFrame)
Course progress tracking system
Module-based learning paths
Real-time lesson completion status
Beautiful course cards with progress indicators

👉 Authentication & User Management :
Secure authentication with Clerk
User profiles and progress tracking
Role-based access control
Protected routes and content

👉 Modern UI/UX :
Responsive design with Tailwind CSS
Beautiful components with Shadcn UI
Custom animations and transitions
Loading states and skeletons
Dark mode support

👉 Professional Features :
Course catalog with filtering
Student dashboard
Progress tracking and analytics
Instructor profiles
Beautiful course landing pages
Interactive quizzes with timer and score limit to memorize 
attempts of quizzes persuade the progress in my stats section with graphics and presentation of the overall attempts score and reset of all stats button if you wanna started fresh again!  
Get certified section with many exams of preparations 9 recognized certificates: CCNA; JOSA JS; AWS; CEH; Comptai security+; Agile development; OMG UML certificate with timer and score limit and you can download a certificate of preparation with Full Name and which certificate you passed name and your score and time of succession.


Getting Started : 

Prerequisites :

Node.js 18+
npm/yarn
Stripe Account
Clerk Account
Sanity Account

Environment Variables
Create a .env.local file with :

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
# Read Token
SANITY_API_TOKEN=your-sanity-read-token
# Full Access Admin Token
SANITY_API_ADMIN_TOKEN=your-sanity-admin-token

# For Sanity Studio to read
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production

# Next.js
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key


Setting up Sanity CMS :

Create a Sanity account
Create a new project

Install the Sanity CLI:

npm install -g @sanity/cli

Initialize Sanity in your project:

sanity init

Deploy Sanity Studio:

sanity deploy

Setting up Clerk :

Create a Clerk application
Configure authentication providers
Set up redirect URLs
Add environment variables

Architecture :

Content Schema
Courses

Title
Description
Image
Modules
Instructor
Category
Modules

Title
Lessons
Lessons

Title
Description
Video URL
Content (Rich Text)
Completion Status
Students

Profile Information
Enrolled Courses
Progress Data
Instructors

Name
Bio
Photo
Courses


Key Components :

Course Management System

Content creation and organization
Module and lesson structuring
Rich text editing
Media integration
Progress Tracking

Lesson completion
Course progress calculation
Module progress visualization

Course enrollment
User Authentication

Clerk authentication
Protected routes
User roles

Usage :

Creating a Course
Access Sanity Studio
Create course structure with modules and lessons
Add content and media
Publish course
Student Experience
Browse available courses
 enroll in courses
Access course content
Track progress through modules
Mark lessons as complete
View completion certificates

