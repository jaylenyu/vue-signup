<template>
  <div class="custom-container">
    <h3>카드정보 입력</h3>
    <form class="credit-input">
      <input type="text" placeholder="0000">
      <input type="text" placeholder="0000">
      <input type="text" placeholder="0000">
      <input type="text" placeholder="0000">
    </form>
    <div class="credit-button-box">
      <button class="pl-button large" @click="$emit('prevStep')">이전</button>
      <button class="pl-button full large" @click="completeSignUp">회원가입 완료하기</button>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    completeSignUp() {
      alert('회원가입이 완료되었습니다!');
      this.$router.push('/signup/complete');
    }
  }
}
</script>

<style scoped>
.credit-input {
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
}

input {
  width: 100px;
}

.credit-button-box {
  display: flex;
  justify-content: space-between;
}
</style>
