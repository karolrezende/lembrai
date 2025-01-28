<template>
  <main class="container">
    <div class="content">
      <section class="card">
        a
        <NuxtPage />
      </section>
    </div>
  </main>
</template>
<script scoped></script>
<style>
  .container {
    @apply bg-primary-light text-secondary min-w-full min-h-screen flex justify-center items-center font-semibold;
  }

  .content {
    @apply flex items-center w-full h-full justify-end;
  }

  .card {
    @apply bg-primary w-full min-h-[50%];
  }

  @screen lg {
  }
</style>
