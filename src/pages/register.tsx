import Image from "@/components/shared/Image";
import WaveBackground from "@/components/shared/WaveBackground";
import { NextPage } from "next";
import { motion } from 'framer-motion';
import Link from "next/link";
import Button from "@/components/shared/Button";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Input from "@/components/shared/Input";
import { useState } from "react";
import { isEmpty, isEmail, isLength, isMatch } from "@/utils/validation/Validation"
import { ShowErrMsg, ShowSuccessMsg } from "@/utils/notification/Notification";
import LoginApi from "@/api/LoginApi";

const transition = { duration: 0.4, ease: [ 0.43, 0.13, 0.23, 0.96 ]}

const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

const RegisterPage: NextPage = () => {
    const [ user, setUser ] = useState(initialState);

    const { name, email, password, cf_password, err, success } = user;

    const handleChangeInput = (e: any) => {
        const { name, value } = e.target;
        setUser({...user, [name]:value, err: '', success: '' })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if(isEmpty(name) || isEmpty(password)) return setUser({...user, err: 'Please fill in all fields.', success: '' });

        if(!isEmail(email)) return setUser({...user, err: 'Invalid emails.', success: '' });

        if(!isLength(password)) return setUser({...user, err: 'Minimum of eight characters, at least one uppercase, one lowercase and one special character.', success: '' });

        if(!isMatch(password, cf_password)) return setUser({...user, err: 'Password did not match.', success: '' });

        try {
            const res: any = await LoginApi.register({
                name, email, password
            })

            setUser({...user, err: '', success: res.msg });

        } catch (error: any) {
            error.msg && 
            setUser({...user, err: error.msg, success: '' })
        }
    }

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
                        <Image src="/bg-register-02.jpeg" layout="fill" objectFit="contain" alt="logo" className="w-full h-full scale-105 hover:scale-110 duration-300 ease-in-out" />
                    </div>
                    <div className="md:w-[55%] w-full h-full px-6 md:py-4 py-6 flex flex-col items-center md:items-start">
                        <div className="pr-0 md:pr-8 leading-none">
                            <h2 className="text-3xl font-semibold font-dancing">Register AniPhoto</h2>
                            <span className="text-sm">Welcome to Aniphoto</span>
                        </div>

                        {err && <ShowErrMsg msg={err} />}
                        {success && <ShowSuccessMsg msg={success} />}

                        <form onSubmit={handleSubmit}>
                            <div className="mt-4 w-full">
                                <Input InputFor="name" label="Full name" type="name" value={name} name="name" onChange={handleChangeInput} />
                            </div>
                            <div className="mt-4 w-full">
                                <Input InputFor="name" label="Gmail" type="text" name="email" value={email} onChange={handleChangeInput} />
                            </div>
                            <div className="mt-4 w-full">
                                <Input InputFor="password" label="Password" type="password" value={password} name="password" onChange={handleChangeInput} />
                            </div>
                            <div className="mt-4 w-full">
                                <Input InputFor="cf_password" label="Enter the password" type="password" value={cf_password} name="cf_password" onChange={handleChangeInput} />
                            </div>
                            <div className="md:w-80 w-full mt-2">
                                <p className="text-sm text-gray-700">Do you already have an account
                                    <Link href='/login'>
                                        <span className="text-[#0652DD] ml-[3px] cursor-pointer underline">login</span>
                                    </Link>
                                </p>
                            </div>
                            <div className="mt-4 w-full">
                                <Button 
                                    className="button__aff relative md:w-80 w-full border-[1px] border-black rounded-md outline-none p-2 text-sm"
                                >
                                    Register
                                </Button>
                            </div>
                        </form>

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

export default RegisterPage;