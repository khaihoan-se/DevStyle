import Image from "@/components/shared/Image";
import WaveBackground from "@/components/shared/WaveBackground";
import { NextPage } from "next";
import { motion } from 'framer-motion';
import Link from "next/link";
import Button from "@/components/shared/Button";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Input from "@/components/shared/Input";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";


const transition = { duration: 0.4, ease: [ 0.43, 0.13, 0.23, 0.96 ]}

const LoginPage: NextPage = () => {
    return (
        <div className="bg--gradient relative text-black">
            {/* Button Back Home */}
            <motion.div
                initial={{left: '3rem', opacity: 0 }}
                animate={{ left: '1.5rem', opacity: 1 }}
                exit={{ left: '3rem', opacity: 0 }}
                transition={transition}
                className="absolute top-4 hidden md:block"
            >
                <Link href='/'>
                    <Button
                        className="w-10 h-10 p-2 bg-white rounded-full flex items-center justify-center"
                    >
                        <HiOutlineArrowNarrowLeft className="text-xl text-zinc-800" />
                    </Button>
                </Link>
            </motion.div>
            {/* Form */}
            <motion.div
                initial={{ scale: .5 }}
                animate={{ scale: 1 }}
                exit={{ scale: .5 }}
                transition={transition}
                className="md:h-[65vh] h-[100vh] w-full m-0 p-0 flex items-center justify-center"
            >
                <div className="md:w-[768px] md:h-[60vh] w-full h-full bg-white z-50 md:rounded-md flex items-center overflow-hidden relative">
                    <div className="md:block hidden w-[45%] h-full relative border-r border-slate-400 cursor-pointer">
                        <Image src="/bg-login-01.jpeg" layout="fill" objectFit="contain" alt="logo" className="w-full h-full scale-105 hover:scale-110 duration-300 ease-in-out" />
                    </div>
                    <div className="md:w-[55%] w-full h-full px-6 md:py-4 py-6 flex flex-col items-center md:items-start">
                        <div className="pr-0 md:pr-8 leading-none">
                            <h2 className="text-3xl font-semibold font-dancing">Login AniPhoto</h2>
                            <span className="text-sm">Don't waste time knocking down a wall hoping to turn it into a door.</span>
                        </div> 
                        <div className="mt-4 w-full">
                            <Input InputFor="name" label="Gmail" />
                        </div>
                        <div className="mt-6 w-full">
                            <Input InputFor="password" label="Password" />
                        </div>
                        <div className="md:w-80 w-full mt-2">
                            <p className="text-sm text-gray-700">Do not have an account 
                                <Link href='/register'>
                                    <span className="text-[#0652DD] ml-[3px] cursor-pointer underline">register</span>
                                </Link>
                            </p>
                        </div>
                        <div className="mt-4 w-full">
                            <Button 
                                className="button__aff relative md:w-80 w-full border-[1px] border-black rounded-md outline-none p-2 text-sm"
                            >
                                Login
                            </Button>
                        </div>

                        <div className="flex items-center justify-between mt-6 md:w-80 w-full">
                            <Button className="w-[150px] border-[1px] border-black rounded-md outline-none p-2 text-sm flex items-center"
                                LeftIcon={FcGoogle}
                                iconClassName="mx-2 text-xl"
                            >Google</Button>
                            <Button className="w-[150px] border-[1px] border-black rounded-md outline-none p-2 text-sm flex items-center"
                                LeftIcon={FaFacebookSquare}
                                iconClassName="mx-2 text-xl"
                            >Facebook</Button>
                        </div>
                        <div className="md:w-80 w-full text-center absolute bottom-2">
                            <span className="text-sm text-gray-700 text-center">© AniPhoto.vercel.app</span>
                        </div>
                    </div>
                </div>
            </motion.div>
                
            {/* WaveBackground */}
            <WaveBackground />
        </div>
    )
}

export default LoginPage;