import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Currency = 'USD' | 'XOF';

interface CurrencyState {
	currency: Currency;
	setCurrency: (currency: Currency) => void;
}

export const useCurrencyStore = create(
	persist<CurrencyState>(
		(set) => ({
			currency: 'USD',
			setCurrency: (currency: Currency) => set({ currency }),
		}),
		{
			name: 'currency-storage',
		},
	),
);
