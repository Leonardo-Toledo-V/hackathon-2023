import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

export default function CardComponent({children}) {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <Card className="max-w-[440px] dark">
            <CardBody className="px-12 py-2">
                {children}
            </CardBody>
        </Card>
    );
}
