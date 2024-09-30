import LoginForm from '@/components/Login';
import RegisterForm from '@/components/Register';

const page = () => {
	return (
		<section className='pb-8 pt-14'>
			<div className='container flex justify-between items-center'>
				<LoginForm />
				<div className='min-h-svh w-px bg-slate-600/30 dark:bg-gray-400/15 relative'>
					<div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-myprimary flex items-center justify-center font-semibold text-slate-800 text-xl italic'>
						or
					</div>
				</div>
				<RegisterForm />
			</div>
		</section>
	);
};

export default page;
