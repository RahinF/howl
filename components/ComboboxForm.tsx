'use client';

import { fetchCategories } from '@/api/categories';
import { FormSchema } from '@/components/AddPostForm';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface Props {
  form: UseFormReturn<FormSchema, any, undefined>;
}

interface Category {
  label: string;
  value: string;
}

export function ComboboxForm({ form }: Props) {
  const [categories, setCategories] = useState<Category[] | []>([]);

  useEffect(() => {
    (async () => {
      const categories = await fetchCategories();
      setCategories(categories);
    })();
  }, []);

  if (!!!categories.length) return null;

  return (
    <FormField
      control={form.control}
      name="category"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    'w-32 justify-between bg-[#282D4A] border-none duration-500 hover:bg-[#141627] text-muted-foreground hover:text-white',
                    !field.value && 'text-muted-foreground',
                  )}
                >
                  {field.value
                    ? categories.find(
                        (category) => category.value === field.value,
                      )?.label
                    : 'Category'}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 border rounded-lg mt-2">
              <Command className="bg-[#282D4A]">
                <CommandInput
                  placeholder="Search category..."
                  className="text-white"
                />
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {categories.map((category) => (
                    <CommandItem
                      value={category.label}
                      key={category.value}
                      onSelect={() => {
                        form.setValue('category', category.value);
                      }}
                      className="cursor-pointer text-white"
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          category.value === field.value
                            ? 'opacity-100'
                            : 'opacity-0',
                        )}
                      />
                      {category.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
