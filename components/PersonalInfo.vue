<template>
  <div class="personal-container">
    <h3>개인정보 입력</h3>
    <from class="personal-input-group">
      <input type="email" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <input type="password" placeholder="비밀번호 확인" />
    </from>
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
  flex-direction: column;
  text-align: center;
  width: 100%;
}

.personal-input-group {
  margin: 100px 0;
}

input {
  margin-bottom: 30px;
}
</style>
