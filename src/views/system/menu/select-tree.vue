<template>
  <div>
    <el-select ref="selectRef" v-model="selectText" :placeholder="placeholder" :style="'width:' + width" clearable @clear="onClear">
      <el-input v-model="keyword" class="select-input" :placeholder="inputPlaceholder" clearable />
      <el-option :value="treeProps.value" :label="treeProps.label" class="tree-bg">
        <el-tree ref="treeRef" :node-key="treeProps.value" :data="treeData" highlight-current :filter-node-method="onFilterNode" :props="treeProps" @node-click="onClickNode" />
      </el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { MenuType } from '@/api/system/menu'

const emit = defineEmits(['update:modelValue', 'closed', 'selected'])

type TreePropType = {
  value: string
  label: string
  children: string
  parentId?: string
}

const props = defineProps({
  modelValue: { type: [String, Array], default: null },
  data: {
    type: Array as () => MenuType[],
    default: () => []
  },
  props: {
    type: Object as () => TreePropType,
    // type: Object as PropType<TreePropType>,
    default: () => ({
      value: 'id', // ID
      label: 'name', // 显示名称
      children: 'children', // 子级字段名
      parentId: 'parentId' // 父id
    })
  },
  placeholder: { type: String, default: '请选择' },
  inputPlaceholder: { type: String, default: '检索关键字' },
  width: { type: String, default: '' },
  disabled: { type: Boolean, default: false }
})

const selectRef = ref()
const treeRef = ref()
const state = reactive({
  treeData: [] as MenuType[],
  treeProps: {} as TreePropType,
  keyword: '',
  selectText: '',
  selectValue: ''
})
const { treeData, treeProps, keyword, selectText, selectValue } = toRefs(state)

watch(
  () => state.selectText,
  (val) => {
    const tempValue = state.selectValue || null
    emit('update:modelValue', tempValue)
  }
)
watch(
  () => props.modelValue,
  (val) => {
    if (val && val.length) {
      const selectIds = Array.isArray(val) ? val : [val]
      nextTick(() => {
        treeRef.value.setCheckedKeys(selectIds)
        const selectValues = treeRef.value.getCheckedNodes()
        if (selectValues && selectValues.length > 0) {
          setLableValue(selectValues[0][state.treeProps.label], selectValues[0][state.treeProps.value])
        } else {
          setLableValue('', '')
        }
      })
    } else {
      setLableValue('', '')
    }
  },
  { immediate: true }
)
watch(
  () => props.data,
  (val) => {
    state.treeData = val && val.length ? val : []
  },
  { immediate: true }
)
watch(
  () => props.props,
  (val) => {
    state.treeProps = val as TreePropType
  },
  { immediate: true }
)
watch(
  () => state.keyword,
  (val) => {
    treeRef.value.filter(val)
  }
)

const onFilterNode = (value: string, data: any) => {
  if (!value) return true
  return data[state.treeProps.label].indexOf(value) !== -1
}

const onClear = () => {
  setLableValue('', '')
}

const onClickNode = (node: any) => {
  selectRef.value.blur()
  setLableValue(node[state.treeProps.label], node[state.treeProps.value])
  emit('selected', node[state.treeProps.value], node)
}

function setLableValue(label: string, value: string) {
  state.selectText = label
  state.selectValue = value
}
</script>

<style lang="scss" scoped>
.el-select-dropdown__item {
  padding: 0px;
}

.select-input {
  padding: 0 5px;
  box-sizing: border-box;
  margin-bottom: 5px;
}

.tree-bg {
  height: 200px;
  overflow: auto;
  background: #fff;
  background: var(--selectRowBgColor);
}
</style>
