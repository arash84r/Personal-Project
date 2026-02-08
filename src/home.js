import { motion } from "framer-motion";
const Home = () => {
    return (
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
                    className="font-bold text-white  text-xs md:text-3xl"
                >
                    Arash Rahimi
                </motion.h1>

                {/* عنوان */}
                <motion.h5
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-white mt-2 text-xs md:text-lg"
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
                    Hi, I’m Arash Rahimi, a Front-End Developer who enjoys building clean,
                    responsive, and user-friendly web interfaces. I focus on turning ideas
                    into smooth, well-designed experiences using modern front-end tools and
                    best practices. With over a year of hands-on experience, I care about
                    performance, clean UI, and creating interfaces that people genuinely
                    enjoy using.
                </motion.p>

            </motion.div>
        </div>
    );

}

export default Home;
