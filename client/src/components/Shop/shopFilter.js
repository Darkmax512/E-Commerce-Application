
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import ShopProducts from "./shopProducts";

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Headphones', href: '#' },
  { name: 'Headset', href: '#' },
  { name: 'Laptops', href: '#' },
  { name: 'Watches', href: '#' },
]
const filters = [
  // {
  //   id: 'color',
  //   name: 'Color',
  //   options: [
  //     { value: 'white', label: 'White', checked: false },
  //     { value: 'beige', label: 'Beige', checked: false },
  //     { value: 'blue', label: 'Blue', checked: true },
  //     { value: 'brown', label: 'Brown', checked: false },
  //     { value: 'green', label: 'Green', checked: false },
  //     { value: 'purple', label: 'Purple', checked: false },
  //   ],
  // },
  // {
  //   id: 'category',
  //   name: 'Category',
  //   options: [
  //     { value: 'new-arrivals', label: 'New Arrivals', checked: false },
  //     { value: 'sale', label: 'Sale', checked: false },
  //     { value: 'travel', label: 'Travel', checked: true },
  //     { value: 'organization', label: 'Organization', checked: false },
  //     { value: 'accessories', label: 'Accessories', checked: false },
  //   ],
  // },
  // {
  //   id: 'size',
  //   name: 'Size',
  //   options: [
  //     { value: '2l', label: '2L', checked: false },
  //     { value: '6l', label: '6L', checked: false },
  //     { value: '12l', label: '12L', checked: false },
  //     { value: '18l', label: '18L', checked: false },
  //     { value: '20l', label: '20L', checked: false },
  //     { value: '40l', label: '40L', checked: true },
  //   ],
  // },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ShopFilter() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-40 flex lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t text-black/70">
                  <h3 className="sr-only">Categories</h3>
                  <ul role="list" className="px-2 py-3 font-medium text-black-900">
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="block px-2 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="px-4 py-6 border-t border-gray-200">
                      {({ open }) => (
                        <>
                          <h3 className="flow-root -mx-2 -my-3">
                            <Disclosure.Button className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="flex items-center ml-6">
                                {open ? (
                                  <MinusSmIcon className="w-5 h-5" aria-hidden="true" />
                                ) : (
                                  <PlusSmIcon className="w-5 h-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="flex-1 min-w-0 ml-3 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Shop </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="p-2 ml-5 -m-2 text-gray-400 sm:ml-7 hover:text-gray-500">
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="p-2 ml-4 -m-2 text-gray-400 sm:ml-6 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <h3 className="pb-4 text-xl font-bold text-center">Product Categories</h3>
                <div className="flex justify-center">
                  <ul role="list" className="pb-6 space-y-4 text-black/70">
                    {subCategories.map((category) => (
                      <li key={category.name} className="">
                        <a href={category.href} className="">{category.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/*
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="py-6 border-b border-gray-200">
                    {({ open }) => (
                      <>
                        <h3 className="flow-root -my-3">
                          <Disclosure.Button className="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="flex items-center ml-6">
                              {open ? (
                                <MinusSmIcon className="w-5 h-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="w-5 h-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))} 
                */}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content 
                <div className="border-4 border-gray-200 border-dashed rounded-lg h-96 lg:h-full" /> */}
                <ShopProducts />
                {/* /End replace */} 
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
