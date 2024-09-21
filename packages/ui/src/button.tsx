import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type='button'
      className='text-white bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1e3a8a] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#2c57d8] dark:focus:ring-[#182757] font-semibold rounded-lg text-base w-full my-3 px-5 py-2.5 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
      onClick={onClick}
    >
      {children}
    </button>
  );
};
