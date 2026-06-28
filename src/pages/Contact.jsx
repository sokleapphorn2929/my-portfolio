import { useState } from "react";
import ScrollFloat from "../components/ScrollFloat";
import { motion } from "framer-motion";

export default function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", 
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const submissionData = {
      access_key: "2373f071-1d9d-4fbf-9fa6-acf2092261a3",
      name: formData.name,
      email: formData.email,
      subject: formData.subject, 
      message: formData.message,
      from_name: formData.name,  
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const resData = await response.json();

      if (resData.success) {
        setStatus("Message Sent Successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset subject too
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-5xl font-black tracking-tight text-blue-600 dark:text-blue-500">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Get In Touch
            </ScrollFloat>
          </div>
          <p
            className={`mt-4 text-lg ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}
          >
            Let's build something exceptional together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3
                className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-slate-800"}`}
              >
                Drop me a line
              </h3>
              <p
                className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}
              >
                I am currently open to exploring backend and full-stack
                engineering internships or development projects. Whether you
                want to discuss system architectures, API development, or just
                say hello, my inbox is open.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pinned-icon lucide-map-pinned"
                  >
                    <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                    <circle cx="12" cy="8" r="2" />
                    <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                  </svg>
                </span>
                <div>
                  <h4
                    className={`text-xs uppercase font-bold tracking-wider ${isDarkMode ? "text-gray-500" : "text-slate-400"}`}
                  >
                    Location
                  </h4>
                  <p
                    className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-slate-700"}`}
                  >
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail-icon lucide-mail"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </span>
                <div>
                  <h4
                    className={`text-xs uppercase font-bold tracking-wider ${isDarkMode ? "text-gray-500" : "text-slate-400"}`}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:phsokleap2929@gmail.com"
                    className="text-sm font-medium text-blue-500 hover:underline"
                  >
                    phsokleap2929@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4
                className={`text-xs uppercase font-bold tracking-wider mb-3 ${isDarkMode ? "text-gray-500" : "text-slate-400"}`}
              >
                Networks
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/sokleapphorn2929"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl border transition-all duration-300 transform hover:-translate-y-0.5 ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20"
                      : "bg-slate-100 border-slate-200/60 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/sokleap-phorn/"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl border transition-all duration-300 transform hover:-translate-y-0.5 ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20"
                      : "bg-slate-100 border-slate-200/60 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`border rounded-2xl p-8 transition-all duration-300 ${
              isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-slate-50 border-slate-200 shadow-sm"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full text-sm px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                    isDarkMode
                      ? "bg-slate-900/60 border-white/10 text-white focus:border-blue-500"
                      : "bg-white border-slate-200 text-slate-900 focus:border-blue-500"
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full text-sm px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                    isDarkMode
                      ? "bg-slate-900/60 border-white/10 text-white focus:border-blue-500"
                      : "bg-white border-slate-200 text-slate-900 focus:border-blue-500"
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full text-sm px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                    isDarkMode
                      ? "bg-slate-900/60 border-white/10 text-white focus:border-blue-500"
                      : "bg-white border-slate-200 text-slate-900 focus:border-blue-500"
                  }`}
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full text-sm px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none ${
                    isDarkMode
                      ? "bg-slate-900/60 border-white/10 text-white focus:border-blue-500"
                      : "bg-white border-slate-200 text-slate-900 focus:border-blue-500"
                  }`}
                  placeholder="Tell me about your project or role..."
                />
              </div>

              <button
                type="submit"
                className="w-full text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-4 rounded-xl transition-all shadow-md shadow-blue-600/10 active:scale-[0.98]"
              >
                Send Message
              </button>

              {status && (
                <p className="text-center text-xs font-medium text-blue-500 mt-2 animate-pulse">
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}