<template>
  <div class="custom-container">
    <h3>회원가입 완료</h3>
    <div class="registration">
      <h2>"{{ name }}"님, 회원가입이 완료되었습니다.</h2>
    </div>
    <div class="registrationInfo">
      <p>Email: {{ email }}</p>
      <p>주소: {{ fullAddress }}</p>
      <p>연락처: {{ phoneNumber }}</p>
    </div>
    <nuxt-link to="/">홈으로 돌아가기</nuxt-link>
  </div>
</template>

<script>
import { useUserStore } from '~/store/personalInfo';
import { useAddressStore } from '~/store/address';

export default {
  setup() {
    const userStore = useUserStore();
    const addressStore = useAddressStore();

    const email = userStore.personalInfo.email;
    const name = addressStore.name;
    const phoneNumber = addressStore.phoneNumber;
    const fullAddress = `${addressStore.address} ${addressStore.detailAddress}`;

    return {
      email,
      name,
      phoneNumber,
      fullAddress,
    };
  },
};
</script>

<style>
.registration {
  padding-top: 100px;
}

.registrationInfo {
  padding: 50px 0;

}
</style>