import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export function RouterButton({ href, children, ...props }) {
  return (
    <Link href={href} passHref>
      <Button {...props}>{children}</Button>
    </Link>
  );
}
