"use client";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from './Sidebar';

interface Link {
   label: string;
   href: string;
   icon: JSX.Element;
}

export function SidebarItem({ links }: { readonly links: Link[] }) {
   const [open, setOpen] = useState(false);

   return (
      <div>
         <Sidebar open={open} setOpen={setOpen} animate={false}>
            <SidebarBody>
               {links.map((link, index) => (
                  <SidebarLink key={index} link={link} />
               ))}
            </SidebarBody>
         </Sidebar>
      </div>
   );
}
