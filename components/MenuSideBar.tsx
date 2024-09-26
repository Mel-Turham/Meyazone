'use client';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { useMenuStore } from '@/store/MenuStore';
const MenuSideBar = () => {
	const { isOpen, setIsOpen } = useMenuStore();
	return (
		<div>
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetContent side={'left'}>
					<SheetHeader>
						<SheetTitle>Are you absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MenuSideBar;
