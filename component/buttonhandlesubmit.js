import { Button } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import React from "react";

function ButtonComponent() {
  const { handleSubmit } = useFormContext();

  return <input type="submit" />;
  //   <Button onClick={handleSubmit}>Submit</Button>;
}

export default ButtonComponent;
