import { useState } from 'react';
import { NextPage } from "next";
import { ShowErrMsg, ShowSuccessMsg } from "@/utils/notification/Notification";
import { isEmail } from '@/utils/validation/Validation';

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

const IdentifyPage: NextPage = () => {
    const [data, setData] = useState(initialState);

    const { email, password, err, success } = data;


    return (
        <div>
            {err && <ShowErrMsg msg={err} />}
            {success && <ShowSuccessMsg msg={success} />}
        </div>
    )
}

export default IdentifyPage;