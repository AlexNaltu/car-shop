"use client";

import { TextField } from "@radix-ui/themes";
import { AiOutlineSearch } from "react-icons/ai";

function TextFields() {
  return (
    <div>
      <TextField.Root className="py-3 px-5 hover:bg-blue-600 mx-auto" radius="large">
        <TextField.Input placeholder="Search by make, model or keyword" />
        <TextField.Slot>
          <AiOutlineSearch size={30} />
        </TextField.Slot>
      </TextField.Root>
    </div>
  );
}

export default TextFields;
