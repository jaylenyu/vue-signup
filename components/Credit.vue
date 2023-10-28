<template>
  <div class="custom-container">
    <h3>카드정보 입력</h3>
    <form class="input-group">
      <div class="credit-input">
        <input v-model="creditPart1" type="text" maxlength="4" placeholder="0000" @input="moveFocus(1)" ref="input1">
        <input v-model="creditPart2" type="text" maxlength="4" placeholder="0000" @input="moveFocus(2)" ref="input2">
        <input v-model="creditPart3" type="text" maxlength="4" placeholder="0000" @input="moveFocus(3)" ref="input3">
        <input v-model="creditPart4" type="text" maxlength="4" placeholder="0000" ref="input4">
      </div>
      <p class="error-message" v-if="creditError">{{ creditError }}</p>
    </form>
    <div class="credit-button-box">
      <button class="pl-button large" @click="$emit('prevStep')">이전</button>
      <button class="pl-button full large" @click="completeSignUp">회원가입 완료하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Credit",
  data() {
    return {
      creditPart1: "",
      creditPart2: "",
      creditPart3: "",
      creditPart4: "",
      creditError: "",
    };
  },
  computed: {
    creditNumber() {
      return `${this.creditPart1}${this.creditPart2}${this.creditPart3}${this.creditPart4}`;
    }
  },
  methods: {
    validateCreditNumber() {
      const creditNumber = this.creditNumber;
      let creditReverseArray = Array.from(creditNumber).reverse();
      creditReverseArray = creditReverseArray.map((num, idx) => idx % 2 === 1 ? Number(num) * 2 : Number(num));
      creditReverseArray = creditReverseArray.map((num) => num > 9 ? num - 9 : num);
      let sum = creditReverseArray.reduce((acc, curr) => acc + curr, 0);
      const creditValidate = sum % 10;
      return creditValidate === 0;
    },
    moveFocus(inputNumber) {
      if (this[`creditPart${inputNumber}`].length === 4 && inputNumber < 4) {
        this.$refs[`input${inputNumber + 1}`].focus();
      }
    },
    completeSignUp() {
      this.creditError = "";
      if (this.creditNumber.length < 16) {
        this.creditError = "카드 번호를 모두 입력해주세요.";
        return;
      }
      if (!this.validateCreditNumber()) {
        this.creditError = "유효한 카드번호가 아닙니다.";
        return;
      }
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
}

input {
  width: 100px;
}

.credit-button-box {
  display: flex;
  justify-content: space-between;
}
</style>
