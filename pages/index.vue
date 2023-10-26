<template>
  <div>
    <button @click="goToSignUp">회원가입</button>
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
