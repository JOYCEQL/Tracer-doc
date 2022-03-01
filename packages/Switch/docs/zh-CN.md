
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
| `active-color` | 激活状态颜色 | _string_ | `#18a058` |
| `inactive-color` | 未激活状态颜色 | _string_ | `#dbdbdb`
| `size` | 开关尺寸 | `'default' \| 'large' \|'small'`| `default` |
| `disabled` | 是否禁用| _boolean_ | `false`|

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 点击开关时触发 | `event: Event` |
