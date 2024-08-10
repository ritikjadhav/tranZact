import { SidebarItem } from '@repo/ui/SidebarItem'
import { IconBrandTabler } from "@tabler/icons-react";

export default function Layout({ children}: Readonly<{
    children: React.ReactNode
}>) {
    const link = {
        label: "Dashboard",
        href: "#",
        icon: (
           <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
     }

    return <div className='border-l min-h-screen'>
        <SidebarItem link={link}/>
        {children}
    </div>
}