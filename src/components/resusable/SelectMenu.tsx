import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { categories } from "../../data/products";
import type { ICategory } from "../../interfaces/interfaces";

interface IProps {
  selected: ICategory;
  setSelected: (category: ICategory) => void;
}

export default function SelectMenu({ selected, setSelected }: IProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="font-semibold text-zinc-800">
        Choose Category <span className="text-red-700 font-bold">*</span>
      </Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-zinc-800 py-1.5 pr-2 pl-3 text-left text-white outline-1 -outline-offset-1 outline-white/70 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img
              alt={selected.name}
              src={selected.imageURL}
              className="size-5 shrink-0 rounded-full bg-gray-400 outline -outline-offset-1 outline-white/70"
            />
            <span className="block truncate">{selected.name}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-42 w-full overflow-auto rounded-md bg-zinc-800 py-1 text-base outline-1 -outline-offset-1 outline-white/70 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {categories.map((category) => (
            <ListboxOption
              key={category.id}
              value={category}
              className="group relative cursor-default py-2 pr-9 pl-3 text-white select-none data-focus:bg-indigo-500 data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <img
                  alt={category.name}
                  src={category.imageURL}
                  className="size-5 shrink-0 rounded-full outline -outline-offset-1 outline-white/70"
                />
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                  {category.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
