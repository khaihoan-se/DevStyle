import Image from '@/components/shared/Image';
import React from 'react';

const EmailContact = () => {
    return (
        <React.Fragment>
            <div className="w-full min-h-[250px] text-center flex items-center justify-center rounded-lg">
                <div 
                    data-scroll 
                    data-scroll-speed="2"
                    className="md:inline-block hidden w-[200px] h-[300px] relative mr-6"
                >
                    <Image src="/wecome-01.webp" layout="fill" objectFit="cover" alt="logo" />
                </div>
                <div className="mr-6 max-w-[400px]">
                    <h2 
                        data-scroll 
                        data-scroll-speed="2"
                        className="text-4xl text-[#d89852] mb-4"
                    >
                        Welcome to the world of Ai Amu!
                    </h2>
                    <p 
                        
                        className="text-base mb-8">Ai Amu This is an illustrated website.
                        Works and job information are posted.
                    </p>
                    <div className="flex items-center justify-center">
                        <div className="w-full h-[40px] bg-transparent mr-6 rounded-lg border-2 border-[#d89852]">
                            <input className="bg-transparent w-full h-full outline-none pl-4" type="text" placeholder="Email address" />
                        </div>
                        <div className="h-[40px] px-4 py-2 bg-[#d89852] rounded-lg cursor-pointer">
                            Send
                        </div>
                    </div>
                </div>
                <div 
                    data-scroll 
                    data-scroll-speed="2"
                    className="md:inline-block hidden w-[200px] h-[300px] relative"
                >
                    <Image src="/wecome-02.webp" layout="fill" objectFit="cover" alt="logo" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(EmailContact);
