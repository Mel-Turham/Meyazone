import React, { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return <main className='min-h-screen grow'>{children}</main>;
};

export default DashboardLayout;
