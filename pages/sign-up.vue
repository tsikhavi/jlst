<script setup>
definePageMeta({
    layout: 'auth'
});
</script>

<template>
    <div class="w-full">
        <p class="text-base md:text-xl leading-[19px] md:leading-8 text-color-4 text-center">Для регистрации и полному доступу к сайту</p>
        <h2 class="text-center text-4xl md::text-5xl md:leading-[55px] mb-6">Заполните форму</h2>
        <div class="flex flex-col gap-3">
            <div class="flex flex-col md:flex-row gap-3 md:items-center justify-between">
                <Checkbox text="Физическое лицо" :value="true" />
                <Checkbox text="Юридическое лицо/ ИП" :value="false" />
            </div>
            <input type="text" placeholder="Ваше имя*" class="form-inp">
            <div class="flex flex-col md:flex-row items-center gap-3">
                <input type="email" placeholder="Email *" class="form-inp">
                <input type="tel" placeholder="Телефон" class="form-inp">
            </div>
            <input type="text" placeholder="Ваша компания" class="form-inp">
            <input type="number" placeholder="ИНН" class="form-inp">
            <input type="password" placeholder="Пароль*" class="form-inp">
        </div>
        <p class="text-center text-color-4 text-xs md:text-sm leading-4 md:leading-[19px] my-3 md:my-6">Нажимая на кнопку “Отправить” даю согласие на обработку <a href="#" class="inline underline">Персональных данных</a></p>
        <div class="flex items-center justify-center">
            <Btn class="w-[251px] h-[49px]">Зарегистрироваться</Btn>
        </div>
    </div>
</template>
