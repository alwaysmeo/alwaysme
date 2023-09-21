import { ref, computed } from 'vue'

const zIndex = ref<number>(0)

export const useZIndex = () => {
	const initialZIndex = ref<number>(2000)
	const currentZIndex = computed(() => initialZIndex.value + zIndex.value).value
	const nextZIndex = () => {
		zIndex.value++
		return currentZIndex
	}

	return {
		initialZIndex,
		currentZIndex,
		nextZIndex
	}
}
