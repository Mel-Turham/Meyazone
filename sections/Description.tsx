import TabSinguelProduct from '@/components/customs/TabSinguelProduct';
import Image from 'next/image';

const Description = () => {
  return (
    <section className='py-8' id='description'>
      <div className='container'>
        <TabSinguelProduct activeLink='description' />
        <div className='pt-10'>
          <div className='space-y-3 mb-6'>
            <h3 className='text-2xl font-semibold'>Perfectly Done</h3>
            <p className='text-sm leading-6 opacity-70 font-light text-balance'>
              Praesent ornare, ex a interdum consectetur, lectus diam sodales
              elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem
              semper viverra. In lobortis egestas massa. Nam nec massa nisi.
              Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat.
              Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices
              dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus,
              non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt
              eu.
            </p>
          </div>
          <div className='flex gap-3'>
            <div className='space-y-6 w-1/2'>
              <div className='space-y-3'>
                <h3 className='text-2xl font-semibold'>Wireless</h3>
                <p className='text-sm leading-6 opacity-70 font-light text-balance'>
                  Fusce vitae nibh mi. Integer posuere, libero et ullamcorper
                  facilisis, enim eros tincidunt orci, eget vestibulum sapien
                  nisi ut leo. Cras finibus vel est ut mollis. Donec luctus
                  condimentum ante et euismod.
                </p>
              </div>
              <div className='space-y-3'>
                <h3 className='text-2xl font-semibold'>Fresh Design</h3>
                <p className='text-sm leading-6 opacity-70 font-light text-balance'>
                  Integer bibendum aliquet ipsum, in ultrices enim sodales sed.
                  Quisque ut urna vitae lacus laoreet malesuada eu at massa.
                  Pellentesque nibh augue, pellentesque nec dictum vel, pretium
                  a arcu. Duis eu urna suscipit, lobortis elit quis, ullamcorper
                  massa.
                </p>
              </div>
              <div className='space-y-3'>
                <h3 className='text-2xl font-semibold'>Fabolous Sound</h3>
                <p className='text-sm leading-6 opacity-70 font-light text-balance'>
                  Cras rutrum, nibh a sodales accumsan, elit sapien ultrices
                  sapien, eget semper lectus ex congue elit. Nullam dui elit,
                  fermentum a varius at, iaculis non dolor. In hac habitasse
                  platea dictumst.
                </p>
              </div>
            </div>
            <div className='w-1/2'>
              <Image
                width={500}
                height={500}
                src={'/product-63.png'}
                alt='image'
                loading='lazy'
                className='w-full aspect-square object-contain'
              />
            </div>
          </div>
          <div className='flex gap-3'>
            <div className='space-y-6 w-1/2 order-2'>
              <div className='space-y-3 flex items-end flex-col'>
                <h3 className='text-2xl font-semibold'>Inteligent Bass</h3>
                <p className='text-sm leading-6 text-end opacity-70 font-light text-balance'>
                  Fusce vitae nibh mi. Integer posuere, libero et ullamcorper
                  facilisis, enim eros tincidunt orci, eget vestibulum sapien
                  nisi ut leo. Cras finibus vel est ut mollis. Donec luctus
                  condimentum ante et euismod.
                </p>
              </div>
              <div className='space-y-3 flex items-end flex-col'>
                <h3 className='text-2xl font-semibold'>Battery Life</h3>
                <p className='text-sm leading-6 text-end opacity-70 font-light text-balance'>
                  Integer bibendum aliquet ipsum, in ultrices enim sodales sed.
                  Quisque ut urna vitae lacus laoreet malesuada eu at massa.
                  Pellentesque nibh augue, pellentesque nec dictum vel, pretium
                  a arcu. Duis eu urna suscipit, lobortis elit quis, ullamcorper
                  massa.
                </p>
              </div>
            </div>
            <div className='w-1/2 '>
              <Image
                width={500}
                height={500}
                src={'/product-67.png'}
                alt='image'
                loading='lazy'
                className='w-full aspect-square object-contain z-[1]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
