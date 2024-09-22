import Spinner from '@/components/Spinner';

const Loading = () => {
	return (
		<div className='fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center text-white z-20'>
			<p className='text-2xl font-semibold'>Loading...</p>
			<Spinner />
		</div>
	);
};

export default Loading;
