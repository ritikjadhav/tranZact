export function Card({
  title,
  children,
}: Readonly<{
  title: string;
  children?: React.ReactNode;
}>): JSX.Element {
  return (
    <div className='p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-black dark:border-gray-700 dark:shadow-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg duration-300'>
      <h1 className="mb-6 text-xl font-semibold font-poppins text-gray-900 dark:text-white">{title}</h1>
      <div>
        {children}
      </div>
    </div>
  );
}
