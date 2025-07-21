import { blogs } from "./blogData";


const FeaturedBlogs = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
            <button className="text-green-600 font-medium hover:underline">
              Read more →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedBlogs;
