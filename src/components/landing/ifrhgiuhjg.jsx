import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Header() {
    return (
        <Navbar position="static" className="bg-[#0F0F0F]">
            <NavbarBrand>
                <img
                    className="w-10"
                    src="eye.svg" />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/activities" className="text-[#ffffffca]">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/activities" className="text-[#ffffffca]">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/activities" className="text-[#ffffffca]">
                        Integrations
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
