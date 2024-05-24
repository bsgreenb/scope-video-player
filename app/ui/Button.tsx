import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit";
}

const Button = ({children, type="button"}: ButtonProps) => {
    return (
        <button type={type} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {children}
        </button>
    )
}

export default Button;