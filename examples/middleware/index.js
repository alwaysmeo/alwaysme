import before from './before'
import after from './after'

export default (router) => {
	router.beforeEach(before)
	router.afterEach(after)
}
