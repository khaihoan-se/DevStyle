import { NextPage } from "next";
import { motion } from 'framer-motion';
import Link from "next/link";
import HomeBanner from "@/components/shared/HomeBanner";


const HomePage: NextPage = () => {
   return (
      <div className="px-4 md:px-12">
         {/* HomeBanner */}
         <HomeBanner />
      </div>
   )
}

export default HomePage;