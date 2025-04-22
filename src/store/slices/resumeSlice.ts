import { createSlice } from '@reduxjs/toolkit';

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

interface Education {
  institution: string;
  degree: string;
  year: string;
  thesis?: string;
  description?: string;
  link?: string;
}

interface Skill {
  name: string;
  level?: number;
}

interface ResumeState {
  aboutMe: string;
  experience: Experience[];
  education: Education;
  skills: {
    frameworks: string[];
    languages: Skill[];
  };
  certifications: string[];
  philosophy: string;
  contact: {
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}

const initialState: ResumeState = {
  aboutMe: `As a frontend engineer, I specialize in building responsive, accessible, and user-focused web applications using React, Redux, Vue, and Vuex. I care deeply about writing clean, maintainable code and turning complex ideas into intuitive user experiences.

I have experience working across the full frontend lifecycle, from translating design systems into components to optimizing performance and ensuring scalability. I enjoy staying close to both design and development, often bridging the gap between the two to deliver polished, reliable interfaces.

Collaboration is at the core of how I work. I thrive in cross-functional teams, working closely with designers, backend engineers, and product managers to bring features to life. I'm always open to feedback and see every project as an opportunity to learn, iterate, and grow.

Whether it's adopting a new tool, refining a user flow, or helping debug a tricky issue, I bring curiosity, care, and a user-first mindset to everything I build.`,
  experience: [
    {
      company: 'deepset',
      position: 'Frontend Engineer',
      period: 'Aug 2022 - Present',
      location: 'Berlin, Germany',
      description: [
        'Develop dashboards to manage NLP and Machine Learning projects (Artificial Intelligence).',
        'Translate UI/UX designs into high-quality, scalable frontend implementations using best practices and modern frameworks.',
        'Build and maintain frontend features with TypeScript, React, Redux, HTML, CSS/SASS, and Ant Design.',
        'Integrate frontend applications with backend services and APIs, ensuring seamless data flow and consistent user experiences.',
        'Developed customer facing application used by data scientists, a visual interface for designing and debugging modular AI pipelines, using React Flow.'
      ]
    },
    {
      company: 'Globant',
      position: 'Frontend Developer',
      period: 'Oct 2021 - Jul 2022',
      location: 'Medellín, Antioquia, Colombia',
      description: [
        'Build web interfaces with Vuejs, React and Vanilla JS.',
        'Develop web interfaces using HTML, CSS, SASS, BEM, JavaScript.',
        'Manage application state with technologies such as Vuex and Redux.',
        'Adapt the design of applications to different devices and browsers.'
      ]
    },
    {
      company: 'guane Enterprises',
      position: 'Front-End team leader',
      period: 'Jan 2021 - Sep 2021',
      location: 'Medellín, Antioquia, Colombia',
      description: [
        'Develop web interfaces for Data Science systems with the Vue.js framework.',
        'Staff Management.',
        'Structure and lead a team of 12 frontend developers.',
        'Task Assignment.',
        'Training and technical advice.',
        'Code reviews.',
        'Time management of projects including releases and final deliveries.',
        'Communication and management with clients and stakeholders.'
      ]
    },
    {
      company: 'guane Enterprises',
      position: 'Software engineer',
      period: 'Oct 2019 - Jan 2021',
      location: 'Medellín, Antioquia, Colombia',
      description: [
        'Build web interfaces with HTML, CSS, SASS, BEM, Bootstrap and javascript using Vuejs and Vuex.',
        'Adapt the design of applications to different devices and browsers.',
        'Improve the user experience.',
        'Implement reusable code.',
        'Optimize the application to obtain the best performance.',
        'Use of git and github for project version management.',
        'Develop a correct integration with the backend to ensure the proper functioning of the application.'
      ]
    }
  ],
  education: {
    institution: 'University of Antioquia',
    degree: 'Software Engineer',
    year: '2020',
    thesis: 'Detection of defects in textile fibers using Deep Learning algorithms',
    description: 'The detection of defects in fabrics is a relevant and recurrent topic in the specialized literature associated with automation in the textile industry, being an essential step in the quality control during the manufacturing process. Recent advances in machine learning, particularly in the area of computer vision, offer an efficient alternative to detect the presence of a certain type of defect and locate it accurately within the image. For this reason, this paper describes a web service developed by guane Enterprises based on computer vision, which allows the inference of the type of defect and its location. The system was trained on the texUAN dataset, collected by the Antonio Nariño University, which contains about 2000 images of fabrics that have no prints or color additions. With this database a model was trained on Google Cloud Platform using the AutoML Vision service which yielded an accuracy of 89.89%.',
    link: 'https://bibliotecadigital.udea.edu.co/entities/publication/92d1a478-3a95-42d7-9b8e-343c0505ee8e'
  },
  skills: {
    frameworks: [
      'ReactJS',
      'Redux',
      'VueJS',
      'Vuex',
      'JavaScript',
      'TypeScript',
      'CSS - SASS',
      'Ant Design',
      'ReactFlow',
      'Git and GitHub',
      'Cursor',
      'Cypress',
      'Jest',
      'Playwright'
    ],
    languages: [
      { name: 'Spanish', level: 5 },
      { name: 'English', level: 4 },
      { name: 'German', level: 1 }
    ]
  },
  certifications: [
    'Single Page Application with JavaScript Vanilla',
    'Basic JavaScript',
    'Asynchronism with JavaScript',
    'Soft Skills Development for Work Teams',
    'Definitive HTML and CSS',
    'TypeScript Fundamentals',
    'Dependency and Package Management with NPM',
    'Webpack',
    'Practical HTML and CSS',
    'Git and GitHub Professional',
    'JavaScript Professional',
    'CSS Grid Layout',
    'Frontend Developer',
    'Sass',
    'JavaScript Fundamentals',
    'Basic Vue.js',
    'Professional Vue.js',
    'Advanced Vue.js',
    'Testing with Vue.js',
    'TypeScript Fundamentals',
    'React.js introduction',
    'React.js',
    'React Hooks Professional',
    'React Router and Redux',
    'Testing with Jest in React',
    'Agile Team Management',
    'Leadership for Work Teams',
    'Introduction to the Web: History and Functioning of the Internet'
  ],
  philosophy: '"In a world where you can be as you want to be, choose to be kind."',
  contact: {
    location: 'Berlin, GERMANY',
    email: 'yaqueline150@gmail.com',
    phone: '+49 15207490398',
    linkedin: 'linkedin.com/in/yaquelinehoyos/',
    github: 'https://github.com/yaquelinehoyos/'
  }
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {}
});

export default resumeSlice.reducer; 