<script lang="ts" setup>
import Card from './Card.vue'
</script>

<template>
    <div class="flex items-center flex-row gap-40">
        <Card :title="'Purchase'" :description="'Section to buy coins'" :go-path="'/purchase'" />
        <Card :title="'Sell'" :description="'Section to sell my coins'" :go-path="'/sale'" />
        <Card :title="'My history'" :description="'View my coin transaction history'" :go-path="'/history'" />
    </div>
</template>