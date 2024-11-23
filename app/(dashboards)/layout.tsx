import React, { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return <div className='min-h-screen grow'>{children}</div>;
};

export default DashboardLayout;
