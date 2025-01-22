<template >
    <button :class="defaultClass" :disabled="disabled" @click="handleClick">
        <slot name="icon"/>
        <slot/>
    </button>
</template>
<script>
    const props = defineProps({
        variant: {
            string, 
            default: 'primary',
            validator(value) { return ['primary', 'secondary', 'danger',].includes(value)}
        },
        size: {
            string,
            default: 'sm',
            validator(value) { return ['sm', 'md', 'lg',].includes(value)}
        },
        disabled: {
            boolean,
            default: false
        }
    })

    const defaultClass = computed(() => [
        'btn',
        `btn-${props.variant}`,
        `btn-${props.size}`,
    ])

    

</script>
<style>
    .btn-primary {
        @apply bg-primary text-secondary 
    }

    .btn-secondary {
        @apply bg-secondary text-primary 
    }

</style>