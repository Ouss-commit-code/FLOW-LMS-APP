interface Answer {
  text: string;
  correct: boolean;
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

interface QuizData {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: string;
  color: string;
  questions: Question[];
}

const quizDatabase: Record<string, QuizData> = {
  "web-development": {
    id: "web-development",
    title: "Web Development",
    description: "Test your knowledge of HTML, CSS, JavaScript, and modern frameworks",
    icon: "💻",
    difficulty: "Intermediate",
    color: "from-blue-500 to-cyan-500",
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        answers: [
          
          { text: "High Tech Modern Language", correct: false },
          { text: "HyperText Markup Language", correct: true },
          { text: "Home Tool Markup Language", correct: false },
          { text: "Hyperlink and Text Markup Language", correct: false }
        ]
      },
      {
        id: 2,
        question: "Which CSS property is used to control the spacing between elements?",
        answers: [
          
          { text: "padding", correct: false },
          { text: "spacing", correct: false },
          { text: "margin", correct: true },
          { text: "border", correct: false }
        ]
      },
      {
        id: 3,
        question: "What is the correct way to declare a JavaScript variable?",
        answers: [
          { text: "var myVar = 5;", correct: false },
          { text: "let myVar = 5;", correct: true },
          { text: "variable myVar = 5;", correct: false },
          { text: "v myVar = 5;", correct: false }
        ]
      },
      {
        id: 4,
        question: "Which HTTP method is typically used to retrieve data?",
        answers: [
          { text: "POST", correct: false },
          { text: "GET", correct: true },
          { text: "PUT", correct: false },
          { text: "DELETE", correct: false }
        ]
      },
      {
        id: 5,
        question: "What is React.js primarily used for?",
        answers: [
          { text: "Database management", correct: false },
          { text: "Server-side rendering", correct: false },
          { text: "Building user interfaces", correct: true },
          { text: "File system operations", correct: false }
        ]
      },
      {
        id: 6,
        question: "Which of the following is NOT a semantic HTML element?",
        answers: [
          { text: "<header>", correct: false },
          { text: "<div>", correct: true },
          { text: "<article>", correct: false },
          { text: "<section>", correct: false }
        ]
      },
      {
        id: 7,
        question: "What does CSS stand for?",
        answers: [
          { text: "Computer Style Sheets", correct: false },
          { text: "Cascading Style Sheets", correct: true },
          { text: "Creative Style Sheets", correct: false },
          { text: "Colorful Style Sheets", correct: false }
        ]
      },
      {
        id: 8,
        question: "Which JavaScript framework is developed by Google?",
        answers: [
          { text: "React", correct: false },
          { text: "Vue.js", correct: false },
          { text: "Angular", correct: true },
          { text: "Svelte", correct: false }
        ]
      },
      {
        id: 9,
        question: "What is the purpose of the DOCTYPE declaration?",
        answers: [
          { text: "To specify the HTML version", correct: true },
          { text: "To link CSS files", correct: false },
          { text: "To import JavaScript", correct: false },
          { text: "To set the page title", correct: false }
        ]
      },
      {
        id: 10,
        question: "Which CSS property is used to make text bold?",
        answers: [
          { text: "text-weight", correct: false },
          
          { text: "text-style", correct: false },
          { text: "font-style", correct: false },
          { text: "font-weight", correct: true }
        ]
      },
      {
        id: 11,
        question: "What does API stand for?",
        answers: [
          { text: "Application Programming Interface", correct: true },
          { text: "Advanced Programming Instructions", correct: false },
          { text: "Automated Program Integration", correct: false },
          { text: "Application Process Interface", correct: false }
        ]
      },
      {
        id: 12,
        question: "Which of the following is a CSS preprocessor?",
        answers: [
          
          { text: "React", correct: false },
          { text: "Sass", correct: true },
          { text: "jQuery", correct: false },
          { text: "Bootstrap", correct: false }
        ]
      },
      {
        id: 13,
        question: "What is the default port for HTTP?",
        answers: [
          
          { text: "443", correct: false },
          { text: "8080", correct: false },
          { text: "80", correct: true },
          { text: "3000", correct: false }
        ]
      },
      {
        id: 14,
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
          { text: "class", correct: false },
          { text: "id", correct: false },
          { text: "style", correct: true },
          { text: "css", correct: false }
        ]
      },
      {
        id: 15,
        question: "What is Node.js?",
        answers: [
          { text: "A web browser", correct: false },
          { text: "A JavaScript runtime", correct: true },
          { text: "A database", correct: false },
          { text: "A CSS framework", correct: false }
        ]
      },
      {
        id: 16,
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        answers: [
          { text: "push()", correct: true },
          { text: "add()", correct: false },
          { text: "append()", correct: false },
          { text: "insert()", correct: false }
        ]
      },
      {
        id: 17,
        question: "What is the difference between '==' and '===' in JavaScript?",
        answers: [
          { text: "No difference", correct: false },
          { text: "=== checks type and value, == only checks value", correct: true },
          { text: "== checks type and value, === only checks value", correct: false },
          { text: "=== is for strings, == is for numbers", correct: false }
        ]
      },
      {
        id: 18,
        question: "Which CSS property is used to create flexible layouts?",
        answers: [
          { text: "display: block", correct: false },
          { text: "display: inline", correct: false },
          { text: "display: flex", correct: true },
          { text: "display: table", correct: false }
        ]
      },
      {
        id: 19,
        question: "What is the purpose of a CDN?",
        answers: [
          { text: "Content Delivery Network - faster content delivery", correct: true },
          { text: "Code Development Network", correct: false },
          { text: "Central Data Network", correct: false },
          { text: "Cloud Database Network", correct: false }
        ]
      },
      {
        id: 20,
        question: "Which HTML element is used for the largest heading?",
        answers: [
          { text: "<h6>", correct: false },
          { text: "<h3>", correct: false },
          { text: "<h1>", correct: true },
          { text: "<header>", correct: false }
        ]
      }
    ]
  },
  
  "system-design": {
    id: "system-design",
    title: "System Design",
    description: "Architecture patterns, scalability, and distributed systems",
    icon: "🏗️",
    difficulty: "Advanced",
    color: "from-purple-500 to-pink-500",
    questions: [
      {
        id: 1,
        question: "What is horizontal scaling?",
        answers: [
          { text: "Adding more power to existing servers", correct: false },
          { text: "Adding more servers to handle load", correct: true },
          { text: "Reducing server capacity", correct: false },
          { text: "Optimizing database queries", correct: false }
        ]
      },
      {
        id: 2,
        question: "Which pattern is used to decouple components in microservices?",
        answers: [
          { text: "Singleton Pattern", correct: false },
          { text: "Observer Pattern", correct: false },
          { text: "Event-Driven Architecture", correct: true },
          { text: "Factory Pattern", correct: false }
        ]
      },
      {
        id: 3,
        question: "What is the CAP theorem?",
        answers: [
          { text: "Consistency, Availability, Partition tolerance", correct: true },
          { text: "Capacity, Access, Performance", correct: false },
          { text: "Cache, API, Protocol", correct: false },
          { text: "Client, Application, Protocol", correct: false }
        ]
      },
      {
        id: 4,
        question: "What is a load balancer primarily used for?",
        answers: [
          { text: "Data storage", correct: false },
          { text: "Distributing incoming requests", correct: true },
          { text: "User authentication", correct: false },
          { text: "Code compilation", correct: false }
        ]
      },
      {
        id: 5,
        question: "Which database type is best for complex relationships?",
        answers: [
          { text: "NoSQL", correct: false },
          { text: "Key-value store", correct: false },
          { text: "Relational (SQL)", correct: true },
          { text: "Document database", correct: false }
        ]
      },
      
      {
        id: 6,
        question: "What is caching primarily used for?",
        answers: [
          { text: "Data backup", correct: false },
          { text: "Improving response times", correct: true },
          { text: "User authentication", correct: false },
          { text: "Load balancing", correct: false }
        ]
      },
      {
        id: 7,
        question: "What is a microservice?",
        answers: [
          { text: "A small server", correct: false },
          { text: "A lightweight, independent service", correct: true },
          { text: "A micro computer", correct: false },
          { text: "A small database", correct: false }
        ]
      },
      {
        id: 8,
        question: "What does ACID stand for in databases?",
        answers: [
          { text: "Atomicity, Consistency, Isolation, Durability", correct: true },
          { text: "Access, Control, Integration, Data", correct: false },
          { text: "Authentication, Coordination, Independence, Distribution", correct: false },
          { text: "Application, Communication, Interface, Development", correct: false }
        ]
      },
      {
        id: 9,
        question: "What is database sharding?",
        answers: [
          { text: "Database replication", correct: false },
          { text: "Horizontal partitioning of data", correct: true },
          { text: "Vertical scaling", correct: false },
          { text: "Data encryption", correct: false }
        ]
      },
      {
        id: 10,
        question: "What is an API Gateway?",
        answers: [
          { text: "Data storage system", correct: false },
          { text: "Single entry point for API requests", correct: true },
          { text: "User interface", correct: false },
          { text: "Database management tool", correct: false }
        ]
      },
      {
        id: 11,
        question: "What is a CDN?",
        answers: [
          { text: "Content Delivery Network", correct: true },
          { text: "Central Database Network", correct: false },
          { text: "Code Development Network", correct: false },
          { text: "Cloud Data Network", correct: false }
        ]
      },
      {
        id: 12,
        question: "What is eventual consistency?",
        answers: [
          { text: "Data is always consistent", correct: false },
          { text: "Data becomes consistent over time", correct: true },
          { text: "Data is never consistent", correct: false },
          { text: "Data consistency is optional", correct: false }
        ]
      },
      {
        id: 13,
        question: "What is a message queue?",
        answers: [
          { text: "A data storage system", correct: false },
          { text: "An asynchronous communication mechanism", correct: true },
          { text: "A type of database", correct: false },
          { text: "A security protocol", correct: false }
        ]
      },
      {
        id: 14,
        question: "What is database denormalization?",
        answers: [
          { text: "Adding redundancy for performance", correct: true },
          { text: "Removing all relationships", correct: false },
          { text: "Encrypting data", correct: false },
          { text: "Backing up data", correct: false }
        ]
      },
      {
        id: 15,
        question: "What is a circuit breaker pattern?",
        answers: [
          { text: "Electrical safety mechanism", correct: false },
          { text: "Fault tolerance pattern for service calls", correct: true },
          { text: "Database connection pattern", correct: false },
          { text: "User authentication pattern", correct: false }
        ]
      },
      {
        id: 16,
        question: "What is container orchestration?",
        answers: [
          
          { text: "Creating containers", correct: false },
          { text: "Shipping containers", correct: false },
          { text: "Managing containerized applications", correct: true },
          { text: "Container storage", correct: false }
        ]
      },
      {
        id: 17,
        question: "What is idempotency?",
        answers: [
          { text: "Multiple identical requests have the same effect", correct: true },
          { text: "Single request execution", correct: false },
          { text: "Fast request processing", correct: false },
          { text: "Secure request handling", correct: false }
        ]
      },
      {
        id: 18,
        question: "What is a reverse proxy?",
        answers: [
          
          { text: "Client that sends requests", correct: false },
          { text: "Database proxy", correct: false },
          { text: "Network protocol", correct: false },
          { text: "Server that forwards client requests", correct: true }
        ]
      },
      {
        id: 19,
        question: "What is database replication?",
        answers: [
          { text: "Copying data across multiple database instances", correct: true },
          { text: "Creating database backups", correct: false },
          { text: "Optimizing database queries", correct: false },
          { text: "Securing database access", correct: false }
        ]
      },
      {
        id: 20,
        question: "What is the difference between SQL and NoSQL?",
        answers: [
          
          { text: "No difference", correct: false },
          { text: "SQL is for structured data, NoSQL for unstructured", correct: true },
          { text: "SQL is newer than NoSQL", correct: false },
          { text: "NoSQL is only for web applications", correct: false }
        ]
      }
    ]
  },

  "data-science": {
    id: "data-science",
    title: "Data Science",
    description: "Statistics, data analysis, and visualization techniques",
    icon: "📊",
    difficulty: "Intermediate",
    color: "from-green-500 to-emerald-500",
    questions: [
      {
        id: 1,
        question: "What is the difference between supervised and unsupervised learning?",
        answers: [
          { text: "Supervised uses labeled data, unsupervised doesn't", correct: true },
          { text: "No difference", correct: false },
          { text: "Supervised is faster", correct: false },
          { text: "Unsupervised uses labeled data", correct: false }
        ]
      },
      {
        id: 2,
        question: "What does pandas library primarily handle?",
        answers: [
          { text: "Machine learning models", correct: false },
          { text: "Data manipulation and analysis", correct: true },
          { text: "Web scraping", correct: false },
          { text: "Image processing", correct: false }
        ]
      },
      {
        id: 3,
        question: "What is overfitting in machine learning?",
        answers: [
          
          { text: "Model performs poorly on all data", correct: false },
          { text: "Model is too simple", correct: false },
          { text: "Model performs well on training data but poorly on new data", correct: true },
          { text: "Model trains too fast", correct: false }
        ]
      },
      {
        id: 4,
        question: "What is the purpose of cross-validation?",
        answers: [
          { text: "Data cleaning", correct: false },
          { text: "Model performance evaluation", correct: true },
          { text: "Feature selection", correct: false },
          { text: "Data visualization", correct: false }
        ]
      },
      {
        id: 5,
        question: "Which measure of central tendency is most affected by outliers?",
        answers: [
          { text: "Mode", correct: false },
          { text: "Median", correct: false },
          { text: "Mean", correct: true },
          { text: "Range", correct: false }
        ]
      },
      // Continue with remaining data science questions
      {
        id: 6,
        question: "What is a correlation coefficient?",
        answers: [
          
          { text: "Measures data quality", correct: false },
          { text: "Measures linear relationship between variables", correct: true },
          { text: "Counts missing values", correct: false },
          { text: "Calculates data size", correct: false }
        ]
      },
      {
        id: 7,
        question: "What is feature engineering?",
        answers: [
          { text: "Creating new features from existing data", correct: true },
          { text: "Removing all features", correct: false },
          { text: "Copying features", correct: false },
          { text: "Renaming features", correct: false }
        ]
      },
      {
        id: 8,
        question: "What is the purpose of normalization?",
        answers: [
          
          { text: "Remove duplicates", correct: false },
          { text: "Add new columns", correct: false },
          { text: "Sort data", correct: false },
          { text: "Scale features to similar ranges", correct: true }
        ]
      },
      {
        id: 9,
        question: "What is a p-value?",
        answers: [
          { text: "Probability of observing results if null hypothesis is true", correct: true },
          { text: "Prediction accuracy", correct: false },
          { text: "Performance metric", correct: false },
          { text: "Profit value", correct: false }
        ]
      },
      {
        id: 10,
        question: "What is clustering in machine learning?",
        answers: [
          { text: "Supervised learning technique", correct: false },
          { text: "Grouping similar data points", correct: true },
          { text: "Data cleaning method", correct: false },
          { text: "Feature selection", correct: false }
        ]
      },
      {
        id: 11,
        question: "What is the curse of dimensionality?",
        answers: [
         
          { text: "Data corruption", correct: false },
          { text: "Slow processing", correct: false },
          { text: "Problems with high-dimensional data", correct: true },
          { text: "Memory issues", correct: false }
        ]
      },
      {
        id: 12,
        question: "What is A/B testing?",
        answers: [
          { text: "Comparing two versions to determine which performs better", correct: true },
          { text: "Testing algorithm speed", correct: false },
          { text: "Bug testing", correct: false },
          { text: "Security testing", correct: false }
        ]
      },
      {
        id: 13,
        question: "What is the difference between Type I and Type II errors?",
        answers: [
          
          { text: "Type I: false negative, Type II: false positive", correct: false },
          { text: "Type I: false positive, Type II: false negative", correct: true },
          { text: "No difference", correct: false },
          { text: "Both are the same error", correct: false }
        ]
      },
      {
        id: 14,
        question: "What is regularization?",
        answers: [
          
          { text: "Data cleaning", correct: false },
          { text: "Feature scaling", correct: false },
          { text: "Technique to prevent overfitting", correct: true },
          { text: "Model training", correct: false }
        ]
      },
      {
        id: 15,
        question: "What is the purpose of train-test split?",
        answers: [
          { text: "Evaluate model performance on unseen data", correct: true },
          { text: "Speed up training", correct: false },
          { text: "Reduce data size", correct: false },
          { text: "Clean data", correct: false }
        ]
      },
      {
        id: 16,
        question: "What is ensemble learning?",
        answers: [
          
          { text: "Training one perfect model", correct: false },
          { text: "Data preprocessing", correct: false },
          { text: "Combining multiple models for better performance", correct: true },
          { text: "Feature selection", correct: false }
        ]
      },
      {
        id: 17,
        question: "What is principal component analysis (PCA)?",
        answers: [
          
          { text: "Classification algorithm", correct: false },
          { text: "Clustering method", correct: false },
          { text: "Data visualization tool", correct: false },
          { text: "Dimensionality reduction technique", correct: true },
        ]
      },
      {
        id: 18,
        question: "What is the difference between precision and recall?",
        answers: [
          { text: "Precision: true positives/(true positives + false positives)", correct: true },
          { text: "They are the same", correct: false },
          { text: "Precision is always higher", correct: false },
          { text: "Recall is more important", correct: false }
        ]
      },
      {
        id: 19,
        question: "What is gradient descent?",
        answers: [
          
          { text: "Data preprocessing step", correct: false },
          { text: "Optimization algorithm to minimize loss function", correct: true },
          { text: "Feature selection method", correct: false },
          { text: "Evaluation metric", correct: false }
        ]
      },
      {
        id: 20,
        question: "What is the purpose of ROC curve?",
        answers: [
          
          { text: "Data visualization", correct: false },
          { text: "Feature importance", correct: false },
          { text: "Evaluate binary classifier performance", correct: true },
          { text: "Model training", correct: false }
        ]
      }
    ]
  },

  "data-structures-algorithms": {
    id: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    description: "Arrays, trees, graphs, sorting, and algorithmic thinking",
    icon: "🔍",
    difficulty: "Advanced",
    color: "from-orange-500 to-red-500",
    questions: [
      {
        id: 1,
        question: "What is the time complexity of binary search?",
        answers: [
          { text: "O(n)", correct: false },
          { text: "O(log n)", correct: true },
          { text: "O(n²)", correct: false },
          { text: "O(1)", correct: false }
        ]
      },
      {
        id: 2,
        question: "Which data structure uses LIFO principle?",
        answers: [
          { text: "Queue", correct: false },
          { text: "Stack", correct: true },
          { text: "Array", correct: false },
          { text: "Linked List", correct: false }
        ]
      },
      {
        id: 3,
        question: "What is the worst-case time complexity of quicksort?",
        answers: [
          { text: "O(n log n)", correct: false },
          { text: "O(n)", correct: false },
          { text: "O(n²)", correct: true },
          { text: "O(log n)", correct: false }
        ]
      },
      {
        id: 4,
        question: "What is a hash table collision?",
        answers: [
          { text: "When two keys hash to the same index", correct: true },
          { text: "When the table is full", correct: false },
          { text: "When a key is not found", correct: false },
          { text: "When the hash function fails", correct: false }
        ]
      },
      {
        id: 5,
        question: "Which traversal visits the root node first in a binary tree?",
        answers: [
          { text: "Inorder", correct: false },
          { text: "Postorder", correct: false },
          { text: "Preorder", correct: true },
          { text: "Level order", correct: false }
        ]
      },
      // Continue with remaining DSA questions
      {
        id: 6,
        question: "What is the space complexity of merge sort?",
        answers: [
          { text: "O(1)", correct: false },
          { text: "O(n)", correct: true },
          { text: "O(log n)", correct: false },
          { text: "O(n²)", correct: false }
        ]
      },
      {
        id: 7,
        question: "What is a balanced binary search tree?",
        answers: [
          { text: "Tree where height difference between subtrees ≤ 1", correct: true },
          { text: "Tree with equal number of nodes", correct: false },
          { text: "Tree with all leaves at the same level", correct: false },
          { text: "Tree with sorted values", correct: false }
        ]
      },
      {
        id: 8,
        question: "What is the purpose of dynamic programming?",
        answers: [
          
          { text: "Allocate memory dynamically", correct: false },
          { text: "Create dynamic data structures", correct: false },
          { text: "Generate random solutions", correct: false },
          { text: "Solve problems by breaking them into subproblems", correct: true }
        ]
      },
      {
        id: 9,
        question: "What is a graph cycle?",
        answers: [
          { text: "Path that starts and ends at the same vertex", correct: true },
          { text: "Graph with no edges", correct: false },
          { text: "Tree structure", correct: false },
          { text: "Disconnected graph", correct: false }
        ]
      },
      {
        id: 10,
        question: "What is the time complexity of inserting into a hash table?",
        answers: [
          
          { text: "O(n) always", correct: false },
          { text: "O(1) average case", correct: true },
          { text: "O(log n)", correct: false },
          { text: "O(n²)", correct: false }
        ]
      },
      {
        id: 11,
        question: "What is Dijkstra's algorithm used for?",
        answers: [
          { text: "Finding shortest path in weighted graph", correct: true },
          { text: "Sorting arrays", correct: false },
          { text: "Binary search", correct: false },
          { text: "Tree traversal", correct: false }
        ]
      },
      {
        id: 12,
        question: "What is the difference between BFS and DFS?",
        answers: [
          
          { text: "No difference", correct: false },
          { text: "BFS is faster", correct: false },
          { text: "BFS explores breadth-first, DFS explores depth-first", correct: true },
          { text: "DFS uses less memory", correct: false }
        ]
      },
      {
        id: 13,
        question: "What is a heap?",
        answers: [
          { text: "Complete binary tree with heap property", correct: true },
          { text: "Memory allocation area", correct: false },
          { text: "Sorted array", correct: false },
          { text: "Graph structure", correct: false }
        ]
      },
      {
        id: 14,
        question: "What is the time complexity of heap sort?",
        answers: [
       
          { text: "O(n²)", correct: false },
          { text: "O(n)", correct: false },
          { text: "O(log n)", correct: false },
           { text: "O(n log n)", correct: true },
        ]
      },
      {
        id: 15,
        question: "What is a trie data structure?",
        answers: [
          { text: "Tree for storing strings efficiently", correct: true },
          { text: "Three-node structure", correct: false },
          { text: "Triangle data structure", correct: false },
          { text: "Ternary tree", correct: false }
        ]
      },
      {
        id: 16,
        question: "What is amortized analysis?",
        answers: [
          { text: "Average time over sequence of operations", correct: true },
          { text: "Worst-case analysis", correct: false },
          { text: "Best-case analysis", correct: false },
          { text: "Space complexity analysis", correct: false }
        ]
      },
      {
        id: 17,
        question: "What is a minimum spanning tree?",
        answers: [
          
          { text: "Smallest possible tree", correct: false },
          { text: "Tree connecting all vertices with minimum weight", correct: true },
          { text: "Tree with minimum height", correct: false },
          { text: "Binary tree", correct: false }
        ]
      },
      {
        id: 18,
        question: "What is the master theorem used for?",
        answers: [
          
          { text: "Sorting algorithms", correct: false },
          { text: "Graph algorithms", correct: false },
          { text: "Analyzing divide-and-conquer recurrence relations", correct: true },
          { text: "Dynamic programming", correct: false }
        ]
      },
      {
        id: 19,
        question: "What is a strongly connected component?",
        answers: [
          { text: "Maximal set of vertices with paths between all pairs", correct: true },
          { text: "Complete graph", correct: false },
          { text: "Tree component", correct: false },
          { text: "Disconnected component", correct: false }
        ]
      },
      {
        id: 20,
        question: "What is the purpose of memoization?",
        answers: [
          
          { text: "Memory management", correct: false },
          { text: "Data compression", correct: false },
          { text: "Cache results to avoid recomputation", correct: true },
          { text: "Algorithm optimization", correct: false }
        ]
      }
    ]
  },

  "networking": {
    id: "networking",
    title: "Networking",
    description: "TCP/IP, protocols, network security, and infrastructure",
    icon: "🌐",
    difficulty: "Intermediate",
    color: "from-indigo-500 to-blue-500",
    questions: [
      {
        id: 1,
        question: "What layer of the OSI model does HTTP operate on?",
        answers: [
          { text: "Application Layer", correct: true },
          { text: "Transport Layer", correct: false },
          { text: "Network Layer", correct: false },
          { text: "Physical Layer", correct: false }
        ]
      },
      {
        id: 2,
        question: "What is the default port for HTTPS?",
        answers: [
          { text: "80", correct: false },
          { text: "443", correct: true },
          { text: "8080", correct: false },
          { text: "22", correct: false }
        ]
      },
      {
        id: 3,
        question: "What does TCP guarantee?",
        answers: [
          
          { text: "Fast delivery", correct: false },
          { text: "Broadcast capability", correct: false },
          { text: "Reliable, ordered delivery", correct: true },
          { text: "Low latency", correct: false }
        ]
      },
      {
        id: 4,
        question: "What is a subnet mask used for?",
        answers: [
          { text: "Determine network and host portions of IP", correct: true },
          { text: "Encrypt network traffic", correct: false },
          { text: "Route packets", correct: false },
          { text: "Assign IP addresses", correct: false }
        ]
      },
      {
        id: 5,
        question: "What is DNS?",
        answers: [
          
          { text: "Dynamic Network Service", correct: false },
          { text: "Domain Name System", correct: true },
          { text: "Data Network Security", correct: false },
          { text: "Distributed Name Server", correct: false }
        ]
      },
      {
        id: 6,
        question: "What is the difference between TCP and UDP?",
        answers: [
          
          { text: "UDP is more secure", correct: false },
          { text: "TCP is newer protocol", correct: false },
          { text: "No significant difference", correct: false },
          { text: "TCP is reliable, UDP is unreliable but faster", correct: true }
        ]
      },
      {
        id: 7,
        question: "What is a MAC address?",
        answers: [
          { text: "Physical address of network interface", correct: true },
          { text: "Logical network address", correct: false },
          { text: "Apple computer address", correct: false },
          { text: "Media Access Code", correct: false }
        ]
      },
      {
        id: 8,
        question: "What is NAT?",
        answers: [
          
          { text: "Network Access Token", correct: false },
          { text: "Network Address Translation", correct: true },
          { text: "Network Authentication Tool", correct: false },
          { text: "Network Administration Terminal", correct: false }
        ]
      },
      {
        id: 9,
        question: "What is the purpose of ARP?",
        answers: [
          { text: "Map IP addresses to MAC addresses", correct: true },
          { text: "Route packets", correct: false },
          { text: "Encrypt data", correct: false },
          { text: "Assign IP addresses", correct: false }
        ]
      },
      {
        id: 10,
        question: "What is a VLAN?",
        answers: [
          
          { text: "Very Large Area Network", correct: false },
          { text: "Variable Length Area Network", correct: false },
          { text: "Virtual Local Area Network", correct: true },
          { text: "Virtual Link Access Network", correct: false }
        ]
      },
      {
        id: 11,
        question: "What is the maximum TTL value in IPv4?",
        answers: [
          
          { text: "64", correct: false },
          { text: "128", correct: false },
          { text: "Unlimited", correct: false },
          { text: "255", correct: true },
        ]
      },
      {
        id: 12,
        question: "What is DHCP?",
        answers: [
          { text: "Dynamic Host Configuration Protocol", correct: true },
          { text: "Dynamic Hardware Control Protocol", correct: false },
          { text: "Distributed Host Communication Protocol", correct: false },
          { text: "Digital Host Configuration Process", correct: false }
        ]
      },
      {
        id: 13,
        question: "What is a firewall?",
        answers: [
          
          { text: "Physical barrier", correct: false },
          { text: "Network security system that monitors traffic", correct: true },
          { text: "Virus protection", correct: false },
          { text: "Data backup system", correct: false }
        ]
      },
      {
        id: 14,
        question: "What is QoS?",
        answers: [
          
          { text: "Queue of Services", correct: false },
          { text: "Quick Operating System", correct: false },
          { text: "Quality of Service", correct: true },
          { text: "Query Operation Service", correct: false }
        ]
      },
      {
        id: 15,
        question: "What is the difference between a hub and a switch?",
        answers: [
          { text: "Switch creates collision domains, hub doesn't", correct: true },
          { text: "Hub is more advanced", correct: false },
          { text: "No difference", correct: false },
          { text: "Switch is older technology", correct: false }
        ]
      },
      {
        id: 16,
        question: "What is BGP?",
        answers: [
          
          { text: "Basic Gateway Protocol", correct: false },
          { text: "Broadcast Gateway Protocol", correct: false },
          { text: "Binary Gateway Protocol", correct: false },
          { text: "Border Gateway Protocol", correct: true }
        ]
      },
      {
        id: 17,
        question: "What is SSL/TLS?",
        answers: [
          { text: "Security protocols for encrypted communication", correct: true },
          { text: "Network routing protocols", correct: false },
          { text: "File transfer protocols", correct: false },
          { text: "Database protocols", correct: false }
        ]
      },
      {
        id: 18,
        question: "What is the purpose of a proxy server?",
        answers: [
          
          { text: "Store data permanently", correct: false },
          { text: "Intermediary between client and server", correct: true },
          { text: "Encrypt all communications", correct: false },
          { text: "Replace the main server", correct: false }
        ]
      },
      {
        id: 19,
        question: "What is packet switching?",
        answers: [
          
          { text: "Physical network switching", correct: false },
          { text: "Software switching", correct: false },
          { text: "Method of data transmission using packets", correct: true },
          { text: "Hardware replacement", correct: false }
        ]
      },
      {
        id: 20,
        question: "What is latency in networking?",
        answers: [
          { text: "Time delay between request and response", correct: true },
          { text: "Network bandwidth", correct: false },
          { text: "Data packet size", correct: false },
          { text: "Network security level", correct: false }
        ]
      }
    ]
  },

  "uml": {
    id: "uml",
    title: "Unified Modeling Language",
    description: "UML diagrams, modeling techniques, and software design",
    icon: "📐",
    difficulty: "Intermediate",
    color: "from-teal-500 to-cyan-500",
    questions: [
      {
        id: 1,
        question: "What does UML stand for?",
        answers: [
          { text: "Unified Modeling Language", correct: true },
          { text: "Universal Modeling Language", correct: false },
          { text: "Uniform Modeling Language", correct: false },
          { text: "Ultimate Modeling Language", correct: false }
        ]
      },
      {
        id: 2,
        question: "Which diagram shows the static structure of a system?",
        answers: [
          { text: "Sequence Diagram", correct: false },
          { text: "Class Diagram", correct: true },
          { text: "Activity Diagram", correct: false },
          { text: "State Diagram", correct: false }
        ]
      },
      {
        id: 3,
        question: "What does a use case diagram represent?",
        answers: [
          
          { text: "Class relationships", correct: false },
          { text: "Object interactions", correct: false },
          { text: "System functionality from user perspective", correct: true },
          { text: "System deployment", correct: false }
        ]
      },
      {
        id: 4,
        question: "What is an association in UML?",
        answers: [
          
          { text: "Method in a class", correct: false },
          { text: "Attribute of a class", correct: false },
          { text: "Instance of a class", correct: false },
          { text: "Relationship between classes", correct: true }
        ]
      },
      {
        id: 5,
        question: "What does multiplicity indicate in UML?",
        answers: [
          { text: "Number of instances in a relationship", correct: true },
          { text: "Number of methods", correct: false },
          { text: "Number of attributes", correct: false },
          { text: "Number of diagrams", correct: false }
        ]
      },
      {
        id: 6,
        question: "What is aggregation in UML?",
        answers: [
          
          { text: "Strong 'is-a' relationship", correct: false },
          { text: "Weak 'has-a' relationship", correct: true },
          { text: "Method call", correct: false },
          { text: "Data type", correct: false }
        ]
      },
      {
        id: 7,
        question: "What is composition in UML?",
        answers: [
          { text: "Strong ownership relationship", correct: true },
          { text: "Inheritance relationship", correct: false },
          { text: "Interface implementation", correct: false },
          { text: "Method overriding", correct: false }
        ]
      },
      {
        id: 8,
        question: "What does a sequence diagram show?",
        answers: [
         
          { text: "Class structure", correct: false },
          { text: "System deployment", correct: false },
          { text: "Object interactions over time", correct: true },
          { text: "Use cases", correct: false }
        ]
      },
      {
        id: 9,
        question: "What is generalization in UML?",
        answers: [
          { text: "Inheritance relationship", correct: true },
          { text: "Association relationship", correct: false },
          { text: "Dependency relationship", correct: false },
          { text: "Composition relationship", correct: false }
        ]
      },
      {
        id: 10,
        question: "What does an activity diagram model?",
        answers: [
          { text: "Workflow or business process", correct: true },
          { text: "Class relationships", correct: false },
          { text: "Object states", correct: false },
          { text: "System components", correct: false }
        ]
      },
      {
        id: 11,
        question: "What is a stereotype in UML?",
        answers: [
          
          { text: "Type of diagram", correct: false },
          { text: "Extension mechanism to create new model elements", correct: true },
          { text: "Class attribute", correct: false },
          { text: "Method parameter", correct: false }
        ]
      },
      {
        id: 12,
        question: "What does a state diagram represent?",
        answers: [
         
          { text: "Class inheritance", correct: false },
          { text: "Use case scenarios", correct: false },
          { text: "Object behavior and state transitions", correct: true },
          { text: "System deployment", correct: false }
        ]
      },
      {
        id: 13,
        question: "What is a component diagram used for?",
        answers: [
          { text: "Show system components and dependencies", correct: true },
          { text: "Show object interactions", correct: false },
          { text: "Show use cases", correct: false },
          { text: "Show class attributes", correct: false }
        ]
      },
      {
        id: 14,
        question: "What does a deployment diagram show?",
        answers: [
          
          { text: "Logical system structure", correct: false },
          { text: "User interactions", correct: false },
          { text: "Data flow", correct: false },
          { text: "Physical deployment of system components", correct: true }
        ]
      },
      {
        id: 15,
        question: "What is an interface in UML?",
        answers: [
          { text: "Contract specifying operations", correct: true },
          { text: "Concrete implementation", correct: false },
          { text: "Data attribute", correct: false },
          { text: "System boundary", correct: false }
        ]
      },
      {
        id: 16,
        question: "What does visibility in UML indicate?",
        answers: [
          
          { text: "Diagram clarity", correct: false },
          { text: "Access level of attributes and methods", correct: true },
          { text: "Object location", correct: false },
          { text: "System performance", correct: false }
        ]
      },
      {
        id: 17,
        question: "What is a package in UML?",
        answers: [
          
          { text: "Software installation file", correct: false },
          { text: "Data structure", correct: false },
          { text: "Grouping mechanism for model elements", correct: true },
          { text: "Method collection", correct: false }
        ]
      },
      {
        id: 18,
        question: "What does a collaboration diagram show?",
        answers: [
          { text: "Object interactions with emphasis on links", correct: true },
          { text: "Class hierarchy", correct: false },
          { text: "System architecture", correct: false },
          { text: "User requirements", correct: false }
        ]
      },
      {
        id: 19,
        question: "What is abstract class in UML?",
        answers: [
          
          { text: "Class with no methods", correct: false },
          { text: "Class that cannot be instantiated", correct: true },
          { text: "Class with no attributes", correct: false },
          { text: "Class with private methods", correct: false }
        ]
      },
      {
        id: 20,
        question: "What does dependency relationship mean in UML?",
        answers: [
          { text: "One element depends on another", correct: true },
          { text: "Elements are equal", correct: false },
          { text: "Elements are independent", correct: false },
          { text: "Elements are inherited", correct: false }
        ]
      }
    ]
  },

  "agile-development": {
    id: "agile-development",
    title: "Agile Software Development",
    description: "Scrum, Kanban, agile principles, and project management",
    icon: "🚀",
    difficulty: "Beginner",
    color: "from-yellow-500 to-orange-500",
    questions: [
      {
        id: 1,
        question: "What is the primary focus of Agile methodology?",
        answers: [
          { text: "Individuals and interactions over processes", correct: true },
          { text: "Following a comprehensive plan", correct: false },
          { text: "Complete documentation", correct: false },
          { text: "Contract negotiation", correct: false }
        ]
      },
      {
        id: 2,
        question: "What is a Sprint in Scrum?",
        answers: [
          
          { text: "Final testing phase", correct: false },
          { text: "Time-boxed iteration of development", correct: true },
          { text: "Project planning meeting", correct: false },
          { text: "Code review session", correct: false }
        ]
      },
      {
        id: 3,
        question: "What is the role of a Product Owner?",
        answers: [
          
          { text: "Write all the code", correct: false },
          { text: "Manage the development team", correct: false },
          { text: "Define product requirements and priorities", correct: true },
          { text: "Test the final product", correct: false }
        ]
      },
      {
        id: 4,
        question: "What is a User Story?",
        answers: [
          { text: "Requirement from user's perspective", correct: true },
          { text: "Developer's biography", correct: false },
          { text: "Project timeline", correct: false },
          { text: "Bug report", correct: false }
        ]
      },
      {
        id: 5,
        question: "What is the purpose of Daily Standups?",
        answers: [
         
          { text: "Review code quality", correct: false },
          { text: "Sync team progress and identify blockers", correct: true },
          { text: "Plan the entire project", correct: false },
          { text: "Conduct performance reviews", correct: false }
        ]
      },
      {
        id: 6,
        question: "What is Kanban?",
        answers: [
          { text: "Visual workflow management method", correct: true },
          { text: "Programming language", correct: false },
          { text: "Testing framework", correct: false },
          { text: "Database system", correct: false }
        ]
      },
      {
        id: 7,
        question: "What is Definition of Done?",
        answers: [
         
          { text: "Project end date", correct: false },
          { text: "Team formation", correct: false },
           { text: "Criteria for completing work items", correct: true },
          { text: "Budget allocation", correct: false }
        ]
      },
      {
        id: 8,
        question: "What is a Sprint Retrospective?",
        answers: [
          
          { text: "Product demonstration", correct: false },
          { text: "Team reflection on process improvement", correct: true },
          { text: "Planning next sprint", correct: false },
          { text: "Code review meeting", correct: false }
        ]
      },
      {
        id: 9,
        question: "What does MVP stand for?",
        answers: [
          { text: "Minimum Viable Product", correct: true },
          { text: "Maximum Value Proposition", correct: false },
          { text: "Most Valuable Player", correct: false },
          { text: "Minimum Version Prototype", correct: false }
        ]
      },
      {
        id: 10,
        question: "What is velocity in Agile?",
        answers: [
          
          { text: "Code execution speed", correct: false },
          { text: "Team formation speed", correct: false },
          { text: "Project completion rate", correct: false },
          { text: "Amount of work completed per sprint", correct: true }
        ]
      },
      {
        id: 11,
        question: "What is a Product Backlog?",
        answers: [
          { text: "Prioritized list of features and requirements", correct: true },
          { text: "List of completed tasks", correct: false },
          { text: "Bug tracking system", correct: false },
          { text: "Team member list", correct: false }
        ]
      },
      {
        id: 12,
        question: "What is pair programming?",
        answers: [
          
          { text: "Writing code in pairs of files", correct: false },
          { text: "Two developers working together on same code", correct: true },
          { text: "Using two computers", correct: false },
          { text: "Working in two shifts", correct: false }
        ]
      },
      {
        id: 13,
        question: "What is continuous integration?",
        answers: [
          { text: "Frequently integrating code changes", correct: true },
          { text: "Never stopping development", correct: false },
          { text: "Integrating only at the end", correct: false },
          { text: "Manual integration process", correct: false }
        ]
      },
      {
        id: 14,
        question: "What is the role of Scrum Master?",
        answers: [
         
          { text: "Manage the development team", correct: false },
          { text: "Write all requirements", correct: false },
          { text: "Facilitate Scrum process and remove impediments", correct: true },
          { text: "Test the final product", correct: false }
        ]
      },
      {
        id: 15,
        question: "What is story pointing?",
        answers: [
         
          { text: "Counting lines of code", correct: false },
          { text: "Estimating effort required for user stories", correct: true },
          { text: "Measuring team performance", correct: false },
          { text: "Tracking project budget", correct: false }
        ]
      },
      {
        id: 16,
        question: "What is Sprint Planning?",
        answers: [
          { text: "Meeting to plan work for upcoming sprint", correct: true },
          { text: "Daily progress review", correct: false },
          { text: "End-of-project evaluation", correct: false },
          { text: "Code review session", correct: false }
        ]
      },
      {
        id: 17,
        question: "What is refactoring?",
        answers: [
          { text: "Improving code structure without changing functionality", correct: true },
          { text: "Adding new features", correct: false },
          { text: "Removing bugs", correct: false },
          { text: "Creating documentation", correct: false }
        ]
      },
      {
        id: 18,
        question: "What is technical debt?",
        answers: [
          
          { text: "Money owed to developers", correct: false },
          { text: "Project budget deficit", correct: false },
          { text: "Cost of additional work due to quick solutions", correct: true },
          { text: "Time spent on meetings", correct: false }
        ]
      },
      {
        id: 19,
        question: "What is acceptance criteria?",
        answers: [
         
          { text: "Team member qualifications", correct: false },
          { text: "Project approval process", correct: false },
          { text: "Conditions for user story completion", correct: true },
          { text: "Budget requirements", correct: false }
        ]
      },
      {
        id: 20,
        question: "What is the difference between Scrum and Kanban?",
        answers: [
          { text: "Scrum has fixed sprints, Kanban has continuous flow", correct: true },
          { text: "No difference", correct: false },
          { text: "Kanban is newer than Scrum", correct: false },
          { text: "Scrum is only for small teams", correct: false }
        ]
      }
    ]
  },

  "machine-learning": {
    id: "machine-learning",
    title: "Machine Learning",
    description: "ML algorithms, neural networks, and AI fundamentals",
    icon: "🤖",
    difficulty: "Advanced",
    color: "from-violet-500 to-purple-500",
    questions: [
      {
        id: 1,
        question: "What is machine learning?",
        answers: [
          { text: "Algorithms that learn from data without explicit programming", correct: true },
          { text: "Programming machines to think", correct: false },
          { text: "Building physical robots", correct: false },
          { text: "Creating computer hardware", correct: false }
        ]
      },
      {
        id: 2,
        question: "What is the difference between supervised and unsupervised learning?",
        answers: [
          
          { text: "Supervised is faster", correct: false },
          { text: "Supervised uses labeled data, unsupervised doesn't", correct: true },
          { text: "No difference", correct: false },
          { text: "Unsupervised uses labeled data", correct: false }
        ]
      },
      {
        id: 3,
        question: "What is a neural network?",
        answers: [
          { text: "Computing system inspired by biological neural networks", correct: true },
          { text: "Network of computers", correct: false },
          { text: "Internet connection system", correct: false },
          { text: "Database network", correct: false }
        ]
      },
      {
        id: 4,
        question: "What is overfitting?",
        answers: [
          
          { text: "Model is too simple", correct: false },
          { text: "Model performs well on training data but poorly on new data", correct: true },
          { text: "Model trains too fast", correct: false },
          { text: "Model uses too much memory", correct: false }
        ]
      },
      {
        id: 5,
        question: "What is a feature in machine learning?",
        answers: [
          
          { text: "Software functionality", correct: false },
          { text: "Model output", correct: false },
          { text: "Individual measurable property of observed phenomenon", correct: true },
          { text: "Algorithm complexity", correct: false }
        ]
      },
      {
        id: 6,
        question: "What is gradient descent?",
        answers: [
          { text: "Optimization algorithm to minimize loss function", correct: true },
          { text: "Data preprocessing step", correct: false },
          { text: "Feature selection method", correct: false },
          { text: "Model evaluation metric", correct: false }
        ]
      },
      {
        id: 7,
        question: "What is deep learning?",
        answers: [
          
          { text: "Learning from deep databases", correct: false },
          { text: "Machine learning with multi-layer neural networks", correct: true },
          { text: "Complex programming", correct: false },
          { text: "Advanced statistics", correct: false }
        ]
      },
      {
        id: 8,
        question: "What is cross-validation?",
        answers: [
          
          { text: "Data cleaning method", correct: false },
          { text: "Feature engineering", correct: false },
          { text: "Technique to assess model performance", correct: true },
          { text: "Model deployment", correct: false }
        ]
      },
      {
        id: 9,
        question: "What is reinforcement learning?",
        answers: [
          { text: "Learning through interaction with environment", correct: true },
          { text: "Supervised learning with rewards", correct: false },
          { text: "Unsupervised clustering", correct: false },
          { text: "Feature selection technique", correct: false }
        ]
      },
      {
        id: 10,
        question: "What is a loss function?",
        answers: [
          { text: "Measures difference between predicted and actual values", correct: true },
          { text: "Function that deletes data", correct: false },
          { text: "Memory management function", correct: false },
          { text: "Error handling mechanism", correct: false }
        ]
      },
      {
        id: 11,
        question: "What is regularization?",
        answers: [
          
          { text: "Data normalization", correct: false },
          { text: "Feature scaling", correct: false },
          { text: "Technique to prevent overfitting", correct: true },
          { text: "Model training", correct: false }
        ]
      },
      {
        id: 12,
        question: "What is ensemble learning?",
        answers: [
          { text: "Combining multiple models for better performance", correct: true },
          { text: "Training models together", correct: false },
          { text: "Parallel processing", correct: false },
          { text: "Distributed computing", correct: false }
        ]
      },
      {
        id: 13,
        question: "What is backpropagation?",
        answers: [
          
          { text: "Data flow reversal", correct: false },
          { text: "Algorithm for training neural networks", correct: true },
          { text: "Error correction method", correct: false },
          { text: "Network communication protocol", correct: false }
        ]
      },
      {
        id: 14,
        question: "What is a hyperparameter?",
        answers: [
          
          { text: "Model output parameter", correct: false },
          { text: "Data input parameter", correct: false },
          { text: "Configuration setting for learning algorithm", correct: true },
          { text: "System performance metric", correct: false }
        ]
      },
      {
        id: 15,
        question: "What is clustering?",
        answers: [
          { text: "Grouping similar data points together", correct: true },
          { text: "Supervised learning technique", correct: false },
          { text: "Data preprocessing", correct: false },
          { text: "Model evaluation", correct: false }
        ]
      },
      {
        id: 16,
        question: "What is feature engineering?",
        answers: [
          { text: "Creating and selecting relevant features for models", correct: true },
          { text: "Building model architecture", correct: false },
          { text: "Data collection process", correct: false },
          { text: "Model deployment", correct: false }
        ]
      },
      {
        id: 17,
        question: "What is the bias-variance tradeoff?",
        answers: [
          
          { text: "Choice between different algorithms", correct: false },
          { text: "Balance between model simplicity and flexibility", correct: true },
          { text: "Data quality vs quantity", correct: false },
          { text: "Speed vs accuracy", correct: false }
        ]
      },
      {
        id: 18,
        question: "What is transfer learning?",
        answers: [
         
          { text: "Moving data between systems", correct: false },
          { text: "Transferring knowledge to humans", correct: false },
          { text: "Using pre-trained model for new task", correct: true },
          { text: "Sharing models between teams", correct: false }
        ]
      },
      {
        id: 19,
        question: "What is a convolutional neural network (CNN)?",
        answers: [
          { text: "Neural network designed for processing grid-like data", correct: true },
          { text: "Network for text processing", correct: false },
          { text: "Database network", correct: false },
          { text: "Communication network", correct: false }
        ]
      },
      {
        id: 20,
        question: "What is natural language processing (NLP)?",
        answers: [
         
          { text: "Programming language", correct: false },
          { text: "Network protocol", correct: false },
          { text: "Data processing technique", correct: false },
           { text: "Field of AI dealing with human language", correct: true }
        ]
      }
    ]
  }
};

export function getQuizData(quizId: string): QuizData | null {
  return quizDatabase[quizId] || null;
}

export { type QuizData, type Question, type Answer };