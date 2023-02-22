import mitt, { Emitter } from 'mitt'
const emitter: Emitter<{ [name: string]: any }> = mitt<Events>()

export default emitter
