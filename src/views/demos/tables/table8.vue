<template>
  <div style="margin: 50px">
    <h2 style="padding: 20px">实现一</h2>
    <el-table :data="tableData1" :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" border stripe fit highlight-current-row>
      <el-table-column prop="name" label="姓名" />
      <el-table-column v-for="subject in subjects1" :key="subject" :prop="subject" :label="subject" />
    </el-table>
    <h2 style="padding: 20px">实现二</h2>
    <el-table :data="tableData2" :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" border stripe fit highlight-current-row>
      <el-table-column prop="name" label="姓名" />
      <el-table-column v-for="subject in subjects2" :key="subject" :prop="subject" :label="subject" />
    </el-table>
    <h2 style="padding: 20px">实现三</h2>
    <el-table :data="scoreData" :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" border stripe fit highlight-current-row>
      <el-table-column prop="name" label="姓名" />
      <el-table-column v-for="subject in allSubjects" :key="subject.subject" :prop="subject.subject" :label="subject.subject">
        <template #header>
          <span style="color: red; padding-right: 3px">*</span><span>{{ subject.subject }}</span>
        </template>
        <template #default="scope">
          {{ getScore(scope.row, subject.subject) }}
        </template>
      </el-table-column>
    </el-table>
    <h2 style="padding: 20px">实现四</h2>
    <el-table :data="scoreData2" :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" border stripe fit highlight-current-row>
      <el-table-column prop="name" label="姓名" />
      <el-table-column v-for="subject in allSubjects2" :key="subject" :prop="subject" :label="subject" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
const state = reactive({
  scoreData: [
    {
      name: '张三',
      scores: [
        { subject: '语文', score: 80 },
        { subject: '数学', score: 90 },
        { subject: '英语', score: 85 }
      ]
    },
    {
      name: '李四',
      scores: [
        { subject: '语文', score: 75 },
        { subject: '数学', score: 88 }
      ]
    },
    {
      name: '王五',
      scores: [
        { subject: '语文', score: 92 },
        { subject: '数学', score: 87 },
        { subject: '英语', score: 95 },
        { subject: '物理', score: 90 }
      ]
    }
  ],
  tableData1: [],
  subjects1: [],
  tableData2: [],
  subjects2: [],
  scoreData2: [
    { name: '张三', math: 90, english: 85 },
    { name: '李四', math: 88, physics: 92, chemistry: 78 },
    { name: '王五', english: 75, history: 82 }
  ]
})

const { scoreData, tableData1, subjects1, tableData2, subjects2, scoreData2 } = toRefs(state)

const allSubjects = computed(() => {
  // 获取所有学科的列表
  const allSubjects = [] as any
  state.scoreData.forEach((item) => {
    item.scores.forEach((score) => {
      if (!allSubjects.find((subject: any) => subject.subject === score.subject)) {
        allSubjects.push({ subject: score.subject })
      }
    })
  })
  console.log('allSubjects', JSON.stringify(allSubjects))
  return allSubjects
})

const allSubjects2 = computed(() => {
  // 获取所有学科的列表
  const allSubjects = [] as any
  state.scoreData2.forEach((item) => {
    allSubjects.push(...Object.keys(item).filter((key) => key !== 'name' && !allSubjects.includes(key)))
  })
  return allSubjects
})

onMounted(() => {
  handleData()
  handleData2()
})
const handleData = () => {
  // 处理表头数据
  state.subjects1 = Array.from(new Set(state.scoreData.flatMap((item) => item.scores.map((score) => score.subject)))) as any
  console.log('this.subjects1', JSON.stringify(state.subjects1))

  // 处理表格数据
  state.tableData1 = state.scoreData.map((item: any) => {
    item.scores.forEach((score: any) => {
      item[score.subject] = score.score
    })
    return item
  }) as any

  // state.tableData1 = state.scoreData.map(item => {
  //   const row = { name: item.name } as any
  //   item.scores.forEach(score => {
  //     row[score.subject] = score.score
  //   })
  //   return row
  // }) as any
  console.log('this.tableData1', JSON.stringify(state.tableData1))
  // state.tableData1.forEach((item: any) => item.scores.forEach(({ subject, score }: any) => (item[subject] = score)))
}
const handleData2 = () => {
  // 处理表头数据
  const subjectSet = new Set()
  state.scoreData.forEach((item) => {
    item.scores.forEach((score) => {
      subjectSet.add(score.subject)
    })
  })
  state.subjects2 = Array.from(subjectSet) as any
  console.log('this.subjects2', JSON.stringify(state.subjects2))

  // 处理表格数据
  state.tableData2 = state.scoreData.map((item) => {
    const row = { name: item.name } as any
    state.subjects2.forEach((subject) => {
      const score = item.scores.find((score) => score.subject === subject)
      row[subject] = score ? score.score : ''
    })
    return row
  }) as any
  console.log('this.tableData2', JSON.stringify(state.tableData2))
}
const getScore = (row: any, subject: any) => {
  const score = row.scores.find((s: any) => s.subject === subject)
  return score ? score.score : ''
}
</script>

<style lang="scss" scoped></style>
