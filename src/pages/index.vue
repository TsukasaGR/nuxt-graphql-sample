<template>
  <v-layout row class="users">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-title>ユーザー一覧</v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <nuxt-link
            v-for="(user, index) in users"
            :key="index"
            :to="{ name: 'users-id', params: { id: user.id } }"
            tag="div"
            class="user-container"
          >
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="user.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="user.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="user.email"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </nuxt-link>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import * as gqlTypes from '~/generated/graphql'
// @ts-ignore
import queryUsers from '~/graphql/queries/users.gql'

@Component
export default class Index extends Vue {
  users: gqlTypes.User[] = []

  async mounted() {
    const query: any = queryUsers
    const variables: gqlTypes.UsersQueryArgs = {
      count: 10
    }

    await this.$apollo.query({ query, variables }).then((res: any) => {
      const userPaginator: gqlTypes.UserPaginator = res.data.users
      this.users = userPaginator.data
    })
  }
}
</script>

<style lang="stylus" scoped>
.users {
  padding: 20px;
  .user-container {
    cursor: pointer;
  }
}
</style>
