<template>
  <div>
    <div class="bs-page-body">
      <!-- Search start -->
      <el-form :inline="true" :model="queryParams" class="bs-form-search mt10">
        <el-form-item>
          <span class="bs-form-label" style="width: 80px"> <span class="icon">姓名:</span> </span>
          <el-input v-model="queryParams.name" maxlength="20" placeholder="请输入" clearable @keyup.enter.native="onSearch" />
        </el-form-item>
        <el-form-item>
          <span class="bs-form-label" style="width: 80px"> <span class="icon">级别:</span> </span>
          <el-select v-model="queryParams.level" placeholder="请选择" filterable clearable>
            <el-option v-for="item in levelOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button class="bs-form-btn" type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- Search end -->

      <!-- Table start -->
      <div class="bs-page-table">
        <div class="bs-table-btns">
          <el-checkbox v-model="isExpandAll" style="padding: 3px 0" @change="onChangeExpand">Unfold All</el-checkbox>
          <span style="margin-left: 20px"></span>
          <el-button type="primary" icon="i-ep-plus" @click="onClickAdd"> 新增 </el-button>
        </div>
        <el-table
          ref="tableRef"
          v-loading="tableLoading"
          class="bs-table"
          :data="tableData"
          :stripe="true"
          :header-cell-style="{ textAlign: 'center' }"
          :cell-style="{ textAlign: 'center' }"
          @selection-change="onSelectionChange"
          @expand-change="expandChange"
        >
          <el-table-column type="expand">
            <template #default="scope">
              <TableFold :fold-list="scope.row.foldList" @change="onRemove" />
            </template>
          </el-table-column>
          <el-table-column prop="number" type="index" label="序号" min-width="60" />
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column label="操作人" min-width="100">
            <template #default="scope">
              <span @click="onClickRow(scope.row)">
                <a style="color: #00a0e9; text-decoration: underline">{{ scope.row.name }}</a>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="状态">
            <template #default="scope">
              <!-- {{ scope.row.status === '0' ? '停用' : '启用' }} -->
              <div :style="{ background: getBgColor(scope.row) }" class="tagClass">{{ scope.row.status === '0' ? '停用' : '启用' }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="isUse" label="启用状态">
            <template #header>
              <div>启用</div>
              <div>状态</div>
            </template>
            <template #default="scope"> {{ scope.row.isUse == 0 ? '停用' : '启用' }} </template>
          </el-table-column>
          <el-table-column label="级别" min-width="100">
            <template #default="scope">
              <!-- <div class="b-tag-success">{{ getDictLabel(scope.row.level, levelOptions) }}</div> -->
              <div :class="scope.row.level == '1' ? 'b-tag-success' : scope.row.level == '2' ? 'b-tag-warning' : 'b-tag-error'">{{ getDictLabel(scope.row.level, levelOptions) }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="isUse" label="启用">
            <template #default="scope"> {{ scope.row.isUse == 0 ? '停用' : '启用' }} </template>
          </el-table-column>
          <el-table-column prop="phone" label="手机号" min-width="200" />
          <el-table-column prop="money" label="金额" sortable />
          <el-table-column prop="age" label="年龄" sortable />
          <el-table-column prop="createDate" label="创建时间" min-width="180" />
          <el-table-column prop="updateDate" label="更新时间" min-width="180" />
          <!-- <el-table-column prop="content" label="备注" min-width="100" show-overflow-tooltip /> -->
          <el-table-column label="备注" min-width="200">
            <template #default="scope">
              <el-tooltip :visible-arrow="false" effect="light" :content="scope.row.content" placement="bottom">
                <span class="bs-tooltip-text">{{ scope.row.content }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
              <el-button size="small" icon="i-ep-edit" :disabled="!isEditable(scope.row)" @click="onClickEdit(scope.row)" />
              <el-button size="small" icon="i-ep-delete" type="danger" :disabled="!isEditable(scope.row)" @click="onClickDelete(scope.row)" />
            </template>
          </el-table-column>
        </el-table>
        <Pagination v-show="tableTotal > 0" :total="tableTotal" v-model:page="queryParams.page" v-model:limit="queryParams.limit" @pagination="requestList" />
      </div>
      <!-- Table end -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import { getDictDept, getDictLevel } from '@/api/base/base'
import { getDictLevel, getListData, deleteData, getDataById, TableType } from '@/api/tables/tables'
import TableFold from './tableFold.vue'
import TimeUtils from '@/utils/timeUtils'
import Mock from 'mockjs'

const tableRef = ref()
const state = reactive({
  tableTotal: 0,
  tableLoading: false,
  tableData: [] as TableType[],
  queryParams: {
    page: 1,
    limit: 10,
    startDate: '',
    endDate: '',
    name: '',
    level: ''
  },
  dateRange: [],
  selectedRows: [] as TableType[], // 勾选一行或多行数据
  cellBtnLoading: '',
  isExpandAll: false,
  detailData: {}
})
const { tableTotal, tableLoading, tableData, queryParams, dateRange, selectedRows, cellBtnLoading, isExpandAll } = toRefs(state)

// const deptOptions = ref<SelectOptionType[]>([])
const optionState = reactive({
  deptOptions: [] as SelectOptionType[],
  levelOptions: [] as SelectOptionType[]
})
const { deptOptions, levelOptions } = toRefs(optionState)

onMounted(() => {
  requestDict()
  requestList()
})

const requestDict = () => {
  getDictLevel().then((res) => {
    if (res.code === 20000) {
      optionState.levelOptions = res.data
    } else {
      ElMessage.warning(res.msg)
    }
  })
}

const requestList = () => {
  var params = JSON.parse(JSON.stringify(state.queryParams))
  params.startDate = state.dateRange ? TimeUtils.startOfDay(state.dateRange[0]) : ''
  params.endDate = state.dateRange ? TimeUtils.endOfDay(state.dateRange[1]) : ''
  console.log(JSON.stringify(params))

  state.tableLoading = true
  getListData(params)
    .then((res) => {
      state.tableLoading = false
      if (res.code === 20000) {
        // state.tableData = res.data
        state.tableData = handleData(res.data)
        state.tableTotal = res.total
        onChangeExpand()
      } else {
        ElMessage.warning(res.msg)
      }
    })
    .catch((err) => {
      state.tableLoading = false
      console.log(JSON.stringify(err))
    })
}

const handleData = (list: TableType[]) => {
  var tempArr = list as any
  for (let i = 0; i < tempArr.length; i++) {
    const foldList = Mock.mock({
      'items|1-8': [
        {
          id: '@id',
          name: '产品名称' + i,
          money: '@float(0, 1000, 1, 2)',
          'content|1-18': '这是产品描述',
          'isUse|1': ['0', '1']
        }
      ]
    })
    tempArr[i]['foldList'] = foldList.items
  }
  return tempArr
}

const onSearch = () => {
  state.queryParams.page = 1
  requestList()
}
const isEditable = (row: TableType) => {
  return true
  // return !row.loginName.toLowerCase().includes('admin')
}
// 通过下划线点击row
const onClickRow = (row: TableType) => {
  console.log('row', JSON.stringify(row))
  ElMessage.warning(row.name)
}

const onSelectionChange = (rows: TableType[]) => {
  state.selectedRows = rows
}

const onChangeExpand = () => {
  nextTick(() => {
    toggleRowExpansionAll(state.tableData, state.isExpandAll)
  })
}
const toggleRowExpansionAll = (data: TableType[], isExpansion: boolean) => {
  data.forEach((item) => {
    tableRef.value.toggleRowExpansion(item, isExpansion)
  })
}
const onRemove = () => {
  console.log('onRemove')
  //   nextTick(() => {
  //     tableRef.value.doLayout()
  //   })
}

// 判断当前行展开状态（通过唯一标识）
const expandChange = (row: TableType, rows: TableType[]) => {
  const isExpend = rows.some((r) => r.id === row.id)
  console.log('isExpend', isExpend)
  if (isExpend) {
    // Do some things
    getDetails(row.id)
  }
}

const getDetails = (id: string) => {
  console.log('展开params: ' + id)
  state.tableLoading = true
  getDataById(id)
    .then((res) => {
      state.tableLoading = false
      if (res.code === 20000) {
        state.detailData = res.data
      } else {
        ElMessage.warning('Failed to get table detail. Error details: ' + res.msg)
      }
    })
    .catch((e) => {
      state.tableLoading = false
      console.log('e', JSON.stringify(e))
      ElMessage.error('Failed to get table detail. Error details: ', e)
    })
}

const getDictLabel = (value: string, dictList: SelectOptionType[]) => {
  const foundIndex = dictList.findIndex((item) => item.value === value)
  if (foundIndex !== -1) {
    return dictList[foundIndex].label
  }
  // const option = dictList.find((item) => item.value === value)
  // return option ? option.label : ''
}
const getBgColor = (row: TableType) => {
  return row.status === '0' ? '#E6A23C' : '#67C23A'
}
// 操作按钮
const onClickAdd = () => {
  console.log('新增')
}
const onClickEdit = (row: TableType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  console.log('params', JSON.stringify(params))
}
const onClickDelete = (row: TableType) => {
  var name = ''
  if (row && row.id) {
    name = row.name
  } else {
    name = state.selectedRows.map((item) => item.name).join(',')
  }

  ElMessageBox.confirm(`确定要删除用户 ${name} ，此操作将永久删除, 是否继续?`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    var params = { ids: [] as string[] }
    if (row && row.id) {
      params.ids = [row.id]
    } else {
      const tempArr = state.selectedRows.map((item) => item.id)
      params.ids = tempArr
    }
    deleteRequest(params)
  })
}
const deleteRequest = (params: object) => {
  deleteData(params).then((res) => {
    if (res.code === 20000) {
      ElMessage.success('删除成功!')
      requestList()
    } else {
      ElMessage.warning(res.msg)
    }
  })
}
</script>

<style lang="scss" scoped>
.tagClass {
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
  color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  word-break: break-word;
}

.b-tag-warning {
  display: inline-block;
  margin: 0.2rem;
  padding: 5px 10px;
  font-size: 12px;
  color: #ffba00;
  background: #fff8e6;
  border: 1px solid #fff1cc;
  border-radius: 4px;
}

.b-tag-error {
  display: inline-block;
  margin: 0.2rem;
  padding: 5px 10px;
  font-size: 12px;
  color: #ff4949;
  background: #ffeded;
  border: 1px solid #ffdbdb;
  border-radius: 4px;
}

.b-tag-success {
  display: inline-block;
  margin: 0.2rem;
  padding: 5px 10px;
  font-size: 12px;
  color: #13ce66;
  background: #e7faf0;
  border: 1px solid #d0f5e0;
  border-radius: 4px;
}
</style>
