import getAllBlogs from '@/utils/getAllBlogs';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import AuthorBlog from '@/components/AuthorBlog';
import { Input } from '@/components/ui/input';
import { MessageCircle, QuoteIcon, Search, User2 } from 'lucide-react';
import SibarTitle from '@/components/SibarTitle';
import { ReactNode, useMemo } from 'react';
import { CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import RecentPostCard from '@/components/RecentPostCard';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import CommentSection from '@/sections/BlogComments';

interface paramsProps {
  params: { id: string };
}
interface PostProps {
  post: { image: string; title: string; date: string };
}

const categories = [
  'Business',
  'SEO',
  'Ecommerce',
  'Technologies',
  'Tendances',
  'Conseils',
];
const tags = [
  'Business',
  'C++',
  'Courses',
  'Education',
  'Guides',
  'Languages',
  'Marketing',
  'News',
  'Technology',
  'Tips',
];
const recentPosts = Array.from({ length: 3 }, (_, index) => ({
  title: 'What Can Communities Do to Help Themselves?',
  date: 'July 11, 2019',
  image: '/article-1.jpg',
}));

const galleryImages = ['article-1.jpg', 'article-2.jpg', 'article-3.jpg'];

const SingleBlogPage = ({ params }: paramsProps) => {
  const { id } = params;
  const allPostBlogs = getAllBlogs();

  const blog = useMemo(
    () => allPostBlogs.find((postBlog) => postBlog.id === id),
    [id, allPostBlogs]
  );

  return (
    <section className='py-20'>
      <div className='container flex gap-10'>
        <div className='w-10/12'>
          <div className='flex flex-col items-center gap-3 mb-10'>
            <blockquote className='text-2xl italic font-serif flex items-center gap-5'>
              <QuoteIcon className='mr-14' />
              <p>
                There are no secrets to success. It is the result of hard work.
              </p>
            </blockquote>
            <h3 className='font-bold text-muted-foreground tracking-wide font-serif'>
              {' '}
              - {blog?.author}
            </h3>
          </div>
          <div>
            <div className='w-24 aspect-square rounded-full bg-myprimary flex items-center flex-col justify-center'>
              <span className='capitalize font-serif font-medium'>july</span>
              <span className='text-5xl font-serif font-bold'>11</span>
            </div>
            <div className='mt-5 pb-10'>
              <div className='flex items-center gap-2 uppercase '>
                <h4 className='text-sm font-semibold cursor-pointer text-myprimary'>
                  {blog?.tags[0]} /
                </h4>
                <CardDescription className='cursor-pointer'>
                  by {blog?.author}
                </CardDescription>
              </div>
              <div className='my-6'>
                <h2 className='font-semibold text-5xl tracking-wide font-serif hover:text-myprimary transition capitalize mb-4'>
                  {blog?.title + '.'}
                </h2>
                <p className='text-pretty text-sm leading-loose font-normal first-letter:px-7 first-letter:bg-myprimary first-letter:float-left first-letter:m-4 first-letter:rounded-lg first-letter:py-5 first-letter:text-4xl first-letter:font-bold'>
                  {blog?.description +
                    ' ' +
                    '	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quaerat numquam ipsam, ipsa non aut expedita, eaque distinctio ad ullam officia adipisci quam quas, saepe recusandae pariatur! Totam sed vitae laudantium doloribus, omnis, architecto, ab unde quasi dicta porro quidem maxime rem recusandae commodi debitis obcaecati delectus accusantium doloremque id! Nulla, dicta beatae. Perferendis, temporibus in dignissimos nemo doloremque unde, placeat non quibusdam explicabo nam tempora iste odit culpa modi ipsum reprehenderit vero, alias numquam eligendi quo magni veritatis officia ad! Iste, fuga hic itaque dicta nam cum animi debitis? Fugit labore corporis aliquid, neque exercitationem rem. Fugit, nobis amet.'}
                </p>
              </div>

              <div className='flex items-center justify-between'>
                <div className='space-x-3 '>
                  {blog?.tags.map((tag, index) => (
                    <Badge
                      className='rounded capitalize font-medium tracking-wide'
                      key={index}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className='flex items-center gap-5'>
                  <div className='flex items-center justify-center gap-3 cursor-pointer hover:opacity-75'>
                    <User2 />
                    <span>907 Views</span>
                  </div>
                  <div className='flex hover:opacity-75 items-center justify-center gap-3 cursor-pointer'>
                    <MessageCircle />
                    <span>2 Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <Separator orientation='horizontal' className='mb-5' />

            <div className='space-y-5 py-5  '>
              <h2 className='text-4xl font-bold font-serif'>Related Posts</h2>
              <div className='flex items-center gap-4'>
                <RecentPostCard />
                <RecentPostCard />
              </div>
            </div>
            <div className='space-y-5 pt-5 '>
              <h2 className='text-4xl font-bold font-serif'>
                Comments
                <span className='font-normal text-muted-foreground'>(02)</span>
              </h2>
              <CommentSection />
            </div>
          </div>
          <div className='space-y-5 p-5 dark:bg-slate-900/45 bg-gray-300/20 shadow-md'>
            <h2 className='text-4xl font-bold font-serif'>
              Leave a Reply Your
            </h2>
            <p className='font-serif text-xs font-normal'>
              Your email address will not be published. Required fields are
              marked *
            </p>

            <form action='#' className='w-full flex flex-col gap-5'>
              <div className='flex gap-5'>
                <Input
                  size={80}
                  type='text'
                  className='rounded placeholder:font-serif py-4 h-14'
                  placeholder='Your Name*'
                />
                <Input
                  size={80}
                  className='rounded placeholder:font-serif py-4 h-14'
                  placeholder='Your Email*'
                />
              </div>
              <Input
                className='w-full rounded placeholder:font-serif py-4 h-14'
                type='url'
                placeholder='Your website'
              />
              <Textarea
                placeholder='Your comment...'
                className='w-full rounded placeholder:font-serif'
                rows={7}
              />
              <div className='space-y-5'>
                <div className='flex items-center gap-4'>
                  <Checkbox />
                  <span className='text-xs font-serif font-light'>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </span>
                </div>
                <Button className='font-serif font-bold'>Post comment</Button>
              </div>
            </form>
          </div>
        </div>
        {/* Sidebar */}
      <aside className='inline-block w-4/12'>
        <AuthorBlog />
        <SearchForm />
        <SidebarSection title='Categories'>
          <ul className='space-y-4 list-disc marker:text-myprimary ps-3.5'>
            {categories.map((category, index) => (
              <li
                key={index}
                className='capitalize cursor-pointer hover:text-myprimary transition duration-300'
              >
                {category}
              </li>
            ))}
          </ul>
        </SidebarSection>

        <SidebarSection title='Recent Posts'>
          {recentPosts.map((post, index) => (
            <RecentPost key={index} post={post} />
          ))}
        </SidebarSection>

        <SidebarSection title='Gallery'>
          <div className='grid grid-cols-3 gap-3'>
            {galleryImages.map((image, index) => (
              <ImageItem key={index} src={image} />
            ))}
          </div>
        </SidebarSection>

        <SidebarSection title='Tags'>
          <div className='flex flex-wrap gap-4'>
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </SidebarSection>

        <PromoSection />
      </aside>
      </div>

      
    </section>
  );
};

// Separate reusable components

const SearchForm = () => (
  <form
    action='#'
    className='flex items-center gap-3 border dark:border-slate-800 rounded-sm overflow-hidden p-1 w-full mt-10'
  >
    <Input
      placeholder='Search...'
      aria-label='Search blogs'
      className='w-3/4 border-none focus:outline-none'
    />
    <button
      type='submit'
      aria-label='Search'
      className='w-[50px] flex items-center justify-center py-2 rounded-md bg-myprimary'
    >
      <Search className='w-5 h-5' strokeWidth={1.8} />
    </button>
  </form>
);

const SidebarSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className='w-full mt-10 space-y-8'>
    <SibarTitle text={title} />
    {children}
  </div>
);

const RecentPost = ({ post }: PostProps) => (
  <div className='flex gap-6'>
    <Image
      src={post.image}
      alt=''
      width={200}
      height={200}
      loading='lazy'
      className='w-20 h-20 bg-gray-400 rounded-md cursor-pointer'
    />
    <div className='space-y-2'>
      <h4 className='font-medium cursor-pointer hover:text-myprimary transition duration-300'>
        <p>{post.title}</p>
      </h4>
      <p className='text-gray-400 font-bold'>{post.date}</p>
    </div>
  </div>
);

const ImageItem = ({ src }: { src: string }) => (
  <Image
    src={`/${src}`}
    alt=''
    width={200}
    height={200}
    loading='lazy'
    className='hover:opacity-70 transition duration-300 bg-gray-400 rounded-md cursor-pointer'
  />
);

const Tag = ({ tag }: { tag: string }) => (
  <li className='border px-4 py-1 rounded-sm hover:bg-myprimary font-medium transition capitalize'>
    <Link href='#'>{tag}</Link>
  </li>
);

const PromoSection = () => (
  <div className='w-full mt-10 bg-myprimary flex items-center justify-center flex-col rounded-lg py-8 relative'>
    <PromoBackground />
    <Image
      src='/logo-dark.png'
      alt=''
      loading='lazy'
      width={500}
      height={300}
      className='w-32 h-16 object-contain'
    />
    <h4 className='text-lg max-w-[250px] text-center font-bold animate-pulse'>
      Start shopping today at Meyazone
    </h4>
    <Button size='lg' className='mt-8'>
      Start Now
    </Button>
  </div>
);

const PromoBackground = () => (
  <>
    <div className='absolute w-36 h-36 top-3 left-1 bg-red-50/10 rounded-full shadow-inner'></div>
    <div className='absolute w-20 h-20 top-0 right-0 bg-red-50/10 rounded-full shadow-inner'></div>
    <div className='absolute w-20 h-20 top-10 left-1/2 bg-red-50/10 rounded-full shadow-inner'></div>
    <div className='absolute w-20 h-20 bottom-10 left-0 bg-red-50/10 rounded-full shadow-inner'></div>
    <div className='absolute w-20 h-20 bottom-0 right-0 bg-red-50/10 rounded-full shadow-inner'></div>
  </>
);

export default SingleBlogPage;
