<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="logo">
          <img
            :src="img"
            alt="logo"
            class="img-fluid m-auto d-block"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import logo from"../assets/logo.png"
const img=logo
</script>

<style scoped></style>
