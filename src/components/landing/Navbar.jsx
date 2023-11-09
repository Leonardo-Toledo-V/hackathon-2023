import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


export default function Header() {
    return (
        <Navbar className="bg-[#EBE0D4]" shouldHideOnScroll>
            <NavbarContent justify="start" >
                <NavbarBrand >
                    <img
                        className="w-36"
                        src="eye2.svg" />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-12 font-lato">
                    <NavbarItem>
                        <Link href="/lists" className="text-[#0F0F0F]">
                            Secretarias
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/activities" className="text-[#0F0F0F]">
                            Actividades
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-[#0F0F0F]">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
            <NavbarItem>
                <Button className="text-[#0F0F0F]" as={Link} color="default" href="/login" variant="bordered">
                    Sign Up
                </Button>
            </NavbarItem>
        </Navbar>
    );
}