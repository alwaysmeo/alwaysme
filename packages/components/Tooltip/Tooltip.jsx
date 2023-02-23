export default defineComponent({
    props: {
        // 是否可见
        visible: {
            type: Boolean,
            default: false
        },
        // 显示的内容，可被 slot#content 覆盖
        content: {
            type: String,
            default: ''
        },
        // 显示的方向
        position: {
            type: String,
            default: 'horizontal'
        },
        // 出现位置偏移量
        offset: {
            type: Array,
            default: () => [0, 0]
        },
        // 触发方式
        trigger: {
            type: String,
            default: 'hover'
        }
    },
    setup(props, { slots }) {
        const classes = computed(() => {
            return [`${namespace}-tooltip`];
        });
        const styles = computed(() => {
            return {};
        });
        return () => {
            return (<div class={classes.value} style={styles.value}>
					{slots.default?.()}
				</div>);
        };
    }
});
