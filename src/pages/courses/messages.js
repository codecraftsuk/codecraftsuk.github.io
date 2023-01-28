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
          '* Learn about the course overview, objectives, and expectations * Introduction to the tools and resources used throughout the course',
      },
      // {
      //   title: 'Week 1: Git',
      //   description:
      //     '* Learn about version control and the basics of Git'
      //     '* Learn how to create and manage repositories'
      //     '* Learn how to make commits and work with branches',
      // },
      // {
      //   title: 'Week 2: HTML/CSS',
      //   description:
      //     '* Learn about the basics of HTML and CSS'
      //     '* Learn how to create and structure web pages'
      //     '* Learn how to use CSS to style web pages',
      // },
      // {
      //   title: 'Week 3: JavaScript',
      //   description:
      //     '* Introduction to the basics of JavaScript'
      //     '* Learn about variables, data types, control flow, and functions',
      // },
      // {
      //   title: 'Week 4: Milestone 1 - HTML/CSS/JS Project',
      //   description:
      //     '* Work on a project using HTML, CSS and JavaScript'
      //     '* Learn how to build a complete web application using these technologies',
      // },
      // {
      //   title: 'Week 5: React',
      //   description:
      //     '* Learn about React, a popular JavaScript library for building user interfaces'
      //     '* Learn how to create and manage components'
      //     '* Learn how to use React to build web applications',
      // },
      // {
      //   title: 'Week 6: Milestone 2 - React Project',
      //   description:
      //     '* Work on a project using React'
      //     '* Learn how to build a complete web application using React',
      // },
      // {
      //   title: 'Week 7: Python',
      //   description:
      //     '* Introduction to the basics of Python'
      //     '* Learn about variables, data types, control flow, and functions',
      // },
      // {
      //   title: 'Week 8: Django',
      //   description:
      //     '* Learn about Django, a popular Python web framework'
      //     '* Learn how to create and manage models'
      //     '* Learn how to use Django to build web applications',
      // },
      // {
      //   title: 'Week 9: Databases',
      //   description:
      //     '* Learn about different types of databases and how to interact with them using Python'
      //     '* Learn about SQL and how to write SQL queries',
      // },
      // {
      //   title: 'Week 10: Front End/Back End Integration',
      //   description:
      //     '* Learn about the different ways to integrate a front-end and back-end in a web application'
      //     '* Learn about RESTful API design and how to create a RESTful API using Django',
      // },
      // {
      //   title: 'Week 11: CI/CD with GitHub Actions',
      //   description:
      //     '* Learn about continuous integration and continuous deployment'
      //     '* Learn how to use GitHub Actions to automate the CI/CD pipeline',
      // },
      // {
      //   title: 'Week 12: Final Project',
      //   description:
      //     '* Work on a final project using all the technologies and concepts learned throughout the course'
      //     '* Learn how to incorporate all aspects of web development, including front-end, back-end, and    database management'
      //     '* Learn how to deploy the final project to a live server for public access',

      // },
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
