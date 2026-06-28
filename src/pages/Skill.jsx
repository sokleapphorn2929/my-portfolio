import ScrollFloat from "../components/ScrollFloat";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Frameworks & Tools",
    skills: [
      { name: "Laravel", level: 85 },
      { name: "Postman API", level: 90 },
      { name: "Cloudinary", level: 80 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 88 },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "PHP", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 75 },
      { name: "C / C++", level: 70 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 88 },
    ],
  },
];

export default function Skill({ isDarkMode }) { 
  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-28">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="text-5xl font-black tracking-tight text-blue-600 dark:text-blue-500">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Skills & Technologies
            </ScrollFloat>
          </div>
          <p className={`mt-4 text-lg ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}>
            Technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl p-8 transition-all duration-300 ${
                isDarkMode 
                  ? "bg-white/5 border-white/10 hover:border-blue-500/30" 
                  : "bg-slate-50 border-slate-200 shadow-sm hover:border-blue-500/30"
              }`}
            >
              {/* Dynamic Theme Color text headings */}
              <h3 className={`text-xl font-semibold mb-8 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                {category.title}
              </h3>

              <div className="space-y-7">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-slate-600"}`}>
                        {skill.name}
                      </span>
                      <span className="text-blue-500 dark:text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar Track Theme Overrides */}
                    <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? "bg-gray-700" : "bg-slate-200"}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-linear-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}