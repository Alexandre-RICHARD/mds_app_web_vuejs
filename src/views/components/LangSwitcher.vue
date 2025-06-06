<script setup lang="ts">
import { LanguageEnum } from "../../enums/language.enum";
import { useLanguageStore } from "../../stores/language";

const languageStore = useLanguageStore();

function handleChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value as LanguageEnum;
  languageStore.setLanguage(value);
}
</script>

<template>
  <select
    :value="languageStore.current"
    @change="handleChange"
    class="border border-gray-400 rounded px-2 py-1 text-sm"
  >
    <option :value="LanguageEnum.FR">FR</option>
    <option :value="LanguageEnum.EN">EN</option>
  </select>
</template>
