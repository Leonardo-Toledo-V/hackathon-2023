import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


export default function Header() {
    return (
        <Navbar className="bg-[#0F0F0F]" position="static">
            <NavbarContent justify="start" >
                <NavbarBrand >
                    <img
                        className="w-10"
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
                        <Link href="https://www.youtube.com/watch?v=fGIWsQDif_M&ab_channel=PesoPluma" className="text-[#ffffffca]">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
            <NavbarItem>
                <Button className="text-[#ffffffca] bg-gradient-to-r from-[#e55039] to-[#b71540]" as={Link} href="/login" variant="light" size="sm">
                    Sign Up
                </Button>
            </NavbarItem>
        </Navbar>
    );
}