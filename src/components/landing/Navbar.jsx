import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


export default function Header() {
    return (
        <Navbar className="bg-[#0F0F0F]" position="static">
            <NavbarContent justify="start" >
                <NavbarBrand >
                    <img
                        className="w-12"
                        src="eye.svg" />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-12 font-lato">
                    <NavbarItem>
                        <Link href="/lists" className="text-[#ffffffca]">
                            Secretarias
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/activities" className="text-[#ffffffca]">
                            Actividades
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-[#ffffffca]">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
            <NavbarItem>
                <Button className="text-[#ffffffca]" as={Link} color="blue" href="/login" variant="flat" >
                    Sign Up
                </Button>
            </NavbarItem>
        </Navbar>
    );
}