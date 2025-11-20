import React from "react";
import Image from "next/image";

// --- Data Configuration with Placeholder Avatars ---
const testimonials = [
  {
    id: 1,
    quote:
      "Recode offers high-quality training that significantly enhanced my skills. The knowledge I gained was invaluable, and the conducive classroom atmosphere truly supported my learning process.",
    name: "Lucas Moore",
    role: "Web Developer",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
  {
    id: 2,
    quote:
      "I am very happy with my learning experience at Recode. I gained a lot of programming and soft skills from the experienced trainers. The comfortable classroom environment really supported my learning process.",
    name: "Amanda Smith",
    role: "Software Engineer",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
  {
    id: 3,
    quote:
      "Recode offers excellent programming training. I also learned many soft skills from the professional trainers. The comfortable classroom environment really supported my learning process. Knowledge I gained was invaluable.",
    name: "Daniel Johnson",
    role: "Frontend Developer",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
  {
    id: 4,
    quote:
      "My learning experience at Recode was truly amazing. I not only gained programming knowledge but also valuable soft skills from expert trainers. The conducive classroom environment made learning more enjoyable.",
    name: "Daniel Martinez",
    role: "Full Stack Developer",
    avatar:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
  {
    id: 5,
    quote:
      "At Recode, I can learn both programming and soft skills at the same time. The professional trainers and comfortable classroom atmosphere really motivated me to keep learning and growing.",
    name: "Michael Brown",
    role: "Backend Developer",
    avatar:
      "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
  {
    id: 6,
    quote:
      "The learning process at Recode was truly outstanding. I felt supported by the lessons provided by the expert trainers. The comfortable classroom atmosphere made me even more motivated to continue developing.",
    name: "Olivia Garcia",
    role: "Mobile App Developer",
    avatar:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
];

// --- Sub-Component: Testimonial Card ---
const TestimonialCard: React.FC<(typeof testimonials)[0]> = ({
  quote,
  name,
  role,
  avatar,
}) => {
  return (
    <div className="relative bg-[#080808] border border-white/5 rounded-xl p-8 shadow-2xl hover:border-[#4ade80]/30 transition-all duration-300 min-h-[300px]">
      {/* --- Quote Bubble Icon --- */}
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#4ade80] rounded-full flex items-center justify-center border-2 border-black">
        {/* Simple white quote mark inside the green bubble */}
        <span className="text-black text-2xl font-bold leading-none select-none">
          ”
        </span>
      </div>

      {/* Testimonial Quote */}
      <p className="text-white text-sm leading-relaxed mb-6 italic">{quote}</p>

      {/* Author/Profile Section */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          {/* Using standard img tag for reliable rendering */}
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-base">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const AlumniSuccessStories = () => {
  return (
    <section className="bg-black py-24 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#4ade80] font-medium text-sm tracking-wide uppercase">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Alumni's Success Stories
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed pt-2">
            Discover how our bootcamp has empowered students to achieve their
            career goals through real-life success stories and testimonials.
          </p>
        </div>

        {/* --- Testimonials Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSuccessStories;
