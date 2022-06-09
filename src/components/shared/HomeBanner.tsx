import React from "react";
import { motion } from "framer-motion";
import BannerSlider from "./BannerSlider";
  
const HomeBanner: React.FC = () => { 
    return (
        <React.Fragment>
            <motion.div 
                initial={{scale: 0.5}}
                animate={{scale: 1}}
                exit={{scale: 0.5}}
                data-scroll data-scroll-speed="2" className="group relative mt-2 w-full h-[450px] overflow-hidden bg-white rounded-xl">
                <BannerSlider />
            </motion.div>
        </React.Fragment>
    )
}

export default React.memo(HomeBanner);