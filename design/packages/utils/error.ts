export function throwError(scope: string, m: string): never {
	throw new Error(`[${scope}] ${m}`)
}
