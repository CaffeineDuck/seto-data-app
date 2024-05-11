'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type Props = {
  options: string[];
} & React.HTMLAttributes<HTMLDivElement>;

export function SelectComponent({ options, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<string[]>([]);

  const handleSelect = (currentValue: string) => {
    if (values.includes(currentValue)) {
      setValues(values.filter((value) => value !== currentValue));
    } else {
      setValues([...values, currentValue]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between overflow-clip"
        >
          <div className="max-w-[80%] overflow-clip">
            {values.length > 0
              ? values
                  .map((value) => options.find((option) => option === value))
                  .join(', ')
              : 'Add Contributor...'}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search emails..." />
          <CommandEmpty>No emails found.</CommandEmpty>
          <CommandGroup className="min-w-[500px]">
            {options.map((option, index) => (
              <CommandItem
                key={index}
                value={option} // display the artistDisplayName
                onSelect={() => handleSelect(option)} // use the _id for selection
                className={clsx(
                  values.includes(option) && // check if the _id is in the selected values
                    'bg-green-100 text-black',
                )}
              >
                {values.includes(option) && (
                  <Check
                    className={clsx(
                      'mr-2 h-4 w-4 text-left',
                      values.includes(option) ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                )}
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
