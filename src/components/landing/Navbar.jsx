import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function Header() {
    return (
        <Navbar isBordered className="bg-[#13322B]">
            <NavbarContent justify="start">
                <NavbarBrand >
                    <img
                        className="w-20"
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
                        <Link href="#"className="text-white">
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
