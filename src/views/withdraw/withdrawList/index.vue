<!--
   提现列表
-->
<template>
  <div class="withDrawList">
    <searchForm :formOptions="formOptions" @onSearch="onSearch">
      <el-button slot="button" type="primary" icon="el-icon-setting" size="mini" @click="onWithdrawFee"
        >提现手续费</el-button
      >
    </searchForm>
    <div class="tableList">
      <el-table :data="tableList" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="user" label="用户名" min-width="100"> </el-table-column>
        <el-table-column prop="orderID" label="订单编号" min-width="145"> </el-table-column>
        <el-table-column prop="ress" label="提币地址" min-width="100"> </el-table-column>
        <el-table-column prop="num" label="申请提币数量" min-width="120"> </el-table-column>
        <el-table-column prop="currentNum" label="实际到账数量" min-width="120"> </el-table-column>
        <el-table-column prop="status" label="提现状态" min-width="100"> </el-table-column>
        <el-table-column prop="createTime" label="时间" min-width="160"> </el-table-column>
        <el-table-column fixed="right" label="操作" min-width="160">
          <template slot-scope="scope">
            <el-button @click="onPass(scope.row)" icon="el-icon-check" type="primary" size="small">通过</el-button>
            <el-button @click="onRefuse(scope.row)" icon="el-icon-close" type="primary" size="small">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      :currentPage.sync="pagination.currentPage"
      :pageSize.sync="pagination.pageSize"
      :total="pagination.total"
      @currentChange="currentChange"
      @sizeChange="sizeChange"
    />
    <handleSetFee :visible.sync="isShowSetFee" :infoData="infoData" />
  </div>
</template>

<script>
import searchForm from '@/components/searchForm'
import pagination from '@/components/pagination'
import handleSetFee from '@/views/components/handleSetFee/index'
export default {
  name: '',
  data() {
    return {
      searchData: {
        user: '',
        startTime: '',
        endTime: ''
      },
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      tableList: [],
      infoData: {},
      isShowSetFee: false
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
          element: 'el-date-picker',
          label: '时间',
          prop: 'times',
          initValue: '',
          type: 'daterange'
        }
      ]
      return options
    }
  },
  components: { searchForm, pagination, handleSetFee },
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
    onSearch(data) {
      console.log('-search-', data)
      const { times, ...otherObj } = data
      this.searchData = { ...otherObj }
      this.searchData.startTime = times ? times[0] : ''
      this.searchData.endTime = times ? times[1] : ''
      this.getInitData()
    },
    // 提现手续费
    onWithdrawFee() {
      this.infoData = {
        oldFee: '0.1',
        newFee: ''
      }
      this.isShowSetFee = true
    },
    // 通过
    onPass(row) {
      console.log('row', row)
    },
    // 拒绝
    onRefuse(row) {
      console.log('row', row)
    },
    getData() {
      this.tableList = []
    }
    // setData() {
    //   let result = []
    //   const len = Math.ceil(Math.random() * 20)
    //   console.log(len)
    //   for (let i = 0; i < len; i++) {
    //     result.push({
    //       user: `user${i} `,
    //       orderID: `178299379988214${i}`,
    //       ress: '测试地址',
    //       num: '100',
    //       currentNum: '100',
    //       status: i % 2 ? '待通过' : '已通过',
    //       createTime: '2021-05-31 16:24:21'
    //     })
    //     return result
    //   }
    // }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
