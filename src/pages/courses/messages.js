/* eslint-disable import/prefer-default-export */
import courseOne from '../../assets/images/courses/web-dev-course.jpg';
import courseTwo from '../../assets/images/courses/devops.png';
import courseThree from '../../assets/images/courses/freelance.jpg';

export const coursesData = [
  {
    id: 343242,
    name: 'Web Development',
    description: 'Learn how to build modern web applications.',
    image: courseOne,
    weeks: [
      'Week 1: Introduction to HTML and CSS',
      'Week 2: JavaScript Basics',
      'Week 3: React Fundamentals',
      'Week 4: Data Persistence and APIs',
      'Week 5: Advanced React Techniques',
      'Week 6: Web Security and Deployment',
      'Week 7: Advanced HTML and CSS',
      'Week 8: Server-side Development with Node.js',
      'Week 9: Data Visualization with D3.js',
      'Week 10: Mobile Development with React Native',
      'Week 11: Testing and Debugging',
      'Week 12: Final Project',
    ],
  },
  {
    id: 763892,
    name: 'DevOps',
    description: 'Become proficient in DevOps practices and tools.',
    image: courseTwo,
    weeks: [
      'Week 1: Introduction to DevOps',
      'Week 2: Continuous Integration and Delivery',
      'Week 3: Configuration Management with Ansible',
      'Week 4: Containerization with Docker',
      'Week 5: Monitoring and Logging',
      'Week 6: Cloud Infrastructure and Provisioning',
      'Week 7: Microservices and Service Mesh',
      'Week 8: Advanced Container Orchestration with Kubernetes',
      'Week 9: Serverless Computing',
      'Week 10: Advanced Monitoring and Alerting',
      'Week 11: Disaster Recovery and High Availability',
      'Week 12: Final Project',
    ],
  },
  {
    id: 7893873,
    name: 'Freelance',
    description: 'Master the skills needed to succeed as a freelance developer.',
    image: courseThree,
    weeks: [
      'Week 1: Introduction to Freelancing',
      'Week 2: Marketing and Networking',
      'Week 3: Setting up a Business Entity and Taxes',
      'Week 4: Time Management and Productivity',
      'Week 5: Communication and Collaboration',
      'Week 6: Project Management and Agile Methodologies',
      'Week 7: Contract Negotiation and Pricing',
      'Week 8: Delivering Quality Work on Time',
      'Week 9: Client Relationship Management',
      'Week 10: Scaling and Growing Your Freelance Business',
      'Week 11: Staying Up-to-date and Continuing Education',
      'Week 12: Final Project',
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
