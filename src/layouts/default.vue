<template>
  <v-app>
    <v-navigation-drawer :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :to="item.to" :key="i" router exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface IItems {
  icon: string
  title: string
  to: string
}

@Component
export default class LayoutsDefault extends Vue {
  clipped: boolean = false
  drawer: boolean = false
  fixed: boolean = false
  items: IItems[] = [
    { icon: 'apps', title: 'Welcome', to: '/' }
  ]
  miniVariant: boolean = false
  title: string = 'Vuetify.js'
}
</script>
