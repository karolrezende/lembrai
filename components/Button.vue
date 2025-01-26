<template>
  <button :class="defaultClass" :disabled="disabled" @click="handleClick">
    <slot name="icon" />
    <slot> butoao </slot>
  </button>
</template>
<script setup>
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'danger'].includes(value)
      }
    },
    size: {
      type: String,
      default: 'sm',
      validator(value) {
        return ['sm', 'md', 'lg'].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    class: {
      type: String,
      default: ''
    }
  })

  const defaultClass = computed(() => [
    'btn',
    `btn-${props.variant}`,
    `btn-${props.size}`,
    ...props.class.split(' ')
  ])
</script>
<style>
  .btn {
    @apply rounded-2xl h-10  w-full;
  }

  .btn-primary {
    @apply bg-quinary text-secondary;
  }

  .btn-secondary {
    @apply bg-secondary text-primary;
  }
</style>
