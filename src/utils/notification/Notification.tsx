import React from "react"

interface ShowErrMsgProps {
    msg: any;
}
export const ShowErrMsg: React.FC<ShowErrMsgProps> = ({ msg }) => {
    return (
        <div className="text-xs text-[#d63031]">{msg}</div>
    )
}
export const ShowSuccessMsg: React.FC<ShowErrMsgProps> = ({ msg }) => {
    return (
        <div className="text-xs text-[#00b894]">{msg}</div>
    )
}