import Spinner from '@/components/Spinner';

const Loading = () => {
	return (
		<div className='fixed top-0 left-0 w-full h-screen dark:bg-slate-900  flex flex-col items-center justify-center dark:text-white text-slate-100 z-20 gap-5'>
			<p className='text-4xl font-semibold'>Chargement...</p>
			<Spinner />
		</div>
	);
};

export default Loading;
