import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from '@/components/shared/Image';
import BannerSlider from "./BannerSlider";

const bannerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
  
const transition = [0.33, 1, 0.68, 1];
  
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