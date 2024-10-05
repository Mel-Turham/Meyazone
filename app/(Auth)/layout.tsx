const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='grow py-10 flex items-center justify-center min-h-screen'>
			{children}
		</main>
	);
};

export default AuthLayout;
