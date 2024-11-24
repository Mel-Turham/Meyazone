import { Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Favorites } from './favorites';
import { WishLists } from './wish-lists';
import { PriceNotifications } from './price-notifications';
import { DashboardHeader } from './header';
import { Summary } from './summary';

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Summary />
      </Suspense>
      <Tabs defaultValue='favorites' className='mt-6'>
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='favorites'>My Favorites</TabsTrigger>
          <TabsTrigger value='wishlists'>Custom Wish Lists</TabsTrigger>
          <TabsTrigger value='notifications'>Price Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value='favorites'>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Favorites />
          </Suspense>
        </TabsContent>
        <TabsContent value='wishlists'>
          <Suspense fallback={<h1>Loading...</h1>}>
            <WishLists />
          </Suspense>
        </TabsContent>
        <TabsContent value='notifications'>
          <Suspense fallback={<h1>Loading...</h1>}>
            <PriceNotifications />
          </Suspense>
        </TabsContent>
      </Tabs>
    </>
  );
}
