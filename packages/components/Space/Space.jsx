// 间距组件
import { Fragment } from 'vue';
import { useTools } from '@hooks';
export default defineComponent({
    props: {
        // 对齐方式
        align: {
            type: String,
            default: 'start'
        },
        direction: {
            // 方向
            type: String,
            default: 'horizontal'
        },
        size: {
            // 间距大小
            type: [String, Number],
            default: '1rem'
        }
    },
    setup(props, { slots }) {
        const { isNumber } = useTools();
        const classes = computed(() => {
            return [`${namespace}-space`];
        });
        const styles = computed(() => {
            return {
                [`--${namespace}-space-align`]: props.align,
                [`--${namespace}-space-direction`]: { horizontal: 'row', vertical: 'column' }[props.direction],
                [`--${namespace}-space-size`]: isNumber(props.size) ? props.size : `${props.size}px`
            };
        });
        return () => {
            return (<div class={classes.value} style={styles.value}>
					{slots.default?.().map((item, index) => {
                    return <Fragment key={item.key ?? `${namespace}-space-item-${index}`}>{item}</Fragment>;
                })}
				</div>);
        };
    }
});
