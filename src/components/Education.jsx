import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const education = [
  {
    icon: <FaGraduationCap />,
    degree: 'Bachelor of Technology in Computer Science Engineering',
    school: 'G.L. Bajaj Institute of Technology and Management',
    location: 'Greater Noida',
    years: '2023 – 2027',
    grade: 'CGPA: 8.35',
    coursework: 'Data Structures & Algorithms, Computer Networks, OOP, DBMS, Machine Learning, AI',
  },
  {
    icon: <FaSchool />,
    degree: 'Class XII',
    school: 'Azad Public School',
    location: 'Bulandshahr',
    years: '2021 – 2022',
    grade: '93.2%',
  },
  {
    icon: <FaSchool />,
    degree: 'Class X',
    school: 'Saint Momina School',
    location: 'Bulandshahr',
    years: '2019 – 2020',
    grade: '91.2%',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <motion.h2 className="section-title" {...fadeUp()}>Education</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.1)}>Strong academic foundation in CS and AI.</motion.p>
        <div className="edu-grid">
          {education.map((edu, i) => (
            <motion.div className="glass edu-card" key={i} {...fadeUp(0.15 + i * 0.1)}>
              <div className="edu-top">
                <div className="edu-icon">{edu.icon}</div>
                <div>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <p className="edu-location">{edu.location}</p>
                  <span className="edu-badge">{edu.years}</span>
                  <span className="edu-badge edu-grade">{edu.grade}</span>
                </div>
              </div>
              {edu.coursework && (
                <p className="coursework"><strong>Coursework:</strong> {edu.coursework}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
