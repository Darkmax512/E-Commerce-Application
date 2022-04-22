import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [{ name: "option 1" }, { name: "option 2" }];

export default function OrderDropdown() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative ">
          <Listbox.Button className="relative w-full cursor-default rounded-r-lg bg-orange-300 py-1 pl-3 pr-10 text-left shadow-md shadow-md focus:outline-none  sm:text-sm">
            <span className="block ">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-r-lg bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option key={personIdx} className={({ active }) => `relative cursor-default select-none py-2 pl-4 pr-4 ${active ? "bg-amber-100 text-amber-900" : "text-gray-900"}`} value={person}>
                  {({ selected }) => (
                    <>
                      <span className={`block  ${selected ? "font-medium" : "font-normal"}`}>{person.name}</span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 hidden pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
