import mitt, { Emitter } from 'mitt'
type Events = { [name: string]: any }
const emitter: Emitter<Events> = mitt<Events>()
export default emitter
