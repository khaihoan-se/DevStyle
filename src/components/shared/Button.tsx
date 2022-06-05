import React from 'react';

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    LeftIcon?: React.ComponentType<{ className: string }>;
    RightIcon?: React.ComponentType<{ className: string }>;
    iconClassName?: any;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const { className, children, onClick, LeftIcon, RightIcon, iconClassName } = props;
    return (
        <button 
            className={className}
            onClick={onClick}
            ref={ref}
        >
            {LeftIcon && <LeftIcon className={iconClassName} />}
            {children}
            {RightIcon && <RightIcon className={iconClassName} />}
        </button>
    );
}
)
export default Button;
