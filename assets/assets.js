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
    postman_img
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
        title: 'Doodle Dock',
        description: '',
        bgImage: '/work-3.png',
        link:'https://github.com/Vamsimaram/doodle-dock',
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
        logo: assets.mobile_icon,  // Replace with actual company logo
        company: 'Innovation Research Center (UCEK)',
        location: 'Andhra Pradesh, India',
        period: 'Jul 2022 - Apr 2023',
        title: 'Machine Learning Research Assistant',
        description: '• Led the development of machine learning algorithms for traffic pattern analysis, resulting in improved prediction accuracy for congestion management systems.\n\n• Collaborated with a team of researchers to integrate IoT sensors and data collection mechanisms, enhancing the real-time capabilities of traffic monitoring solutions.\n\n• Contributed to the design and implementation of simulation frameworks that accurately modeled urban traffic scenarios, allowing for comprehensive testing of optimization strategies.\n\n• Presented research findings at departmental seminars and contributed to technical documentation for knowledge sharing across research groups.',
        link: '#'
    },
    { 
        logo: assets.web_icon,  // Replace with actual company logo
        company: 'Future Ready Talent (Microsoft)',
        location: 'Andhra Pradesh, India',
        period: 'Jun 2022 - Aug 2022',
        title: 'Trainee Software Engineer',
        description: '• Orchestrated the deployment of a static web application on Microsoft Azure, reducing deployment time by implementing efficient CI/CD pipelines and automating the build process.\n\n• Utilized Azure cloud services for resource optimization, improving project scalability and efficiency through strategic use of Azure App Service, Blob Storage, and Azure Functions.\n\n• Implemented responsive front-end interfaces using React.js and Material UI, ensuring cross-browser compatibility and optimal user experience across desktop and mobile platforms.\n\n• Collaborated with cross-functional teams to integrate RESTful APIs, optimize database queries, and implement security best practices, resulting in a robust and secure web application.', 
        link: '#' 
    }
]

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