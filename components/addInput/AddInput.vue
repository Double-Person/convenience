<template>
  <view class="fl jc-between add-input">
    <input
      class="input"
      placeholder-class="placeholder-class"
      type="text"
      :placeholder="placeholder"
      v-model="value"
    />
    <view class="btn" @click="add">{{ btn }}</view>
  </view>
</template>

<script>
export default {
  props: {
    btn: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "填写信息",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    add() {
      this.$emit('add', this.value)
    },
    cleanVal() {
        this.value = ''
    }
  },
};
</script>

<style lang="scss" scoped>
.add-input {
  .input {
    // width: 436rpx;
    width: 383rpx;
    height: 80rpx;
    background: #f6f6f6;
    border-radius: 40rpx;
	padding-left: 53rpx;
  }
  .placeholder-class {
    font-size: 20rpx;
    color: #999999;
    // line-height: 28rpx;
    margin-left: 53rpx;
  }

  .btn {
    width: 153rpx;
    height: 80rpx;
    background: #fe4555;
    border-radius: 40rpx;

    font-size: 20rpx;
    color: #ffffff;
    line-height: 80rpx;
    text-align: center;
  }
}
</style>