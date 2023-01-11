<template>
  <v-app>
    <v-main id="app">
      <HelloWorld />
      <v-container fluid class="justify-center">
        <v-row no-gutters>
          <v-col cols="12" md="7">
            <title-head />
          </v-col>
          <v-col class="d-flex justify-center">
            <tic-tac-toe class="mt-10" />
          </v-col>
        </v-row>
        <v-row no-gutters> </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import TicTacToe from "@/components/TicTacToe.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import TitleHead from "@/components/TitleHead.vue";
</script>
