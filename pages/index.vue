<template>
  <div class="main-page">
    <img class="main-image" src="https://static.balaan.co.kr/pc/legacy/img/banner/logo.png" alt="balaan" />
    <button class="pl-button full large" @click="goToSignUp">회원가입</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToSignUp() {
      this.$router.push('/signup')
    }
  }
}
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-image {
  margin-bottom: 100px;
}
</style>