<script setup>
definePageMeta({
    layout: 'auth'
});
</script>

<template>
    <div class="w-full">
        <h2 class="text-center text-4xl md::text-5xl md:leading-[55px] mb-6">Авторизация</h2>
        <div class="flex flex-col gap-3">
            <input type="email" placeholder="Email" class="form-inp">
            <input type="password" placeholder="Пароль" class="form-inp">
        </div>
        <p class="text-center text-color-4 text-xs md:text-sm leading-4 md:leading-[19px] my-3 md:my-6">Забыли пароль или email? <a href="#" class="inline underline">Напомнить</a>.</p>
        <div class="flex items-center justify-center">
            <Btn class="w-[251px] h-[49px]">Войти в личный кабинет</Btn>
        </div>
    </div>
</template>
