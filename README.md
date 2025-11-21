

  
# FLOW Educational Web Platform Learning :  
<img width="404" height="274" alt="image" src="https://github.com/user-attachments/assets/05b8e0b2-4c55-4a64-90cf-b1582c7c4eed" />
<img width="697" height="157" alt="image" src="https://github.com/user-attachments/assets/c3271e1a-6ef6-422a-a160-efea4330fa1b" />
<img width="752" height="136" alt="image" src="https://github.com/user-attachments/assets/b88ba49f-55ce-4ebb-a76b-b9e4dec413bd" /><img width="312" height="98" alt="image" src="https://github.com/user-attachments/assets/d390bde0-c8c9-49b9-b604-761850840f55" />






FLOW is built using a modern and powerful technology stack, centered on Next.js 15 for the main framework, which enables server-side rendering and server actions for optimal performance. Sanity CMS is integrated for dynamic content management, offering rich text editing and flexible courses structuring with schemas for courses, modules, and lessons. Authentication is managed by Clerk, which supports secure verification via a code sent by email from the student's Gmail account, ensuring a smooth and protected connection.
Other key technologies include TypeScript for strict typing, Tailwind CSS and Shadcn/UI for modern and responsive design, Lucide Icons for icons.

<img width="1332" height="797" alt="image" src="https://github.com/user-attachments/assets/d3ec0ea9-16a0-4247-aaae-c0e044cac967" />



<img width="1273" height="546" alt="image" src="https://github.com/user-attachments/assets/79741e8f-f3f2-4afd-8fa6-52376fba7dd6" />



<img width="1228" height="716" alt="image" src="https://github.com/user-attachments/assets/91191fc8-bf55-4493-911c-5e33a58abb84" />



<img width="1319" height="622" alt="image" src="https://github.com/user-attachments/assets/92b3a08d-5edb-4dac-89dc-17992ef69190" />




Interactive “My Quizzes” section: Creation of an interactive area for practicing multiple quizzes with score recording and attempt history in my-stats.
“My Stats” section: Recording and viewing of student statistics, such as time spent, cumulative scores, and learning trends from quizzes in the “My Quizzes” section.

<img width="1236" height="423" alt="image" src="https://github.com/user-attachments/assets/86e5625b-2d68-43fe-863a-cf49d049d23b" />



<img width="1320" height="922" alt="image" src="https://github.com/user-attachments/assets/7e6cb617-736a-4f4e-8fca-a974f36e1709" />



<img width="1123" height="640" alt="image" src="https://github.com/user-attachments/assets/cc225826-935d-488e-ba74-a220e021480a" />



<img width="1252" height="575" alt="image" src="https://github.com/user-attachments/assets/b2cdf247-02ab-4ccb-8810-1de1474c6741" />








“Get Certified” section: System for issuing certifications based on preparation exams for recognized certificates completed, with PDF certificate generation.

<img width="1247" height="558" alt="image" src="https://github.com/user-attachments/assets/1168076a-2593-4644-aada-4e242c18e68d" />



<img width="1229" height="692" alt="image" src="https://github.com/user-attachments/assets/db1c2448-9cc3-415e-82f3-b9369340621f" />




<img width="1278" height="695" alt="image" src="https://github.com/user-attachments/assets/8a030cc9-0cab-4768-ad95-a681071d2199" />





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

Get certified section with many exams of preparations 9 recognized certificates: CCNA; JOSA JS; AWS; CEH; Comptai security+; Agile development; OMG UML certificate with timer and score limit and full name of the user you can download a certificate of preparation.


Getting Started : 

Prerequisites :

Node.js 18+
npm/yarn
Stripe Account
Clerk Account
Sanity Account

Environment Variables:

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



Key Files and Directories : 

/app                    # Next.js app directory
  /(dashboard)          # Dashboard routes
  /(user)              # User routes
  /api                 # API routes
/components            # React components
/sanity                # Sanity configuration
  /lib                 # Sanity utility functions
  /schemas             # Content schemas
/lib                   # Utility functions

Core Technologies : 

Next.js 15
TypeScript
Sanity CMS
Stripe Payments
Clerk Auth
Tailwind CSS
Shadcn UI
Lucide Icons

Key Features :

Student Experience
Browse available courses
enroll in courses
Access course content
Track progress through modules
Mark lessons as complete
View completion certificates after successful exam attempts 
