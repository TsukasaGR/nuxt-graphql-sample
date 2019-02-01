<template>
  <Users class="users" :users="users"/>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import * as gqlTypes from '~/generated/graphql'
// @ts-ignore
import queryUsers from '~/graphql/users.gql'

import Users from '~/components/users.vue'

@Component({
  components: {
    Users
  }
})
export default class Index extends Vue {
  users: gqlTypes.User[] = []

  async mounted() {
    const query: any = queryUsers

    await this.$apollo.query({ query }).then((res: any) => {
      const userPaginator: gqlTypes.UserPaginator = res.data.users
      this.users = userPaginator.data
    })
  }
}
</script>

<style lang="stylus" scoped>
h1 {
  margin: 30px 0;
}

.users {
  padding: 20px;
}
</style>
