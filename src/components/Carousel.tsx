// core version + navigation, pagination modules:
import { Navigation, Pagination, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper and modules styles

import "./carouselStyling.css"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projectData"

const Carousel = () => {
    return (
        <Swiper
            // install Swiper modules
            // slidesPerView={2}
            // spaceBetween={0}
            breakpoints={{
                800: {
                    slidesPerView: 1,
                },
                960: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
            }}
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="h-[100%] w-[90%] md:w-[70%]"
        >
            {projects.map((prj, i) => (
                <SwiperSlide className="w-[10px]" key={i}>
                    <ProjectCard project={prj} key={i} idx={i} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel
