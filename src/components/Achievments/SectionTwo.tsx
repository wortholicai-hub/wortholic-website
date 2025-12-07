"use client";
import React from "react";
import Image from "next/image";
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
    // Additional 4 testimonials below
    {
      quote:
        "Open Loyalty's platform is robust and user-friendly, enabling us to easily customize our rewards and monitor program success.",
      author: "Laura Stevens",
      role: "Marketing Manager at RetailCo",
      companyLogo:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=80&fit=crop",
      company: "RetailCo",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop",
    },
    {
      quote:
        "Implementing Open Loyalty has significantly increased our customer retention and engagement metrics.",
      author: "David Park",
      role: "Customer Success Lead at ShopSmart",
      companyLogo:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=80&fit=crop",
      company: "ShopSmart",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
    },
    {
      quote:
        "The team at Open Loyalty provides excellent support and continuous updates that keep the platform ahead of competitors.",
      author: "Amina Hassan",
      role: "Product Owner at TechMarket",
      companyLogo:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=80&fit=crop",
      company: "TechMarket",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
    },
    {
      quote:
        "We love how customizable and flexible the Open Loyalty platform is. It perfectly fits our business needs.",
      author: "Carlos Mendoza",
      role: "CEO at FreshGrocer",
      companyLogo:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=80&fit=crop",
      company: "FreshGrocer",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop",
    },
  ];

  const logos = [
    {
      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU1IiBoZWlnaHQ9Ijc0IiB2aWV3Qm94PSIwIDAgMTU1IDc0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjMuOTM0MSAxNy44MzY5SDIzLjI2MkMyMS41MDcyIDE3LjgzNjkgMjAuNDE3MSAxOC45MTk0IDIwLjQxNzEgMjAuNjYxNVYzNC42NzZDMjAuNDE3MSA0MS4zMjA1IDE4LjM4MTEgNDQuMDMwNyAxMy4zODk1IDQ0LjAzMDdDOC4zOTc5OCA0NC4wMzA3IDYuMzYxOTMgNDEuMzA4MSA2LjM2MTkzIDM0LjYzNDFWMjAuNjYxNUM2LjM2MTkzIDE4LjkxOTQgNS4yNzE4IDE3LjgzNjkgMy41MTcyIDE3LjgzNjlIMi44NDQ4MkMxLjA5MDEzIDE3LjgzNjkgMCAxOC45MTk0IDAgMjAuNjYxNVYzNC42NzZDMCA0NC43OTc4IDQuNTA1IDQ5LjkyOTkgMTMuMzg5NSA0OS45Mjk5QzIyLjI3NDEgNDkuOTI5OSAyNi43Nzg4IDQ0Ljc5NzggMjYuNzc4OCAzNC42NzZWMjAuNjYxNUMyNi43Nzg4IDE4LjkxOTQgMjUuNjg4NyAxNy44MzY5IDIzLjkzNDEgMTcuODM2OVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zNC44MTg3IDI2LjM0MThIMzQuMjYxOEMzMi40NjM2IDI2LjM0MTggMzEuMzQ2NyAyNy40NjYzIDMxLjM0NjcgMjkuMjc2VjQ2Ljk5NjRDMzEuMzQ2NyA0OC44MDYxIDMyLjQ2MzYgNDkuOTMwNiAzNC4yNjE4IDQ5LjkzMDZIMzQuODE4N0MzNi42MTY3IDQ5LjkzMDYgMzcuNzMzNiA0OC44MDYxIDM3LjczMzYgNDYuOTk2NFYyOS4yNzZDMzcuNzMzNiAyNy40NjYzIDM2LjYxNjcgMjYuMzQxOCAzNC44MTg3IDI2LjM0MThaIiBmaWxsPSIjRkE0NjE2Ii8+CjxwYXRoIGQ9Ik00Mi41MzIzIDE1LjM3MTVDMzguNDY4MiAxNC43MjA0IDM1LjI2MTEgMTEuNTIxNCAzNC42MDg0IDcuNDY3NTVDMzQuNTk2MSA3LjM5MTAzIDM0LjQ5NjcgNy4zOTEwMyAzNC40ODQ0IDcuNDY3NTVDMzMuODMxNyAxMS41MjE0IDMwLjYyNDYgMTQuNzIwNCAyNi41NjA1IDE1LjM3MTVDMjYuNDgzNyAxNS4zODM4IDI2LjQ4MzcgMTUuNDgzIDI2LjU2MDUgMTUuNDk1M0MzMC42MjQ2IDE2LjE0NjMgMzMuODMxNyAxOS4zNDU0IDM0LjQ4NDQgMjMuMzk5M0MzNC40OTY3IDIzLjQ3NTggMzQuNTk2MSAyMy40NzU4IDM0LjYwODQgMjMuMzk5M0MzNS4yNjExIDE5LjM0NTQgMzguNDY4MiAxNi4xNDYzIDQyLjUzMjMgMTUuNDk1M0M0Mi42MDkxIDE1LjQ4MyA0Mi42MDkxIDE1LjM4MzggNDIuNTMyMyAxNS4zNzE1Wk0zOC41Mzk0IDE1LjQ2NDRDMzYuNTA3MyAxNS43ODk5IDM0LjkwMzggMTcuMzg5NCAzNC41Nzc0IDE5LjQxNjRDMzQuNTcxMyAxOS40NTQ2IDM0LjUyMTYgMTkuNDU0NiAzNC41MTU0IDE5LjQxNjRDMzQuMTg5IDE3LjM4OTQgMzIuNTg1NSAxNS43ODk5IDMwLjU1MzQgMTUuNDY0NEMzMC41MTUxIDE1LjQ1ODIgMzAuNTE1MSAxNS40MDg2IDMwLjU1MzQgMTUuNDAyNUMzMi41ODU1IDE1LjA3NjkgMzQuMTg5IDEzLjQ3NzQgMzQuNTE1NCAxMS40NTA1QzM0LjUyMTYgMTEuNDEyMiAzNC41NzEzIDExLjQxMjIgMzQuNTc3NCAxMS40NTA1QzM0LjkwMzggMTMuNDc3NCAzNi41MDczIDE1LjA3NjkgMzguNTM5NCAxNS40MDI1QzM4LjU3NzcgMTUuNDA4NiAzOC41Nzc3IDE1LjQ1ODIgMzguNTM5NCAxNS40NjQ0WiIgZmlsbD0iI0ZBNDYxNiIvPgo8cGF0aCBkPSJNNDQuOTY2OSA5LjA0MjU3QzQyLjkzNDggOS4zNjgwNyA0MS4zMzEzIDEwLjk2NzYgNDEuMDA0OSAxMi45OTQ2QzQwLjk5ODcgMTMuMDMyOCA0MC45NDkgMTMuMDMyOCA0MC45NDI5IDEyLjk5NDZDNDAuNjE2NSAxMC45Njc2IDM5LjAxMyA5LjM2ODA3IDM2Ljk4MDkgOS4wNDI1N0MzNi45NDI2IDkuMDM2NDQgMzYuOTQyNiA4Ljk4NjgzIDM2Ljk4MDkgOC45ODA2OUMzOS4wMTMgOC42NTUxMiA0MC42MTY1IDcuMDU1NjMgNDAuOTQyOSA1LjAyODY5QzQwLjk0OSA0Ljk5MDQ0IDQwLjk5ODcgNC45OTA0NCA0MS4wMDQ5IDUuMDI4NjlDNDEuMzMxMyA3LjA1NTYzIDQyLjkzNDggOC42NTUxMiA0NC45NjY5IDguOTgwNjlDNDUuMDA1MiA4Ljk4NjgzIDQ1LjAwNTIgOS4wMzY0NCA0NC45NjY5IDkuMDQyNTdaIiBmaWxsPSIjRkE0NjE2Ii8+CjxwYXRoIGQ9Ik01MS42OTg0IDE3LjgzNjlINDUuNDk5MkM0My43MjU4IDE3LjgzNjkgNDIuNjI0IDE4LjkzMSA0Mi42MjQgMjAuNjkxN1Y0Ny4wNzUxQzQyLjYyNCA0OC44MzU5IDQzLjcyNTggNDkuOTI5OSA0NS40OTkyIDQ5LjkyOTlINDYuMTc4OEM0Ny45NTIyIDQ5LjkyOTkgNDkuMDUzOSA0OC44MzU5IDQ5LjA1MzkgNDcuMDc1MVY0MC44Mjk5SDUxLjc0MDhDNjIuNDk4NyA0MC44Mjk5IDY2Ljg4NjggMzcuNDk5MiA2Ni44ODY4IDI5LjMzMzRDNjYuODg2OCAyMS4xNjc2IDYyLjQ4NjQgMTcuODM2OSA1MS42OTg0IDE3LjgzNjlaTTYwLjM3MjEgMjkuMjQ5MkM2MC4zNzIxIDMzLjQ1IDU4LjM2NTQgMzQuODY3NiA1Mi40MiAzNC44Njc2SDQ5LjA1MzlWMjMuNjcyN0g1Mi40MkM1OC4zNjU0IDIzLjY3MjcgNjAuMzcyMSAyNS4wNzk3IDYwLjM3MjEgMjkuMjQ5MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik05MC43NjQ5IDIzLjc3NUg5MC4yNTUzQzg4LjQ4MTkgMjMuNzc1IDg3LjM4MDMgMjQuODY5MSA4Ny4zODAzIDI2LjYyOThWMjYuNjMzNUM4NS41NTg4IDI0LjUzOTQgODIuNzM3OCAyMy4zMTE1IDc5LjUxMzIgMjMuMzExNUM3Ni4yMjc5IDIzLjMxMTUgNzMuMjU3MyAyNC41MDk5IDcxLjE0ODEgMjYuNjg2NEM2OC44NTA5IDI5LjA1NjUgNjcuNjM2NyAzMi40NzczIDY3LjYzNjcgMzYuNTc4NkM2Ny42MzY3IDQwLjY5NzggNjguODU4MSA0NC4xMzgzIDcxLjE2ODcgNDYuNTI4MUM3My4yODk4IDQ4LjcyMTcgNzYuMjY4NCA0OS45Mjk5IDc5LjU1NTYgNDkuOTI5OUM4Mi43MTkgNDkuOTI5OSA4NS41NjExIDQ4LjY4NjcgODcuMzgyNSA0Ni42MjI5Qzg3LjM4MjYgNDYuNjI1MSA4Ny4zODI3IDQ3LjIxNzggODcuMzgyNyA0Ny4yMkM4Ny40NDE4IDQ4Ljg5NTggODguNTMxIDQ5LjkyOTkgOTAuMjU1MyA0OS45Mjk5SDkwLjc2NDlDOTIuNTM4NCA0OS45Mjk5IDkzLjY0MDIgNDguODM2MiA5My42NDAyIDQ3LjA3NTVWMjYuNjI5OEM5My42NDAyIDI0Ljg2OTEgOTIuNTM4NCAyMy43NzUgOTAuNzY0OSAyMy43NzVaTTg3LjUwNzYgMzYuNTc4NkM4Ny41MDc2IDQxLjM5NjIgODQuOTE2MSA0NC4zODkyIDgwLjc0NDUgNDQuMzg5MkM3Ni41MjA2IDQ0LjM4OTIgNzMuODk2NiA0MS4zOTYyIDczLjg5NjYgMzYuNTc4NkM3My44OTY2IDMxLjc4NjYgNzYuNDg4IDI4LjgxIDgwLjY1OTYgMjguODFDODQuODE5NSAyOC44MSA4Ny41MDc2IDMxLjg1OTUgODcuNTA3NiAzNi41Nzg2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEyNy43ODEgMjMuMzM2OUMxMjQuNDUyIDIzLjMzNjkgMTIyLjA3NiAyNC42NTM1IDEyMC41ODkgMjYuMzEyOFYyMC42OTM1QzEyMC41ODkgMTguOTMxNyAxMTkuNDg3IDE3LjgzNjkgMTE3LjcxMiAxNy44MzY5SDExNy4yMDJDMTE1LjQyOCAxNy44MzY5IDExNC4zMjUgMTguOTMxNyAxMTQuMzI1IDIwLjY5MzVWNDcuMDczNEMxMTQuMzI1IDQ4LjgzNTIgMTE1LjQyOCA0OS45Mjk5IDExNy4yMDIgNDkuOTI5OUgxMTcuNzEyQzExOS40ODcgNDkuOTI5OSAxMjAuNTg5IDQ4LjgzNTIgMTIwLjU4OSA0Ny4wNzM0VjM2LjQ4NTZDMTIwLjU4OSAyOS43MDczIDEyMy44NDUgMjguOTIzNCAxMjYuMjk0IDI4LjkyMzRDMTMwLjQwNyAyOC45MjM0IDEzMi4wODQgMzAuOTU1NyAxMzIuMDg0IDM1LjkzNzVWNDcuMDczNEMxMzIuMDg0IDQ4LjgzNTIgMTMzLjE4NyA0OS45Mjk5IDEzNC45NjEgNDkuOTI5OUgxMzUuNDcxQzEzNy4yNDYgNDkuOTI5OSAxMzguMzQ4IDQ4LjgzNTIgMTM4LjM0OCA0Ny4wNzM0VjM1LjU1NzZDMTM4LjM0OCAyNy4zMzQyIDEzNC44OTIgMjMuMzM2OSAxMjcuNzgxIDIzLjMzNjlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTEyLjUyNCA0Ni43MDEyQzExMi40MzYgNDUuODUyMSAxMTEuOTI0IDQ0LjYzOSAxMDkuNDg2IDQ0LjYzOUMxMDYuNjA0IDQ0LjYzOSAxMDUuMjMyIDQzLjc0NzEgMTA1LjIzMiAzOC42NzkxVjI4LjkyMzRIMTA5LjUyOEMxMTEuMyAyOC45MjM0IDExMi40MDEgMjcuOTI1OCAxMTIuNDAxIDI2LjMyMDFDMTEyLjQwMSAyNC43NDA0IDExMS4zIDIzLjc1ODggMTA5LjUyOCAyMy43NTg4SDEwNS4yMzdWMjAuNjkzNUMxMDUuMjM3IDE4LjkzMTcgMTA0LjEyOCAxNy44MzY5IDEwMi4zNDMgMTcuODM2OUgxMDEuODNDMTAwLjA0NSAxNy44MzY5IDk4LjkzNTcgMTguOTMxNyA5OC45MzU3IDIwLjY5MzVWMjMuNzU4OEg5Ny45NDhDOTYuMzg1NyAyMy43NTg4IDk1LjQxNSAyNC43NDA0IDk1LjQxNSAyNi4zMjAxQzk1LjQxNSAyNy45MjU4IDk2LjUxNTggMjguOTIzNCA5OC4yODc1IDI4LjkyMzRIOTguOTM1N1YzOS4yMjc2Qzk4LjkzNTcgNDYuNzI5MyAxMDEuODc1IDQ5LjkyOTkgMTA4Ljc2NSA0OS45Mjk5QzEwOC43NzYgNDkuOTI5OSAxMDguNzg3IDQ5LjkyOTYgMTA4Ljc5OCA0OS45MjkzQzEwOS4xOTkgNDkuOTI4OSAxMDkuNjI4IDQ5LjkyMjcgMTEwLjA2NSA0OS44ODRDMTEwLjkzNCA0OS44MDIzIDExMS41OTEgNDkuNDk4MyAxMTIuMDE4IDQ4Ljk3OTNDMTEyLjQ0MyA0OC40NjMgMTEyLjYxMyA0Ny41NTU4IDExMi41MjQgNDYuNzAxMloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=",
      alt: "UiPath",
    },
    {
      src: "https://www.automationanywhere.com/sites/default/files/images/default-images/logo-aa-new.svg",
      alt: "AutomationAnywhere",
    },
    {
      src: "https://www.blueprism.com/assets/icons/SSC-blueprism-2col-logo-rgb-updated-whitespace.svg",
      alt: "Blue Prism",
    },
    {
      src: "https://www.pega.com/themes/custom/pegawww_theme/images/pega-logo.svg",
      alt: "Pega",
    },
    {
      src: "https://kissflow.com/hubfs/kissflow_logo_web.svg",
      alt: "kissflow",
    },
    {
      src: "https://www.tungstenautomation.com/-/media/images/global/logos/logo_blue.svg",
      alt: "Tungsten Automation",
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
    <section className="py-6 bg-white dark:bg-[#0b0f14] text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Slider */}
        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="rounded-2xl overflow-hidden">
                {/* CARD */}
                <div className="bg-gradient-to-r from-[#0E9F9F] to-[#0E9F9F] h-[510px] rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-2xl">
                  {/* LEFT SIDE */}
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
                        <Image
                          src={item.companyLogo}
                          alt={item.company}
                          width={80}
                          height={30}
                          className="object-contain bg-white rounded px-2 py-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE IMAGE + OVERLAY */}
                  <div className="flex-1 relative min-h-[300px] md:min-h-[400px]">
                    <Image
                      src={item.image}
                      alt="Testimonial"
                      fill
                      className="object-cover"
                    />

                    {/* Updated overlay to match #0E9F9F blend */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0E9F9F]/90 via-[#0E9F9F]/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-30 mt-16">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={60}
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
          color: #0e9f9f;
          opacity: 1;
        }

        .dark .testimonial-slider .slick-dots li button:before {
          color: #64748b;
        }

        .dark .testimonial-slider .slick-dots li.slick-active button:before {
          color: #0e9f9f;
        }
      `}</style>
    </section>
  );
};

export default SectionTwo;
