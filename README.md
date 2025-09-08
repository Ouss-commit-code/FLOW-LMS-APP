
# FLOW plateforme Web Educative l'apprentissage :  

FLOW est construit en utilisant un stack technologique moderne et performant, centré sur Next.js 15 pour le framework principal, qui permet une rendu côté serveur et des actions serveur pour une performance optimale. Sanity CMS est intégré pour la gestion de contenu dynamique, offrant une édition riche en texte et une structuration flexible des cours (avec des schémas pour les cours, modules et leçons). L'authentification est gérée par Clerk, qui supporte une vérification sécurisée via code envoyé par e-mail depuis le compte Gmail de l'étudiant, assurant une connexion fluide et protégée. D'autres technologies clés incluent TypeScript pour une typage strict, Tailwind CSS et Shadcn/UI pour un design moderne et responsive, Lucide Icons pour les icônes


Section "My Quizzes" Interactive : Création d'une zone interactive pour pratiquer des quizzes multiples  avec enregistrement des scores et historique des tentatives dans my-stats.

Section "My Stats" : Enregistrement et visualisation des statistiques des étudiants, comme le temps passé, les scores cumulés, et les tendances d'apprentissage depuis quizzes in my-quizzes section

Section "Get Certified" : Système de délivrance de certifications basées sur les exams de preparation pour les certificates reconnus complétés et  avec génération de certificats PDF.


Le projet a progressé de manière significative, avec une structure de code bien organisée et plusieurs fonctionnalités front-end implémentées. La structure des fichiers et répertoires est claire : le dossier /app contient les routes principales comme le dashboard et les pages utilisateur ; /api gère les routes API ; /components abrite les composants React ; /sanity configure Sanity CMS ; /lib inclut les fonctions utilitaires et les schémas de contenu. Cela reflète une architecture modulaire, facilitant l'extension future.
