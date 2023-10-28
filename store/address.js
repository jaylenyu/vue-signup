import { defineStore } from "pinia";

export const useAddressStore = defineStore("address", {
  state: () => ({
    name: "",
    phoneNumber: "",
    postcode: "",
    address: "",
    detailAddress: "",
  }),
  actions: {
    setAddressInfo(name, phoneNumber, postcode, address, detailAddress) {
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.postcode = postcode;
      this.address = address;
      this.detailAddress = detailAddress;
    },
  },
});
