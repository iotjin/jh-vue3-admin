<template>
  <div class="app-container">
    <el-table :data="tableData" style="width: 100%; margin-bottom: 20px" :span-method="arraySpanMethod" row-key="id" border @expand-change="expandChange">
      <el-table-column type="expand">
        <template #default="props">
          <el-table class="table-in-table" :show-header="false" :data="props.row.datas" style="width: 100%" row-key="id" :span-method="arraySpanMethod" border @expand-change="expandChange">
            <el-table-column type="expand">
              <template #default="props2">
                <el-table class="table-in-table" :data="props2.row.datas" style="width: 100%" row-key="id" border>
                  <el-table-column prop="date" label="下单日期" width="180" />
                  <el-table-column prop="type" label="单据类型" width="180" />
                  <el-table-column prop="status" label="状态" />
                  <el-table-column label="操作" width="120">
                    <template #default="scope">
                      <el-button type="primary" text size="small">移除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column prop="applyNo" label="申请单号" width="132.2" />
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="address" label="地址" />
          </el-table>
        </template>
      </el-table-column>

      <el-table-column prop="applyNo" label="申请单号" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button type="primary" text bg size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import type { TableColumnCtx } from 'element-plus'

interface TableType {
  id: number
  applyNo?: string
  name?: string
  address?: string
  datas?: TableType[]
  date?: string
  type?: string
  status?: string
}

interface SpanMethodProps {
  row: TableType
  column: TableColumnCtx<TableType>
  rowIndex: number
  columnIndex: number
}

const tableRef = ref()
const state = reactive({
  tableTotal: 0,
  tableLoading: false,
  tableData: [] as TableType[],
  selectedRows: [] as TableType[], // 勾选一行或多行数据
  cellBtnLoading: ''
})
const { tableTotal, tableLoading, tableData, selectedRows } = toRefs(state)

onMounted(() => {
  initData()
})

const initData = () => {
  state.tableData = [
    {
      id: 1,
      applyNo: '202004291234',
      name: '张三',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      id: 2,
      applyNo: '202004291235',
      name: '李四',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      id: 3,
      applyNo: '202004291236,202004291237',
      name: '王五',
      address: '上海市普陀区金沙江路 1519 弄',
      datas: [
        {
          id: 31,
          applyNo: '202004291236',
          name: '王小五',
          address: '上海市普陀区金沙江路 1519 弄',
          datas: [
            {
              id: 31,
              date: '2016-05-01',
              type: '类型1',
              status: '已发货'
            },
            {
              id: 32,
              date: '2016-05-01',
              type: '类型2',
              status: '未发货'
            }
          ]
        },
        {
          id: 32,
          applyNo: '202004291237',
          name: '赵小六',
          address: '上海市普陀区金沙江路 1519 弄'
        }
      ]
    },
    {
      id: 4,
      applyNo: '202004291238',
      name: '赵六',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ]
}

const arraySpanMethod = ({ row, column, rowIndex, columnIndex }: SpanMethodProps) => {
  if (!row.datas) {
    if (columnIndex === 0) {
      return [0, 0]
    } else if (columnIndex === 1) {
      return [1, 2]
    }
  }
}

const expandChange = (row: TableType, rows: TableType[]) => {
  // 判断当前行展开状态（通过唯一标识）
  // console.log('row', JSON.stringify(row))
  // console.log('rows', JSON.stringify(rows))

  const isExpend = rows.some((r) => r.id === row.id)
  console.log('isExpend', isExpend)
  if (isExpend) {
    // Do some things
  }
}
</script>

<style lang="scss" scoped>
// .app-container {
//   ::v-deep {
//     .el-table th {
//       background: #ddeeff;
//     }
//     .el-table__expanded-cell {
//       border-bottom: 0px;
//       border-right: 0px;
//       padding: 0px 0px 0px 47px;
//     }
//   }
//   .table-in-table {
//     border-top: 0px;
//   }
// }

// .app-container {
//   :deep {
//     .el-table th {
//       background: #ddeeff;
//     }
//     .el-table__expanded-cell {
//       border-bottom: 0px;
//       border-right: 0px;
//       padding: 0px 0px 0px 47px;
//     }
//   }
//   .table-in-table {
//     border-top: 0px;
//   }
// }

.app-container {
  :deep(.el-table th) {
    background: #ddeeff;
  }
  :deep(.el-table__expanded-cell) {
    border-bottom: 0px;
    border-right: 0px;
    padding: 0px 0px 0px 47px;
  }

  .table-in-table {
    border-top: 0px;
  }
}
</style>
