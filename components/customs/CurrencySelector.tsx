import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useCurrencyStore } from '@/store/useCurrencyStore';
const CurrencySelector = () => {
	const { currency, setCurrency } = useCurrencyStore();
	const handleChangeCurrency = (value: 'USD' | 'XOF') => {
		setCurrency(value);
	};
	return (
		<Select value={currency} onValueChange={handleChangeCurrency}>
			<SelectTrigger className='w-[90px] p-1 right-0 focus:ring-offset-0'>
				<SelectValue placeholder='Select currentcy' />
				<SelectContent className='text-xs capitalize'>
					<SelectGroup>
						{/* <SelectLabel>Currency</SelectLabel> */}
						<SelectItem value='USD'>USD</SelectItem>
						<SelectItem value='XOF'>XOF</SelectItem>
					</SelectGroup>
				</SelectContent>
			</SelectTrigger>
		</Select>
	);
};

export default CurrencySelector;
