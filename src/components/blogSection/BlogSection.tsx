import { motion } from "framer-motion";
import img1 from "@/assets/homePageImg/pexels-yaroslav-shuraev-5084674.jpg";
import img2 from "@/assets/homePageImg/pexels-gabby-k-5331074.jpg";
import img3 from "@/assets/homePageImg/pexels-maisie-kane-1607589-4590202.jpg";

const BlogSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5, 
        duration: 0.5,
      },
    }),
  };

  const blogs = [
    {
      img: img1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      img: img2,
      title: "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      img: img3,
      title: "Reworking the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <motion.section
      className="py-12 px-4 container mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-center text-2xl font-semibold mb-2">
        Caring is the new marketing
      </h2>
      <p className="text-center text-base text-gray-600 mb-10 max-w-xl mx-auto">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and tips. See who’s joining the community, read about
        how our community are increasing their membership income and lot more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map(({ img, title }, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            <img src={img} alt={`Blog ${i + 1}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold mb-2">{title}</h4>
              <a href="#" className="text-green-600 text-sm">
                Readmore &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BlogSection;
