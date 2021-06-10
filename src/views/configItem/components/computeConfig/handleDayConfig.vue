<!--
  产出配置
-->
<template>
  <div class="configDayOut">
    <el-dialog
      title="每日产出配置"
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
          <el-form-item label="当前（单位XCH）：" prop="now">
            <el-input-number
              v-model="infoData.now"
              controls-position="right"
              :min="0"
              placeholder="请输入当前日产出"
              :step-strictly="true"
              :step="0.1"
              :disabled="true"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="更改（单位XCH）：" prop="edit">
            <el-input-number
              v-model="infoData.edit"
              controls-position="right"
              :min="0"
              placeholder="请输入更改日产出"
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
        now: [{ required: true, message: '请输入当前日产出', trigger: 'blur' }],
        edit: [{ required: true, message: '请输入更改日产出', trigger: 'blur' }]
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
/deep/ .el-form-item__content {
  display: flex;
}
</style>
