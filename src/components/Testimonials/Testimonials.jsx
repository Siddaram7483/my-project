import { TestimonialsData } from "../../mockData/data";
import Slider from "react-slick"; // Make sure to import the Slider component

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false, // Fixed from arrow to arrows
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
          <h1 className="text-4xl font-bold">
            What Our Prestigious Customers Say About Us
          </h1>
        </div>
        {/* Testimonials Cards */}
        <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-primary/10">
          <Slider {...settings}>
            {" "}
            {/* Fixed the component name */}
            {TestimonialsData.map((data) => (
              <div key={data.id} className="my-6">
                <div>
                  {/*upper section */}
                  <div className="flex justify-start items-center gap-5">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full"
                    />{" "}
                  </div>
                  {/* bottom section */}
                  <div className="">
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                  <div>
                    <p className=" text-black">{data.text}</p>
                    <p className="font-bold">{data.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
