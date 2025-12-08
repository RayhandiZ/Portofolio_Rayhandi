import type { BlogPost } from "@shared/schema";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Data Engineering: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of data engineering, including ETL pipelines, data warehousing, and the tools you need to get started.",
    content: `
# Getting Started with Data Engineering: A Beginner's Guide

Data engineering is one of the most exciting and rapidly growing fields in technology. As organizations collect more data than ever before, the need for skilled professionals who can build and maintain data infrastructure has never been greater.

## What is Data Engineering?

Data engineering is the practice of designing, building, and maintaining the systems and architecture that allow organizations to collect, store, and analyze data at scale. Unlike data scientists who focus on extracting insights from data, data engineers focus on making sure that data is accessible, reliable, and ready for analysis.

## Core Concepts

### ETL Pipelines

ETL stands for Extract, Transform, Load. These pipelines are the backbone of data engineering:

- **Extract**: Collecting data from various sources (databases, APIs, files)
- **Transform**: Cleaning, validating, and restructuring data
- **Load**: Storing the processed data in a target system

### Data Warehousing

A data warehouse is a central repository for integrated data from multiple sources. Modern data warehouses like Snowflake, Redshift, and BigQuery offer:

- Scalable storage and compute
- SQL-based querying
- Integration with BI tools

### Data Quality

Ensuring data quality is crucial. This includes:

- Data validation and testing
- Monitoring for anomalies
- Documentation and lineage tracking

## Essential Tools

Here are some tools every aspiring data engineer should learn:

1. **Python** - For scripting and automation
2. **SQL** - For querying databases
3. **Apache Airflow** - For workflow orchestration
4. **Apache Spark** - For big data processing
5. **Docker** - For containerization

## Getting Started

To begin your data engineering journey:

1. Master SQL fundamentals
2. Learn Python programming
3. Understand database concepts
4. Practice building simple ETL pipelines
5. Explore cloud platforms (AWS, GCP, Azure)

The field is constantly evolving, so continuous learning is essential. Start with small projects and gradually take on more complex challenges.
    `,
    category: "Data Engineering",
    author: "Rayhandi Zulmi",
    date: "2024-12-01",
    readTime: "8 min read",
    tags: ["Data Engineering", "ETL", "Beginner", "Career"],
  },
  {
    id: "2",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "A comprehensive guide to building production-ready REST APIs that can handle millions of requests.",
    content: `
# Building Scalable APIs with Node.js and Express

Creating APIs that can scale to handle millions of requests requires careful planning and the right architectural decisions. In this article, we'll explore best practices for building robust APIs with Node.js and Express.

## Project Structure

A well-organized project structure is the foundation of maintainable code:

\`\`\`
src/
├── controllers/    # Request handlers
├── services/       # Business logic
├── models/         # Data models
├── middleware/     # Custom middleware
├── routes/         # Route definitions
├── utils/          # Helper functions
└── config/         # Configuration files
\`\`\`

## Best Practices

### 1. Use Middleware Effectively

Middleware functions are the backbone of Express applications:

\`\`\`javascript
const requestLogger = (req, res, next) => {
  console.log(\`\${req.method} \${req.path}\`);
  next();
};

app.use(requestLogger);
\`\`\`

### 2. Implement Proper Error Handling

Centralized error handling makes debugging easier:

\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

### 3. Use Rate Limiting

Protect your API from abuse:

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
\`\`\`

## Performance Optimization

- Use caching (Redis) for frequently accessed data
- Implement database connection pooling
- Use compression middleware
- Consider horizontal scaling with load balancers

## Security Considerations

- Always validate input data
- Use HTTPS in production
- Implement authentication and authorization
- Keep dependencies updated
- Use helmet.js for security headers

Building scalable APIs is both an art and a science. Start with these fundamentals and iterate based on your specific needs.
    `,
    category: "Web Development",
    author: "Rayhandi Zulmi",
    date: "2024-11-25",
    readTime: "10 min read",
    tags: ["Node.js", "Express", "API", "Backend"],
  },
  {
    id: "3",
    title: "SQL Optimization Techniques for Better Database Performance",
    excerpt:
      "Learn how to write efficient SQL queries and optimize database performance for faster applications.",
    content: `
# SQL Optimization Techniques for Better Database Performance

Slow database queries can cripple application performance. Understanding how to write efficient SQL and optimize your database is crucial for building fast applications.

## Understanding Query Execution

Before optimizing, you need to understand how your queries execute. Use EXPLAIN ANALYZE:

\`\`\`sql
EXPLAIN ANALYZE
SELECT * FROM orders
WHERE customer_id = 123
ORDER BY created_at DESC;
\`\`\`

## Indexing Strategies

### When to Use Indexes

- Columns used in WHERE clauses
- Columns used in JOIN conditions
- Columns used in ORDER BY

### Creating Effective Indexes

\`\`\`sql
-- Single column index
CREATE INDEX idx_customer_id ON orders(customer_id);

-- Composite index
CREATE INDEX idx_customer_date ON orders(customer_id, created_at);

-- Partial index
CREATE INDEX idx_active_users ON users(email) WHERE active = true;
\`\`\`

## Query Optimization Tips

### 1. Select Only What You Need

\`\`\`sql
-- Bad
SELECT * FROM users;

-- Good
SELECT id, name, email FROM users;
\`\`\`

### 2. Use JOINs Instead of Subqueries

\`\`\`sql
-- Less efficient
SELECT * FROM orders
WHERE customer_id IN (SELECT id FROM customers WHERE country = 'ID');

-- More efficient
SELECT o.* FROM orders o
JOIN customers c ON o.customer_id = c.id
WHERE c.country = 'ID';
\`\`\`

### 3. Avoid Functions on Indexed Columns

\`\`\`sql
-- Index won't be used
SELECT * FROM orders WHERE YEAR(created_at) = 2024;

-- Index can be used
SELECT * FROM orders
WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01';
\`\`\`

## Monitoring and Maintenance

- Regularly analyze slow query logs
- Update statistics with ANALYZE
- Consider partitioning large tables
- Monitor index usage and remove unused indexes

Database optimization is an ongoing process. Regular monitoring and tuning ensure your applications remain fast and responsive.
    `,
    category: "Database",
    author: "Rayhandi Zulmi",
    date: "2024-11-20",
    readTime: "7 min read",
    tags: ["SQL", "Database", "Performance", "PostgreSQL"],
  },
  {
    id: "4",
    title: "Introduction to Data Analysis with Python and Pandas",
    excerpt:
      "Master the fundamentals of data analysis using Python's most powerful data manipulation library.",
    content: `
# Introduction to Data Analysis with Python and Pandas

Pandas is the go-to library for data analysis in Python. Whether you're cleaning data, performing exploratory analysis, or preparing data for machine learning, Pandas has you covered.

## Getting Started

First, install Pandas:

\`\`\`bash
pip install pandas numpy
\`\`\`

## Core Data Structures

### DataFrame

A DataFrame is a 2-dimensional labeled data structure:

\`\`\`python
import pandas as pd

df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['Jakarta', 'Surabaya', 'Bandung']
})
\`\`\`

## Essential Operations

### Reading Data

\`\`\`python
# From CSV
df = pd.read_csv('data.csv')

# From Excel
df = pd.read_excel('data.xlsx')

# From SQL
df = pd.read_sql('SELECT * FROM users', connection)
\`\`\`

### Data Exploration

\`\`\`python
# First few rows
df.head()

# Basic statistics
df.describe()

# Data types
df.dtypes

# Missing values
df.isnull().sum()
\`\`\`

### Data Cleaning

\`\`\`python
# Remove duplicates
df = df.drop_duplicates()

# Fill missing values
df['column'] = df['column'].fillna(0)

# Remove rows with missing values
df = df.dropna()
\`\`\`

### Data Transformation

\`\`\`python
# Filter rows
df_filtered = df[df['age'] > 25]

# Group and aggregate
df_grouped = df.groupby('city')['sales'].sum()

# Create new columns
df['age_group'] = df['age'].apply(lambda x: 'Young' if x < 30 else 'Senior')
\`\`\`

## Visualization

Pandas integrates well with matplotlib:

\`\`\`python
import matplotlib.pyplot as plt

df['sales'].plot(kind='bar')
plt.show()
\`\`\`

Pandas is incredibly powerful and flexible. Start with these basics and explore more advanced features as you grow.
    `,
    category: "Data Analysis",
    author: "Rayhandi Zulmi",
    date: "2024-11-15",
    readTime: "9 min read",
    tags: ["Python", "Pandas", "Data Analysis", "Tutorial"],
  },
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}
