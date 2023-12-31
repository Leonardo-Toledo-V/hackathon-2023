import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars3BottomLeftIcon, UserIcon } from '@heroicons/react/24/outline'
import Cookies from 'js-cookie'

const userNavigation = [
    { name: 'Sign out', href: '/' },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const handleLogOut = () => {
    Cookies.remove('balam-auth');
}


export default function NavbarDashboard() {

    return (
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-[#101010] shadow">
            <div className="flex flex-1 justify-end px-4">
                <div className="ml-4 flex items-center md:ml-6">
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full text-gray-400 bg-[#101010] text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                <span className="sr-only">Open user menu</span>
                                <UserIcon
                                    className="h-6 w-6"
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <a
                                                onClick={handleLogOut}
                                                href={item.href}
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700'
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    )
}