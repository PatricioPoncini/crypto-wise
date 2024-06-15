<script lang="ts" setup>
import Card from './Card.vue'
</script>

<template>
    <div class="flex items-center gap-20">
        <Card :title="'Purchase'" :description="'Section to buy coins'" :go-path="'/purchase'" :img="'/purchase_img.jpeg'"/>

        <Card :title="'Sale'" :description="'Section to sell my coins'" :go-path="'/sale'" :img="'/sale_coins.jpeg'"/>

        <Card :title="'My history'" :description="'View my coin transaction history'" :go-path="'/history'" :img="'/transactions_history.jpeg'"/>
    </div>
</template>