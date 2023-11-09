import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Header() {
    return (
        <Navbar position="static" className="bg-[#0F0F0F] font-lato">
            <NavbarBrand>
                <Link color="foreground" href="/" className="text-[#ffffffca]">
                    <img
                        className="w-10"
                        src="eye.svg" />
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-12" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/lists" className="text-[#ffffffca]">
                        Secretarias
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/activities" className="text-[#ffffffca]">
                        Actividades
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button className="text-[#ffffffca] bg-gradient-to-r from-[#e55039] to-[#b71540]" as={Link} href="/login" variant="light" size="sm">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}