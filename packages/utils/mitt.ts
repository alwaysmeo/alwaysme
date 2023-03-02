import mitt, { Emitter } from 'mitt'
const emitter: Emitter<{ [name: string]: any }> = mitt()

export default emitter
