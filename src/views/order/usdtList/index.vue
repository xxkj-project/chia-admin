<!--
   usdt列表
-->
<template>
  <div class="usdtList">
    <searchForm :formOptions="formOptions" @onSearch="onSearch">
      <el-button slot="button" type="primary" icon="el-icon-plus" size="mini" @click="onAdd">添加usdt</el-button>
      <el-button slot="button" type="primary" icon="el-icon-setting" size="mini" @click="onSetFee"
        >设置手续费</el-button
      >
    </searchForm>
    <div class="tableList">
      <el-table :data="tableList" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="user" label="用户账户" min-width="150"> </el-table-column>
        <el-table-column prop="type" label="类型" min-width="120"> </el-table-column>
        <el-table-column prop="num" label="数量" min-width="120"> </el-table-column>
        <el-table-column prop="createTime" label="时间" min-width="120"> </el-table-column>
      </el-table>
    </div>
    <pagination
      :currentPage.sync="pagination.currentPage"
      :pageSize.sync="pagination.pageSize"
      :total="pagination.total"
      @currentChange="currentChange"
      @sizeChange="sizeChange"
    />
    <addVoucherOrUsdt :visible.sync="isShowAddVoucher" :type="pageType" />
    <handleSetFee :visible.sync="isShowSetFee" :infoData="infoData" />
  </div>
</template>

<script>
import searchForm from '@/components/searchForm'
import pagination from '@/components/pagination'
import addVoucherOrUsdt from '@/views/components/addVoucherOrUsdt/index'
import handleSetFee from '@/views/components/handleSetFee/index'
export default {
  name: '',
  data() {
    return {
      searchData: {
        user: '',
        type: ''
      },
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      tableList: [],
      isShowAddVoucher: false,
      isShowSetFee: false,
      pageType: 'usdt',
      infoData: {},
      usdtTypeList: []
    }
  },
  computed: {
    formOptions() {
      let options = [
        {
          element: 'el-input',
          label: '用户账户',
          prop: 'user',
          initValue: '',
          placeholder: '请输入用户账户'
        },
        {
          element: 'el-select',
          label: '类型',
          prop: 'type',
          initValue: '',
          placeholder: '请选择类型',
          options: this.usdtTypeList
        }
      ]
      return options
    }
  },
  components: { addVoucherOrUsdt, searchForm, pagination, handleSetFee },
  created() {
    this.getData()
    this.getType()
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
    onSearch(data) {
      console.log('-search-', data)
      const { type, ...otherObj } = data
      this.searchData = { ...otherObj }
      // this.searchData.type = type ? this.appealtypeList[type].label : ''
      this.getInitData()
    },
    onAdd() {
      this.isShowAddVoucher = true
    },
    onSetFee() {
      this.infoData = {
        oldFee: '0.1',
        newFee: ''
      }
      this.isShowSetFee = true
    },
    getData() {
      this.tableList = []
    },
    getType() {
      const list = ['后台充值', '购买矿机']
      this.usdtTypeList = this.setType(list)
    },
    setType(list) {
      let result = list.map((item, index) => {
        return { value: index + 1, label: item }
      })
      result.unshift({ value: '', label: '全部' })
      return result
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
