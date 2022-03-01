

<script setup>
import index from '../example/index.vue'
</script>

# 按钮


## 演示

<index />



## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model` | 是否显示dialog | _boolean_ | `false` |
| `title` | 标题 | _string_ | `标题`
| `confirmBtnText` | 确认按钮文本| _string_ | `确认`|
| `cancelBtnText` | 取消按钮文本| _boolean_ | `取消`|
| `closeOnClickMask` | 是否点击遮罩层关闭| _boolean_ | `true`|

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `confirm` | 点击dialog确认按钮时触发 | `event: Event` |
| `cancel` | 点击dialog取消按钮时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 |
| --- | --- | 
| `——` |  dialog主体 | 
| `title` |  dialog标题 |
| `footer` |  dialog操作按钮区内容 | 

