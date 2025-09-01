import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import aws from './aws.png';
import mysql from './mysql.png';
import cupcake_img from './cupcake_icon.png';
import deloitte_icon from './deloitte.png';

// Import the new tool images
import react_img from './react-img.png';
import js_img from './js-img.png';
import ts_img from './ts-img.png';
import python_img from './python-img.png';
import nextjs_img from './nextjs-img.png';
import tailwind_img from './tailwind-img.png';
import html_img from './html-img.png';
import css_img from './css-img.png';
import nodejs_img from './nodejs-img.png';
import express_img from './express-img.png';
import npm_img from './npm-img.png';
import postman_img from './postman-img.png';
import gmu_icon from './gmu_icon.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    aws,
    mysql,
    // Add the new tool images to assets
    react_img,
    js_img,
    ts_img,
    python_img,
    nextjs_img,
    tailwind_img,
    html_img,
    css_img,
    nodejs_img,
    express_img,
    npm_img,
    postman_img,
    gmu_icon,
    cupcake_img,
    deloitte_icon
};

export const workData = [
    {
        title: 'Tooney Tunes',
        description: '',
        bgImage: '/work-1.png',
        link:'https://github.com/Vamsimaram/tooney-tunes',
    },
    {
        title: ' Social BERTerfly',
        description: '',
        bgImage: '/work-2.png',
        link:'https://github.com/Vamsimaram/social-BERTerfly',
    },
    
    {
        title: 'StayFinder Platform',
        description: '',
        bgImage: '/work-4.png',
        link:'https://github.com/Vamsimaram/StayFinder-Platform',
    },
]


export const serviceData = [
  {
    logo: assets.gmu_icon, // Software Engineer - Sodexo
    company: 'Sodexo',
    location: 'Fairfax, VA',
    period: 'Jan 2025 – Present',
    title: 'Software Engineer',
    description: 
      '• Built a Python-based UAV sensor placement app with Streamlit, used by researchers to simulate and visualize 500+ optimized layouts.\n\n' +
      '• Implemented geospatial features (distance checks, protected areas, restricted zones), cutting invalid placements by 35%.\n\n' +
      '• Developed workflows to run detection probability models and generate 200+ scenario outputs as JSON/ZIP files for analysis.\n\n' +
      '• Integrated Pyomo and DGAL libraries to run prediction and optimization models, improving placement accuracy and coverage by 20%.\n\n' +
      '• Delivered automated reporting and scenario comparison dashboards, speeding decision-making on deployment strategies by 40%.\n\n' +
      '• Optimized grid computations and Python logic, reducing simulation runtime by 30% across 300+ real-world datasets.',
    link: '#'
  },

  {
    logo: assets.cupcake_img, // Freelance Software Developer
    company: 'irresistible-cupcakes.com',
    location: 'Remote',
    period: 'Aug 2024 – Dec 2024',
    title: 'Freelance Software Developer',
    description:
      '• Architected a React.js frontend with dynamic components and a Node.js/Express backend, handling product display, contact forms, and orders for 300+ daily interactions.\n\n' +
      '• Deployed the website on AWS EC2, leveraging S3 for static assets and ensuring a scalable, responsive architecture for high traffic.\n\n' +
      '• Secured the platform with SSL/TLS encryption, configured domain and DNS management, and implemented Git-based version control for maintainable code.',
    link: '#'
  },

  {
    logo: assets.deloitte_icon, // Deloitte
    company: 'Deloitte',
    location: 'Hyderabad, India',
    period: 'May 2023 – Jun 2024',
    title: 'Software Engineer',
    description:
      '• Built backend services for a finance platform processing 10K+ daily transactions, reducing budget approval time by 25%.\n\n' +
      '• Improved Spring Boot + PostgreSQL APIs with indexing and query tuning, cutting average response times by 30%.\n\n' +
      '• Automated invoice PDF generation with reusable templates and access control, lowering monthly finance workload by 20%.\n\n' +
      '• Co-developed dashboards with caching, pagination, and visualization features, reducing backend server load by 29%.\n\n' +
      '• Delivered features in Agile sprints with CI/CD pipelines and consistent unit test coverage across multiple modules.\n\n' +
      '• Implemented role-based access control and JWT authentication across finance services, strengthening data security.\n\n' +
      '• Designed and executed database schema migrations for PostgreSQL and MongoDB, ensuring smooth transitions with zero downtime.',
    link: '#'
  },

  {
    logo: assets.mobile_icon, // Research Assistant
    company: 'University College of Engineering',
    location: 'Kakinada, India',
    period: 'Jul 2022 – Apr 2023',
    title: 'Research Assistant',
    description:
      '• Built a deep RL model in TensorFlow/Keras for 4-way traffic signals, reducing wait time by 14% and stopped vehicles by 20%.\n\n' +
      '• Implemented Deep Q-Learning with reward functions to improve adaptive traffic control over fixed-timing systems.\n\n' +
      '• Designed detailed SUMO simulations with TraCI API and NETEDIT, modeling realistic urban traffic using Weibull distribution.\n\n' +
      '• Tuned critical hyperparameters and optimized training workflows, accelerating convergence and improving model stability.\n\n' +
      '• Visualized key performance improvements in delay, queue length, and rewards using Matplotlib and Pandas dashboards.',
    link: '#'
  }
];

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Masters in Computer Science' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: ' Python, Cpp, SQL, JavaScript, HTML/CSS' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Web Development', description: 'React, Next, Node Js, Express, Mongoose' }
];

export const toolsData = [
    assets.react_img,
    assets.nextjs_img,
    assets.js_img,
    assets.ts_img,
    assets.python_img,
    assets.tailwind_img,
    assets.html_img,
    assets.css_img,
    assets.nodejs_img,
    assets.express_img,
    assets.aws, 
    assets.mongodb, 
    assets.mysql, 
    assets.git, 
    assets.vscode, 
    assets.firebase,
    assets.npm_img,
    assets.postman_img
];