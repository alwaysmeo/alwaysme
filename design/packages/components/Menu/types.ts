import { ComputedRef } from 'vue'

export interface MenuProvider {
	mode: ComputedRef<'horizontal' | 'vertical' | undefined>
	collapse: ComputedRef<boolean>
	value: ComputedRef<string>
	handleSelect: (value: string) => void
}
