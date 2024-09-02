<script>
    export default {
    
    }
</script>

<template>
    <footer class="bg-[#292929] text-white py-[75px]">
        <div class="container flex flex-col lg:flex-row items-center justify-between gap-[10px] lg:gap-10">
            <NuxtLink to="/" class="flex flex-col xl:flex-row items-center gap-[15px]">
                <img src="~/assets/images/logo.svg" alt="" class="w-[180px] lg:w-auto">
                <span class="text-sm leading-[135%]">Продажа запасных частей <br class="hidden lg:block"> для складской техники</span>
            </NuxtLink>
            <div class="flex items-center gap-[30px]">
                <a href="tel:+74950000000" class="flex items-center gap-[5px]">
                    <img src="~/assets/images/phone-white.svg" alt="">
                    <span class="font-semibold text-base leading-6 tracking-[-0.2px] text-white">+7 (495) 000-00-00</span>
                </a>
                <ul class="flex items-center gap-[15px]">
                    <li>
                        <a href="#">
                            <img src="~/assets/images/mail-white.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="~/assets/images/telegram-white.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="~/assets/images/whatsapp-white.svg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <p class="font-proxima-nova text-base">г. Москва, Красная площадь дом,1</p>
            <p class="font-proxima-nova text-base">
                © 2024 . Все права защищены. <br> Политика конфиденциальности
            </p>
        </div>
    </footer>
</template>