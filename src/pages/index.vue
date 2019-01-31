<template>
  <div>
    <h1>GraphQLサンプル</h1>
    <div class="user-info-container">
      <p>id: {{ user.id }}</p>
      <p>name: {{ user.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import gql from 'graphql-tag'

interface IUser {
  id: number
  name: string
}

@Component
export default class Index extends Vue {
  user: IUser = {
    id: 0,
    name: ''
  }

  async mounted() {
    const query: any = gql`
      query {
        user(id: 1) {
          id
          name
        }
      }
    `
    await this.$apollo.query({query})
      .then((res: any) => this.user = res.data.user)
  }
}
</script>

<style lang="stylus" scoped>
h1 {
  margin: 30px 0;
}
user-info-container {
  padding: 20px;
}
</style>
