const SibarTitle = ({ text }: { text: string }) => {
	return (
		<h3 className='text-[16px] uppercase ps-3 font-medium relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-gray-400 before:w-1 before:rounded-full before:h-full tracking-wide'>
			{text}
		</h3>
	);
};

export default SibarTitle;
