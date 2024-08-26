import { SidebarItem } from '@repo/ui/SidebarItem'
import { IconHome, IconTransfer, IconHistory } from "@tabler/icons-react";

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
        }
    ]

    return <div className='md:flex md:mt-6 md:px-12'>
        <div className='h-full mt-16'>
            <SidebarItem links={links} />
        </div>
        <div className='w-screen'>
            {children}
        </div>
    </div>
}