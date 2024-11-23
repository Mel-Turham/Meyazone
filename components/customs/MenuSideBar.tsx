'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useMenuStore } from '@/store/MenuStore';
import Image from 'next/image';
import { departments } from '@/db';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import Link from 'next/link';
const MenuSideBar = () => {
  const { isOpen, setIsOpen } = useMenuStore();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side={'left'} className='overflow-y-scroll'>
        <SheetHeader>
          <SheetTitle className='flex items-center gap-1'>
            <Image
              src={'/logo-responsive.png'}
              alt='log0 meyazone'
              width={100}
              height={100}
              loading='lazy'
              className=' w-[45px]'
            />
            <p className='text-2xl cursor-pointer font-extrabold text-primary'>
              MEYAZONE
            </p>
          </SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </SheetDescription>
        </SheetHeader>

        <div className='mt-9 '>
          {departments.map((item, index) =>
            item.megaMenu ? (
              <Accordion
                key={index + 1}
                type='single'
                collapsible
                className='w-full'
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{item.name}</AccordionTrigger>
                  <AccordionContent>
                    {item.megaMenu.map((megaItem) => (
                      <Accordion
                        key={megaItem.id}
                        type='single'
                        collapsible
                        className='w-full '
                      >
                        <AccordionItem
                          className='border-none'
                          value={`item-${megaItem.id}`}
                        >
                          <AccordionTrigger>
                            {megaItem.categoryName}
                          </AccordionTrigger>
                          <AccordionContent>
                            {megaItem.links.map((link) => (
                              <Link
                                key={link.id}
                                href={'#'}
                                className='block py-2 hover:underline'
                              >
                                {link.label}
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Accordion
                key={index + 1}
                type='single'
                collapsible
                className='w-full'
              >
                <AccordionItem value={`item-${index}`} className='py-4 '>
                  <Link className='hover:underline' href={'#'}>
                    {item.name}
                  </Link>
                </AccordionItem>
              </Accordion>
            )
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSideBar;
