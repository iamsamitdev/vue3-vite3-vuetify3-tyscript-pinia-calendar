<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
            <v-list-item
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
                title="John Doe"
                subtitle="john@email.com"
                class="pa-md-8"
            >
                <template v-slot:append>
                    <v-btn
                        size="small"
                        variant="text"
                        icon="mdi-menu-down"
                    ></v-btn>
                </template>
            </v-list-item>
      </v-list>
      <v-list nav>
          <v-list-item prepend-icon="mdi-view-home" value="home" to="/">Home</v-list-item>
          <v-list-item prepend-icon="mdi-info" value="about" to="/about">About</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-app-bar>

    <v-main>

      <ThemeProvider :theme="{primary: 'white'}">
          <router-view />
      </ThemeProvider>
      
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { ThemeProvider } from 'vue3-styled-components'

const drawer = ref(true)

</script>