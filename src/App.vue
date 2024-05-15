<script>

import {ref} from "vue"
import {useTheme} from "vuetify"
const notifications =  [
  {
    title: "Message from A",
    icon: "mdi-email",
    color: "indigo",
  },
  {
    title: "Message from B",
    icon: "mdi-email",
    color: "blue",
  },
  {
    title: "Message from C",
    icon: "mdi-email",
    color: "green",
  },{
    title: "Message from D",
    icon: "mdi-email",
    color: "yellow",
  },
  {
    title: "Message from E",
    icon: "mdi-email",
    color: "orange",
  },{
    title: "Message from F",
    icon: "mdi-email",
    color: "red",
  }
];

const darkTheme = ref(false);
// const theme = useTheme();

function changeTheme() {
  darkTheme.value =!darkTheme.value;
  // theme.gloabl.name.value = darkTheme.value ? "dark":"light";
}
</script>
<template>
      <!-- <div>Hello World</div> -->
  <v-app>  
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/"> Vuetify </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="changeTheme">
        <v-icon 
        :icon="darkTheme ?
        'mdi-weather-sunny':
        'mdi-weather-night'"
        ></v-icon>
      </v-btn>

      <v-menu transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">            
          <v-badge content="6" size="x-small" color="red">
            <v-icon icon="mdi-bell"
            color="yellow">
            </v-icon>
          </v-badge>
      </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in notifications"
          :key="index"
          :value="index"
        >

          <v-list-item-title>
            <v-icon :icon="item.icon"
            :color="item.color"></v-icon>
            {{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      <v-btn 
      variant="outlined" 
      color="white-lighten-4" 
      size="small" 
      to="/login"> 
      Login </v-btn>
    </v-toolbar>

    <v-main> 
      <v-fade-transition>
        <router-view />
      </v-fade-transition>
    </v-main>

</v-app>
</template>

<script setup>
  //
</script>
