"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { fonts } from "@/constants/fonts";

interface FontFamilyPickerProps {
  attribute: string;
  currentFont: string;
  handleAttributeChange: (attribute: string, value: string) => void;
}

const FontFamilyPicker: React.FC<FontFamilyPickerProps> = ({
  attribute,
  currentFont,
  handleAttributeChange,
}) => {
  return (
    <Popover>
      <div className="flex flex-col items-start justify-start bg-black border-none ">
        <Label>Font Family</Label>
        <PopoverTrigger asChild>
          <div className=" w-full bg-gradient-to-r from-[#F9DB43] to-[#FD495E] p-[1px] rounded-md mt-1">
            <div
              className={cn(
                "w-full justify-between border-none p-2 flex rounded-md bg-black ",
                !currentFont && "text-muted-foreground"
              )}
            >
              {currentFont
                ? fonts.find((font) => font === currentFont)
                : "Select font family"}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-100" />
            </div>
          </div>
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search font family..." className="h-9" />
          <CommandList>
            <CommandEmpty>No font family found.</CommandEmpty>
            <CommandGroup>
              {fonts.map((font) => (
                <CommandItem
                  value={font}
                  key={font}
                  onSelect={() => {
                    handleAttributeChange(attribute, font);
                  }}
                  className="hover:cursor-pointer"
                  style={{ fontFamily: font }}
                >
                  {font}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      font === currentFont ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FontFamilyPicker;
