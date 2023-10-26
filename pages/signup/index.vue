<template>
  <div>
    <component :is="currentComponent" @nextStep="nextStep"></component>
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
    changeStep(stepChange) {
      const newStep = this.currentStep + stepChange;
      if (newStep >= 1 && newStep <= 3) {
        this.currentStep = newStep;
      }
    },
    completeSignUp() {
      alert('회원가입이 완료되었습니다!');
      this.$router.push('/signup/complete');
    }
  }
}
</script>
