const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  return <div className='overflow-y-scroll px-4 py-5 w-full'>{children}</div>;
};

export default ScrollProvider;
