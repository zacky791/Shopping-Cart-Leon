import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export function RouterButton({ href, children, ...props }) {
  return (
    <Link href={href} passHref>
      <Button {...props}>{children}</Button>
    </Link>
  );
}
