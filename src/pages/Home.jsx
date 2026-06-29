import BlurText from "../components/BlurText";
import CountUp from "../components/CountUp";
import TiltedCard from "../components/TiltedCard";
import { motion } from "framer-motion";
import cvFile from '../assets/CV_Phorn_Sokleap_Web_Developer_Intern.pdf';

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      const navbarOffset = 90;
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleDownloadCV = () => {
  const cvUrl = cvFile; 
  
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Phorn_Sokleap_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="min-h-screen relative flex items-center px-6 py-7 md:py-0 md:px-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-linear-to-br 
                  dark-mode:from-slate-950 dark-mode:via-black dark-mode:to-zinc-950 
                  light-mode:from-zinc-100 light-mode:via-white light-mode:to-slate-50"
        />

        {/* Glow Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl 
               dark-mode:bg-blue-600/20 light-mode:bg-blue-400/30"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-125 h-125 bg-purple-500/10 rounded-full blur-3xl 
               dark-mode:bg-purple-600/20 light-mode:bg-purple-400/25"
          animate={{ x: [0, -70, 0], y: [0, 50, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
        />

        <div
          className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-size-[30px_30px] 
                  dark-mode:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]
                  light-mode:bg-[radial-gradient(#0000000d_1px,transparent_1px)]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-center justify-between gap-10 md:gap-0">
        {/* Left Side - Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-start text-lg font-bold">HELLO! I'M </h1>

          <BlurText
            text="PHORN SOKLEAP."
            delay={800}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="mb-6 text-6xl md:text-7xl font-bold text-blue-500 tracking-tighter"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-start text-xl md:text-2xl max-w-md mx-auto lg:mx-0 font-medium"
          >
            Year 4 Computer Science Student at Royal University of Phnom Penh.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="text-start text-gray-400 dark-mode:text-gray-500 light-mode:text-gray-600 mt-2 text-base leading-relaxed"
          >
            I specialize in building efficient, scalable backend logic with a
            focus on Laravel and MongoDB. With a unique dual background in
            Commercial Science, I bring an analytical, business-driven mindset
            to engineering challenges.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start"
          >
            <button
              onClick={handleContactClick}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
            >
              Contact Me
            </button>
            
            <button
              onClick={handleDownloadCV}
              className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </button>
          </motion.div>

          {/* Stats */}
          <div className="mt-10 flex items-center gap-8 justify-center md:justify-start">
            <div>
              <div className="text-5xl font-bold tabular-nums">
                <CountUp from={0} to={3} duration={1.8} />
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                Projects
              </p>
            </div>

            <div className="h-12 w-px bg-gray-700 dark-mode:bg-gray-700 light-mode:bg-gray-300" />

            <div>
              <div className="text-5xl font-bold text-blue-500 tabular-nums">
                8
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                Technologies
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Tilted Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <TiltedCard
            imageSrc="https://res.cloudinary.com/ds1e6ptad/image/upload/v1782569546/ChatGPT_Image_Jun_27_2026_09_11_33_PM_lyhff6.webp"
            altText="Phorn Sokleap"
            captionText="Phorn Sokleap"
            containerHeight="460px"
            containerWidth="340px"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={16}
            scaleOnHover={1.06}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent
            overlayContent={
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-slate-900/80 backdrop-blur-md border border-white/10 w-fit">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <p className="text-xs font-semibold text-white tracking-wide">
                  Available for Internship
                </p>
              </div>
            }
          />
        </motion.div>
      </div>
    </div>
  );
}