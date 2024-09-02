<template>
    <section class="mb-[30px] lg:mb-[53px] bg-[linear-gradient(157.72deg,_rgb(142,142,142)_34.658%,_rgb(40,40,40)_74.923%,_rgb(80,80,80)_87.523%)] lg:bg-none">
        <div class="container relative z-[1] text-white lg:bg-[linear-gradient(157.72deg,_rgb(142,142,142)_34.658%,_rgb(40,40,40)_74.923%,_rgb(80,80,80)_87.523%)] pt-6 pb-[232px] lg:pt-10 lg:pb-10 lg:px-[120px] rounded-[3px]">
            <h2 class="mb-6 text-[36px] lg:text-5xl leading-10 lg:leading-[115%] tracking-[-0.4px] font-normal text-center lg:text-left">Для ознакомления с каталогом <br> и покупки автозапчастей</h2>
            <div class="flex flex-col lg:flex-row items-center gap-6">
                <Btn class="h-[60px] w-[278px]">Зарегистрируйтесь</Btn>
                <p class="lowercase text-base leading-[120%] tracking-[0.15px]">
                    Или <NuxtLink to="/">войдите в Личный кабинет</NuxtLink>
                </p>
            </div>
            <img src="~/assets/images/spare-car.png" alt="" class="absolute object-contain z-[-1] left-[50%] lg:left-auto -translate-x-2/4 lg:translate-x-0 bottom-0 lg:bottom-auto lg:right-[42px] lg:top-[-70px] 2xl:top-[-128px] min-w-[390px] w-[390px] lg:w-[580px] xl:w-[650px] 2xl:w-[777px]">
        </div>
    </section>
</template>