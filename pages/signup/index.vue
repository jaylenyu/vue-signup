<template>
  <div>
    <component :is="currentComponent" @nextStep="nextStep"></component>
    <button v-if="currentStep < 3" @click="nextStep">다음</button>
    <button v-if="currentStep === 3" @click="completeSignUp">회원가입 완료하기</button>
  </div>
</template>

<script>
import PersonalInfo from '~/components/PersonalInfo.vue';
import Address from '~/components/Address.vue';
import Credit from '~/components/Credit.vue';

export default {
  components: {
    PersonalInfo,
    Address,
    Credit
  },
  data() {
    return {
      currentStep: 1
    };
  },
  computed: {
    currentComponent() {
      switch (this.currentStep) {
        case 1: return 'PersonalInfo';
        case 2: return 'Address';
        case 3: return 'Credit';
        default: return null;
      }
    }
  },
  methods: {
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    completeSignUp() {
      alert('회원가입이 완료되었습니다!');
      this.$router.push('/signup/complete');
    }
  }
}
</script>
