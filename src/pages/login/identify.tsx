import { useState } from 'react';
import { NextPage } from "next";
import { ShowErrMsg, ShowSuccessMsg } from "@/utils/notification/Notification";
import { isEmail } from '@/utils/validation/Validation';
import WaveBackground from '@/components/shared/WaveBackground';
import Image from '@/components/shared/Image';
import Link from 'next/link';

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

const IdentifyPage: NextPage = () => {
    const [data, setData] = useState(initialState);

    const { email, password, err, success } = data;

    const handleChangeInput = (e: any) => {
        const { name, value } = e.target;
        setData({ ...data, [name]:value, err: '', success: '' });
    }

    return (
        <div className="bg--gradient relative text-black overflow-hidden">
            {/* {err && <ShowErrMsg msg={success} />}
            {success && <ShowSuccessMsg msg={success} />} */}
            <div className='md:h-[65vh] h-[100vh] w-full m-0 p-0 flex items-center justify-center'>
                <input type="text"  />
            </div>
            {/* WaveBackground */}
            <WaveBackground />
        </div>
    )
}

export default IdentifyPage;