import { SidebarItem } from '@repo/ui/SidebarItem'
import { IconHome, IconTransfer, IconHistory, IconBrandCashapp } from "@tabler/icons-react";
import { AppbarClient } from '../../components/AppbarClient';

export default function Layout({ children }: Readonly<{
    children: React.ReactNode
}>) {
    const links = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: (
                <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 fixed" />
            ),
        },
        {
            label: "Transfer",
            href: "/dashboard/transfer",
            icon: (
                <IconTransfer className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 fixed" />
            ),
        },
        {
            label: "P2P Transfer",
            href: "/dashboard/p2ptransfer",
            icon: (
                <IconBrandCashapp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 fixed" />
            ),
        }
    ]

    return <div className='md:flex md:flex-col'>
        <div className='shadow-md dark:shadow-gray-800 fixed w-full z-20 top-0 start-0'>
            <AppbarClient />
        </div>
        <div className='md:flex h-full bg-gray-100 dark:bg-customDark-700 mt-20 pt-3'>
            <SidebarItem links={links} />
            <div className='md:w-screen pr-8 pl-8 pt-6 md:pr-12 md:pl-12 bg-white dark:bg-customDarkBg md:border-t-2 border-b-4 border-gray-100 dark:border-customDark-700 md:rounded-l-3xl'>
                {children}
            </div>
        </div>
    </div>
}