import { NextPage } from "next";
import HomeBanner from "@/components/shared/HomeBanner";
import Wecome from "@/components/features/home/Wecome";
import React from "react";


const HomePage: NextPage = () => {
   return (
      <React.Fragment>
         <div className="px-4 md:px-12">
            {/* HomeBanner */}
            <HomeBanner />
            {/* Email */}
            <Wecome />
         </div>
      </React.Fragment>
   )
}

export default HomePage;