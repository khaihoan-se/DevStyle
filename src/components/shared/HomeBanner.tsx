import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from '@/components/shared/Image';

const bannerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
  
const transition = [0.33, 1, 0.68, 1];
  
const HomeBanner: React.FC = () => { 
    return (
        <React.Fragment>
            <div className="group relative w-full h-[450px] overflow-hidden bg-white rounded-xl">
                <AnimatePresence>
                    <motion.div
                        variants={bannerVariants}
                        animate="animate"
                        exit="exit"
                        initial="initial"
                        className="w-full h-0"
                    >
                        <Image
                            src="/banner-02.jpeg"
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
                    <h1 className="text-2xl font-bold uppercase md:text-4xl line-clamp-2 sm:line-clamp-3 md:line-clamp-4 text-white font-fredoka">
                        Welcome to the world of <br></br> Ai Amu
                    </h1>
                    <div className="flex flex-wrap items-center mt-4 text-2xl gap-x-8">
                        🌟 🌟 🌟 🌟 🌟
                    </div>
                    <div className="prose !max-w-full mt-2 text-lg md:text-xl text-gray-200 md:line-clamp-5 font-fredoka">
                        Here I share UI/UX and create illustrations, videos and music. I like cute and mysterious things. 🎉🎉🎉
                        <br></br>
                        And this is where I review my knowledge. 🍉🍑🍇
                    </div>
                </motion.div>

                <div className="absolute bottom-0 w-full h-16 banner__overlay--down text-white"></div>

            </div>
        </React.Fragment>
    )
}

export default React.memo(HomeBanner);