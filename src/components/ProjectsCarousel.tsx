import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectCard from './ProjectCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type ProjectsCarouselProps = {
  projects: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    githubLink?: string;
    deployLink?: string;
  }[];
};

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  return (
    <div className="relative w-full max-w-6xl mx-auto p-4">
      {/* Container das setas personalizado */}
      <div className="absolute top-[-35px] right-0 z-10 flex gap-2 mb-0 ">
        <button className="swiper-button-prev-custom p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
          <FiChevronLeft size={20} className="text-blue-600" />
        </button>
        <button className="swiper-button-next-custom p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
          <FiChevronRight size={20} className="text-blue-600" />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}