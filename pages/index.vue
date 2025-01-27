<template>
  <main class="container">
    <div class="content">
      <header>
        <img src="@/assets/icons/logo.svg" alt="lembrai" class="self-start" />
        <p class="text-2xl">
          Organize suas ideias, marque o que importa, e lembre-se de tudo com o
          <span class="text-quaternary">lembrai</span>
        </p>
      </header>
      <section>
        <img
          src="@/assets/illustrations/page-check.png"
          alt="Papel de parede"
        />
        <Button>Bora Começar</Button>
      </section>
    </div>
  </main>
</template>
<script></script>
<style>
  .container {
    @apply bg-primary text-secondary min-w-full min-h-screen flex justify-center items-center;
  }

  .content {
    @apply min-h-screen flex flex-col justify-evenly items-center gap-8 custom-width;
  }

  header {
    @apply flex flex-col gap-8 w-full;
  }

  img {
    @apply w-auto max-w-xs md:max-w-sm;
  }

  section {
    @apply flex flex-col items-center gap-20 w-full;
  }
</style>
