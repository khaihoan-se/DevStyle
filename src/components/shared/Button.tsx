import React from 'react';

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    LeftIcon?: React.ComponentType<{ className: string }>;
    RightIcon?: React.ComponentType<{ className: string }>;
    iconClassName?: any;
}
const Button: React.FC<ButtonProps> = ({
    className,
    children,
    onClick,
    LeftIcon,
    RightIcon,
    iconClassName
}) => {
    return (
        <button 
            className={className}
            onClick={onClick}
        >
            {LeftIcon && <LeftIcon className={iconClassName} />}
            {children}
            {RightIcon && <RightIcon className={iconClassName} />}
        </button>
    );
}

export default Button;
