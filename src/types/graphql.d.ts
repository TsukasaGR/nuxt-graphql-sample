import Vue from 'vue'
import { DollarApollo } from 'vue-apollo/types/vue-apollo'
import { VueApolloComponentOption } from 'vue-apollo/types/options'
import { ApolloProvider } from 'vue-apollo/types/apollo-provider'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    apolloProvider?: ApolloProvider
    apollo?: VueApolloComponentOption<V>
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $apollo: DollarApollo<any>;
  }
}
