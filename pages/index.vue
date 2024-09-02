<script>
import { ref } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const prev = ref(null);
        const next = ref(null);
        return {
            prev,
            next,
            modules: [EffectFade, Navigation],
        };
    },
}
</script>

<template>
    <div class="lg:pt-4">

        <!-- Home -->
        <section class="relative z-[1] text-white pt-[80px] pb-[76px] lg:pt-[130px] lg:pb-[130px] mb-[30px] lg:mb-[38px]">
            <img src="~/assets/images/home-bg.png" alt="" class="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
            <div class="container">
                <div class="max-w-[785px] mx-auto">
                    <h2 class="text-center text-[32px] lg:text-[52px] font-semibold mb-[5px] leading-[115%] lg:leading-[64px] uppercase">Поиск запчастей по номеру</h2>
                    <p class="text-center text-lg lg:text-2xl leading-[115%] mb-[10px] lg:mb-[30px]">введите номер запчасти для поиска по каталогу</p>
                    <div class="w-full lg:bg-white flex flex-col lg:flex-row items-center lg:rounded-[5px]">
                        <select name="" id="" class="border-b lg:border-b-0 border-color-4 lg:border-r lg:border-color-4 border-solid text-sm text-black h-[60px] w-full lg:w-[158px] flex-shrink-0 outline-none px-5 rounded-[5px_5px_0_0] lg:rounded-none form-select">
                            <option value="" selected hidden>Новая запчасть</option>
                            <option value="" v-for="i in 5" :key="i">select {{ i }}</option>
                        </select>
                        <input type="text" placeholder="Номер запчасти" class="w-full h-[60px] outline-none text-black px-5 text-sm leading-[135%] rounded-[0_0_5px_5px] lg:rounded-none">
                        <Btn class="h-[60px] flex-shrink-0 w-[147px] mt-[10px] lg:mt-0">Найти</Btn>
                    </div>
                    <p class="text-xs lg:text-[15px] leading-4 lg:leading-[135%] text-center mt-[10px] lg:mt-[30px]">Если вы не знаете номер запчасти <a href="#" class="inline underline">Зарегистрируйтесь</a> или <a href="#" class="inline underline">Войдите в личный кабинет</a> если вы уже зарегистрированы</p>
                </div>
            </div>
        </section>
        <!-- Home end -->

        <!-- Spare parts -->
        <section class="pb-[30px] lg:pb-[93px]">
            <div class="container">
                <h2 class="text-[36px] lg:text-[48px] leading-[40px] lg:leading-[115%] tracking-[-0.3px] mb-[10px] text-black">Продажа новых и б/у запасных частей для складской техники</h2>
                <p class="text-color-4 text-lg lg:text-2xl leading-7 lg:leading-[135%] font-semibold lg:font-normal tracking-[-0.2px] mb-[30px] lg:mb-[60px]">Оставьте заявку, и мы свяжемся с вами, или перейдите в личный кабинет для выбора и покупки автозапчастей</p>
                <div class="relative">
                    <swiper
                        :effect="'fade'"
                        :loop="true"
                        :initialSlide="4"
                        :modules="modules"
                        :navigation="{
                            prevEl: prev,
                            nextEl: next,
                        }"
                    >
                        <swiper-slide class="min-h-[500px] lg:min-h-[480px] relative z-[1]">
                            <img src="~/assets/images/slider-bg.png" alt="" class="absolute w-full h-full z-[-1] top-0 left-0">
                            <div class="absolute top-8 lg:top-0 left-0 lg:left-[120px] w-full lg:w-[480px] xl:w-[616px] h-full flex flex-col lg:justify-center items-center lg:items-start gap-[15px] lg:gap-[30px] px-[6px] lg:px-0">
                                <h3 class="text-4xl lg:text-[56px] leading-10 lg:leading-[64px] font-normal lg:font-semibold tracking-[-1px] text-center lg:text-start">Запасные части для вилочных погрузчиков</h3>
                                <Btn class="w-[268px] h-[59px]">подобрать</Btn>
                            </div>
                            <img src="~/assets/images/spare-swp-1.png" alt="" class="h-[329px] lg:h-auto w-full lg:w-[580px] xl:w-[634px] object-contain absolute -bottom-6 lg:bottom-auto lg:top-2/4 lg:-translate-y-2/4 lg:right-[60px] xl:right-[120px] z-[-1]">
                        </swiper-slide>
                        <swiper-slide class="min-h-[500px] lg:min-h-[480px] relative z-[1]">
                            <img src="~/assets/images/slider-bg.png" alt="" class="absolute w-full h-full z-[-1] top-0 left-0">
                            <div class="absolute top-8 lg:top-0 left-0 lg:left-[120px] w-full lg:w-[480px] xl:w-[616px] h-full flex flex-col lg:justify-center items-center lg:items-start gap-[15px] lg:gap-[30px] px-[6px] lg:px-0">
                                <h3 class="text-4xl lg:text-[56px] leading-10 lg:leading-[64px] font-normal lg:font-semibold tracking-[-1px] text-center lg:text-start">Запасные части <br> для ричтраков</h3>
                                <Btn class="w-[268px] h-[59px]">подобрать</Btn>
                            </div>
                            <img src="~/assets/images/spare-swp-2.png" alt="" class="h-[329px] lg:h-auto w-full lg:w-[460px] xl:w-[463px] object-contain absolute bottom-0 lg:bottom-auto lg:top-2/4 lg:-translate-y-2/4 lg:right-[60px] xl:right-[180px] z-[-1]">
                        </swiper-slide>
                        <swiper-slide class="min-h-[500px] lg:min-h-[480px] relative z-[1]">
                            <img src="~/assets/images/slider-bg.png" alt="" class="absolute w-full h-full z-[-1] top-0 left-0">
                            <div class="absolute top-8 lg:top-0 left-0 lg:left-[120px] w-full lg:w-[480px] xl:w-[616px] h-full flex flex-col lg:justify-center items-center lg:items-start gap-[15px] lg:gap-[30px] px-[6px] lg:px-0">
                                <h3 class="text-4xl lg:text-[56px] leading-10 lg:leading-[64px] font-normal lg:font-semibold tracking-[-1px] text-center lg:text-start">Запасные части для штабеллеров</h3>
                                <Btn class="w-[268px] h-[59px]">подобрать</Btn>
                            </div>
                            <img src="~/assets/images/spare-swp-3.png" alt="" class="h-[329px] lg:h-auto w-full lg:w-[450px] xl:w-[459px] object-contain absolute bottom-0 lg:bottom-auto lg:top-2/4 lg:-translate-y-2/4 lg:right-[100px] xl:right-[190px] z-[-1]">
                        </swiper-slide>
                        <swiper-slide class="min-h-[500px] lg:min-h-[480px] relative z-[1]">
                            <img src="~/assets/images/slider-bg.png" alt="" class="absolute w-full h-full z-[-1] top-0 left-0">
                            <div class="absolute top-8 lg:top-0 left-0 lg:left-[120px] w-full lg:w-[480px] xl:w-[616px] h-full flex flex-col lg:justify-center items-center lg:items-start gap-[15px] lg:gap-[30px] px-[6px] lg:px-0">
                                <h3 class="text-4xl lg:text-[56px] leading-10 lg:leading-[64px] font-normal lg:font-semibold tracking-[-1px] text-center lg:text-start">Запасные части для палетоперевозчиков</h3>
                                <Btn class="w-[268px] h-[59px]">подобрать</Btn>
                            </div>
                            <img src="~/assets/images/spare-swp-4.png" alt="" class="h-[329px] lg:h-auto w-full lg:w-[630px] xl:w-[634px] object-contain absolute bottom-0 lg:bottom-auto lg:top-2/4 lg:-translate-y-2/4  -right-10 xl:right-10 z-[-1]">
                        </swiper-slide>
                        <swiper-slide class="min-h-[500px] lg:min-h-[480px] relative z-[1]">
                            <img src="~/assets/images/slider-bg.png" alt="" class="absolute w-full h-full z-[-1] top-0 left-0">
                            <div class="absolute top-8 lg:top-0 left-0 lg:left-[120px] w-full lg:w-[480px] xl:w-[616px] h-full flex flex-col lg:justify-center items-center lg:items-start gap-[15px] lg:gap-[30px] px-[6px] lg:px-0">
                                <h3 class="text-4xl lg:text-[56px] leading-10 lg:leading-[64px] font-normal lg:font-semibold tracking-[-1px] text-center lg:text-start">Запасные части для узкопроходных машин</h3>
                                <Btn class="w-[268px] h-[59px]">подобрать</Btn>
                            </div>
                            <img src="~/assets/images/spare-swp-5.png" alt="" class="h-[300px] lg:h-auto w-full lg:w-[560px] xl:w-[571px] object-contain absolute -bottom-3 lg:bottom-auto lg:top-2/4 lg:-translate-y-2/4  lg:right-10 xl:right-[160px] z-[-1]">
                        </swiper-slide>
                    </swiper>
                    <button ref="prev" class="absolute z-[1] left-[10px] lg:left-10 top-2/4 -translate-y-2/4">
                        <img src="~/assets/images/swp-btn.svg" alt="">
                    </button>
                    <button ref="next" class="absolute z-[1] right-[10px] lg:right-10 top-2/4 -translate-y-2/4 rotate-180">
                        <img src="~/assets/images/swp-btn.svg" alt="">
                    </button>
                </div>
            </div>
        </section>
        <!-- Spare parts end -->

        <Spare />

        <!-- Company -->
        <section class="mb-[30px] lg:mb-[60px] relative z-[1]">
            <div class="container flex flex-col lg:flex-row items-center gap-6">
                <div class="rounded-[3px] overflow-hidden w-full md:w-[550px] xl:w-[620px] md:h-[632px] flex-shrink-0">
                    <img src="~/assets/images/company-logo.png" alt="" class="w-full h-full object-cover">
                </div>
                <div class="flex flex-col gap-[30px]">
                    <h2 class="text-[36px] lg:text-5xl leading-10 lg:leading-[55px] tracking-[-0.3px] -mb-[15px] lg:mb-0 font-normal">О компании</h2>
                    <ul class="flex flex-col gap-[15px] lg:gap-[23px]">
                        <li class="text-sm lg:text-base leading-[135%] lg:leading-[21px]">Лишь сторонники тоталитаризма в науке будут объявлены нарушающими общечеловеческие нормы этики и морали. Наше дело не так однозначно, как может показаться: синтетическое тестирование требует анализа инновационных методов управления процессами. </li>
                        <li class="text-sm lg:text-base leading-[135%] lg:leading-[21px]">Лишь независимые государства призывают нас к новым свершениям, которые, в свою очередь, должны быть ограничены исключительно образом мышления. </li>
                        <li class="text-sm lg:text-base leading-[135%] lg:leading-[21px]">Банальные, но неопровержимые выводы, а также интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть в равной степени предоставлены сами себе.</li>
                    </ul>
                    <div>
                        <h3 class="text-2xl lg:text-4xl leading-[32px] lg:leading-10 tracking-[-0.3px] font-semibold lg:font-normal mb-[15px]">Как мы работаем:</h3>
                        <ul class="flex flex-col gap-[15px]">
                            <li class="flex items-start lg:items-center gap-[10px] overflow-hidden">
                                <span class="text-[56px] lg:text-[60px] font-light leading-[64px] lg:leading-[40px] tracking-[-0.4px] text-color-1 w-[42px] flex-shrink-0 text-right -translate-x-3.5">01</span>
                                <p class="w-full text-sm lg:text-base leading-[135%] text-black">В поиске на сайте вводите номер запчасти, если вы не знаете номера, то регистрируетесь, в личном кабинете вам будет доступен каталог, в котором можно номер найти</p>
                            </li>
                            <li class="flex items-center gap-[10px] overflow-hidden">
                                <span class="text-[56px] lg:text-[60px] font-light leading-[64px] lg:leading-[40px] tracking-[-0.4px] text-color-1 w-[42px] flex-shrink-0 text-right -translate-x-3.5">02</span>
                                <p class="w-full text-sm lg:text-base leading-[135%] text-black">Переходите на страницу найденой запчасти</p>
                            </li>
                            <li class="flex items-center gap-[10px] overflow-hidden">
                                <span class="text-[56px] lg:text-[60px] font-light leading-[64px] lg:leading-[40px] tracking-[-0.4px] text-color-1 w-[42px] flex-shrink-0 text-right -translate-x-3.5">03</span>
                                <p class="w-full text-sm lg:text-base leading-[135%] text-black">Оставляете заявку на сайте, наш менеджер свяжется с вами для уточнения заказа, или оформляете заказ на сайте</p>
                            </li>
                            <li class="flex items-center gap-[10px] overflow-hidden">
                                <span class="text-[56px] lg:text-[60px] font-light leading-[64px] lg:leading-[40px] tracking-[-0.4px] text-color-1 w-[42px] flex-shrink-0 text-right -translate-x-3.5">04</span>
                                <p class="w-full text-sm lg:text-base leading-[135%] text-black">Оплачиваете заказ удобным для вас методом</p>
                            </li>
                            <li class="flex items-center gap-[10px] overflow-hidden">
                                <span class="text-[56px] lg:text-[60px] font-light leading-[64px] lg:leading-[40px] tracking-[-0.4px] text-color-1 w-[42px] flex-shrink-0 text-right -translate-x-3.5">05</span>
                                <p class="w-full text-sm lg:text-base leading-[135%] text-black">Получаете доставку, осуществив самовывоз или через любые ТК на ваше усмотрение </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- Company end -->

        <!-- Question -->
        <section class="mb-[65px]">
            <div class="container flex flex-col lg:flex-row items-center justify-between gap-[15px] md:gap-[50px] xl:gap-[100px] bg-[#8F8F8F] rounded-[3px] overflow-hidden text-white px-[15px] md:px-[60px] xl:px-[120px] py-6 md:py-12">
                <div class="w-full 2xl:w-auto 2xl:flex-shrink-0">
                    <h2 class="text-[36px] md:text-5xl leading-[40px] md:leading-[115%] tracking-[-0.3px] mb-[5px] md:mb-[10px] font-normal text-center lg:text-start">У вас остались вопросы?</h2>
                    <h3 class="text-lg md:text-[32px] leading-7 md:leading-[125%] tracking-[-0.2px] font-semibold md:font-normal text-center lg:text-start">Оставьте свои контакты и менеджер <br> перезвонит вам для уточнения</h3>
                </div>
                <div class="w-full">
                    <div class="flex items-center flex-col md:flex-row gap-[10px] md:gap-6 mb-3 md:mb-[25px]">
                        <input type="text" placeholder="Ваше имя" class="w-full bg-white h-[46px] md:h-[60px] px-5 placeholder:text-color-4 text-black outline-none text-base rounded-[5px]">
                        <input type="tel" placeholder="Ваш телефон" class="w-full bg-white h-[46px] md:h-[60px] px-5 placeholder:text-color-4 text-black outline-none text-base rounded-[5px]">
                    </div>
                    <div class="flex items-center flex-col md:flex-row gap-[10px] md:gap-6">
                        <p class="w-full text-sm md:text-base leading-[135%] text-center md:text-start font-normal">Нажимая на кнопку “Отправить” даю согласие на обработку Персональных данных</p>
                        <Btn class="w-full h-[60px]">Отправить</Btn>
                    </div>
                </div>
            </div>
        </section>
        <!-- Question end -->

    </div>
</template>

<style>

</style>