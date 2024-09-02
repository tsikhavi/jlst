<script>
export default {

}
</script>

<template>
    <header class="py-[10px] lg:py-[15px]">
        <div class="flex items-center justify-between container">
            <NuxtLink to="/" class="flex items-center gap-[15px]">
                <img src="~/assets/images/logo.svg" alt="" class="w-[90px] lg:w-[180px]">
                <span class="text-sm text-black leading-[135%] hidden lg:block">Продажа запасных частей <br>для складской техники</span>
            </NuxtLink>
            <div class="flex items-center gap-[30px]">
                <a href="tel:+74950000000" class="flex items-center gap-[5px]">
                    <img src="~/assets/images/phone.svg" alt="">
                    <span class="font-semibold text-base leading-6 tracking-[-0.2px] text-black hidden lg:block">+7 (495) 000-00-00</span>
                </a>
                <ul class="flex items-center gap-[15px]">
                    <li>
                        <a href="#">
                            <img src="~/assets/images/mail.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="~/assets/images/telegram.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="~/assets/images/whatsapp.svg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex gap-[10px] lg:gap-6">
                <NuxtLink to="/sign-in" class="flex items-center gap-2 text-black font-proxima-nova text-base">
                    <img src="~/assets/images/user.svg" alt="">
                    <span class="hidden lg:block">Вход в личный кабинет</span>
                </NuxtLink>
                <span class="bg-[linear-gradient(to_bottom,_rgba(193,195,221,0),_#686977,_rgba(193,195,221,0))] w-[1px] h-9"></span>
                <NuxtLink to="/sign-up" class="flex items-center gap-2 text-black font-proxima-nova text-base">
                    <img src="~/assets/images/user-plus.svg" alt="">
                    <span class="hidden lg:block">Регистрация</span>
                </NuxtLink>
            </div>
        </div>
    </header>
</template>