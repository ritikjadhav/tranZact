import { SidebarItem } from '@repo/ui/SidebarItem'

export default function Layout({ children}: Readonly<{
    children: React.ReactNode
}>) {
    return <div>
        <SidebarItem />
        {children}
    </div>
}