import React from 'react';
import Slider from "react-slick";
import { AnimatePresence, motion } from "framer-motion";
import Image from '@/components/shared/Image';
import { GrFormNext } from "react-icons/gr";
import { BANNER } from '@/constants'

const bannerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
const transition = [0.33, 1, 0.68, 1];


const BannerSlider = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevtArrow />
    };
    return (
        <div className="w-full h-full">
            <Slider {...settings} className="w-full h-full">
                {
                    BANNER.map((baner) => (
                        <>
                        <AnimatePresence>
                            <motion.div
                                variants={bannerVariants}
                                animate="animate"
                                exit="exit"
                                initial="initial"
                                className="w-full h-0"
                            >
                                <Image
                                    src={baner.bannerImage}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="50% 35%"
                                    alt="banner"
                                />
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute inset-0 flex flex-col justify-center px-4 banner__overlay md:px-12"></div>

                        <motion.div
                            variants={bannerVariants}
                            animate="animate"
                            initial="initial"
                            className="absolute left-12 top-1/2 -translate-y-1/2 md:w-[45%] w-[80%]"
                            transition={{ ease: transition, duration: 1 }}
                        >
                            <h1 data-scroll
                                data-scroll-direction="horizontal"
                                data-scroll-speed="-1" 
                                className="text-2xl font-bold uppercase md:text-4xl line-clamp-2 sm:line-clamp-3 md:line-clamp-4 text-white font-fredoka"
                            >
                                {baner.title}
                            </h1>
                            <div
                                data-scroll
                                data-scroll-direction="horizontal"
                                data-scroll-speed="-1"  
                                className="flex flex-wrap items-center mt-4 text-2xl gap-x-8"
                            >
                                {baner.star}
                            </div>
                            <div
                                data-scroll
                                data-scroll-direction="horizontal"
                                data-scroll-speed="-1"  
                                className="prose !max-w-full mt-2 text-lg md:text-xl text-gray-200 md:line-clamp-5 font-fredoka"
                            >
                                {baner.description}
                            </div>
                        </motion.div>

                        <div className="absolute bottom-0 w-full h-16 banner__overlay--down text-white"></div>
                        </>
                    ))
                }
            </Slider>
        </div>
    );
}

interface SampleNextArrowProps {
    className?: string;
    onClick?: () => void;
}
const SampleNextArrow: React.FC<SampleNextArrowProps> = ({
    className,
    onClick
}) => {
    return (
        <div className={className} onClick={onClick}>
            <GrFormNext className="text-xl w-full h-full" />
        </div>
    )
}
const SamplePrevtArrow: React.FC<SampleNextArrowProps> = ({
    className,
    onClick
}) => {
    return (
        <div className={className} onClick={onClick}>
            <GrFormNext className="text-xl w-full h-full rotate-180" />
        </div>
    )
}

export default React.memo(BannerSlider);
