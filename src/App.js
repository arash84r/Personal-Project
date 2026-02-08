import './App.css';
import About from "./about";
import Profile from "./profile";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from "framer-motion";


function App() {

  const linkAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }
    })
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "about me", path: "/about" },
    { name: "profile", path: "/profile" },
  ];

  return (
    <div className='bg-[linear-gradient(90deg,_#fcff9e_0%,_#c67700_100%)] min-h-screen flex flex-col items-center pt-5 h-screen text-xs md:text-lg'>

      <Router>
        {/* Navbar با انیمیشن */}
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex justify-center items-center bg-amber-600 h-10 w-1/2 mx-auto rounded-3xl shadow-lg'
        >
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              custom={index}
              variants={linkAnimation}
              initial="hidden"
              animate="visible"
            >
              <Link
                to={link.path}
                className='mx-4 font-bold text-white relative group'
              >
                {link.name}
                <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
