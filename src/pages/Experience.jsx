import ScrollFloat from "../components/ScrollFloat";
import { motion } from "framer-motion";

const timelineData = {
  work: [
    {
      role: "Associate",
      company: "Digital Divide Data (DDD)",
      period: "2024 — 2026",
      details:
        "Managed data operations and technical workflows within collaborative team frameworks.",
    },
    {
      role: "Associate Intern",
      company: "Digital Divide Data (DDD)",
      period: "May 2024 (1 month)",
      details:
        "Gained practical industry exposure through hands-on technical support and tasks.",
    },
  ],
  education: [
    {
      title: "Web Development Backend (Laravel)",
      institution: "ICT Professional Training Center",
      period: "April 2026",
      details:
        "Advanced backend engineering, architecture workflows, and API design patterns.",
    },
    {
      title: "Major: Computer Science",
      institution: "Royal University of Phnom Penh",
      period: "2024 — Present",
      details:
        "Focusing heavily on data structures, algorithmic design, and enterprise network setups.",
    },
    {
      title: "B.E.S.T. Program",
      institution: "Digital Divide Data (DDD)",
      period: "Feb 2024 — May 2024",
      details:
        "Foundational professional technical training and intensive skills development.",
    },
  ],
};

export default function Experience({ isDarkMode }) {
  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-28">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <div className="text-5xl font-black tracking-tight text-blue-600 dark:text-blue-500">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Journey & Experience
            </ScrollFloat>
          </div>
          <p
            className={`mt-4 text-lg ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}
          >
            My professional path and academic milestones
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 position-relative">
          {/* COLUMN 1: WORK HISTORY */}
          <div>
            <h2
              className={`text-2xl font-bold mb-10 flex items-center gap-3 ${isDarkMode ? "text-white" : "text-slate-800"}`}
            >
              <span className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-briefcase-business-icon lucide-briefcase-business"
                >
                  <path d="M12 12h.01" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </span>{" "}
              Work History
            </h2>

            <div className="space-y-10 relative border-l-2 border-slate-500/10 ml-2 pl-6">
              {timelineData.work.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-7.75 top-1.5 h-3 w-3 rounded-full bg-blue-500 transition-transform group-hover:scale-125" />

                  <span className="text-xs font-mono font-bold text-blue-500 tracking-wider">
                    {item.period}
                  </span>
                  <h3
                    className={`text-xl font-bold mt-1 ${isDarkMode ? "text-white" : "text-slate-800"}`}
                  >
                    {item.role}
                  </h3>
                  <h4
                    className={`text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}
                  >
                    {item.company}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}
                  >
                    {item.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: ACADEMIC & CERTIFICATIONS */}
          <div>
            <h2
              className={`text-2xl font-bold mb-10 flex items-center gap-3 ${isDarkMode ? "text-white" : "text-slate-800"}`}
            >
              <span className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-book-open-icon lucide-book-open"
                >
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
              </span>{" "}
              Education & Certs
            </h2>

            <div className="space-y-10 relative border-l-2 border-slate-500/10 ml-2 pl-6">
              {timelineData.education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-7.75 top-1.5 h-3 w-3 rounded-full bg-blue-500 transition-transform group-hover:scale-125" />

                  <span className="text-xs font-mono font-bold text-blue-500 tracking-wider">
                    {item.period}
                  </span>
                  <h3
                    className={`text-xl font-bold mt-1 ${isDarkMode ? "text-white" : "text-slate-800"}`}
                  >
                    {item.title}
                  </h3>
                  <h4
                    className={`text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}
                  >
                    {item.institution}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}
                  >
                    {item.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
