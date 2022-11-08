export const SIZES = ['large', 'default', 'small'] as const
export type size = typeof SIZES[number]
