import { motion } from "framer-motion";
const About = () => {
    return (
        // TODO: animation
        <div className="flex justify-center items-center h-screen">

            {/* کارت اصلی */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-amber-600 w-4/5 h-4/5 rounded-xl relative px-6 py-7 pb-7"
            >

                {/* عکس پروفایل */}
                <motion.img
                    src="/files/profile.jpg"
                    alt="profile"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-24 rounded-full absolute top-4 right-4 md:w-[9rem] shadow-2xl"
                />

                {/* نام */}
                <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-bold text-white text-4xl"
                >
                    Arash Rahimi
                </motion.h1>

                {/* عنوان */}
                <motion.h5
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-white mt-2"
                >
                    Front-End Developer | React & Tailwind
                </motion.h5>

                {/* متن توضیح */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-white leading-8 text-xs md:text-lg mt-20"
                >
                    I work with modern front-end technologies to build clean, responsive, and engaging user interfaces.
                    I’m comfortable turning designs into real, functional websites using HTML, CSS, and JavaScript,
                    and I enjoy using frameworks like Bootstrap and Materialize to speed up development without sacrificing quality.
                    For more dynamic experiences, I build interactive interfaces with React, and I use Git & GitHub to manage code,
                    collaborate, and keep projects organized. I care about writing clean code, structuring projects properly,
                    and constantly improving my skills to stay up to date with the front-end world.
                </motion.p>

            </motion.div>
        </div>
    )
}
export default About;
