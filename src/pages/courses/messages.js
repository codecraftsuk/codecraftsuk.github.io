/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import courseOne from '../../assets/images/courses/webdev-min.jpeg';
import courseTwo from '../../assets/images/courses/devops-min.jpg';
import courseThree from '../../assets/images/courses/freelance-min.jpg';

export const coursesData = [
  {
    id: 343242,
    isComingSoon: false,
    name: 'Web Development',
    description: 'Learn how to build modern web applications.',
    price: '139',
    monthlyPrice: '49',
    image: courseOne,
    priceStr: 'VITE_WEB_DEV_PRICE',
    checkoutUrl: 'https://buy.stripe.com/8wM5nXfzseHG3SweUU',
    longDescription: [
      'This bootcamp course is designed to provide students with the knowledge and skills needed to become a professional web developer. The course covers a wide range of topics such as HTML/CSS, JavaScript, React, Python, and Django. Students will work on real-world projects and exercises to gain hands-on experience.',
      'By the end of the course, students will be able to build complete web applications and have a strong understanding of the web development process. Suitable for beginners and experienced developers looking to expand their skills.',
    ],
    weeks: [
      {
        title: 'Week 0: Introduction',
        description: 'description',
        bullets: [
          'Learn about the course overview, objectives, and expectations',
          'Introduction to the tools and resources used throughout the course',
        ],
      },
      {
        title: 'Week 1: Git',
        bullets: [
          'Learn about version control and the basics of Git',
          'Learn how to create and manage repositories',
          'Learn how to make commits and work with branches',
        ],
      },
      {
        title: 'Week 2: HTML/CSS',
        bullets: [
          'Learn about the basics of HTML and CSS',
          'Learn how to create and structure web pages',
          'Learn how to use CSS to style web pages',
        ],
      },
      {
        title: 'Week 3: JavaScript',
        bullets: [
          'Introduction to the basics of JavaScript',
          'Learn about variables, data types, control flow, and functions',
        ],
      },
      {
        title: 'Week 4: Milestone 1 - HTML/CSS/JS Project',
        bullets: [
          'Work on a project using HTML, CSS and JavaScript',
          'Learn how to build a complete web application using these technologies',
        ],
      },
      {
        title: 'Week 5: React',
        bullets: [
          'Learn about React, a popular JavaScript library for building user interfaces',
          'Learn how to create and manage components',
          'Learn how to use React to build web applications',
        ],
      },
      {
        title: 'Week 6: Milestone 2 - React Project',
        bullets: ['Work on a project using React', 'Learn how to build a complete web application using React'],
      },
      {
        title: 'Week 7: Python',
        bullets: [
          'Introduction to the basics of Python',
          'Learn about variables, data types, control flow, and functions',
        ],
      },
      {
        title: 'Week 8: Django',
        bullets: [
          'Learn about Django, a popular Python web framework',
          'Learn how to create and manage models',
          'Learn how to use Django to build web applications',
        ],
      },
      {
        title: 'Week 9: Databases',
        bullets: [
          'Learn about different types of databases and how to interact with them using Python',
          'Learn about SQL and how to write SQL queries',
        ],
      },
      {
        title: 'Week 10: Front End/Back End Integration',
        bullets: [
          'Learn about the different ways to integrate a front-end and back-end in a web application',
          'Learn about RESTful API design and how to create a RESTful API using Django',
        ],
      },
      {
        title: 'Week 11: CI/CD with GitHub Actions',
        bullets: [
          'Learn about continuous integration and continuous deployment',
          'Learn how to use GitHub Actions to automate the CI/CD pipeline',
        ],
      },
      {
        title: 'Week 12: Final Project',
        bullets: [
          'Work on a final project using all the technologies and concepts learned throughout the course',
          'Learn how to incorporate all aspects of web development, including front-end, back-end, and    database management',
          'Learn how to deploy the final project to a live server for public access',
        ],
      },
    ],
  },
  {
    id: 763892,
    name: 'DevOps',
    isComingSoon: true,
    description: 'Become proficient in DevOps practices and tools.',
    image: courseTwo,
    price: '49',
    longDescription: [
      'This DevOps bootcamp course offers comprehensive training in the latest practices and technologies in DevOps. The course covers key topics such as continuous integration and delivery, configuration management with Ansible, containerization with Docker, monitoring and logging, cloud infrastructure, and more. Through hands-on projects and exercises, students will gain practical experience in implementing DevOps solutions.',

      'By the end of the course, students will have a strong understanding of the DevOps methodology and its various components, and will be able to implement DevOps in real-world scenarios. Suitable for both beginners and experienced professionals, this bootcamp is an excellent opportunity for software developers, IT professionals, or anyone interested in learning about DevOps to expand their skills and become a DevOps engineer.',
    ],
    weeks: [
      {
        title: 'Week 1: Introduction to DevOps',
        bullets: [
          'Learn about DevOps, its history and evolution',
          'Understand the key principles and goals of DevOps',
          'Introduction to DevOps methodologies, practices and tools',
        ],
      },
      {
        title: 'Week 2: Continuous Integration',
        bullets: [
          'Understand the concept of Continuous Integration',
          'Introduction to popular CI/CD tools like Jenkins and Travis CI',
          'Learn how to automate build and test processes',
        ],
      },
      {
        title: 'Week 3: Configuration Management with Ansible',
        bullets: [
          'Understand the need for Configuration Management',
          'Learn about Ansible, an open-source IT automation tool',
          'Learn how to automate infrastructure provisioning, configuration and management with Ansible',
        ],
      },
      {
        title: 'Week 4: Containerization with Docker',
        bullets: [
          'Introduction to containers and containerization',
          'Learn about Docker and its components',
          'Learn how to build and manage containers with Docker',
        ],
      },
      {
        title: 'Week 5: Monitoring and Logging',
        bullets: [
          'Understand the importance of Monitoring and Logging',
          'Learn about popular Monitoring and Logging tools like Nagios, Grafana and ELK Stack',
          'Learn how to implement effective Monitoring and Logging practices in DevOps',
        ],
      },
      {
        title: 'Week 6: Cloud Infrastructure',
        bullets: [
          'Understand the different types of Cloud computing',
          'Introduction to popular Cloud platforms like AWS, Google Cloud and Azure',
          'Learn how to implement and manage cloud infrastructure',
        ],
      },
      {
        title: 'Week 7: Deployment Automation',
        bullets: [
          'Learn about different deployment strategies and tools',
          'Learn how to automate deployment of applications to different environments',
        ],
      },
      {
        title: 'Week 8: Security in DevOps',
        bullets: [
          'Understand the importance of security in DevOps',
          'Learn about security risks and best practices in DevOps',
          'Learn how to implement security in the DevOps pipeline',
        ],
      },
      {
        title: 'Week 9: Serverless Computing',
        bullets: [
          'Understand the concept of Serverless Computing and its benefits',
          'Learn about popular Serverless platforms like AWS Lambda, Google Cloud Functions and Azure Functions',
          'Learn how to develop and deploy Serverless applications',
        ],
      },
      {
        title: 'Week 10: Advanced Monitoring and Alerting',
        bullets: [
          'Learn about advanced techniques for monitoring and alerting in DevOps',
          'Understand the importance of proactive monitoring and real-time alerting',
          'Learn how to implement advanced monitoring and alerting solutions in DevOps',
        ],
      },
      {
        title: 'Week 11: Disaster Recovery and High Availability',
        bullets: [
          'Learn about disaster recovery and high availability strategies in DevOps',
          'Understand the importance of having a robust disaster recovery plan',
          'Learn how to implement disaster recovery and high availability solutions in DevOps',
        ],
      },
      {
        title: 'Week 12: Final Project',
        bullets: [
          'Apply the concepts learned in the previous weeks to a real-world project',
          'Work on a team to design and implement a DevOps solution',
          'Present the final project to the class and receive feedback from the instructor and peers.',
        ],
      },
    ],
  },
  {
    id: 7893873,
    name: 'Freelance',
    isComingSoon: true,
    description: 'Master the skills needed to succeed as a freelance developer.',
    image: courseThree,
    price: '49',
    longDescription: [
      'This bootcamp course is designed to provide students with the knowledge and skills to become a successful freelance professional. The course covers a wide range of topics such as marketing and networking, setting up a business entity, time management and productivity, communication and collaboration, project management, contract negotiation, delivering quality work on time, client relationship management, scaling and growing your business, staying up-to-date with continuing education, and a final project.',
      'By the end of the course, students will have a strong understanding of the freelancing process and will be equipped with the skills to succeed in the industry. Suitable for both beginners and experienced professionals looking to expand their skills and grow their freelance business.',
    ],
    weeks: [
      {
        title: 'Week 1: Introduction to Freelancing',
        bullets: [
          'Overview of the freelancing industry and its history',
          'Understanding the difference between freelancing and traditional employment',
          'Learn about the various freelance career options and opportunities',
        ],
      },
      {
        title: 'Week 2: Marketing and Networking',
        bullets: [
          'Develop a strong personal brand and online presence',
          'Learn effective marketing strategies to reach potential clients',
          'Understand the importance of networking and how to make connections',
        ],
      },
      {
        title: 'Week 3: Setting up a Business Entity',
        bullets: [
          'Understand the legal and financial aspects of setting up a freelance business',
          'Learn about the different business structures and the pros and cons of each',
          'Get guidance on registering your business and obtaining necessary licenses and insurance',
        ],
      },
      {
        title: 'Week 4: Time Management and Productivity',
        bullets: [
          'Understand the importance of effective time management in freelancing',
          'Learn techniques for prioritizing tasks and managing your workload',
          'Discover ways to increase productivity and avoid burnout',
        ],
      },
      {
        title: 'Week 5: Communication and Collaboration',
        bullets: [
          'Learn about effective communication strategies for freelancers',
          'Understand the importance of building good working relationships with clients and collaborators',
          'Discover ways to communicate clearly, avoid misunderstandings and resolve conflicts',
        ],
      },
      {
        title: 'Week 6: Project Management',
        bullets: [
          'Understand the project management process and its importance in freelancing',
          'Learn about tools and techniques for planning, executing and delivering projects on time and within budget',
          'Discover ways to manage scope creep and ensure client satisfaction',
        ],
      },
      {
        title: 'Week 7: Contract Negotiation',
        bullets: [
          'Learn about the importance of contracts in freelancing',
          'Understand the basics of contract negotiation and how to negotiate better terms',
          'Discover ways to protect yourself legally and financially in your freelance work',
        ],
      },
      {
        title: 'Week 8: Delivering Quality Work on Time',
        bullets: [
          'Understand the importance of delivering high-quality work and meeting deadlines',
          'Learn about techniques for ensuring quality and avoiding mistakes',
          'Discover ways to manage expectations, set realistic deadlines and communicate progress with clients',
        ],
      },
      {
        title: 'Week 9: Client Relationship Management',
        bullets: [
          'Learn about building and maintaining strong relationships with clients',
          'Understand the importance of understanding client needs and managing expectations',
          'Discover ways to ensure client satisfaction, handle complaints and retain clients',
        ],
      },
      {
        title: 'Week 10: Scaling and Growing Your Business',
        bullets: [
          'Understand the importance of growing and scaling your freelance business',
          'Learn about strategies for attracting new clients and expanding your services',
          'Discover ways to manage growth and maintain the balance between work and personal life',
        ],
      },
      {
        title: 'Week 11: Staying Up-to-date with Continuing Education',
        bullets: [
          'Understand the importance of continuing education in freelancing',
          'Learn about ways to keep your skills up-to-date and stay informed about industry trends',
          'Discover resources for learning and professional development',
        ],
      },
      {
        title: 'Week 12: Final Project',
        bullets: [
          'Apply the concepts learned in the previous weeks to a real-world project',
          'Develop a complete project plan and execute it from start to finish',
          'Demonstrate your skills and knowledge in freelancing by presenting the final project',
          'Reflect on your experience and evaluate your progress over the course of the program',
        ],
      },
    ],
  },
];

export const faqData = [
  {
    question: 'How long does each course take?',
    answer: 'Each course takes 12 weeks to complete.',
  },
  {
    question: 'Do I need any previous experience to take these courses?',
    answer:
      'While some previous experience is helpful, it is not required. The courses are designed to be accessible to beginners.',
  },
  {
    question: 'Are there any prerequisites for these courses?',
    answer:
      'No, there are no prerequisites for these courses. Each course starts from the ground up and covers all the necessary concepts.',
  },
  {
    question: 'Can I take these courses at my own pace?',
    answer:
      'Yes, you can take the courses at your own pace. However, we recommend following the schedule of one lesson per week in order to get the most out of the course.',
  },
  {
    question: 'Are there any additional materials or resources that I will need for these courses?',
    answer:
      'All the materials and resources needed for the courses are provided. However, you may want to have a text editor and a modern web browser installed on your computer for some of the courses.',
  },
];
