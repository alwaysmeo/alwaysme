import _mitt, { Emitter } from 'mitt'
const emitter: Emitter<{ [name: string]: any }> = _mitt<Events>()

export const mitt = emitter
