<script>
export default {
    props: {
        navs: {
            type: Array,
            defaul: [],
        }
    }
}
</script>

<template>
    <section class="pt-[10px] pb-[30px] lg:pt-[15px] lg:pb-[15px]">
        <div class="container flex flex-wrap items-center gap-[10px]">
            <div v-for="(link, idx) in navs" :key="idx" class="flex gap-[10px] text-color-8 text-sm leading-[135%]">
                <NuxtLink
                    :to="link.to"
                    :class="navs.length - 1 == idx ? 'text-black underline' : ''"
                >{{link.title}}</NuxtLink>
                <span v-if="idx != (navs.length - 1)">/</span>
            </div>
        </div>
    </section>
</template>

<style>

</style>