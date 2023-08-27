"use client";

import { Button, HoverCard } from "@radix-ui/themes";
import { MdLocationPin } from "react-icons/md";


import React from "react";
import Link from "next/link";

function HoverCardLocation() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Button variant="ghost">
          <MdLocationPin size={20} />
        </Button>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <div className="text-slate-400 m-4 flex flex-col gap-3">
          <h1 className="font-black text-blue-900 text-lg">Cluj Napoca</h1>
          <Link href="/Store" className="text-blue-500 underline">View more store details</Link>
          <p>Aurel Vlaicu Street <br /> TS 32343</p>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}

export default HoverCardLocation;
