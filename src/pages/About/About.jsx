import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-16">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4">
                        About <span className="text-green-600 dark:text-green-400">Feat Forward</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Connecting people to share excess food, reduce waste, and support the community.
                    </p>
                </motion.div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-10 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-2xl shadow-md bg-white dark:bg-gray-800"
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">🎯 Our Mission</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Feat Forward strives to reduce food waste and fight hunger by connecting donors with people in need.
                            We make sharing food simple, safe, and rewarding for everyone.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-2xl shadow-md bg-white dark:bg-gray-800"
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">🌱 Our Vision</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            A world where no good food goes to waste, and everyone has access to fresh meals.
                            By building a community of mindful donors and recipients, we create a culture of care and sharing.
                        </p>
                    </motion.div>
                </div>

                {/* What We Offer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-6">What Feat Forward Offers</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Food Donation", desc: "Easily donate your excess food to people who need it most." },
                            { title: "Safe Sharing", desc: "Our platform ensures food safety and trust between donors and recipients." },
                            { title: "Community Impact", desc: "Join a growing community that fights hunger and reduces food waste." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-green-500">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call To Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mt-20"
                >
                    <h2 className="text-3xl font-bold mb-4">Join the Feat Forward Community 🍲</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Whether you want to donate food or receive meals, together we can make a real impact.
                        Every plate shared brings hope and care to someone in need.
                    </p>
                    {/* <button className="px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition-colors duration-300">
                        Get Started
                    </button> */}
                </motion.div>
            </div>
        </div>
    );
};

export default About;
