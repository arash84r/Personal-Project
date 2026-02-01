const Profile = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-amber-600 w-4/5 h-4/5 rounded-xl relative px-6 py-7 pb-7">

                {/* عکس بالا سمت راست */}
                <img
                    src="/files/profile.jpg"
                    alt="profile"
                    className="w-24 rounded-full absolute top-4 right-4 md:w-[9rem] shadow-2xl inline-block"
                />

                {/* متن زیر عکس */}
                <div className="mb-6">
                    <h1 className="font-bold text-white text-4xl">
                        Arash Rahimi
                    </h1>

                    <h5 className="text-white mt-2">
                        Front-End Developer | React & Tailwind
                    </h5>
                </div>

                <div className="flex flex-wrap gap-4 mt-20">
                    <p className="text-white leading-8 text-xs md:text-lg ">
                        Want to see what I’ve been building lately?
                        Check out my projects on GitHub, connect with me on LinkedIn,
                        or download my resume to learn more about my journey as a Front-End Developer.
                    </p>

                    <div className="w-full flex justify-center align-center gap-4 mt-6 text-xs md:text-lg">
                        <a
                            href="https://uplod.ir/c0uwj2k2k51l/20251202-043508-184714_PDF_616995.pdf.htm"
                            download
                            className="px-6 py-2 bg-white text-amber-700 rounded-lg font-semibold hover:bg-amber-100 transition"
                        >
                            Download Resume
                        </a>

                        <a
                            href="https://github.com/arash84r"
                            target="_blank"
                            className="px-6 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition"
                        >
                            GitHub
                        </a>

                        <a
                            href="www.linkedin.com/in/َarashrahimi"
                            target="_blank"
                            className="px-6 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition"
                        >
                            LinkedIn
                        </a>
                    </div>


                </div>


            </div>
        </div>
    )

}
export default Profile;
