<!--
  添加产品
-->
<template>
  <div class="addProduct">
    <el-dialog
      title="添加产品"
      width="600px"
      center
      top="0"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogVisiable"
      @closed="handleClosed"
    >
      <div class="content">
        <el-form :model="infoData" :rules="rules" ref="formRef" label-width="160px" class="demo-ruleForm">
          <el-form-item label="产品名称" prop="productName">
            <el-input v-model="infoData.productName" placeholder="请输入产品名称"></el-input>
          </el-form-item>

          <el-form-item label="总份额" prop="totalNum">
            <el-input-number
              v-model="infoData.totalNum"
              controls-position="right"
              :min="0"
              placeholder="请输入总份额"
              :step-strictly="true"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="挖矿期限" prop="time">
            <el-radio-group v-model="infoData.time">
              <el-radio label="180天"></el-radio>
              <el-radio label="360天"></el-radio>
              <el-radio label="720天"></el-radio>
            </el-radio-group>
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
        productName: [{ required: true, message: '请输入产品名称', trigger: 'blur' }],
        totalNum: [{ required: true, message: '请输入总份额', trigger: 'blur' }],
        time: [{ required: true, message: '请选择挖矿期限', trigger: 'change' }]
      },
      infoData: {
        productName: '',
        totalNum: '',
        time: ''
      }
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
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
          message: '暂时还没有接口'
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
/deep/ .el-form-item:nth-last-of-type(1) {
  .el-form-item__content {
    display: flex;
  }
}
</style>
