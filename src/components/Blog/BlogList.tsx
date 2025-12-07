"use client";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import { motion } from "framer-motion";

const BlogList = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Our Latest <span className="text-[#0E9F9F]">Insights</span>
                    </motion.h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                        Discover expert articles on AI, Cloud Computing, and Software
                        Engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {blogData.map((blog) => (
                        <SingleBlog key={blog.id} blog={blog} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center">
                    <nav className="flex items-center gap-2">
                        <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-[#151b24] dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50">
                            Previous
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-[#0E9F9F] rounded-lg shadow-md">
                            1
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-[#151b24] dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            2
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-[#151b24] dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            3
                        </button>
                        <span className="px-2 text-gray-500">...</span>
                        <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-[#151b24] dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            Next
                        </button>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default BlogList;
