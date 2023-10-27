<template>
  <div class="custom-container">
    <h3>개인정보 입력</h3>
    <form class="input-group" @submit.prevent="validateForm">
      <div>
        <input v-model="email" type="email" placeholder="이메일" />
        <p v-if="emailError" class="error-message">{{ emailError }}</p>
      </div>
      <div>
        <input v-model="password" type="password" placeholder="비밀번호" />
        <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      </div>
      <div>
        <input v-model="passwordConfirm" type="password" placeholder="비밀번호 확인" />
        <p v-if="passwordConfirmError" class="error-message">{{ passwordConfirmError }}</p>
      </div>
      <button class="pl-button full large" type="submit">다음</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      emailError: '',
      passwordError: '',
      passwordConfirmError: '',
    };
  },
  methods: {
    validateForm() {
      this.clearErrors();
      if (!this.validateEmail(this.email)) {
        this.emailError = '이메일 형식이 올바르지 않습니다.';
      }
      if (!this.validatePassword(this.password)) {
        this.passwordError = '비밀번호는 영문 대소문자, 숫자, 특수문자를 최소 1개 이상 포함하고 8자 이상이어야 합니다.';
      }
      if (this.password !== this.passwordConfirm) {
        this.passwordConfirmError = '비밀번호가 일치하지 않습니다.';
      }
      if (!this.emailError && !this.passwordError && !this.passwordConfirmError) {
        this.$emit('nextStep');
      }
    },
    validateEmail(email) {
      const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
      return regex.test(email);
    },
    validatePassword(password) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(password);
    },
    clearErrors() {
      this.emailError = '';
      this.passwordError = '';
      this.passwordConfirmError = '';
    },
  },
};
</script>

<style scoped>
.input-group div {
  margin-bottom: 30px;
}

.error-message {
  color: red;
  font-size: 0.8em;
}
</style>
