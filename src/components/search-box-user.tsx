import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const users = [
  {
    value: "arif",
    label: "Arif Rahmawan",
  },
  {
    value: "alim",
    label: "Alim",
  },
  {
    value: "lendra",
    label: "Lendra",
  },
  {
    value: "galih",
    label: "Galih",
  },
];

const SearchBoxUser = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? users.find((user) => user.value === value)?.label
            : "Search User"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search User" />
          <CommandEmpty>No User found.</CommandEmpty>
          <CommandGroup>
            {users.map((user) => (
              <CommandItem
                key={user.value}
                value={user.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === user.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {user.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchBoxUser;
