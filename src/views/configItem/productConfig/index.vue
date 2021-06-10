<!--
   产品配置
-->
<template>
  <div class="productConfig">
    <div class="tableList">
      <el-button type="primary" icon="el-icon-plus" size="mini" @click="onAdd">添加</el-button>
      <el-table :data="tableList" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="name" label="产品名称" min-width="150"> </el-table-column>
        <el-table-column prop="totalNum" label="总份数" min-width="120"> </el-table-column>
        <el-table-column prop="time" label="挖矿期限(天)" min-width="120"> </el-table-column>
      </el-table>
    </div>
    <pagination
      :currentPage.sync="pagination.currentPage"
      :pageSize.sync="pagination.pageSize"
      :total="pagination.total"
      @currentChange="currentChange"
      @sizeChange="sizeChange"
    />
    <handleAddProduct :visible.sync="isShowDayOut" />
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import handleAddProduct from '@/views/configItem/components/productConfig/handleAddProduct'
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
      isShowDayOut: false
    }
  },
  computed: {},
  components: { pagination, handleAddProduct },
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
    onAdd() {
      console.log('添加产品矿机')
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
