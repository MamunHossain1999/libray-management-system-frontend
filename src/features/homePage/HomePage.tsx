import BlogSection from "@/components/blogSection/BlogSection";
import Carousel from "@/components/carousel/Carousel";
import LibraryLandingPage from "@/components/LibraryLandingPage/LibraryLandingPage";


const HomePage = () => {
  return (
    <div className="">
      <div>
        <Carousel />
      </div>
      <div>
        <LibraryLandingPage />
      </div>

      {/* Blog Section */}
      <div>
        <BlogSection/>
      </div>
    </div>
  );
};

export default HomePage;
