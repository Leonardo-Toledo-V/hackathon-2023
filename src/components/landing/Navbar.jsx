import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


export default function Header() {
    return (
        <Navbar isBordered className="bg-[#0f2923]">
            <NavbarContent justify="start" className="brightness-50">
                <NavbarBrand >
                    <img
                        className="w-14"
                        src="eye.svg" />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-12 font-lato">
                    <NavbarItem>
                        <Link href="#" className="text-white">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-white">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-white">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
            <NavbarItem>
                <Button className="text-white" as={Link} color="default" href="/login" variant="bordered">
                    Sign Up
                </Button>
            </NavbarItem>
        </Navbar>
    );
}