<template>
  <div>
    <h3>카드정보 입력</h3>
    <button class="pl-button full large" @click="completeSignUp">회원가입 완료하기</button>

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
