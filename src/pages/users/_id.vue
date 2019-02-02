<template>
  <v-layout row class="users">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-title>ユーザー情報</v-toolbar-title>
        </v-toolbar>
        <v-form class="form-container">
          <v-text-field v-model="user.name" label="Name" required></v-text-field>
          <v-text-field v-model="user.email" label="E-mail" required></v-text-field>
        </v-form>
        <v-btn color="success" @click="update">更新</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import * as gqlTypes from '~/generated/graphql'
import Notification from '~/modules/notification'
import queryUser from '~/graphql/queries/user.graphql'
import mutationUpdateUser from '~/graphql/mutations/updateUser.graphql'

@Component
export default class Index extends Vue {
  user: gqlTypes.User = {
    id: '',
    name: '',
    email: '',
    password: '',
    avatar: '',
    articles: [],
    createdAt: '',
    updatedAt: ''
  }

  async mounted() {
    const query: any = queryUser
    const variables: gqlTypes.UserQueryArgs = {
      id: this.$route.params.id
    }

    await this.$apollo.query({ query, variables }).then((res: any) => {
      this.user = res.data.user
    })
  }

  update() {
    const mutation: any = mutationUpdateUser
    const variables: gqlTypes.UpdateUserMutationArgs = {
      id: this.$route.params.id,
      name: this.user.name,
      email: this.user.email
    }

    this.$apollo.mutate({ mutation, variables }).then((res: any) => {
      this.user = res.data.updateUser
      Notification.on('更新完了', 'ユーザー情報の更新が完了しました！')
    })
  }
}
</script>

<style lang="stylus" scoped>
.form-container {
  padding: 20px;
}
</style>
