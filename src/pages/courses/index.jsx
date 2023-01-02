import React, { useState } from 'react';
import './styles.css';
import courseOne from '../../assets/images/courses/web-dev-course.jpg';
import courseTwo from '../../assets/images/courses/devops.png';
import courseThree from '../../assets/images/courses/freelance.jpg';

const Courses = () => {
  const courses = [
    {
      name: 'Web Development',
      description: 'Learn how to build modern web applications',
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
      name: 'DevOps',
      description: 'Become proficient in DevOps practices and tools',
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
      name: 'Freelance',
      description: 'Master the skills needed to succeed as a freelance developer',
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

  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li>
            <div>
              <img className="course-img" src={course.image} alt={course.name} />
              <p>{course.description}</p>
            </div>
            <h2 onClick={() => setSelectedCourse(course.name)}>
              {course.name}
            </h2>
            {selectedCourse === course.name && (
              <ul>
                {course.weeks.map(week => (
                  <li>{week}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
