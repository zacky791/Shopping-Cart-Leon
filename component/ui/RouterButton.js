import { Button } from "@chakra-ui/react";
import Link from "next/link";

function RouterButton({ href, children, ...props }) {
  return (
    <Link href={href} passHref>
      <Button {...props}>{children}</Button>
    </Link>
  );
}
export default RouterButton;
