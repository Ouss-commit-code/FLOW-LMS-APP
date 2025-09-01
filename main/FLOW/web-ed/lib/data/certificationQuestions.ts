// data/certificationQuestions.ts
import { CertificationExam } from "@/lib/data/certificationExams";

interface Answer {
  text: string;
  correct: boolean;
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export const certificationQuestions: Record<string, Question[]> = {
  ccna: [
    {
      id: 1,
      question: "Which protocol operates at the transport layer and provides reliable, ordered delivery of data?",
      answers: [
        
        { text: "IP", correct: false },
        { text: "UDP", correct: false },
        { text: "TCP", correct: true },
        { text: "ICMP", correct: false }
      ]
    },
    {
      id: 2,
      question: "What is the default administrative distance of OSPF?",
      answers: [
        { text: "110", correct: true },
        { text: "120", correct: false },
        { text: "90", correct: false },
        { text: "100", correct: false }
      ]
    },
    {
      id: 3,
      question: "Which IPv6 address type is used for communication between a single source and the nearest interface in a group?",
      answers: [
        { text: "Unicast", correct: false },
        { text: "Anycast", correct: true },
        { text: "Multicast", correct: false },
        { text: "Broadcast", correct: false }
      ]
    },
    {
      id: 4,
      question: "What is the purpose of ARP in IPv4 networks?",
      answers: [
        
        { text: "Map MAC addresses to IP addresses", correct: false },
        { text: "Map IP addresses to MAC addresses", correct: true },
        { text: "Route packets between networks", correct: false },
        { text: "Translate domain names to IP addresses", correct: false }
      ]
    },
    {
      id: 5,
      question: "Which spanning-tree protocol provides rapid convergence?",
      answers: [
        { text: "RSTP", correct: true },
        { text: "STP", correct: false },
        { text: "MSTP", correct: false },
        { text: "PVST+", correct: false }
      ]
    },
    {
      id: 6,
      question: "What is the default subnet mask for a Class B network?",
      answers: [
        
        { text: "255.0.0.0", correct: false },
        { text: "255.255.255.0", correct: false },
        { text: "255.255.255.255", correct: false },
        { text: "255.255.0.0", correct: true }
      ]
    },
    {
      id: 7,
      question: "Which protocol is used for secure remote access to network devices?",
      answers: [
        { text: "SSH", correct: true },
        { text: "Telnet", correct: false },
        { text: "HTTP", correct: false },
        { text: "FTP", correct: false }
      ]
    },
    {
      id: 8,
      question: "What is the purpose of VTP in switched networks?",
      answers: [
        { text: "Manage VLAN configuration across switches", correct: true },
        { text: "Route traffic between VLANs", correct: false },
        { text: "Provide redundant paths in STP", correct: false },
        { text: "Secure switch ports", correct: false }
      ]
    },
    {
      id: 9,
      question: "Which EIGRP packet type is used for neighbor discovery?",
      answers: [
        
        { text: "Update", correct: false },
        { text: "Hello", correct: true },
        { text: "Query", correct: false },
        { text: "Reply", correct: false }
      ]
    },
    {
      id: 10,
      question: "What is the function of a default route?",
      answers: [
        { text: "Route packets when no specific route exists", correct: true },
        { text: "Provide backup routing path", correct: false },
        { text: "Route traffic within the same subnet", correct: false },
        { text: "Filter unauthorized traffic", correct: false }
      ]
    },
    {
      id: 11,
      question: "Which wireless security protocol is considered most secure?",
      answers: [
        
        { text: "WEP", correct: false },
        { text: "WPA3", correct: true },
        { text: "WPA", correct: false },
        { text: "WPA2", correct: false }
      ]
    },
    {
      id: 12,
      question: "What is the purpose of NAT overload (PAT)?",
      answers: [
        
        { text: "Translate between IPv4 and IPv6", correct: false },
        { text: "Map multiple private IPs to a single public IP", correct: true },
        { text: "Load balance traffic across multiple links", correct: false },
        { text: "Provide redundant NAT configuration", correct: false }
      ]
    },
    {
      id: 13,
      question: "Which QoS mechanism provides bandwidth guarantee?",
      answers: [
        { text: "Minimum bandwidth reservation", correct: true },
        { text: "Traffic policing", correct: false },
        { text: "Traffic shaping", correct: false },
        { text: "Weighted random early detection", correct: false }
      ]
    },
    {
      id: 14,
      question: "What is the function of CDP in Cisco networks?",
      answers: [
        { text: "Detect network loops", correct: false },
        { text: "Configure devices automatically", correct: false },
        { text: "Discover information about directly connected devices", correct: true },
        { text: "Monitor network performance", correct: false }
      ]
    },
    {
      id: 15,
      question: "Which routing protocol uses the Dijkstra algorithm?",
      answers: [
        { text: "OSPF", correct: true },
        { text: "EIGRP", correct: false },
        { text: "RIP", correct: false },
        { text: "BGP", correct: false }
      ]
    },
    {
      id: 16,
      question: "What is the purpose of port security on switches?",
      answers: [
        { text: "Limit MAC addresses on a port", correct: true },
        { text: "Encrypt traffic on a port", correct: false },
        { text: "Filter specific protocols", correct: false },
        { text: "Monitor port activity", correct: false }
      ]
    },
    {
      id: 17,
      question: "Which protocol provides automatic IP address configuration?",
      answers: [
    
        { text: "DNS", correct: false },
    { text: "DHCP", correct: true },
        { text: "ARP", correct: false },
        { text: "ICMP", correct: false }
      ]
    },
    {
      id: 18,
      question: "What is the maximum hop count for RIP?",
      answers: [
    
        { text: "16", correct: false },
        { text: "255", correct: false },
        { text: "Unlimited", correct: false },
        { text: "15", correct: true }
      ]
    },
    {
      id: 19,
      question: "Which technology allows multiple VLANs to traverse a single link?",
      answers: [
        { text: "Trunking", correct: true },
        { text: "Access port", correct: false },
        { text: "EtherChannel", correct: false },
        { text: "Port security", correct: false }
      ]
    },
    {
      id: 20,
      question: "What is the purpose of HSRP?",
      answers: [
        
        { text: "Load balance traffic", correct: false },
        { text: "Provide default gateway redundancy", correct: true },
        { text: "Secure router configuration", correct: false },
        { text: "Monitor network health", correct: false }
      ]
    },
    {
      id: 21,
      question: "Which encryption protocol is used in IPsec?",
      answers: [
        
        { text: "AH", correct: false },
        { text: "IKE", correct: false },
        { text: "ISAKMP", correct: false },
        { text: "ESP", correct: true }
      ]
    },
    {
      id: 22,
      question: "What is the function of ACLs?",
      answers: [
        { text: "Filter network traffic", correct: true },
        { text: "Encrypt data packets", correct: false },
        { text: "Route packets between networks", correct: false },
        { text: "Manage device configuration", correct: false }
      ]
    },
    {
      id: 23,
      question: "Which protocol is used for network management?",
      answers: [
        { text: "SNMP", correct: true },
        { text: "SMTP", correct: false },
        { text: "HTTP", correct: false },
        { text: "FTP", correct: false }
      ]
    },
    {
      id: 24,
      question: "What is the purpose of EtherChannel?",
      answers: [
        { text: "Bundle multiple physical links", correct: true },
        { text: "Extend network range", correct: false },
        { text: "Secure network communications", correct: false },
        { text: "Monitor network performance", correct: false }
      ]
    },
    {
      id: 25,
      question: "Which IPv6 address represents the loopback?",
      answers: [
        
        { text: "::", correct: false },
        
        { text: "2001::1", correct: false },
        { text: "::1", correct: true },
        { text: "fe80::1", correct: false }
      ]
    }
  ],

  aws: [
  {
    id: 1,
    question: "Which AWS service is used for serverless computing?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "AWS Lambda", correct: true },
      { text: "Amazon RDS", correct: false },
      { text: "AWS CloudTrail", correct: false }
    ]
  },
  {
    id: 2,
    question: "Which AWS service provides object storage with high durability?",
    answers: [
      
      { text: "Amazon EBS", correct: false },
      { text: "Amazon S3", correct: true },
      { text: "Amazon EFS", correct: false },
      { text: "AWS Glacier", correct: false }
    ]
  },
  {
    id: 3,
    question: "Which AWS database is fully managed and serverless?",
    answers: [
      
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon RDS MySQL", correct: false },
      { text: "Amazon Aurora Serverless", correct: true },
      { text: "Amazon DynamoDB Streams", correct: false }
    ]
  },
  {
    id: 4,
    question: "What is the default maximum number of VPCs per AWS region?",
    answers: [
      { text: "5", correct: true },
      { text: "10", correct: false },
      { text: "20", correct: false },
      { text: "1", correct: false }
    ]
  },
  {
    id: 5,
    question: "Which AWS service is best for content delivery?",
    answers: [
      
      { text: "Amazon SQS", correct: false },
      { text: "Amazon Route 53", correct: false },
      { text: "AWS CloudFront", correct: true },
      { text: "Amazon SNS", correct: false }
    ]
  },
  {
    id: 6,
    question: "Which AWS service monitors and logs API activity?",
    answers: [
      { text: "AWS CloudTrail", correct: true },
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS Config", correct: false },
      { text: "AWS Inspector", correct: false }
    ]
  },
  {
    id: 7,
    question: "Which AWS service provides a fully managed Kubernetes environment?",
    answers: [
      { text: "Amazon ECS", correct: false },
      { text: "Amazon EKS", correct: true },
      { text: "AWS Fargate", correct: false },
      { text: "AWS Batch", correct: false }
    ]
  },
  {
    id: 8,
    question: "What does Amazon Route 53 primarily provide?",
    answers: [
      { text: "DNS and traffic routing", correct: true },
      { text: "Content delivery", correct: false },
      { text: "Firewall management", correct: false },
      { text: "Database scaling", correct: false }
    ]
  },
  {
    id: 9,
    question: "Which AWS storage option is block-level?",
    answers: [
      
      { text: "Amazon S3", correct: false },
      { text: "Amazon Glacier", correct: false },
      { text: "Amazon EFS", correct: false },
      { text: "Amazon EBS", correct: true }
    ]
  },
  {
    id: 10,
    question: "Which AWS service helps implement Infrastructure as Code (IaC)?",
    answers: [
      { text: "AWS CloudFormation", correct: true },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS Config", correct: false },
      { text: "AWS Control Tower", correct: false }
    ]
  },
  {
    id: 11,
    question: "Which AWS service provides NoSQL database support?",
    answers: [
      
      { text: "Amazon RDS", correct: false },
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon DynamoDB", correct: true },
      { text: "AWS Aurora", correct: false }
    ]
  },
  {
    id: 12,
    question: "Which AWS service enables event-driven messaging between microservices?",
    answers: [
      
      { text: "Amazon SQS", correct: false },
      { text: "Amazon SNS", correct: true },
      { text: "AWS Lambda", correct: false },
      { text: "AWS Glue", correct: false }
    ]
  },
  {
    id: 13,
    question: "What is the maximum size of an object stored in Amazon S3?",
    answers: [
      { text: "5 TB", correct: true },
      { text: "500 GB", correct: false },
      { text: "1 TB", correct: false },
      { text: "10 TB", correct: false }
    ]
  },
  {
    id: 14,
    question: "Which AWS service provides centralized secrets management?",
    answers: [
      { text: "AWS Secrets Manager", correct: true },
      { text: "AWS Config", correct: false },
      { text: "AWS CloudHSM", correct: false },
      { text: "Amazon GuardDuty", correct: false }
    ]
  },
  {
    id: 15,
    question: "Which AWS tool is used to estimate monthly costs?",
    answers: [
      
      { text: "AWS Budgets", correct: false },
      { text: "AWS Pricing Calculator", correct: true },
      { text: "Cost Explorer", correct: false },
      { text: "Trusted Advisor", correct: false }
    ]
  },
  {
    id: 16,
    question: "Which AWS service provides virtual private cloud networks?",
    answers: [
      { text: "Amazon VPC", correct: true },
      { text: "AWS Direct Connect", correct: false },
      { text: "Amazon Route 53", correct: false },
      { text: "Amazon CloudFront", correct: false }
    ]
  },
  {
    id: 17,
    question: "Which AWS service detects unusual account activity?",
    answers: [
      
      { text: "AWS Config", correct: false },
      
      { text: "AWS Inspector", correct: false },
      { text: "Amazon GuardDuty", correct: true },
      { text: "AWS Shield", correct: false }
    ]
  },
  {
    id: 18,
    question: "Which AWS service provides automated compliance auditing?",
    answers: [
      
      { text: "AWS Inspector", correct: false },
      { text: "AWS Config", correct: true },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Amazon CloudWatch", correct: false }
    ]
  },
  {
    id: 19,
    question: "Which AWS service is best suited for building data lakes?",
    answers: [
      { text: "Amazon S3", correct: true },
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon RDS", correct: false },
      { text: "AWS Snowball", correct: false }
    ]
  },
  {
    id: 20,
    question: "Which AWS service provides managed DDoS protection?",
    answers: [
      
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "AWS Firewall Manager", correct: false },
      { text: "AWS Shield", correct: true }
    ]
  },
  {
    id: 21,
    question: "Which AWS database is optimized for analytical queries?",
    answers: [
      { text: "Amazon Redshift", correct: true },
      { text: "Amazon RDS", correct: false },
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon Neptune", correct: false }
    ]
  },
  {
    id: 22,
    question: "Which AWS service is used to create isolated compute environments?",
    answers: [
      { text: "Amazon VPC", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "AWS Fargate", correct: false },
      { text: "Amazon ECS", correct: false }
    ]
  },
  {
    id: 23,
    question: "Which AWS service provides relational database management?",
    answers: [
      
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon Neptune", correct: false },
      { text: "Amazon RDS", correct: true },
      { text: "Amazon DocumentDB", correct: false }
    ]
  },
  {
    id: 24,
    question: "Which AWS service allows analysis of log data in real-time?",
    answers: [
      
      { text: "Amazon CloudFront", correct: false },
      { text: "Amazon Kinesis", correct: true },
      { text: "AWS SQS", correct: false },
      { text: "AWS Step Functions", correct: false }
    ]
  },
  {
    id: 25,
    question: "Which AWS service manages distributed denial-of-service (DDoS) protection at scale?",
    answers: [
      { text: "AWS Shield Advanced", correct: true },
      { text: "AWS WAF", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Firewall Manager", correct: false }
    ]
  }
],

  agile: [
  {
    id: 1,
    question: "What is the primary goal of a Sprint Review?",
    answers: [

      { text: "Plan the next Sprint", correct: false },
      { text: "Review team performance", correct: false },

      { text: "Assign tasks to team members", correct: false },
      { text: "Inspect the increment and adapt the Product Backlog", correct: true }
    ]
  },
  {
    id: 2,
    question: "Which Agile principle emphasizes simplicity?",
    answers: [
      { text: "Simplicity—the art of maximizing the amount of work not done—is essential", correct: true },
      { text: "Welcome changing requirements, even late in development", correct: false },
      { text: "Business people and developers must work together daily", correct: false },
      { text: "Deliver working software frequently", correct: false }
    ]
  },
  {
    id: 3,
    question: "In Scrum, who is responsible for maximizing product value?",
    answers: [
      { text: "Scrum Master", correct: false },
      { text: "Product Owner", correct: true },
      { text: "Development Team", correct: false },
      { text: "Stakeholders", correct: false }
    ]
  },
  {
    id: 4,
    question: "What is a key artifact in Scrum?",
    answers: [
      { text: "Product Backlog", correct: true },
      { text: "Team Charter", correct: false },
      { text: "Gantt Chart", correct: false },
      { text: "Burndown Report", correct: false }
    ]
  },
  {
    id: 5,
    question: "Which framework scales Scrum across multiple teams?",
    answers: [
      
      { text: "PMBOK", correct: false },
      { text: "PRINCE2", correct: false },
      
      { text: "ITIL", correct: false },
      { text: "SAFe", correct: true }
    ]
  },
  {
    id: 6,
    question: "What Agile practice involves short daily meetings?",
    answers: [
      { text: "Daily Stand-up", correct: true },
      { text: "Sprint Planning", correct: false },
      { text: "Backlog Refinement", correct: false },
      { text: "Retrospective", correct: false }
    ]
  },
  {
    id: 7,
    question: "Which Agile approach focuses on continuous improvement via Kaizen?",
    answers: [
      
      { text: "Scrum", correct: false },
      { text: "Kanban", correct: true },
      { text: "XP", correct: false },
      { text: "Crystal", correct: false }
    ]
  },
  {
    id: 8,
    question: "What is a common metric in Agile for tracking progress?",
    answers: [
      { text: "Velocity", correct: true },
      { text: "Critical Path", correct: false },
      { text: "ROI", correct: false },
      { text: "Earned Value", correct: false }
    ]
  },
  {
    id: 9,
    question: "In Agile, what does MVP stand for?",
    answers: [
      { text: "Minimum Viable Product", correct: true },
      { text: "Most Valuable Player", correct: false },
      { text: "Maximum Value Proposition", correct: false },
      { text: "Managed Value Plan", correct: false }
    ]
  },
  {
    id: 10,
    question: "Which Agile method emphasizes pair programming?",
    answers: [
      
      { text: "Scrum", correct: false },
      { text: "Kanban", correct: false },
      { text: "Extreme Programming (XP)", correct: true },
      { text: "Lean", correct: false }
    ]
  },
  {
    id: 11,
    question: "What is the timebox for a Sprint Retrospective?",
    answers: [
      { text: "3 hours for a one-month Sprint", correct: true },
      { text: "1 hour for a one-month Sprint", correct: false },
      { text: "Full day", correct: false },
      { text: "No timebox", correct: false }
    ]
  },
  {
    id: 12,
    question: "Who facilitates Scrum events?",
    answers: [
      
      { text: "Project Manager", correct: false },
      { text: "Product Owner", correct: false },
      { text: "Scrum Master", correct: true },
      { text: "Business Analyst", correct: false }
    ]
  },
  {
    id: 13,
    question: "Which Agile value prioritizes customer satisfaction?",
    answers: [
      { text: "Customer collaboration over contract negotiation", correct: true },
      { text: "Responding to change over following a plan", correct: false },
      { text: "Working software over documentation", correct: false },
      { text: "Individuals and interactions over tools", correct: false }
    ]
  },
  {
    id: 14,
    question: "What is a Definition of Done (DoD)?",
    answers: [
      
      { text: "The last task in Sprint Backlog", correct: false },
      { text: "Agreed criteria for considering work complete", correct: true },
      { text: "A milestone document", correct: false },
      { text: "Bug-free code", correct: false }
    ]
  },
  {
    id: 15,
    question: "What is the main purpose of a Sprint Retrospective?",
    answers: [
      { text: "Inspect and adapt the team’s process", correct: true },
      { text: "Update the Product Backlog", correct: false },
      { text: "Estimate backlog items", correct: false },
      { text: "Assign tasks", correct: false }
    ]
  },
  {
    id: 16,
    question: "In Agile, what is backlog grooming also called?",
    answers: [
      
      { text: "Sprint Planning", correct: false },
      { text: "Daily Scrum", correct: false },
      { text: "Backlog Refinement", correct: true },
      { text: "Retrospective", correct: false }
    ]
  },
  {
    id: 17,
    question: "Which Agile approach emphasizes limiting work in progress (WIP)?",
    answers: [
      
      { text: "Scrum", correct: false },
      { text: "XP", correct: false },
      { text: "Kanban", correct: true },
      { text: "DSDM", correct: false }
    ]
  },
  {
    id: 18,
    question: "What is the ideal team size in Scrum?",
    answers: [
     
      { text: "10 to 15 members", correct: false },
      { text: "2 to 3 members", correct: false },
      { text: "3 to 9 members", correct: true },
      { text: "Over 15 members", correct: false }
    ]
  },
  {
    id: 19,
    question: "What Agile role represents the customer’s interests?",
    answers: [
      { text: "Product Owner", correct: true },
      { text: "Scrum Master", correct: false },
      { text: "Developer", correct: false },
      { text: "Stakeholder", correct: false }
    ]
  },
  {
    id: 20,
    question: "Which artifact tracks remaining work in a Sprint?",
    answers: [
      
      { text: "Kanban Board", correct: false },
      { text: "Burndown Chart", correct: true },
      { text: "Risk Register", correct: false },
      { text: "Velocity Chart", correct: false }
    ]
  },
  {
    id: 21,
    question: "What Agile metric measures predictability?",
    answers: [
      { text: "Velocity", correct: true },
      { text: "ROI", correct: false },
      { text: "Critical Path", correct: false },
      { text: "Stakeholder Value", correct: false }
    ]
  },
  {
    id: 22,
    question: "Which Agile practice emphasizes delivering in short cycles?",
    answers: [
      
      { text: "Waterfall Planning", correct: false },
      { text: "Big Design Up Front", correct: false },
      { text: "Critical Path Method", correct: false },
      { text: "Iterative Development", correct: true }
    ]
  },
  {
    id: 23,
    question: "What Agile role removes impediments for the team?",
    answers: [
      { text: "Scrum Master", correct: true },
      { text: "Project Manager", correct: false },
      { text: "Product Owner", correct: false },
      { text: "Team Lead", correct: false }
    ]
  },
  {
    id: 24,
    question: "Which Agile event is timeboxed to 15 minutes?",
    answers: [
      
      { text: "Sprint Planning", correct: false },
      
      { text: "Sprint Review", correct: false },
      { text: "Daily Scrum", correct: true },
      { text: "Retrospective", correct: false }
    ]
  },
  {
    id: 25,
    question: "What is the main focus of Agile teams?",
    answers: [
      
      { text: "Writing documentation", correct: false },
      { text: "Delivering working software frequently", correct: true },
      { text: "Following strict processes", correct: false },
      { text: "Maximizing meetings", correct: false }
    ]
  }
],

  java: [
  {
    id: 1,
    question: "Which Java keyword is used to prevent method overriding?",
    answers: [
      
      { text: "static", correct: false },
      { text: "final", correct: true },
      { text: "private", correct: false },
      { text: "protected", correct: false }
    ]
  },
  {
    id: 2,
    question: "Which collection class implements a dynamic array?",
    answers: [
      
      { text: "HashSet", correct: false },
      { text: "LinkedList", correct: false },
      { text: "ArrayList", correct: true },
      { text: "TreeSet", correct: false }
    ]
  },
  {
    id: 3,
    question: "Which package contains Java's core collection framework?",
    answers: [
      { text: "java.util", correct: true },
      { text: "java.sql", correct: false },
      { text: "java.io", correct: false },
      { text: "java.lang", correct: false }
    ]
  },
  {
    id: 4,
    question: "Which method is called before an object is garbage collected?",
    answers: [
      
      { text: "destroy()", correct: false },
      { text: "close()", correct: false },
      { text: "exit()", correct: false },
      { text: "finalize()", correct: true }
    ]
  },
  {
    id: 5,
    question: "Which Java keyword is used for multiple inheritance via interfaces?",
    answers: [
      { text: "implements", correct: true },
      { text: "extends", correct: false },
      { text: "inherits", correct: false },
      { text: "instanceof", correct: false }
    ]
  },
  {
    id: 6,
    question: "Which stream class is used for handling primitive data types?",
    answers: [
      
      { text: "BufferedReader", correct: false },
      { text: "DataInputStream / DataOutputStream", correct: true },
      { text: "FileReader", correct: false },
      { text: "PrintWriter", correct: false }
    ]
  },
  {
    id: 7,
    question: "Which Java feature ensures platform independence?",
    answers: [
     
      { text: "Pointers", correct: false },
      { text: "Compiler directives", correct: false },
      { text: "Bytecode and JVM", correct: true },
      { text: "Virtual threads", correct: false }
    ]
  },
  {
    id: 8,
    question: "Which collection guarantees insertion order?",
    answers: [
      { text: "LinkedHashSet", correct: true },
      { text: "HashSet", correct: false },
      { text: "TreeSet", correct: false },
      { text: "PriorityQueue", correct: false }
    ]
  },
  {
    id: 9,
    question: "Which concurrency class provides a thread-safe queue?",
    answers: [
      
      { text: "ArrayList", correct: false },
      { text: "Vector", correct: false },
      { text: "ConcurrentLinkedQueue", correct: true },
      { text: "Stack", correct: false }
    ]
  },
  {
    id: 10,
    question: "Which keyword is used to define an enum in Java?",
    answers: [
      { text: "enum", correct: true },
      { text: "enumeration", correct: false },
      { text: "define", correct: false },
      { text: "constant", correct: false }
    ]
  },
  {
    id: 11,
    question: "Which Java class is immutable by design?",
    answers: [
      
      { text: "StringBuilder", correct: false },
      { text: "String", correct: true },
      { text: "StringBuffer", correct: false },
      { text: "CharSequence", correct: false }
    ]
  },
  {
    id: 12,
    question: "Which Java 8 feature allows functional-style programming?",
    answers: [
      { text: "Lambda expressions", correct: true },
      { text: "Generics", correct: false },
      { text: "Annotations", correct: false },
      { text: "Serialization", correct: false }
    ]
  },
  {
    id: 13,
    question: "Which interface must a class implement to be used in try-with-resources?",
    answers: [
      
      { text: "Serializable", correct: false },
      { text: "Runnable", correct: false },
      { text: "AutoCloseable", correct: true },
      { text: "Cloneable", correct: false }
    ]
  },
  {
    id: 14,
    question: "Which method starts a thread in Java?",
    answers: [
     
      { text: "run()", correct: false },
      { text: "start()", correct: true },
      { text: "execute()", correct: false },
      { text: "init()", correct: false }
    ]
  },
  {
    id: 15,
    question: "Which class handles arbitrary-precision integers?",
    answers: [
      { text: "BigInteger", correct: true },
      { text: "Integer", correct: false },
      { text: "Long", correct: false },
      { text: "Math", correct: false }
    ]
  },
  {
    id: 16,
    question: "Which Java class loads JDBC drivers automatically?",
    answers: [
      { text: "DriverManager", correct: true },
      { text: "Connection", correct: false },
      { text: "Statement", correct: false },
      { text: "ResultSet", correct: false }
    ]
  },
  {
    id: 17,
    question: "Which keyword is used to inherit from a class?",
    answers: [
     
      { text: "implements", correct: false },
      { text: "super", correct: false },
      { text: "extends", correct: true },
      { text: "this", correct: false }
    ]
  },
  {
    id: 18,
    question: "Which collection ensures sorted order?",
    answers: [
      { text: "TreeSet", correct: true },
      { text: "HashSet", correct: false },
      { text: "LinkedHashSet", correct: false },
      { text: "PriorityQueue", correct: false }
    ]
  },
  {
    id: 19,
    question: "Which interface defines a functional interface with one abstract method?",
    answers: [
      
      { text: "Serializable", correct: false },
      { text: "Cloneable", correct: false },
      { text: "FunctionalInterface", correct: true },
      { text: "Iterable", correct: false }
    ]
  },
  {
    id: 20,
    question: "Which keyword is used to call a parent class constructor?",
    answers: [
      
      { text: "this", correct: false },
      { text: "super", correct: true },
      { text: "extends", correct: false },
      { text: "parent", correct: false }
    ]
  },
  {
    id: 21,
    question: "Which exception is unchecked in Java?",
    answers: [
      { text: "NullPointerException", correct: true },
      { text: "IOException", correct: false },
      { text: "SQLException", correct: false },
      { text: "ClassNotFoundException", correct: false }
    ]
  },
  {
    id: 22,
    question: "Which class allows creation of parallel streams?",
    answers: [
      
      { text: "Collection", correct: false },
      { text: "Stream", correct: true },
      { text: "List", correct: false },
      { text: "Arrays", correct: false }
    ]
  },
  {
    id: 23,
    question: "Which Java feature provides runtime polymorphism?",
    answers: [
     
      { text: "Method overloading", correct: false },
      { text: "Encapsulation", correct: false },
     { text: "Method overriding", correct: true },
      { text: "Abstraction", correct: false }
    ]
  },
  {
    id: 24,
    question: "Which operator checks object type at runtime?",
    answers: [
      
      { text: "==", correct: false },
      { text: "instanceof", correct: true },
      { text: "equals", correct: false },
      { text: "compareTo", correct: false }
    ]
  },
  {
    id: 25,
    question: "Which Java collection is LIFO?",
    answers: [
      { text: "Stack", correct: true },
      { text: "Queue", correct: false },
      { text: "PriorityQueue", correct: false },
      { text: "Deque", correct: false }
    ]
  }
],
  pcep: [
  {
    id: 1,
    question: "What is the output of print(2 ** 3 ** 2) in Python?",
    answers: [
      
      { text: "64", correct: false },
      { text: "256", correct: false },
      { text: "72", correct: false },
      { text: "512", correct: true }
    ]
  },
  {
    id: 2,
    question: "Which keyword defines a function in Python?",
    answers: [
      { text: "def", correct: true },
      { text: "function", correct: false },
      { text: "func", correct: false },
      { text: "lambda", correct: false }
    ]
  },
  {
    id: 3,
    question: "What is the output of bool('False') in Python?",
    answers: [
      
      { text: "False", correct: false },
      { text: "None", correct: false },
      { text: "True", correct: true },
      { text: "Error", correct: false }
    ]
  },
  {
    id: 4,
    question: "Which operator is used for floor division?",
    answers: [
      
      { text: "/", correct: false },
      { text: "%", correct: false },
      { text: "//", correct: true },
      { text: "**", correct: false }
    ]
  },
  {
    id: 5,
    question: "Which function returns the length of a list?",
    answers: [
      { text: "len()", correct: true },
      { text: "count()", correct: false },
      { text: "size()", correct: false },
      { text: "length()", correct: false }
    ]
  },
  {
    id: 6,
    question: "Which method removes and returns the last element of a list?",
    answers: [
      
      { text: "remove()", correct: false },
      { text: "pop()", correct: true },
      { text: "discard()", correct: false },
      { text: "delete()", correct: false }
    ]
  },
  {
    id: 7,
    question: "Which keyword is used for exception handling?",
    answers: [
      { text: "try", correct: true },
      { text: "throw", correct: false },
      { text: "except", correct: false },
      { text: "final", correct: false }
    ]
  },
  {
    id: 8,
    question: "Which statement is used to terminate a loop?",
    answers: [
      
      { text: "exit", correct: false },
      { text: "stop", correct: false },
      { text: "break", correct: true },
      { text: "end", correct: false }
    ]
  },
  {
    id: 9,
    question: "Which function converts a string to an integer?",
    answers: [
      { text: "int()", correct: true },
      { text: "str()", correct: false },
      { text: "float()", correct: false },
      { text: "ord()", correct: false }
    ]
  },
  {
    id: 10,
    question: "Which data type is returned by input() in Python 3?",
    answers: [
      
      { text: "int", correct: false },
      { text: "str", correct: true },
      { text: "bool", correct: false },
      { text: "float", correct: false }
    ]
  },
  {
    id: 11,
    question: "Which collection type does not allow duplicates?",
    answers: [
      { text: "set", correct: true },
      { text: "list", correct: false },
      { text: "tuple", correct: false },
      { text: "dict", correct: false }
    ]
  },
  {
    id: 12,
    question: "What is the result of 'Python'[::-1]?",
    answers: [
      
      { text: "Python", correct: false },
      { text: "error", correct: false },
      { text: "nohtyP", correct: true },
      { text: "thonPy", correct: false }
    ]
  },
  {
    id: 13,
    question: "Which function returns the absolute value?",
    answers: [
      
      { text: "math()", correct: false },
      { text: "abs()", correct: true },
      { text: "fabs()", correct: false },
      { text: "sum()", correct: false }
    ]
  },
  {
    id: 14,
    question: "Which operator is used for exponentiation?",
    answers: [
      { text: "**", correct: true },
      { text: "^", correct: false },
      { text: "*", correct: false },
      { text: "//", correct: false }
    ]
  },
  {
    id: 15,
    question: "What is the output of type([])?",
    answers: [
      
      { text: "<class 'tuple'>", correct: false },
      { text: "<class 'list'>", correct: true },
      { text: "<class 'set'>", correct: false },
      { text: "<class 'dict'>", correct: false }
    ]
  },
  {
    id: 16,
    question: "Which function converts a number to a string?",
    answers: [
      
      { text: "repr()", correct: false },
      { text: "ord()", correct: false },
      { text: "str()", correct: true },
      { text: "chr()", correct: false }
    ]
  },
  {
    id: 17,
    question: "Which function returns Unicode code of a character?",
    answers: [
      { text: "ord()", correct: true },
      { text: "chr()", correct: false },
      { text: "ascii()", correct: false },
      { text: "code()", correct: false }
    ]
  },
  {
    id: 18,
    question: "Which keyword is used to define a class?",
    answers: [
      
      { text: "def", correct: false },
      { text: "struct", correct: false },
      { text: "class", correct: true },
      { text: "object", correct: false }
    ]
  },
  {
    id: 19,
    question: "Which function returns a list of numbers?",
    answers: [
      
      { text: "list()", correct: false },
      { text: "range()", correct: true },
      { text: "tuple()", correct: false },
      { text: "map()", correct: false }
    ]
  },
  {
    id: 20,
    question: "Which function sorts a list?",
    answers: [
      
      { text: "order()", correct: false },
      { text: "arrange()", correct: false },
      { text: "sorted()", correct: true },
      { text: "list.sort()", correct: false }
    ]
  },
  {
    id: 21,
    question: "What is the result of 5 == 5.0 in Python?",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
      { text: "None", correct: false },
      { text: "Error", correct: false }
    ]
  },
  {
    id: 22,
    question: "Which function returns the largest number in a list?",
    answers: [
      
      { text: "largest()", correct: false },
      { text: "max()", correct: true },
      { text: "top()", correct: false },
      { text: "high()", correct: false }
    ]
  },
  {
    id: 23,
    question: "Which keyword defines an empty block in Python?",
    answers: [
      
      { text: "continue", correct: false },
      { text: "skip", correct: false },
      { text: "none", correct: false },
      { text: "pass", correct: true }
    ]
  },
  {
    id: 24,
    question: "Which operator checks identity?",
    answers: [
      
      { text: "==", correct: false },
      { text: "!=", correct: false },
      { text: "is", correct: true },
      { text: "in", correct: false }
    ]
  },
  {
    id: 25,
    question: "Which statement is true about Python variables?",
    answers: [
      
      { text: "They must be declared with type", correct: false },
      { text: "They are dynamically typed", correct: true },
      { text: "They cannot be reassigned", correct: false },
      { text: "They must be constant", correct: false }
    ]
  }
],

    ceh: [
    {
      id: 1,
      question: "Which tool is primarily used for network sniffing?",
      answers: [
        { text: "Nmap", correct: false },
        { text: "Metasploit", correct: false },
        { text: "Wireshark", correct: true },
        { text: "Burp Suite", correct: false }
      ]
    },
    {
      id: 2,
      question: "Which attack involves injecting malicious SQL statements into an entry field?",
      answers: [
        { text: "Cross-Site Scripting (XSS)", correct: false },
        { text: "SQL Injection", correct: true },
        { text: "Phishing", correct: false },
        { text: "Denial of Service", correct: false }
      ]
    },
    {
      id: 3,
      question: "What does the ‘-sS’ flag in Nmap indicate?",
      answers: [
        
        { text: "Service version detection", correct: false },
        { text: "SYN scan", correct: true },
        { text: "Stealth scan", correct: false },
        { text: "Script scan", correct: false }
      ]
    },
    {
      id: 4,
      question: "Which type of malware disguises itself as legitimate software?",
      answers: [
        
        { text: "Worm", correct: false },
        { text: "Rootkit", correct: false },
        { text: "Trojan", correct: true },
        { text: "Ransomware", correct: false }
      ]
    },
    {
      id: 5,
      question: "What is the default port for HTTPS?",
      answers: [
        
        { text: "80", correct: false },
        { text: "443", correct: true },
        { text: "22", correct: false },
        { text: "21", correct: false }
      ]
    },
    {
      id: 6,
      question: "Which attack is mitigated by using salts in password hashing?",
      answers: [
        { text: "Rainbow table attack", correct: true },
        { text: "Phishing attack", correct: false },
        { text: "Buffer overflow", correct: false },
        { text: "ARP poisoning", correct: false }
      ]
    },
    {
      id: 7,
      question: "What does the tool John the Ripper do?",
      answers: [
        { text: "Password cracking", correct: true },
        { text: "Network scanning", correct: false },
        { text: "Exploit framework", correct: false },
        { text: "Packet capturing", correct: false }
      ]
    },
    {
      id: 8,
      question: "Which type of scan attempts all possible key combinations?",
      answers: [
       
        { text: "Dictionary attack", correct: false },
        { text: "Phishing attack", correct: false },
        { text: "Brute-force attack", correct: true },
        { text: "Replay attack", correct: false }
      ]
    },
    {
      id: 9,
      question: "Which protocol is commonly used for secure remote login?",
      answers: [
        
        { text: "Telnet", correct: false },
        { text: "SSH", correct: true },
        { text: "FTP", correct: false },
        { text: "SNMP", correct: false }
      ]
    },
    {
      id: 10,
      question: "Which tool is used for web application vulnerability scanning?",
      answers: [
        { text: "Burp Suite", correct: true },
        { text: "Wireshark", correct: false },
        { text: "Nmap", correct: false },
        { text: "Hydra", correct: false }
      ]
    },
    {
      id: 11,
      question: "What is the main purpose of a honeypot?",
      answers: [
       
        { text: "Encrypt sensitive data", correct: false },
        { text: "Speed up networks", correct: false },
        { text: "Detect and study attackers", correct: true },
        { text: "Serve as a firewall", correct: false }
      ]
    },
    {
      id: 12,
      question: "Which port does DNS typically use?",
      answers: [
        
        { text: "25", correct: false },
        { text: "53", correct: true },
        { text: "110", correct: false },
        { text: "443", correct: false }
      ]
    },
    {
      id: 13,
      question: "What type of attack captures session tokens?",
      answers: [
        { text: "Session hijacking", correct: true },
        { text: "SQL injection", correct: false },
        { text: "DNS poisoning", correct: false },
        { text: "Man-in-the-middle", correct: false }
      ]
    },
    {
      id: 14,
      question: "Which command lists active connections in Linux?",
      answers: [
        { text: "netstat", correct: true },
        { text: "ifconfig", correct: false },
        { text: "ls", correct: false },
        { text: "top", correct: false }
      ]
    },
    {
      id: 15,
      question: "Which type of encryption uses the same key for encryption and decryption?",
      answers: [
        
        { text: "Asymmetric encryption", correct: false },
        { text: "Symmetric encryption", correct: true },
        { text: "Hashing", correct: false },
        { text: "Salting", correct: false }
      ]
    },
    {
      id: 16,
      question: "Which wireless security protocol is the least secure?",
      answers: [
        { text: "WEP", correct: true },
        { text: "WPA2", correct: false },
        { text: "WPA3", correct: false },
        { text: "802.1X", correct: false }
      ]
    },
    {
      id: 17,
      question: "What is the purpose of a buffer overflow attack?",
      answers: [
        
        { text: "To flood a server with requests", correct: false },
        { text: "To capture network packets", correct: false },
        { text: "To exploit weak passwords", correct: false },
        { text: "To overwrite memory and execute malicious code", correct: true }
      ]
    },
    {
      id: 18,
      question: "Which type of scan checks for open UDP ports?",
      answers: [
       
        { text: "SYN scan", correct: false },
        { text: "ACK scan", correct: false },
        { text: "UDP scan", correct: true },
        { text: "FIN scan", correct: false }
      ]
    },
    {
      id: 19,
      question: "What is the main characteristic of a worm?",
      answers: [
        { text: "Self-replicates without user interaction", correct: true },
        { text: "Disguises as a legitimate program", correct: false },
        { text: "Requires a host file to spread", correct: false },
        { text: "Encrypts user data", correct: false }
      ]
    },
    {
      id: 20,
      question: "What is the function of ARP?",
      answers: [
        
        { text: "Encrypts network traffic", correct: false },
        { text: "Maps IP addresses to MAC addresses", correct: true },
        { text: "Transfers files securely", correct: false },
        { text: "Resolves domain names", correct: false }
      ]
    },
    {
      id: 21,
      question: "Which tool is used for brute-force login attempts?",
      answers: [
        
        { text: "Snort", correct: false },
        { text: "Hydra", correct: true },
        { text: "Nmap", correct: false },
        { text: "Wireshark", correct: false }
      ]
    },
    {
      id: 22,
      question: "What is social engineering?",
      answers: [
       
        { text: "Exploiting buffer overflow", correct: false },
        { text: "Infecting systems with worms", correct: false },
        { text: "Manipulating people to reveal confidential info", correct: true },
        { text: "Encrypting files with ransomware", correct: false }
      ]
    },
    {
      id: 23,
      question: "Which attack floods a target with ICMP packets?",
      answers: [
        { text: "Ping of Death", correct: true },
        { text: "Smurf Attack", correct: false },
        { text: "SYN Flood", correct: false },
        { text: "Teardrop Attack", correct: false }
      ]
    },
    {
      id: 24,
      question: "What does IDS stand for?",
      answers: [
        
        { text: "Internal Data Storage", correct: false },
        { text: "Internet Defense Software", correct: false },
        { text: "Intrusion Detection System", correct: true },
        { text: "Information Detection Service", correct: false }
      ]
    },
    {
      id: 25,
      question: "Which organization maintains the CVE database?",
      answers: [
        
        { text: "NIST", correct: false },
        { text: "MITRE", correct: true },
        { text: "ISO", correct: false },
        { text: "ICANN", correct: false }
      ]
    }
  ],

  "comptia-security": [
    {
      id: 1,
      question: "Which encryption algorithm is asymmetric?",
      answers: [
        { text: "AES", correct: false },
        { text: "RSA", correct: true },
        { text: "3DES", correct: false },
        { text: "Blowfish", correct: false }
      ]
    },
    {
      id: 2,
      question: "What does CIA in security stand for?",
      answers: [
        
        { text: "Control, Integrity, Access", correct: false },
        { text: "Confidential, Internal, Assurance", correct: false },
        { text: "Confidentiality, Integrity, Availability", correct: true },
        { text: "Cryptography, Integrity, Authentication", correct: false }
      ]
    },
    {
      id: 3,
      question: "Which security model enforces ‘no read up, no write down’?",
      answers: [
        
        { text: "Biba model", correct: false },
        { text: "Bell-LaPadula model", correct: true },
        { text: "Clark-Wilson model", correct: false },
        { text: "Lattice model", correct: false }
      ]
    },
    {
      id: 4,
      question: "What is the purpose of multi-factor authentication?",
      answers: [
        { text: "Increase security by requiring multiple verification factors", correct: true },
        { text: "Replace passwords", correct: false },
        { text: "Encrypt communications", correct: false },
        { text: "Track user activity", correct: false }
      ]
    },
    {
      id: 5,
      question: "Which port does HTTPS use by default?",
      answers: [
        
        { text: "80", correct: false },
        { text: "443", correct: true },
        { text: "21", correct: false },
        { text: "110", correct: false }
      ]
    },
    {
      id: 6,
      question: "What type of malware encrypts files and demands payment?",
      answers: [
        { text: "Ransomware", correct: true },
        { text: "Worm", correct: false },
        { text: "Rootkit", correct: false },
        { text: "Adware", correct: false }
      ]
    },
    {
      id: 7,
      question: "Which attack floods a network with traffic to disrupt service?",
      answers: [
        
        { text: "Phishing", correct: false },
        { text: "Man-in-the-Middle", correct: false },
        { text: "DDoS", correct: true },
        { text: "Privilege escalation", correct: false }
      ]
    },
    {
      id: 8,
      question: "Which security concept ensures data is not altered?",
      answers: [
        
        { text: "Confidentiality", correct: false },
        { text: "Integrity", correct: true },
        { text: "Availability", correct: false },
        { text: "Authentication", correct: false }
      ]
    },
    {
      id: 9,
      question: "What is the primary function of a firewall?",
      answers: [
        { text: "Control incoming and outgoing network traffic", correct: true },
        { text: "Encrypt all network packets", correct: false },
        { text: "Detect malware", correct: false },
        { text: "Block phishing emails", correct: false }
      ]
    },
    {
      id: 10,
      question: "Which wireless security protocol is the strongest?",
      answers: [
       
        { text: "WEP", correct: false },
        { text: "WPA", correct: false },
        { text: "WPA3", correct: true },
        { text: "WPA2", correct: false }
      ]
    },
    {
      id: 11,
      question: "What is the role of an IDS?",
      answers: [
        
        { text: "Block malicious traffic", correct: false },
        { text: "Detect suspicious activity", correct: true },
        { text: "Encrypt sensitive data", correct: false },
        { text: "Manage firewalls", correct: false }
      ]
    },
    {
      id: 12,
      question: "What is the default port for SMTP?",
      answers: [
        { text: "25", correct: true },
        { text: "110", correct: false },
        { text: "53", correct: false },
        { text: "143", correct: false }
      ]
    },
    {
      id: 13,
      question: "Which type of backup captures only changes since the last backup?",
      answers: [
        
        { text: "Full backup", correct: false },
        { text: "Differential backup", correct: false },
        { text: "Mirror backup", correct: false },
        { text: "Incremental backup", correct: true },
      ]
    },
    {
      id: 14,
      question: "What is the primary purpose of hashing?",
      answers: [
        { text: "Ensure data integrity", correct: true },
        { text: "Encrypt passwords", correct: false },
        { text: "Compress files", correct: false },
        { text: "Replace digital certificates", correct: false }
      ]
    },
    {
      id: 15,
      question: "Which principle gives users the minimum access rights they need?",
      answers: [
        
        { text: "Role-based access", correct: false },
        { text: "Least privilege", correct: true },
        { text: "Mandatory access", correct: false },
        { text: "Discretionary access", correct: false }
      ]
    },
    {
      id: 16,
      question: "Which malware hides its presence by modifying the OS?",
      answers: [
       
        { text: "Trojan", correct: false },
        { text: "Spyware", correct: false },
        { text: "Rootkit", correct: true },
        { text: "Adware", correct: false }
      ]
    },
    {
      id: 17,
      question: "What is the purpose of a DMZ in networking?",
      answers: [
        { text: "Separate internal network from untrusted external network", correct: true },
        { text: "Provide encrypted VPN services", correct: false },
        { text: "Boost internet speed", correct: false },
        { text: "Monitor employee activity", correct: false }
      ]
    },
    {
      id: 18,
      question: "Which type of control is antivirus software?",
      answers: [
        { text: "Preventive", correct: false },
        { text: "Detective", correct: true },
        { text: "Corrective", correct: false },
        { text: "Compensating", correct: false }
      ]
    },
    {
      id: 19,
      question: "Which certificate format uses .pem extension?",
      answers: [
        
        { text: "Binary DER", correct: false },
        { text: "Base64 encoded", correct: true },
        { text: "PKCS#7", correct: false },
        { text: "PKCS#12", correct: false }
      ]
    },
    {
      id: 20,
      question: "What is the function of DNSSEC?",
      answers: [
        { text: "Ensure integrity and authenticity of DNS responses", correct: true },
        { text: "Encrypt DNS queries", correct: false },
        { text: "Speed up DNS resolution", correct: false },
        { text: "Hide DNS records", correct: false }
      ]
    },
    {
      id: 21,
      question: "Which attack exploits simultaneous use of multiple logins?",
      answers: [
       
        { text: "Brute force", correct: false },
        { text: "Replay attack", correct: false },
        { text: "Phishing", correct: false },
         { text: "Password spraying", correct: true },
      ]
    },
    {
      id: 22,
      question: "Which authentication factor is a fingerprint?",
      answers: [
        { text: "Something you are", correct: true },
        { text: "Something you have", correct: false },
        { text: "Something you know", correct: false },
        { text: "Somewhere you are", correct: false }
      ]
    },
    {
      id: 23,
      question: "Which protocol is used for time synchronization?",
      answers: [
        
        { text: "SNMP", correct: false },
        { text: "SMTP", correct: false },
        { text: "NTP", correct: true },
        { text: "FTP", correct: false }
      ]
    },
    {
      id: 24,
      question: "Which attack involves exploiting weak session IDs?",
      answers: [
        
        { text: "Man-in-the-Middle", correct: false },
        { text: "Session hijacking", correct: true },
        { text: "Brute force", correct: false },
        { text: "DNS poisoning", correct: false }
      ]
    },
    {
      id: 25,
      question: "What does PKI stand for?",
      answers: [
        { text: "Public Key Infrastructure", correct: true },
        { text: "Private Key Integration", correct: false },
        { text: "Protected Key Index", correct: false },
        { text: "Public Knowledge Interface" , correct: false }
      ]
    },
  ],

  uml: [
    {
      id: 1,
      question: "Which UML diagram shows object interactions in time sequence?",
      answers: [
        
        { text: "Class Diagram", correct: false },
        { text: "Use Case Diagram", correct: false },
        { text: "Sequence Diagram", correct: true },
        { text: "Activity Diagram", correct: false }
      ]
    },
    {
      id: 2,
      question: "Which UML diagram is best for modeling system requirements?",
      answers: [
        
        { text: "Sequence Diagram", correct: false },
        { text: "Use Case Diagram", correct: true },
        { text: "Deployment Diagram", correct: false },
        { text: "Component Diagram", correct: false }
      ]
    },
    {
      id: 3,
      question: "In UML, what does a solid line with a hollow arrowhead represent?",
      answers: [
        { text: "Generalization", correct: true },
        { text: "Association", correct: false },
        { text: "Aggregation", correct: false },
        { text: "Dependency", correct: false }
      ]
    },
    {
      id: 4,
      question: "Which diagram models the physical deployment of software artifacts?",
      answers: [
        
        { text: "Component Diagram", correct: false },
        { text: "Deployment Diagram", correct: true },
        { text: "Class Diagram", correct: false },
        { text: "Object Diagram", correct: false }
      ]
    },
    {
      id: 5,
      question: "What does a filled diamond represent in UML?",
      answers: [
        
        { text: "Aggregation", correct: false },
        { text: "Association", correct: false },
        { text: "Composition", correct: true },
        { text: "Dependency", correct: false }
      ]
    },
    {
      id: 6,
      question: "Which UML diagram is used to show system behavior over time?",
      answers: [
        
        { text: "Class Diagram", correct: false },
        { text: "State Machine Diagram", correct: true },
        { text: "Component Diagram", correct: false },
        { text: "Object Diagram", correct: false }
      ]
    },
    {
      id: 7,
      question: "Which UML diagram best represents workflows and processes?",
      answers: [
        { text: "Activity Diagram", correct: true },
        { text: "Sequence Diagram", correct: false },
        { text: "Class Diagram", correct: false },
        { text: "Deployment Diagram", correct: false }
      ]
    },
    {
      id: 8,
      question: "In UML, what does a dashed arrow represent?",
      answers: [
        
        { text: "Association", correct: false },
        { text: "Generalization", correct: false },
        { text: "Composition", correct: false },
        { text: "Dependency", correct: true },
      ]
    },
    {
      id: 9,
      question: "Which diagram shows the structure of a system using classes and relationships?",
      answers: [
        
        { text: "Sequence Diagram", correct: false },
        { text: "Class Diagram", correct: true },
        { text: "Activity Diagram", correct: false },
        { text: "Component Diagram", correct: false }
      ]
    },
    {
      id: 10,
      question: "Which diagram emphasizes system modules and their organization?",
      answers: [
        
        { text: "Use Case Diagram", correct: false },
        { text: "Sequence Diagram", correct: false },
        { text: "Component Diagram", correct: true },
        { text: "Activity Diagram", correct: false }
      ]
    },
    {
      id: 11,
      question: "What is represented by a lifeline in a sequence diagram?",
      answers: [
        { text: "An object or actor over time", correct: true },
        { text: "A state transition", correct: false },
        { text: "A workflow process", correct: false },
        { text: "A class relationship", correct: false }
      ]
    },
    {
      id: 12,
      question: "Which diagram shows scenarios of system usage from the user’s perspective?",
      answers: [
        
        { text: "State Diagram", correct: false },
        { text: "Use Case Diagram", correct: true },
        { text: "Activity Diagram", correct: false },
        { text: "Sequence Diagram", correct: false }
      ]
    },
    {
      id: 13,
      question: "What does a hollow diamond represent in UML?",
      answers: [
        { text: "Aggregation", correct: true },
        { text: "Composition", correct: false },
        { text: "Generalization", correct: false },
        { text: "Dependency", correct: false }
      ]
    },
    {
      id: 14,
      question: "Which UML diagram helps in modeling database schemas?",
      answers: [
        
        { text: "Sequence Diagram", correct: false },
        { text: "Activity Diagram", correct: false },
        { text: "Use Case Diagram", correct: false },
        { text: "Class Diagram", correct: true }
      ]
    },
    {
      id: 15,
      question: "Which UML diagram focuses on message passing between objects?",
      answers: [
        
        { text: "Activity Diagram", correct: false },
        { text: "Deployment Diagram", correct: false },
        { text: "Sequence Diagram", correct: true },
        { text: "Component Diagram", correct: false }
      ]
    },
    {
      id: 16,
      question: "In UML, which element represents the responsibilities of a class?",
      answers: [
        { text: "Operations", correct: true },
        { text: "Associations", correct: false },
        { text: "Dependencies", correct: false },
        { text: "Artifacts", correct: false }
      ]
    },
    {
      id: 17,
      question: "Which UML diagram would you use to show conditional branching?",
      answers: [
       
        { text: "Sequence Diagram", correct: false },
        { text: "Activity Diagram", correct: true },
        { text: "Use Case Diagram", correct: false },
        { text: "Deployment Diagram", correct: false }
      ]
    },
    {
      id: 18,
      question: "What is represented by a note in UML diagrams?",
      answers: [
        { text: "Additional explanation", correct: true },
        { text: "Dependency", correct: false },
        { text: "Association", correct: false },
        { text: "Aggregation", correct: false }
      ]
    },
    {
      id: 19,
      question: "Which diagram is most useful for system architects?",
      answers: [
        
        { text: "Class Diagram", correct: false },
        { text: "Sequence Diagram", correct: false },
        { text: "Component Diagram", correct: true },
        { text: "State Machine Diagram", correct: false }
      ]
    },
    {
      id: 20,
      question: "Which UML diagram shows system states and transitions?",
      answers: [
        
        { text: "Use Case Diagram", correct: false },
        { text: "State Machine Diagram", correct: true },
        { text: "Class Diagram", correct: false },
        { text: "Activity Diagram", correct: false }
      ]
    },
    {
      id: 21,
      question: "What is the main purpose of a package diagram?",
      answers: [
        { text: "Group related elements", correct: true },
        { text: "Show workflows", correct: false },
        { text: "Describe lifelines", correct: false },
        { text: "Define states", correct: false }
      ]
    },
    {
      id: 22,
      question: "Which UML diagram models interactions focusing on data flow?",
      answers: [
        
        { text: "Sequence Diagram", correct: false },
        { text: "Activity Diagram", correct: false },
        { text: "Deployment Diagram", correct: false },
        { text: "Communication Diagram", correct: true }
      ]
    },
    {
      id: 23,
      question: "Which UML diagram can be used to model real-time systems?",
      answers: [
        
        { text: "Activity Diagram", correct: false },
        { text: "Class Diagram", correct: false },
        { text: "State Machine Diagram", correct: true },
        { text: "Component Diagram", correct: false }
      ]
    },
    {
      id: 24,
      question: "What does an actor represent in a UML use case diagram?",
      answers: [
        
        { text: "A software module", correct: false },
        { text: "A role interacting with the system", correct: true },
        { text: "A workflow", correct: false },
        { text: "A dependency", correct: false }
      ]
    },
    {
      id: 25,
      question: "Which UML diagram can illustrate both static and dynamic aspects of a system?",
      answers: [
        { text: "Composite Structure Diagram", correct: true },
        { text: "Sequence Diagram", correct: false },
        { text: "Deployment Diagram", correct: false },
        { text: "Activity Diagram", correct: false }
      ]
    }
  ],

  "tosa-js": [
    {
      id: 1,
      question: "What is the output of console.log(typeof null) in JavaScript?",
      answers: [
        { text: "'null'", correct: false },
        { text: "'undefined'", correct: false },
        { text: "'object'", correct: true },
        { text: "'string'", correct: false }
      ]
    },
    {
      id: 2,
      question: "Which method converts a JSON string into a JavaScript object?",
      answers: [
        
        { text: "JSON.stringify()", correct: false },
        { text: "Object.assign()", correct: false },
        { text: "eval()", correct: false },
        { text: "JSON.parse()", correct: true },
      ]
    },
    {
      id: 3,
      question: "Which keyword declares a block-scoped variable?",
      answers: [
        { text: "let", correct: true },
        { text: "var", correct: false },
        { text: "const", correct: false },
        { text: "define", correct: false }
      ]
    },
    {
      id: 4,
      question: "What will console.log([1,2,3] + [4,5]) output?",
      answers: [
       
        { text: "'[1,2,3,4,5]'", correct: false },
        { text: "'NaN'", correct: false },
        { text: "'1,2,34,5'", correct: true },
        { text: "'Error'", correct: false }
      ]
    },
    {
      id: 5,
      question: "Which operator is used for strict equality?",
      answers: [
        
        { text: "==", correct: false },
        { text: "===", correct: true },
        { text: "=", correct: false },
        { text: "!==", correct: false }
      ]
    },
    {
      id: 6,
      question: "What is the default value of uninitialized variables?",
      answers: [
        { text: "undefined", correct: true },
        { text: "null", correct: false },
        { text: "0", correct: false },
        { text: "false", correct: false }
      ]
    },
    {
      id: 7,
      question: "Which method adds one or more elements to the end of an array?",
      answers: [
        
        { text: "pop()", correct: false },
        { text: "shift()", correct: false },
        { text: "concat()", correct: false },
        { text: "push()", correct: true }
      ]
    },
    {
      id: 8,
      question: "Which keyword prevents reassignment of a variable?",
      answers: [
        
        { text: "let", correct: false },
        { text: "var", correct: false },
        { text: "const", correct: true },
        { text: "final", correct: false }
      ]
    },
    {
      id: 9,
      question: "What is the output of typeof NaN?",
      answers: [
       
        { text: "'NaN'", correct: false },
        { text: "'number'", correct: true },
        { text: "'undefined'", correct: false },
        { text: "'object'", correct: false }
      ]
    },
    {
      id: 10,
      question: "Which method removes the first element from an array?",
      answers: [
        { text: "shift()", correct: true },
        { text: "pop()", correct: false },
        { text: "splice()", correct: false },
        { text: "slice()", correct: false }
      ]
    },
    {
      id: 11,
      question: "Which statement about arrow functions is true?",
      answers: [
        
        { text: "They require the 'function' keyword", correct: false },
        { text: "They do not have their own 'this'", correct: true },
        { text: "They can be used as constructors", correct: false },
        { text: "They always require return keyword", correct: false }
      ]
    },
    {
      id: 12,
      question: "Which method creates a shallow copy of an object?",
      answers: [
        { text: "Object.assign()", correct: true },
        { text: "Object.clone()", correct: false },
        { text: "copy()", correct: false },
        { text: "JSON.parse()", correct: false }
      ]
    },
    {
      id: 13,
      question: "What does '===' check in JavaScript?",
      answers: [
        
        { text: "Only value equality", correct: false },
        { text: "Only type equality", correct: false },
        { text: "Value and type equality", correct: true },
        { text: "Reference equality only", correct: false }
      ]
    },
    {
      id: 14,
      question: "Which built-in method sorts elements of an array?",
      answers: [
        { text: "sort()", correct: true },
        { text: "order()", correct: false },
        { text: "arrange()", correct: false },
        { text: "filter()", correct: false }
      ]
    },
    {
      id: 15,
      question: "Which JavaScript method is used to execute code after a delay?",
      answers: [
        
        { text: "setInterval()", correct: false },
        { text: "setTimeout()", correct: true },
        { text: "wait()", correct: false },
        { text: "sleep()", correct: false }
      ]
    },
    {
      id: 16,
      question: "Which operator is used for optional chaining?",
      answers: [
        { text: "?.", correct: true },
        { text: "??", correct: false },
        { text: "::", correct: false },
        { text: "=>", correct: false }
      ]
    },
    {
      id: 17,
      question: "Which method returns a new array with elements that pass a test?",
      answers: [
        
        { text: "map()", correct: false },
        { text: "reduce()", correct: false },
        { text: "forEach()", correct: false },
        { text: "filter()", correct: true }
      ]
    },
    {
      id: 18,
      question: "Which statement about promises is true?",
      answers: [
        { text: "They represent the eventual completion of an async operation", correct: true },
        { text: "They block execution until resolved", correct: false },
        { text: "They are only used in synchronous code", correct: false },
        { text: "They always reject on error", correct: false }
      ]
    },
    {
      id: 19,
      question: "Which symbol is used for the nullish coalescing operator?",
      answers: [
       
        { text: "?.", correct: false },
        { text: "||", correct: false },
        { text: "??", correct: true },
        { text: "&&", correct: false }
      ]
    },
    {
      id: 20,
      question: "Which JavaScript loop is best for iterating over object properties?",
      answers: [
        { text: "for...in", correct: true },
        { text: "for...of", correct: false },
        { text: "while", correct: false },
        { text: "do...while", correct: false }
      ]
    },
    {
      id: 21,
      question: "What is the output of Boolean('false')?",
      answers: [
        
        { text: "false", correct: false },
        { text: "true", correct: true },
        { text: "undefined", correct: false },
        { text: "null", correct: false }
      ]
    },
    {
      id: 22,
      question: "Which object is the root of the JavaScript DOM?",
      answers: [
        { text: "document", correct: true },
        { text: "window", correct: false },
        { text: "html", correct: false },
        { text: "body", correct: false }
      ]
    },
    {
      id: 23,
      question: "Which method converts an array into a string?",
      answers: [
        
        { text: "split()", correct: false },
        { text: "concat()", correct: false },
        { text: "join()", correct: true },
        { text: "stringify()", correct: false }
      ]
    },
    {
      id: 24,
      question: "What does the 'use strict' directive do?",
      answers: [
        { text: "Enforces stricter parsing and error handling", correct: true },
        { text: "Enables debugging mode", correct: false },
        { text: "Improves performance automatically", correct: false },
        { text: "Allows private variables", correct: false }
      ]
    },
    {
      id: 25,
      question: "Which keyword is used to handle exceptions in JavaScript?",
      answers: [
        
        { text: "handle", correct: false },
        { text: "try...catch", correct: true },
        { text: "except", correct: false },
        { text: "throwError", correct: false }
      ]
    }
  ]
};

// Get questions for a specific exam
export const getExamQuestions = (examId: string): Question[] => {
  return certificationQuestions[examId] || [];
};