import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    personalInfo: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  }),
  actions: {
    setPersonalInfo(email, password, passwordConfirm) {
      this.personalInfo.email = email;
      this.personalInfo.password = password;
      this.personalInfo.passwordConfirm = passwordConfirm;
    },
  },
});
