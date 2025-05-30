<script setup lang="ts">
import LoadingLogo from "../../components/LoadingLogo.vue";
import RandomSVG from "../../svg/RandomSVG.vue";
import { randomFunction } from "./randomFunction";

const doubleNumber = randomFunction(2);
</script>

<template>
  <div>Text {{ doubleNumber }} test</div>
  <LoadingLogo />
  <RandomSVG />
</template>

<style lang="scss"></style>
