<!--
  设置手续费
-->
<template>
  <div class="handleSetFee">
    <el-dialog
      title="设置手续费"
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
          <el-form-item label="原手续费" prop="oldFee">
            <el-input v-model="infoData.oldFee" :disabled="true"></el-input>
          </el-form-item>

          <el-form-item label="新手续费" prop="newFee">
            <el-input-number
              v-model="infoData.newFee"
              controls-position="right"
              :min="0"
              placeholder="请输入兑换卷数量"
              :step-strictly="true"
              :step="0.1"
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
export default {
  name: '',
  data() {
    return {
      rules: {
        // oldFee: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        newFee: [{ required: true, message: '请输入新的手续费', trigger: 'blur' }]
      }
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    infoData: {
      type: Object,
      default() {
        return {}
      }
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
        this.$message({
          message: '暂时没有接口'
        })
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
