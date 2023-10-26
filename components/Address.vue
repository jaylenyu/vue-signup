<template>
  <div>
    <h3>배송지 입력</h3>
    <button class="pl-button full large" @click="$emit('prevStep')">이전</button>
    <button class="pl-button full large" @click="$emit('nextStep')">다음</button>
  </div>
</template>

<script>
export default {
  name: 'Address',
}
</script>
