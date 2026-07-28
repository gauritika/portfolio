import * as fa from 'react-icons/fa';
import * as si from 'react-icons/si';
const check = [
  ['fa', 'FaSchool', fa],
  ['si', 'SiCss3', si],
];
check.forEach(([lib, name, mod]) => console.log(name + ':', typeof mod[name] !== 'undefined'));

// Find CSS-related icons
const cssIcons = Object.keys(si).filter(k => k.toLowerCase().includes('css'));
console.log('CSS icons in si:', cssIcons);
const faCssIcons = Object.keys(fa).filter(k => k.toLowerCase().includes('css'));
console.log('CSS icons in fa:', faCssIcons);
