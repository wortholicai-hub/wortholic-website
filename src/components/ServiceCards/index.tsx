"use client";
import Link from "next/link";
import Image from "next/image";

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: (
        <>
          Hire <br /> Developer
        </>
      ),
      subtitle: (
        <span className="text-sm">
          Skilled AI Engineers <br /> & Expert Developers
        </span>
      ),
      link: "/hire-developer",
    },
    {
      id: 2,
      title: (
        <>
          Hire <br /> Team
        </>
      ),
      subtitle: (
        <span className="text-sm">
          Complete Development <br />
          Teams & Project Managers
        </span>
      ),
      link: "/hire-team",
    },
    {
      id: 3,
      title: (
        <>
          Hourly <br /> Based Developer
        </>
      ),
      subtitle: (
        <span className="text-sm">
          Flexible Hourly <br />
          Development Support
        </span>
      ),
      link: "/hourly-developer",
    },
    {
      id: 4,
      title: (
        <>
          Project <br /> Based Development
        </>
      ),
      subtitle: (
        <span className="text-sm">
          End-to-End Solution <br />
          Delivery & Implementation
        </span>
      ),
      link: "/project-based",
    },
  ];

  const companiesImg = [
    { src: "/images/companies/vultron.svg", url: "https://www.vultron.com" },
    { src: "/images/companies/tutorUp.webp", url: "https://www.tutorup.com" },
    { src: "/images/companies/troveo.svg", url: "https://www.troveo.com" },
    {
      src: "/images/companies/techLink.png",
      url: "https://www.techlinksystems.com/",
    },
    { src: "/images/companies/2play.png", url: "https://www.2play.com" },
    { src: "/images/companies/Tribe.webp", url: "https://www.tribe.so" },
    { src: "/images/companies/atelier-ai.svg", url: "https://www.atelier.net" },
    { src: "/images/companies/athlead_ai.avif", url: "https://www.athlead.ai" },
    { src: "/images/companies/fambot-ai.png", url: "https://www.fambot.ai" },
    {
      src: "/images/companies/rojo-owl-capital.webp",
      url: "https://www.rojoowlcapital.com",
    },
    {
      src: "/images/companies/microfactory.svg",
      url: "https://microfactory.ai/",
    },
    {
      src: "/images/companies/picklezone.svg",
      url: "https://www.picklezone.com",
    },
    {
      src: "/images/companies/Mofilo_Light.avif",
      url: "https://www.mofilo.app/",
    },
    { src: "/images/companies/phlare-lms.svg", url: "https://phlare.org/" },
    { src: "/images/companies/opsfi-white.png", url: "https://opsfi.co/" },
    {
      src: "/images/companies/optimusAi-labs.png",
      url: "https://optimusai.ai/",
    },
  ];

  return (
    <div className="mx-auto mt-4 w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
      {/* Service Cards */}
      <div className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.link}
            className="group block h-full"
          >
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-transparent bg-white/5 p-4 shadow-md backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-[2px] hover:scale-[1.02] hover:border-black hover:shadow-md dark:bg-white/5 dark:hover:border-white">
              {/* Icon */}
              <div className="relative mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full text-black shadow-lg dark:text-white">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {service.id === 1 && (
                      <path d="M20 3.33333C10.795 3.33333 3.33333 10.795 3.33333 20C3.33333 29.205 10.795 36.6667 20 36.6667C29.205 36.6667 36.6667 29.205 36.6667 20C36.6667 10.795 29.205 3.33333 20 3.33333ZM20 8.33333C22.76 8.33333 25 10.5733 25 13.3333C25 16.0933 22.76 18.3333 20 18.3333C17.24 18.3333 15 16.0933 15 13.3333C15 10.5733 17.24 8.33333 20 8.33333ZM20 31.6667C16.6667 31.6667 13.0683 30.1 11.4533 27.5C12.3683 25.1333 16.5867 23.3333 20 23.3333C23.4133 23.3333 27.6317 25.1333 28.5467 27.5C26.9317 30.1 23.3333 31.6667 20 31.6667Z" />
                    )}
                    {service.id === 2 && (
                      <path d="M16.6667 18.3333C20.3483 18.3333 23.3333 15.3483 23.3333 11.6667C23.3333 7.985 20.3483 5 16.6667 5C12.985 5 10 7.985 10 11.6667C10 15.3483 12.985 18.3333 16.6667 18.3333ZM23.3333 20H21.6317C20.4983 20.6167 19.1233 21 17.6667 21H15.6667C14.21 21 12.835 20.6167 11.7017 20H10C6.31833 20 3.33333 22.985 3.33333 26.6667V28.3333C3.33333 30.1733 4.82667 31.6667 6.66667 31.6667H26.6667C28.5067 31.6667 30 30.1733 30 28.3333V26.6667C30 22.985 27.015 20 23.3333 20Z" />
                    )}
                    {service.id === 3 && (
                      <path d="M20 3.33333C10.795 3.33333 3.33333 10.795 3.33333 20C3.33333 29.205 10.795 36.6667 20 36.6667C29.205 36.6667 36.6667 29.205 36.6667 20C36.6667 10.795 29.205 3.33333 20 3.33333ZM20 33.3333C12.6367 33.3333 6.66667 27.3633 6.66667 20C6.66667 12.6367 12.6367 6.66667 20 6.66667C27.3633 6.66667 33.3333 12.6367 33.3333 20C33.3333 27.3633 27.3633 33.3333 20 33.3333ZM20.8333 11.6667H18.3333V21.6667L26.25 26.25L27.5 24.1667L21.25 20.4167V11.6667H20.8333Z" />
                    )}
                    {service.id === 4 && (
                      <path d="M33.3333 6.66667H6.66667C4.83333 6.66667 3.35 8.16667 3.35 10L3.33333 30C3.33333 31.8333 4.83333 33.3333 6.66667 33.3333H33.3333C35.1667 33.3333 36.6667 31.8333 36.6667 30V10C36.6667 8.16667 35.1667 6.66667 33.3333 6.66667ZM33.3333 30H6.66667V13.3333H33.3333V30ZM10 16.6667H15V26.6667H10V16.6667ZM18.3333 16.6667H23.3333V20H18.3333V16.6667ZM18.3333 23.3333H30V26.6667H18.3333V23.3333Z" />
                    )}
                  </svg>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h4 className="relative mb-1 text-base font-semibold text-black/90 dark:text-white/95">
                {service.title}
              </h4>
              <p className="relative text-xs whitespace-pre-line text-black/70 dark:text-gray-300/90">
                {service.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Companies Section */}
      <div className="relative mt-10 flex w-full justify-center">
        <div className="relative w-full overflow-hidden border-y border-white/20 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-[20px] backdrop-saturate-180 dark:border-y dark:border-white/15 dark:bg-black/5 dark:shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
          <div className="marquee-wrapper flex w-max items-center gap-12 px-6 py-3">
            {[...companiesImg, ...companiesImg.slice(0, 4)].map(
              (company, i) => (
                <div
                  key={i}
                  className="flex cursor-pointer items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={company.src}
                      alt={`company-${i + 1}`}
                      width={64}
                      height={40}
                      className="object-contain opacity-85 brightness-0 grayscale filter transition duration-300 hover:opacity-100 dark:opacity-90 dark:invert"
                    />
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* CSS for short-gap marquee */}
      <style jsx>{`
        @keyframes marquee-short {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-wrapper {
          display: flex;
          animation: marquee-short 25s linear infinite;
        }
        .marquee-wrapper:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ServiceCards;
