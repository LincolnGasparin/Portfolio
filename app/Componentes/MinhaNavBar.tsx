

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Roboto} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

const navigation = [
  { name: 'Sobre', href: '#sobre', current: false },
  { name: 'Trabalhos', href: '#trabalhos', current: false },
  { name: 'Currículo', href: '#curriculo', current: false },
]

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MinhaNavBar() {
  return (
    <Disclosure as="header" className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-md shadow-lg shadow-black/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div  className="absolute  inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Abra o Menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div id='nomeEstilizado' className="hidden sm:flex flex-col items-end mr-4">
                     <div className={`text-white text-lg font-bold`}>
                      Lincoln Gasparin
                      </div>
                     <div className="text-white text-sm">
                      Desenvolvedor Full Stack Jr
                      </div>     
            </div>   
            <div className="flex shrink-0">
              <img
                alt=""
                src="/imagens/LvGCabeloPreto.png"
                className="h-12 w-auto rounded-full"
              />
            </div>
            </div>
        </div>
      </nav>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium transition-colors',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
