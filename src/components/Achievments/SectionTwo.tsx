"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionTwo: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Open Loyalty is an excellent choice because of the wide range of loyalty and gamification mechanics it offers, along with resources that help you understand how to use these features in your loyalty program.",
      author: "Chadi Al Abbasry",
      role: "Loyalty & Partnerships Manager at Raqtan Group",
      companyLogo:
        "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
      company: "ekuep",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
    },
    {
      quote:
        "With Open Loyalty we can create user engagement campaigns much more easily and fulfill the requirements of our clients with less restrictions.",
      author: "Jonas Minke",
      role: "Head of Product at dacadoo",
      companyLogo:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop",
      company: "dacadoo",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    },
    {
      quote:
        "The flexibility and scalability of Open Loyalty has enabled us to implement complex loyalty scenarios that drive real customer engagement.",
      author: "Sarah Mitchell",
      role: "Director of Customer Experience at Limango",
      companyLogo:
        "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
      company: "limango",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    },
  ];

  const logos = [
    { src: "https://logo.clearbit.com/dacadoo.com", alt: "dacadoo" },
    { src: "https://logo.clearbit.com/limango.de", alt: "limango" },
    {
      src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop",
      alt: "USA",
    },
    { src: "https://logo.clearbit.com/aldoshoes.com", alt: "ALDO" },
    { src: "https://logo.clearbit.com/jti.com", alt: "JTI" },
    {
      src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=120&h=40&fit=crop",
      alt: "PetShop",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section className="py-20 bg-white dark:bg-[#0b0f14] text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Slider */}
        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index}>
                <div className="bg-gradient-to-r from-[#3d3567] to-[#4a3f7a] rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-2xl">
                  {/* Left Side */}
                  <div className="flex-1 p-10 md:p-16 text-white flex flex-col justify-center max-w-2xl">
                    <p className="text-lg md:text-xl leading-relaxed mb-8 font-light">{`"${item.quote}"`}</p>

                    <div>
                      <h4 className="font-semibold text-base">{item.author}</h4>
                      <p className="text-sm opacity-90 mb-4">{item.role}</p>
                      <div className="flex items-center gap-3 mt-4">
                        <a
                          href={item.link}
                          className="text-sm underline hover:text-purple-200 transition-colors"
                        >
                          Read full case study
                        </a>
                        <img
                          src={item.companyLogo}
                          alt={item.company}
                          width={80}
                          height={30}
                          className="object-contain bg-white rounded px-2 py-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex-1 relative min-h-[300px] md:min-h-[400px]">
                    <img
                      src={item.image}
                      alt="Testimonial"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mt-16">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .testimonial-slider .slick-dots {
          bottom: -50px;
        }

        .testimonial-slider .slick-dots li button:before {
          font-size: 12px;
          color: #cbd5e1;
          opacity: 0.5;
        }

        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #3d3567;
          opacity: 1;
        }

        .dark .testimonial-slider .slick-dots li button:before {
          color: #64748b;
        }

        .dark .testimonial-slider .slick-dots li.slick-active button:before {
          color: #a78bfa;
        }
      `}</style>
    </section>
  );
};

export default SectionTwo;
