
# FLOW plateforme Web Educative l'apprentissage :  

FLOW est construit en utilisant un stack technologique moderne et performant, centré sur Next.js 15 pour le framework principal, qui permet une rendu côté serveur et des actions serveur pour une performance optimale. Sanity CMS est intégré pour la gestion de contenu dynamique, offrant une édition riche en texte et une structuration flexible des cours (avec des schémas pour les cours, modules et leçons). L'authentification est gérée par Clerk, qui supporte une vérification sécurisée via code envoyé par e-mail depuis le compte Gmail de l'étudiant, assurant une connexion fluide et protégée. D'autres technologies clés incluent TypeScript pour une typage strict, Tailwind CSS et Shadcn/UI pour un design moderne et responsive, Lucide Icons pour les icônes


Section "My Quizzes" Interactive : Création d'une zone interactive pour pratiquer des quizzes multiples  avec enregistrement des scores et historique des tentatives dans my-stats.

Section "My Stats" : Enregistrement et visualisation des statistiques des étudiants, comme le temps passé, les scores cumulés, et les tendances d'apprentissage depuis quizzes in my-quizzes section

Section "Get Certified" : Système de délivrance de certifications basées sur les exams de preparation pour les certificates reconnus complétés et  avec génération de certificats PDF.


Le projet a progressé de manière significative, avec une structure de code bien organisée et plusieurs fonctionnalités front-end implémentées. La structure des fichiers et répertoires est claire : le dossier /app contient les routes principales comme le dashboard et les pages utilisateur ; /api gère les routes API ; /components abrite les composants React ; /sanity configure Sanity CMS ; /lib inclut les fonctions utilitaires et les schémas de contenu. Cela reflète une architecture modulaire, facilitant l'extension future.

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
