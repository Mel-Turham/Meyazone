import TabSinguelProduct from '@/components/TabSinguelProduct';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';

const Reviews = () => {
	return (
		<section className='py-8' id='reviews'>
			<div className='container space-y-10'>
				<TabSinguelProduct activeLink='reviews' />
				<div className='mt-8 pt-8 flex justify-between gap-8'>
					<div className='w-1/2 space-y-6'>
						<h3 className='text-xl font-medium'>Based on 3 reviews</h3>
						<div className='flex flex-col justify-center w-fit items-center gap-px'>
							<h4 className='text-4xl font-extrabold leading-none'>4.3</h4>
							<span className='text-sm  text-gray-500 leading-none'>
								overall
							</span>
						</div>
						<div className='space-y-5'>
							<div className='flex items-center gap-5'>
								<div className='flex items-center gap-1'>
									{Array.from({ length: 5 }, (_, index) => {
										return (
											<Star
												key={index}
												className='w-4 h-4 stroke-myprimary fill-myprimary'
											/>
										);
									})}
								</div>
								<div className='flex items-center gap-2'>
									<Progress value={30} className='h-2 w-[300px]' />
									<span>{3}</span>
								</div>
							</div>
							<div className='flex items-center gap-5'>
								<div className='flex items-center gap-1'>
									{Array.from({ length: 5 }, (_, index) => {
										return (
											<Star
												key={index}
												className='w-4 h-4 stroke-myprimary fill-myprimary'
											/>
										);
									})}
								</div>
								<div className='flex items-center gap-2'>
									<Progress value={60} className='h-2 w-[300px]' />
									<span>{1}</span>
								</div>
							</div>
							<div className='flex items-center gap-5'>
								<div className='flex items-center gap-1'>
									{Array.from({ length: 5 }, (_, index) => {
										return (
											<Star
												key={index}
												className='w-4 h-4 stroke-myprimary fill-myprimary'
											/>
										);
									})}
								</div>
								<div className='flex items-center gap-2'>
									<Progress value={10} className='h-2 w-[300px]' />
									<span>{9}</span>
								</div>
							</div>
							<div className='flex items-center gap-5'>
								<div className='flex items-center gap-1'>
									{Array.from({ length: 5 }, (_, index) => {
										return (
											<Star
												key={index}
												className='w-4 h-4 stroke-myprimary fill-myprimary'
											/>
										);
									})}
								</div>
								<div className='flex items-center gap-2'>
									<Progress value={90} className='h-2 w-[300px]' />
									<span>{6}</span>
								</div>
							</div>
							<div className='flex items-center gap-5'>
								<div className='flex items-center gap-1'>
									{Array.from({ length: 5 }, (_, index) => {
										return (
											<Star
												key={index}
												className='w-4 h-4 stroke-myprimary fill-myprimary'
											/>
										);
									})}
								</div>
								<div className='flex items-center gap-2'>
									<Progress value={67} className='h-2 w-[300px]' />
									<span>{2}</span>
								</div>
							</div>
						</div>
					</div>
					<div className=' w-1/2 space-y-5'>
						<h3 className='text-xl font-medium'>Add a review </h3>
						<div className='flex items-center gap-10'>
							<span>Your Rating</span>
							<div className='flex items-center justify-center gap-1'>
								{Array.from({ length: 5 }, (_, index) => {
									return (
										<Star
											key={index}
											className='w-4 h-4 cursor-pointer hover:fill-myprimary transition-all ease-in-out duration-300 stroke-myprimary'
										/>
									);
								})}
							</div>
						</div>
						<form action='#' className='space-y-6'>
							<div className='flex gap-14'>
								<Label className='text-base'>Your review</Label>
								<Textarea
									cols={3}
									placeholder='Add your review...'
									className='resize-none'
									required
								></Textarea>
							</div>
							<div className='flex gap-14'>
								<Label className='text-nowrap text-base'>Name *</Label>
								<Input type='text' required placeholder='Enter your name' />
							</div>
							<div className='flex gap-14'>
								<Label className='text-nowrap text-base'>Email *</Label>
								<Input type='email' required placeholder='Enter your email' />
							</div>
							<div className='flex gap-5'>
								<Checkbox required className='mt-1' />
								<Label className='text-base'>
									Save my name, email, and website in this browser for the next
									time I comment.
								</Label>
							</div>
							<Button
								type='submit'
								size={'lg'}
								className='rounded-full font-bold'
							>
								Add review
							</Button>
						</form>
					</div>
				</div>
				{/* comment sections */}
				<div className='space-y-8 mt-10 divide-y'>
					{/* one review */}
					<div className='space-y-6 pb-2 pt-6'>
						{/* raitings user */}
						<div className='flex items-center gap-px'>
							{Array.from({ length: 5 }, (_, index) => {
								return (
									<Star key={index} className='w-4 h-4 stroke-myprimary' />
								);
							})}
						</div>
						{/* comment users */}
						<p className='text-justify text-pretty text-sm leading-6 tracking-wide font-normal opacity-80'>
							Fusce vitae nibh mi. Integer posuere, libero et ullamcorper
							facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi
							ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum
							ante et euismod.
						</p>
						{/* name user and date of comment  */}
						<div className='flex items-center gap-1'>
							<p className='font-bold'>John Doe</p>
							<span>-</span>
							<p className='text-sm opacity-80 font-normal'>March 3, 2016</p>
						</div>
					</div>
					{/* one review */}
					<div className='space-y-6 pb-2 pt-6'>
						{/* raitings user */}
						<div className='flex items-center gap-px'>
							{Array.from({ length: 5 }, (_, index) => {
								return (
									<Star key={index} className='w-4 h-4 stroke-myprimary' />
								);
							})}
						</div>
						{/* comment users */}
						<p className='text-justify text-pretty text-sm leading-6 tracking-wide font-normal opacity-80'>
							Fusce vitae nibh mi. Integer posuere, libero et ullamcorper
							facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi
							ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum
							ante et euismod.
						</p>
						{/* name user and date of comment  */}
						<div className='flex items-center gap-1'>
							<p className='font-bold'>John Doe</p>
							<span>-</span>
							<p className='text-sm opacity-80 font-normal'>March 3, 2016</p>
						</div>
					</div>
					{/* one review */}
					<div className='space-y-6 pb-2 pt-6'>
						{/* raitings user */}
						<div className='flex items-center gap-px'>
							{Array.from({ length: 5 }, (_, index) => {
								return (
									<Star key={index} className='w-4 h-4 stroke-myprimary' />
								);
							})}
						</div>
						{/* comment users */}
						<p className='text-justify text-pretty text-sm leading-6 tracking-wide font-normal opacity-80'>
							Fusce vitae nibh mi. Integer posuere, libero et ullamcorper
							facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi
							ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum
							ante et euismod.
						</p>
						{/* name user and date of comment  */}
						<div className='flex items-center gap-1'>
							<p className='font-bold'>John Doe</p>
							<span>-</span>
							<p className='text-sm opacity-80 font-normal'>March 3, 2016</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Reviews;
