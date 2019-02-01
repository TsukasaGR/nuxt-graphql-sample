<template>
  <v-layout row class="users">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-title>Users</v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <div v-for="(user, index) in users" :key="index">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="user.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="user.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="user.email"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </div>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import * as gqlTypes from '~/generated/graphql'

@Component
export default class Sample extends Vue {
  @Prop(Array)
  users!: gqlTypes.User[]
}
</script>
