<template>
  <div class="custom-container">
    <h3>배송지 입력</h3>
    <from class="input-group">
      <div>
        <input type="text" placeholder="이름" />
        <input type="tel" placeholder="연락처" />
      </div>
      <div>
        <div class="address-box">
          <input class="zonecode" type="number" placeholder="우편번호" disabled />
          <button class="pl-button full large">우편번호</button>
        </div>
        <div>
          <input type="text" placeholder="주소" />
          <input type="text" placeholder="상세주소" />
        </div>
      </div>
    </from>
    <div class="button-group">
      <button class="pl-button large" @click="$emit('prevStep')">이전</button>
      <button class="pl-button full large" @click="$emit('nextStep')">다음</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Address',
}
</script>

<style scoped>
.address-box {
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 0;
}

.zonecode {
  width: 100px;

}

.button-group {
  display: flex;
  justify-content: space-between;
}

input {
  margin-bottom: 30px;
}
</style>