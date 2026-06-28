import ScrollFloat from "../components/ScrollFloat";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Rental Room Menagement System",
    category: "Backend System",
    status: "In Development",
    image:
      "https://itec.rw/assets/img/Itec/63bfe55c95f4a823d02ef620_blog%20cover_2023-01-min.webp",
    tags: ["Laravel", "MySql", "Postman"],
    links: { demo: "#", github: "https://github.com/sokleapphorn2929/Rental-Room-Management-Backend" },
  },
  {
    title: "Student Course Registration System",
    category: "Full Stack Application",
    status: "Completed",
    image:
      "https://res.cloudinary.com/ds1e6ptad/image/upload/v1782590019/Screenshot_2026-06-28_025234_ikpmv5.webp",
    tags: ["Laravel", "MongoDB", "Postman API", "Cloudinary"],
    links: {
      demo: "https://student-course-register-system.onrender.com/",
      github:
        "https://github.com/sokleapphorn2929/student-course-register-system",
    },
  },
  {
    title: "Pharmacry Application Backend",
    category: "Backend System",
    status: "Completed",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMR1bLxGYwpKpyXsZAfCXB7T89JY4TF2idW_NW9FJwCO-nHTK-LoU6Ke8&s=10",
    tags: ["Laravel", "MongoDB", "Postman API", "Cloudinary"],
    links: {
      demo: "https://pharmacy-sys-api.docs.buildwithfern.com/pharmacy",
      github:
        "https://github.com/sokleapphorn2929/pharmacy-system-backend",
    },
  }
];

export default function Project({ isDarkMode }) {
  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-28">
      <div className="max-w-6xl mx-auto">
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
              Featured Projects
            </ScrollFloat>
          </div>
          <p
            className={`mt-4 text-lg ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}
          >
            Recent systems and applications I have engineered
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                isDarkMode
                  ? "bg-white/5 border-white/10 hover:border-blue-500/30"
                  : "bg-slate-50 border-slate-200 shadow-sm hover:border-blue-500/30"
              }`}
            >
              <div>
                {/* PROJECT IMAGE WRAPPER */}
                <div className="w-full aspect-video overflow-hidden relative bg-slate-800/20 border-b border-inherit">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Content Wrapper */}
                <div className="p-6">
                  {/* Meta Category & Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono tracking-wider text-blue-500 uppercase font-semibold">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status === "Completed"
                            ? "bg-emerald-500"
                            : "bg-amber-500"
                        }`}
                      />
                      <span
                        className={`text-[11px] font-medium ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3
                    className={`text-xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-slate-800"}`}
                  >
                    {project.title}
                  </h3>

                  {/* Framework Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[11px] px-2.5 py-1 rounded-md border font-medium ${
                          isDarkMode
                            ? "bg-white/5 border-white/5 text-gray-300"
                            : "bg-white border-slate-200 text-slate-600 shadow-2xs"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="mx-6 mb-6 pt-4 border-t border-dashed border-slate-500/10 flex items-center justify-between">
                <a
                  target="_blank"
                  href={project.links.github}
                  className={`text-xs font-semibold flex items-center gap-1 transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Source Code →
                </a>

                <a
                  target="_blank"
                  href={project.links.demo}
                  className="text-xs font-bold text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
