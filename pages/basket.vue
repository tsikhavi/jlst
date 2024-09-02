<script>
export default {
    data () {
        return {
            breadcrumb: [
                {title: 'Главная', to: '/'},
                {title: 'Корзина', to: '#'},
            ]
        }
    }
}
</script>

<template>
    <div>
        <Search />
        <Breadcrumb :navs="breadcrumb" />

        <section class="mb-[30px] lg:mb-[65px]">
            <div class="container">
                <h2 class="text-4xl lg:text-5xl leading-10 lg:leading-[55px] mb-[10px] lg:mb-[30px]">Корзина</h2>
                <div class="p-[15px] lg:p-[42px] bg-color-6">
                    <h3 class="text-2xl lg:text-4xl mb-[15px] lg:mb-6 tracking-[-0.3px]">Ваша покупка</h3>
                    <div class="bg-white py-3 lg:py-[5px] px-[15px] lg:px-5 border-b border-b-color-8 border-solid lg:border-b-0">
                        <p class="flex items-center gap-[10px] text-sm lg:text-base leading-[19px] lg:leading-[22px]">
                            <span class="text-color-4">Заказ от</span> 
                            <span>22 августа 2024 г</span>
                        </p>
                        <h4 class="text-sm lg:text-xl leading-[19px] lg:leading-8 tracking-[-0.2px]">№ 1234567890</h4>
                    </div>
                    <ul class="lg:my-[5px] flex flex-col lg:gap-[5px]">
                        <li class="bg-white flex flex-col lg:flex-row items-stretch justify-between px-[15px] pb-[15px] pt-2 lg:pb-0 lg:pt-0 lg:pr-0 lg:pl-5" v-for="i in 2" :key="i">
                            <div class="flex items-center gap-[10px]">
                                <img src="~/assets/images/basket-card.svg" alt="">
                                <p class="text-sm lg:text-base">Турбокомпрессор HE 35W QSB</p>
                            </div>
                            <div class="w-full lg:w-auto flex justify-between items-center gap-3 lg:gap-[42px]">
                                <p class="text-sm lg:text-base leading-[22px] text-color-4">3500 ₽</p>
                                <Calculate :defaultCount="10" btnClass="w-[37px] lg:w-[53px]" class="w-[128px] lg:w-[184px] h-[39px] lg:h-[48px] flex-shrink-0" />
                                <h4 class="text-base lg:text-xl leading-[22px] lg:leading-8 tracking-[-0.2px] lg:pr-[6px]">222000 ₽</h4>
                                <button class="lg:w-[60px] lg:h-full lg:border-l lg:border-l-color-4 lg:border-solid flex justify-center items-center flex-shrink-0">
                                    <img src="~/assets/images/times.svg" alt="">
                                </button>
                            </div>
                        </li>
                    </ul>
                    <div class="bg-white py-4 px-5 hidden lg:flex items-center justify-end gap-10 text-base leading-[22px] mb-[42px]">
                        <p class="flex items-center gap-[10px]">
                            <span class="text-color-4">Итого:</span>
                            <span>2 наименования</span>
                            <span>15 ед.</span>
                            <span>200 кг</span>
                        </p>
                        <p class="flex items-center gap-[10px]">
                            <span class="text-color-4">На сумму:</span>
                            <span class="text-xl leading-8 font-semibold">444000 ₽</span>
                        </p>
                    </div>
                    <ul class="flex flex-col lg:flex-row items-start gap-[15px] lg:gap-[42px] mt-[15px] lg:mt-0">
                        <li class="w-full">
                            <h3 class="text-2xl lg:text-4xl mb-[10px] lg:mb-6">Доставка</h3>
                            <div class="flex flex-col gap-3">
                                <Checkbox text="Самовывоз с нашего склада (Бесплатно)" :value="true" />
                                <Checkbox text="Доставка логистической компанией (От 1500  ₽)" :value="false" />
                            </div>
                        </li>
                        <li class="w-full">
                            <h3 class="text-4xl mb-6">Оплата</h3>
                            <div class="flex flex-col gap-3">
                                <Checkbox text="Оплата счета" :value="true" />
                                <Checkbox text="Оплата онлайн" :value="false" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="bg-color-8 text-white px-[15px] lg:px-0 py-[15px] mb-[25px] lg:mb-[60px] text-base lg:text-xl leading-[22px] lg:leading-8 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-[5px] lg:gap-[42px] font-normal">
                    <p class="flex items-center gap-[10px] ">
                        <span>Итого:</span>
                        <span>2 наименования</span>
                        <span>15 ед.</span>
                        <span>200 кг</span>
                    </p>
                    <p class="flex items-center gap-[10px]">
                        <span>Доставка:</span>
                        <span>Бесплатно</span>
                    </p>
                    <p class="flex items-center gap-[10px]">
                        <span>Сумма:</span>
                        <span class="text-base lg:text-2xl font-normal lg:font-semibold">444000 ₽</span>
                    </p>
                </div>
                <div class="flex items-center justify-center">
                    <Btn class="w-[240px] h-[43px]">Перейти к оплате</Btn>
                </div>
            </div>
        </section>
    </div>
</template>