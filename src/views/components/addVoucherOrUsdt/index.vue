<!--
  添加兑换卷/usdt数量
-->
<template>
  <div class="addVoucherOrUsdt">
    <el-dialog
      :title="'添加' + (type === 'voucher' ? '兑换卷' : 'usdt')"
      width="600px"
      center
      top="0"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogVisiable"
      @closed="handleClosed"
    >
      <div class="content">
        <el-form :model="infoData" :rules="rules" ref="formRef" label-width="120px" class="demo-ruleForm">
          <el-form-item label="手机号" prop="mobile">
            <el-input v-model="infoData.mobile" type="number" placeholder="请输入手机号"></el-input>
          </el-form-item>

          <el-form-item label="兑换卷数量" prop="num" v-if="type === 'voucher'">
            <el-input-number
              v-model="infoData.num"
              controls-position="right"
              :min="1"
              placeholder="请输入兑换卷数量"
              :step-strictly="true"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="usdt数量" prop="usdtNum" v-else>
            <el-input-number
              v-model="infoData.usdtNum"
              controls-position="right"
              :min="1"
              placeholder="请输入usdt数量"
              :step-strictly="true"
            ></el-input-number>
          </el-form-item>

          <el-form-item>
            <el-button @click.stop="dialogVisiable = false">取 消</el-button>
            <el-button type="primary" @click="onComfirm">确认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { operaAddVoucher, operaAddUsdtNum } from '@/api/order'
export default {
  name: '',
  data() {
    return {
      infoData: {
        mobile: '',
        num: '',
        usdtNum: ''
      },
      rules: {
        mobile: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        num: [{ required: true, message: '请输入兑换卷', trigger: 'blur' }],
        usdtNum: [{ required: true, message: '请输入usdts数量', trigger: 'blur' }]
      }
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    dialogVisiable: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    handleClosed() {
      this.dialogVisiable = false
      this.$refs.formRef.resetFields()
    },
    // 确认提交
    onComfirm() {
      this.validateFunc(() => {
        const { mobile, num, usdtNum } = this.infoData
        const params = { mobile, num: this.type === 'voucher' ? num : usdtNum }
        // console.log('params', params)
        this.type === 'voucher' ? this.addVoucherNum(params) : this.addUsdtNum(params)
      })
    },
    // 添加兑换卷
    addVoucherNum(params) {
      operaAddVoucher(params)
        .then(res => {
          this.$message({
            message: '操作成功!',
            type: 'success'
          })
          this.dialogVisiable = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 添加USDT数量
    addUsdtNum(params) {
      operaAddUsdtNum(params)
        .then(res => {
          console.log('res', res)
          this.$message({
            message: '操作成功!',
            type: 'success'
          })
          this.dialogVisiable = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    validateFunc(callback) {
      this.$refs.formRef.validate(valid => {
        if (!valid) {
          return false
        }
        callback()
      })
    }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
/deep/ .el-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/deep/ .el-input {
  width: 200px;
}
/deep/ .el-form-item__content {
  display: flex;
}
</style>
