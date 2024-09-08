import { useEffect, RefObject } from 'react';

const useOutSideClick = (
	ref: RefObject<HTMLElement | null>,
	callback: () => void,
) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent | TouchEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};
		document.addEventListener('click', handleClick);
		document.addEventListener('mouseup', handleClick);
		document.addEventListener('touchend', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
			document.removeEventListener('mouseup', handleClick);
			document.removeEventListener('touchend', handleClick);
		};
	}, [callback, ref]);

	return ref;
};

export default useOutSideClick;
