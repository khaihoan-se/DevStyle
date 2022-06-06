import LoginApi from '@/api/LoginApi';
import Image from '@/components/shared/Image';
import WaveBackground from '@/components/shared/WaveBackground';
import { ShowErrMsg, ShowSuccessMsg } from '@/utils/notification/Notification';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

const activate = () => {
    const activation_token = useRouter().query.params;
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    const res: any = await LoginApi.activation({activation_token});
                    setSuccess(res.msg)
                } catch (error: any) {
                    error.msg && setErr(error.msg)
                }
            }
            activationEmail()
        }
    },[activation_token])

    return (
        <div className="bg--gradient relative text-black overflow-hidden">
            {/* {err && <ShowErrMsg msg={success} />}
            {success && <ShowSuccessMsg msg={success} />} */}
            <div className='md:h-[65vh] h-[100vh] w-full m-0 p-0 flex items-center justify-center'>
                <div className="bg__rgba min-w-[300px] min-h-[400px] mt-20 rounded-md flex items-center flex-col">
                    <div className="relative h-28 w-28 rounded-full overflow-hidden mt-8 mb-10">
                        <Image src="/logo-02.jpeg" layout="fill" objectFit="cover" alt="logo" className="w-full h-full" />
                    </div>
                    <p className="text-sm">{err && <ShowErrMsg msg={success} />}</p>
                    <p className="text-sm">{success && <ShowSuccessMsg msg={success} />}</p>
                    <Link href="/login">
                        <p className="px-4 py-2 bg-white rounded-md cursor-pointer shadow-md mt-10">Login Now</p>
                    </Link>
                </div>
            </div>
            {/* WaveBackground */}
            <WaveBackground />
        </div>
    )
}

export default activate