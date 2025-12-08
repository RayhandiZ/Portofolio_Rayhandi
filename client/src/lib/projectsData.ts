import type { Project } from "@shared/schema";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    fullDescription:
      "A comprehensive e-commerce platform designed to handle all aspects of online retail. The system includes a modern customer-facing storefront, a robust admin dashboard for inventory and order management, and seamless integration with payment gateways for secure transactions.",
    category: "Web Development",
    image: "",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript", "Tailwind CSS"],
    features: [
      "Product catalog with advanced search and filtering",
      "Shopping cart with real-time updates",
      "Secure checkout with Stripe integration",
      "Admin dashboard for inventory management",
      "Order tracking and notification system",
      "User authentication and profile management"
    ],
    challenges:
      "The main challenge was implementing a real-time inventory system that could handle concurrent orders while preventing overselling. Additionally, optimizing the product search to handle thousands of items required careful database indexing and caching strategies.",
    solution:
      "Implemented optimistic UI updates with server-side validation, used database transactions for order processing, and added Redis caching for frequently accessed product data. The search functionality was enhanced with PostgreSQL full-text search capabilities.",
    results:
      "The platform successfully handles over 1000 daily transactions with 99.9% uptime. Page load times improved by 60% after implementing caching, and the admin dashboard reduced inventory management time by 40%.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Sales Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing sales data, trends, and predictive analytics.",
    fullDescription:
      "An advanced analytics platform that transforms raw sales data into actionable business insights. The dashboard provides real-time visualization of key metrics, trend analysis, and predictive forecasting to help businesses make data-driven decisions.",
    category: "Data Analysis",
    image: "",
    technologies: ["Python", "Pandas", "Plotly", "SQL", "FastAPI", "React"],
    features: [
      "Real-time sales metrics visualization",
      "Interactive charts with drill-down capabilities",
      "Trend analysis with customizable date ranges",
      "Predictive sales forecasting using ML models",
      "Automated report generation and scheduling",
      "Role-based access control for teams"
    ],
    challenges:
      "Processing large volumes of historical sales data in real-time while maintaining dashboard responsiveness was a significant challenge. The predictive models needed to be accurate while remaining computationally efficient.",
    solution:
      "Implemented data aggregation pipelines that pre-compute common metrics, used Apache Arrow for efficient data transfer between backend and frontend, and optimized ML models using feature selection and ensemble methods.",
    results:
      "The dashboard processes over 1 million data points in under 2 seconds. Sales forecasting accuracy improved to 92%, helping the client increase revenue by 15% through better inventory planning.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "ETL Data Pipeline",
    description:
      "Automated data pipeline for processing and transforming large datasets from multiple sources.",
    fullDescription:
      "A robust ETL (Extract, Transform, Load) pipeline system designed to handle complex data integration needs. The pipeline automates the collection, transformation, and loading of data from various sources into a centralized data warehouse.",
    category: "Data Engineering",
    image: "",
    technologies: ["Apache Airflow", "Python", "Spark", "AWS S3", "Redshift", "Docker"],
    features: [
      "Automated data extraction from multiple sources",
      "Configurable transformation rules",
      "Incremental loading with change data capture",
      "Error handling and automatic retry mechanisms",
      "Monitoring dashboard with alerts",
      "Scalable processing with Apache Spark"
    ],
    challenges:
      "Handling data from heterogeneous sources with varying formats and update frequencies required a flexible architecture. Ensuring data quality and maintaining pipeline reliability during failures was critical.",
    solution:
      "Designed a modular pipeline architecture using Apache Airflow for orchestration, implemented data quality checks at each stage, and used Apache Spark for distributed processing of large datasets.",
    results:
      "The pipeline processes 50GB of data daily with 99.5% reliability. Data freshness improved from 24 hours to 1 hour, enabling near real-time analytics for business users.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Inventory Management System",
    description:
      "Database-driven inventory system with real-time tracking and automated reordering.",
    fullDescription:
      "A comprehensive inventory management solution that provides complete visibility into stock levels, automates reordering processes, and integrates with existing business systems. The system is designed for scalability and can handle multi-location inventory tracking.",
    category: "Database",
    image: "",
    technologies: ["MySQL", "Express", "React", "Docker", "Redis", "TypeScript"],
    features: [
      "Real-time stock level monitoring",
      "Automated low-stock alerts and reordering",
      "Barcode scanning integration",
      "Multi-location inventory tracking",
      "Historical data analysis and reporting",
      "Supplier management module"
    ],
    challenges:
      "Designing a database schema that could efficiently handle high-frequency stock updates while maintaining data consistency across multiple locations was challenging. The system also needed to integrate with legacy ERP systems.",
    solution:
      "Implemented a normalized database schema with strategic denormalization for read-heavy operations, used database triggers for maintaining aggregate counts, and created a REST API layer for ERP integration.",
    results:
      "Stock accuracy improved to 99.8%, reducing stockouts by 75%. The automated reordering system saved 20 hours per week in manual ordering tasks.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team features.",
    fullDescription:
      "A modern task management platform built for team collaboration. The application features real-time updates, customizable workflows, and integrations with popular productivity tools to streamline project management.",
    category: "Web Development",
    image: "",
    technologies: ["Next.js", "Prisma", "TypeScript", "Tailwind", "WebSocket", "PostgreSQL"],
    features: [
      "Kanban boards with drag-and-drop",
      "Real-time collaboration with live updates",
      "Customizable task statuses and workflows",
      "Time tracking and reporting",
      "File attachments and comments",
      "Team member assignments and notifications"
    ],
    challenges:
      "Implementing real-time collaboration without conflicts when multiple users edit the same board simultaneously required careful consideration of state management and conflict resolution strategies.",
    solution:
      "Used WebSocket connections for real-time updates, implemented optimistic UI updates with conflict resolution, and designed a robust state synchronization mechanism based on operational transformation principles.",
    results:
      "The app supports teams of up to 50 users with seamless real-time collaboration. User feedback shows a 30% improvement in task completion rates compared to their previous tools.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Customer Segmentation Analysis",
    description:
      "Machine learning project for customer segmentation and behavior analysis.",
    fullDescription:
      "An advanced analytics project that uses machine learning to segment customers based on their behavior, preferences, and value to the business. The insights generated help marketing teams create targeted campaigns and improve customer retention.",
    category: "Data Analysis",
    image: "",
    technologies: ["Python", "Scikit-learn", "Jupyter", "Tableau", "K-means", "Pandas"],
    features: [
      "RFM (Recency, Frequency, Monetary) analysis",
      "K-means clustering for customer segments",
      "Behavioral pattern identification",
      "Interactive visualization dashboards",
      "Automated segment updates with new data",
      "Integration with marketing platforms"
    ],
    challenges:
      "Finding the optimal number of customer segments and ensuring the segments are actionable for marketing teams required iterative refinement. The model also needed to handle imbalanced customer data.",
    solution:
      "Used the elbow method and silhouette scores to determine optimal cluster numbers, incorporated business domain knowledge to refine segments, and implemented SMOTE for handling imbalanced data in churn prediction models.",
    results:
      "Identified 5 distinct customer segments that increased marketing ROI by 25%. The targeted campaigns based on segments showed a 40% higher conversion rate compared to generic campaigns.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}
