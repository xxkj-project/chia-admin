<!--
   算力配置
-->
<template>
  <div class="computeConfig">
    <div class="tableList">
      <el-button type="primary" icon="el-icon-setting" size="mini" @click="onConfiguration">配置每日产出</el-button>
      <el-table :data="tableList" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="createTime" label="日期" min-width="120"> </el-table-column>
        <el-table-column prop="totalXch" label="用户实际获得XCH总和" min-width="200"> </el-table-column>
      </el-table>
    </div>
    <pagination
      :currentPage.sync="pagination.currentPage"
      :pageSize.sync="pagination.pageSize"
      :total="pagination.total"
      @currentChange="currentChange"
      @sizeChange="sizeChange"
    />
    <handleDayConfig :visible.sync="isShowDayOut" :infoData="infoData" />
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import handleDayConfig from '@/views/configItem/components/computeConfig/handleDayConfig'
export default {
  name: '',
  data() {
    return {
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      tableList: [],
      isShowDayOut: false,
      infoData: {}
    }
  },
  computed: {},
  components: { pagination, handleDayConfig },
  created() {
    this.getData()
  },
  mounted() {},
  methods: {
    getInitData(pageNum = 1, pageSize = 10) {
      this.pagination.currentPage = pageNum
      this.pagination.pageSize = pageSize
      this.getData()
    },
    currentChange(pageNo) {
      this.getInitData(pageNo, this.pagination.pageSize)
    },
    sizeChange(pageSize) {
      this.getInitData(1, pageSize)
    },
    onConfiguration() {
      console.log('配置每日产出')
      this.infoData = {
        now: '0.2',
        edit: ''
      }
      this.isShowDayOut = true
    },
    getData() {
      this.tableList = []
    }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
/deep/ .el-button {
  display: flex;
  align-items: center;
}
</style>
