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
    price: '49',
    image: courseOne,
    longDescription: [
      'This bootcamp course is designed to provide students with the knowledge and skills needed to become a professional web developer. The course covers a wide range of topics such as HTML/CSS, JavaScript, React, Python, and Django. Students will work on real-world projects and exercises to gain hands-on experience.',
      'By the end of the course, students will be able to build complete web applications and have a strong understanding of the web development process. Suitable for beginners and experienced developers looking to expand their skills.',
    ],
    weeks: [
      {
        title: 'Week 0: Introduction',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero ?',
      },
      {
        title: 'Week 1: Git',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 2: HTML/CSS',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 3: JavaScript',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 4: Milestone 1 - HTML/CSS/JS Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 5: React',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 6: Milestone 2 - React Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 7: Python',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 8: Django',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 9: Databases',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 10: Front End/Back End Integration',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 11: CI/CD with GitHub Actions',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 12: Final Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet urna non lorem congue, nec laoreet lacus volutpat. Vestibulum ligula dui, vehicula at diam eget, molestie bibendum odio. Sed a scelerisque arcu. In nulla velit, volutpat blandit maximus a, convallis at magna. Fusce fermentum interdum velit, ',
      'Sed non fermentum lectus. Quisque dignissim hendrerit nisi, ac consequat nunc bibendum et. Sed porta augue ut venenatis condimentum. Nullam imperdiet turpis vel turpis efficitur dictum.',
    ],
    weeks: [
      {
        title: 'Week 1: Introduction to DevOps',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 2: Continuous Integration and Delivery',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 3: Configuration Management with Ansible',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 4: Containerization with Docker',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 5: Monitoring and Logging',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 6: Cloud Infrastructure and Provisioning',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 7: Microservices and Service Mesh',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 8: Advanced Container Orchestration with Kubernetes',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 9: Serverless Computing',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 10: Advanced Monitoring and Alerting',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 11: Disaster Recovery and High Availability',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 12: Final Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet urna non lorem congue, nec laoreet lacus volutpat. Vestibulum ligula dui, vehicula at diam eget, molestie bibendum odio. Sed a scelerisque arcu. In nulla velit, volutpat blandit maximus a, convallis at magna. Fusce fermentum interdum velit, ',
      'Sed non fermentum lectus. Quisque dignissim hendrerit nisi, ac consequat nunc bibendum et. Sed porta augue ut venenatis condimentum. Nullam imperdiet turpis vel turpis efficitur dictum.',
    ],
    weeks: [
      {
        title: 'Week 1: Introduction to Freelancing',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 2: Marketing and Networking',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 3: Setting up a Business Entity and Taxes',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 4: Time Management and Productivity',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 5: Communication and Collaboration',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 6: Project Management and Agile Methodologies',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 7: Contract Negotiation and Pricing',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 8: Delivering Quality Work on Time',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 9: Client Relationship Management',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 10: Scaling and Growing Your Freelance Business',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 11: Staying Up-to-date and Continuing Education',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
      },
      {
        title: 'Week 12: Final Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?',
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
