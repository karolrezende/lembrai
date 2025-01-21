<template >
    <button :class="class" :disabled="disabled" @click="handleClick">
        <slot name="icon"/>
        <slot/>
    </button>
</template>
<script>
    const props = defineProps

</script>
<style>
    
</style>