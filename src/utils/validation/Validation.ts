export const isEmpty = (value: any) => {
    if(!value) return true
    return false
}

export const isEmail = (email: any) => {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const isLength = (password: any) => {
    // eslint-disable-next-line
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/;
    return re.test(password);
}

export const isMatch = (password: any, cf_password: any) => {
    if(password === cf_password) return true
    return false
}