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
                <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Transfer",
            href: "/dashboard/transfer",
            icon: (
                <IconTransfer className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Transactions",
            href: "/dashboard/transactions",
            icon: (
                <IconHistory className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "P2P Transfer",
            href: "/dashboard/p2ptransfer",
            icon: (
                <IconBrandCashapp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        }
    ]

    return <div className='md:flex md:flex-col'>
        <div className='shadow-md dark:shadow-gray-700 z-10'>
            <AppbarClient />
        </div>
        <div className='md:flex h-full bg-gray-100 dark:bg-customDark-700'>
            <SidebarItem links={links} />
            <div className='w-screen md:pr-12 md:pl-12 md:pt-6 bg-white dark:bg-customDarkBg border-t-2 border-b-4 border-gray-100 dark:border-customDark-700 rounded-l-3xl'>
                {children}
            </div>
        </div>
    </div>
}