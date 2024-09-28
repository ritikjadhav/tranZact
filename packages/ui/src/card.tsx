import { cn } from './utils/cn';

export function Card({
  title,
  children,
}: Readonly<{
  title?: string;
  children?: React.ReactNode;
}>): JSX.Element {
  return (
    <div 
      className={cn(
        'p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-black dark:border-gray-700 dark:shadow-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg duration-300',
        title === 'totalBalance' ? 'bg-[#f3f8ff] dark:bg-[#1a2744] rounded-2xl' : 'bg-white'
      )}>
      { title !== 'totalBalance' && title !== 'balanceCard' && <h1 className="mb-6 text-xl font-semibold font-poppins text-gray-900 dark:text-white">{title}</h1> }
      <div>
        {children}
      </div>
    </div>
  );
}
