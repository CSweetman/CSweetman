import React from "react"
// core version + navigation, pagination modules:
import { Navigation, Pagination, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper and modules styles

// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"
// import "swiper/css/scrollbar"
import "../components/Carousel.css"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projectData"

const Carousel = () => {
    return (
        <Swiper
            // install Swiper modules
            slidesPerView={2}
            spaceBetween={0}
            // breakpoints={{
            //     1024: {
            //         slidesPerView: 3,
            //         spaceBetween: 100,
            //     },
            //     640: {
            //         slidesPerView: 2,
            //         spaceBetween: 0,
            //     },
            // }}
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="h-[100%] w-[70%]"
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
