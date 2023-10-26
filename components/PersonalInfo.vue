<template>
  <div class="personal-container">
    <h3>개인정보 입력</h3>
    <button class="pl-button full large" @click="$emit('nextStep')">다음</button>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
}
</script>

<style scoped>
.personal-container {
  display: flex;
  justify-content: center;
}
</style>