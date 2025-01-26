<template >
    <main class="container">
        <div class="content">
            <header>    
                <img src="@/assets/icons/logo.svg" alt="lembrai" />
                <p class="text-2xl">
                    Organize suas ideias,
                    marque o que importa,
                    e lembre-se de tudo 
                    com o <span class="text-quaternary">lembrai</span>
                </p>
            </header>
            <section>
                <img src="@/assets/illustrations/page-check.png" alt="Papel de parede">
            <Button class="w-full" >Bora Começar</Button>
            </section>
        </div>
    </main>
</template>
<script>
</script>
<style >
    .container {
        @apply bg-primary text-secondary min-w-full min-h-screen
    }

    .content {
        @apply flex flex-col items-center px-16 py-20 md:py-20 md:px-40;
    }

    header {
        @apply flex flex-col gap-8;
    }

    img {
        @apply w-auto max-w-xs md:max-w-sm self-start;
    }
</style>