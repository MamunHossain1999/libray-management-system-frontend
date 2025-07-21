import Carousel from "@/components/carousel/Carousel";
import LibraryLandingPage from "@/components/LibraryLandingPage/LibraryLandingPage";
import img1 from '@/assets/homePageImg/istockphoto-2060984408-612x612.webp'
import img2 from '@/assets/homePageImg/pexels-gabby-k-5331074.jpg'
import img3 from '@/assets/homePageImg/pexels-yaroslav-shuraev-5084674.jpg'


const HomePage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <div>
        <Carousel />
      </div>
      <div>
        <LibraryLandingPage/>
      </div>
      
     

     

      {/* Blog Section */}
      <section className="py-12 px-4 container mx-auto">
        <h3 className="text-center text-xl font-semibold mb-2">
          Caring is the new marketing
        </h3>
        <p className="text-center text-sm text-gray-600 mb-10 max-w-xl mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and tips. See who’s joining the community, read about
          how our community are increasing their membership income and lot more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={img1}
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold mb-2">
                Creating Streamlined Safeguarding Processes with OneRen
              </h4>
              <a href="#" className="text-green-600 text-sm">
                Readmore &rarr;
              </a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={img2}
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold mb-2">
                What are your safeguarding responsibilities and how can you
                manage them?
              </h4>
              <a href="#" className="text-green-600 text-sm">
                Readmore &rarr;
              </a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={img3}
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold mb-2">
                Reworking the Membership Model with Triathlon Australia
              </h4>
              <a href="#" className="text-green-600 text-sm">
                Readmore &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
