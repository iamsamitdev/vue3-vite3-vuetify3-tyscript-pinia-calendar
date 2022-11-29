<template>

  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer">
      <h1 class="pa-3">Menu</h1>
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> 
      <h3>Vuetify 3</h3>
    </v-app-bar>

    <v-main color="primary">
      <v-card-actions class="justify-center h-100">
        <v-row justify="center" class="flex-column" style="flex-grow: 0">

          <Datepicker 
            ref="datepicker"
            v-model="date" 
            locale="th"
            :format="format"
            modelType="yyyy-MM-dd HH:mm:ss"  
            placeholder="เลือกวัน" 
            position="center"
            autoApply 
            @update:modelValue="handleDate"
            style="margin-top: 300px">

            <template #year="{ year }">
              {{ year + 543 }}
            </template>

          </Datepicker>

          <h4 class="mt-4">ค่าที่จะนำไปใช้: {{ date }}</h4>

        </v-row>
      </v-card-actions>
    </v-main>

  </v-app>

</template>

<script setup lang="ts">

  import { ref } from 'vue'

  const drawer = ref(true)

  // Date Picker
  const date = ref()

  const format = (date: any) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()

    // return `Selected date is ${day}/${month}/${year}`;
    return `${day}/${month}/${year+543} ${hour}:${min}:${sec}`
  }

  const handleDate = (modelData: null) => {
    date.value = modelData
    if(date.value != null){
      console.log(date.value)
    }
  }


</script>

<style scoped>

</style>