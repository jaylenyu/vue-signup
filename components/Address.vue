<template>
  <div class="custom-container">
    <h3>배송지 입력</h3>
    <form class="input-group">
      <div>
        <div>
          <input v-model="name" type="text" placeholder="이름" />
          <p v-if="nameError.length > 0" class="error-message">{{ nameError }}</p>
        </div>
        <div>
          <input v-model="formattedPhoneNumber" @keydown="filterNonNumericKey" maxlength="13" type="tel"
            placeholder="연락처" />
          <p v-if="phoneNumberError.length > 0" class="error-message">{{ phoneNumberError }}</p>
        </div>
      </div>
      <div>
        <div class="address-box">
          <input class="zonecode" type="text" v-model="postcode" placeholder="우편번호" disabled />
          <button type="button" class="pl-button full large" @click="searchPostcode">우편번호 찾기</button>
        </div>
        <div>
          <div>
            <input disabled type="text" v-model="address" placeholder="주소" />
            <p v-if="addressError.length > 0" class="error-message">{{ addressError }}</p>
          </div>
          <input type="text" v-model="detailAddress" placeholder="상세주소" ref="detailAddress" />
        </div>
      </div>
    </form>
    <div class="button-group">
      <button class="pl-button large" @click="$emit('prevStep')">이전</button>
      <button class="pl-button full large" @click="validateForm">다음</button>
    </div>
  </div>
</template>

<script>
import { useAddressStore } from '../store/address'

export default {
  name: 'Address',
  data() {
    const addressStore = useAddressStore();
    return {
      name: addressStore.name,
      phoneNumber: addressStore.phoneNumber,
      postcode: addressStore.postcode,
      address: addressStore.address,
      detailAddress: addressStore.detailAddress,
      nameError: '',
      phoneNumberError: '',
      addressError: ''
    };
  },
  computed: {
    formattedPhoneNumber: {
      get() {
        return this.phoneNumber;
      },
      set(value) {
        let numbers = value.replace(/\D/g, '');
        if (numbers.length <= 3) {
          this.phoneNumber = numbers;
        } else if (numbers.length <= 6) {
          this.phoneNumber = numbers.slice(0, 3) + '-' + numbers.slice(3);
        } else if (numbers.length <= 10) {
          this.phoneNumber = numbers.slice(0, 3) + '-' + numbers.slice(3, 6) + '-' + numbers.slice(6);
        } else {
          this.phoneNumber = numbers.slice(0, 3) + '-' + numbers.slice(3, 7) + '-' + numbers.slice(7, 11);
        }
      }
    }
  },
  methods: {
    searchPostcode() {
      new daum.Postcode({
        oncomplete: (data) => {
          this.postcode = data.zonecode;
          this.address = data.address;
        }
      }).open();
    },
    validateForm() {
      this.clearErrors();
      if (!this.validateName(this.name)) {
        this.nameError = "이름이 올바르지 않습니다.";
      }
      if (!this.validatePhoneNumber(this.phoneNumber)) {
        this.phoneNumberError = "전화번호가 올바르지 않습니다.";
      }
      if (this.address.length === 0) {
        this.addressError = "주소를 입력해 주세요.";
      }
      if (this.nameError.length === 0 && this.phoneNumberError.length === 0 && this.addressError.length === 0) {
        const addressStore = useAddressStore();
        addressStore.setAddressInfo(this.name, this.phoneNumber, this.postcode, this.address, this.detailAddress);
        this.$emit('nextStep');
      }
    },
    validateName(name) {
      const namePattern = /^([가-힣]{2,}|[A-Za-z]{3,})$/;
      return namePattern.test(name);
    },
    validatePhoneNumber(phoneNumber) {
      const regex = /^01[0-9]-\d{3,4}-\d{4}$/;
      return regex.test(phoneNumber);
    },
    clearErrors() {
      this.nameError = '';
      this.phoneNumberError = '';
      this.addressError = '';
    },
    filterNonNumericKey(event) {
      if (!/[0-9]/.test(event.key) && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)) {
        event.preventDefault();
      }
    },
  }
}
</script>

<style scoped>
.address-box {
  display: flex;
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
</style>
