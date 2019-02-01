import Vue from 'vue'

export default {
  on(
    title: string | null = null,
    text: string | null = null,
    icon: string | null = null
  ) {
    const vm = new Vue({})
    // @ts-ignore
    vm.$vs.notify({
      time: 3000,
      title,
      text,
      color: '#00bcd4',
      icon
    })
  }
}
