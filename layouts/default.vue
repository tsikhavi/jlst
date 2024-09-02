<template>
    <div class="w-full overflow-hidden min-h-[100svh] font-source-sans font-normal">
        <!-- Header -->
        <Header />
        <!-- Header end -->

        <slot />

        <!-- Footer -->
        <Footer />
        <!-- Footer end -->

        <Navigation />
    </div>
</template>