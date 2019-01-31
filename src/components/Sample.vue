<template>
  <div class="sample">
    <h2>サンプルコンポーネント</h2>
    <p>{{ propString }}</p>
    <p>{{ propNumber }}</p>
    <p>{{ propSample }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ISampleType } from '~/types/sample'

@Component
export default class Sample extends Vue {
  @Prop(String)
  propString!: string
  @Prop({ type: Number, required: true })
  propNumber!: number
  @Prop(Object)
  propSample!: ISampleType

  sampleVariableString: string = 'サンプル変数(String)'
  sampleVariableNumber: number = 123
}
</script>

<style lang="stylus">
.sample {
  border: 2px solid green;
  padding: 5px;
}
</style>
