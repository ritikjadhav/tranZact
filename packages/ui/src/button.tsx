import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type='button'
      className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-base w-full my-3 px-5 py-2.5'
      onClick={onClick}
    >
      {children}
    </button>
  );
};
