import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    wasabi,
    entellisoft,
    df,
    readmission,
    moodjournal,
    dbmigration,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Engineer",
      icon: web,
    },
    {
      title: "DevOps Engineer",
      icon: mobile,
    },
    {
      title: "MLOps Engineer", 
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Wasabi Technologies",
      icon: wasabi,
      iconBg: "#383E56",
      date: "May 2024 - Dec 2024",
      points: [
        "Integrated Terragrunt to create DRY Terraform infrastructure code, improving resource definition efficiency by 62.5%.",
        "Enhanced an internal deployment tool using Golang and added Slack integration for real-time deployment updates.",
        "Automated Kubernetes-based test cluster provisioning using Ansible and Proxmox VMs.",
        "Built fuzzy filtering into a CLI tool using Bubble Tea to improve usability for multi-column table data.",
        "Maintained CI/CD stability with GitHub Actions, led sprint-based support teams, and documented image promotion architecture.",
      ],
    },
    {
      title: "Data Engineer",
      company_name: "Decision Foundry",
      icon: df,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Aug 2023",
      points: [
        "Built a Natural Language Generation (NLG) model in Python to cluster and analyze revenue data across 30+ markets.",
        "Created reusable data wrangling templates in DBT and managed data pipelines using Funnel.io and Spectrum.",
        "Transformed and visualized data using Tableau Prep, Tableau Desktop, and Tableau Server.",
        "Performed QA on AWS Redshift data using SQL Server to ensure data accuracy and reliability.",
        "Managed data operations for 50+ advertisers, driving insights for a $20M ad budget.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Entellisoft Technologies",
      icon: entellisoft,
      iconBg: "#383E56",
      date: "Aug 2018 - Oct 2020",
      points: [
        "Built custom Python API connectors to integrate diverse data sources into Datorama.",
        "Improved sentiment prediction accuracy by 20% through analysis of ad reactions using Datorama’s models.",
        "Developed dashboards in Datorama and Tableau to track ad KPIs, reducing data analysis time by 25%.",
        "Managed and optimized analytics tools like Google Ads, Google Analytics, and Amazon Campaign Manager for better user tracking.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Readmission Prediction (MLOps)",
      description:
        "Developed MLOps pipeline for predicting hospital readmission of diabetic patients using FastAPI, Docker, and Apache Airflow. Deployed scalable, secure infrastructure on GCP with automated CI/CD using GitHub Actions. Integrated real-time model inference and monitoring via a full-stack application. Ensured model interpretability, error logging, and data pipeline reliability.",
      tags: [
        {
          name: "gcp",
          color: "blue-text-gradient",
        },
        {
          name: "docker",
          color: "green-text-gradient",
        },
        {
          name: "airflow",
          color: "red-text-gradient",
        },
        {
          name: "mlflow",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "blue-text-gradient",
        },
      ],
      image: readmission,
      source_code_link: "https://github.com/v4760/Readmisssion-of-Hyperglycemia-Patient",
    },
    {
      name: "Mood Journal",
      description:
        "Built a full-stack web app using React, Tailwind CSS, Node.js, and Prisma to let users log daily thoughts and moods. Implemented JWT-based authentication with protected routes and CRUD operations for journal entries. Integrated a weather API to suggest mood-based prompts. Deployed frontend to Vercel and backend to Render, with PostgreSQL database on Render.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: moodjournal,
      source_code_link: "https://github.com/v4760/moodjournal",
    },
    {
      name: "Database Migration Tool",
      description:
        "Developed a Python-based data migration tool using Pandas to efficiently transfer file-based data from MySQL to PostgreSQL and integrated comprehensive validation procedures, including schema verification and record count reconciliation, to ensure data integrity throughout the migration process",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: dbmigration,
      source_code_link: "https://github.com/v4760/Files_To_Database_Migration",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };