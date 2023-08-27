"use client";

import { DropdownMenu, Button } from "@radix-ui/themes";
import { AiFillCaretDown } from "react-icons/ai";

function DropMenu() {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className="flex items-center gap-2 text-base md:text-lg">
            More
            <AiFillCaretDown />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Services & repairs</DropdownMenu.Item>
          <DropdownMenu.Item>FAQ & support</DropdownMenu.Item>
          <DropdownMenu.Item>Why CarMax</DropdownMenu.Item>
          <DropdownMenu.Item>Buying Online</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Warranties & CarCare</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
export default DropMenu;
