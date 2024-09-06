import { useState } from 'react';
const useToggle = (initial: boolean) => {
	const [toggle, setToggle] = useState<boolean>(initial);

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};

	return { toggle, handleToggle };
};
export default useToggle;
