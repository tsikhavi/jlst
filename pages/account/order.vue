<template>
    <div>
        <h3 class="text-2xl md:text-4xl mb-[15px] md:mb-[42px]">Заказы</h3>
        <div class="flex flex-col gap-[15px] md:gap-[42px]">
            <div class="bg-white">
                <div class="border-b relative border-b-color-8 border-solid flex flex-col md:flex-row items-stretch justify-center md:justify-between min-h-[90px] md:min-h-max py-[7px] md:py-0 pl-[15px] md:pl-0 pr-11 md:pr-0">
                    <div class="md:pl-5 md:py-[5px]">
                        <p class="flex items-center gap-[10px] text-sm md:text-base leading-[19px] md:leading-[22px]">
                            <span class="text-color-4">Заказ от</span> 
                            <span>22 августа 2024 г</span>
                        </p>
                        <h4 class="text-sm md:text-xl leading-[19px] md:leading-8">№ 1234567890</h4>
                    </div>
                    <div class="flex items-start md:items-center md:gap-[42px] flex-col md:flex-row">
                        <p class="flex items-center gap-[5px] md:gap-[10px]">
                            <span class="text-color-4 text-sm md:text-base laeding-[19px] leading-[22px]">Оплачено</span>
                            <span class="text-sm md:text-xl leading-[19px] md:leading-8 tracking-[-0.2px]">222000 ₽</span>
                        </p>
                        <p class="text-color-4 text-sm md:text-base leading-[19px] md:leading-[22px]">Доставлен</p>
                    </div>
                    <div class="flex flex-col md:flex-row items-center md:items-stretch border-l border-l-color-4 absolute md:static right-0 top-0 h-full md:h-auto">
                        <button class="h-full md:h-auto w-11 md:w-[60px] flex items-center justify-center">
                            <img src="~/assets/images/rotate-icon.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="px-[15px] md:px-5 py-3 md:py-2 flex items-center gap-[10px]">
                    <div class="flex-shrink-0">
                        <img src="~/assets/images/basket-card.svg" alt="">
                    </div>
                    <div class="w-full flex items-start md:items-center justify-start md:justify-between flex-col md:flex-row">
                        <p class="text-sm md:text-base leading-[19px] md:leading-[22px]">Турбокомпрессор HE 35W QSB</p>
                        <div class="flex items-start md:items-center md:gap-[42px] flex-col md:flex-row">
                            <p class="text-color-4 text-sm md:text-base leading-[19px] md:leading-[22px]">10 шт</p>
                            <h4 class="text-base md:text-xl leading-[22px] md:leading-8 tracking-[-0.2px]">222000 ₽</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white">
                <div class="border-b relative border-b-color-8 border-solid flex flex-col md:flex-row items-stretch justify-center md:justify-between min-h-[90px] md:min-h-max py-[7px] md:py-0 pl-[15px] md:pl-0 pr-11 md:pr-0">
                    <div class="md:pl-5 md:py-[5px]">
                        <p class="flex items-center gap-[10px] text-sm md:text-base leading-[19px] md:leading-[22px]">
                            <span class="text-color-4">Заказ от</span> 
                            <span>22 августа 2024 г</span>
                        </p>
                        <h4 class="text-sm md:text-xl leading-[19px] md:leading-8">№ 1234567890</h4>
                    </div>
                    <div class="flex items-start md:items-center md:gap-[42px] flex-col md:flex-row">
                        <p class="flex items-center gap-[5px] md:gap-[10px]">
                            <span class="text-color-4 text-sm md:text-base laeding-[19px] leading-[22px]">Оплачено</span>
                            <span class="text-sm md:text-xl leading-[19px] md:leading-8 tracking-[-0.2px]">222000 ₽</span>
                        </p>
                        <p class="text-color-4 text-sm md:text-base leading-[19px] md:leading-[22px]">Доставлен</p>
                    </div>
                    <div class="flex flex-col md:flex-row items-center md:items-stretch border-l border-l-color-4 absolute md:static right-0 top-0 h-full md:h-auto">
                        <button class="h-full md:h-auto w-11 md:w-[60px] flex items-center justify-center">
                            <img src="~/assets/images/rotate-icon.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="px-[15px] md:px-5 py-3 md:py-2 flex items-center gap-[10px]">
                    <div class="flex-shrink-0">
                        <img src="~/assets/images/basket-card.svg" alt="">
                    </div>
                    <div class="w-full flex items-start md:items-center justify-start md:justify-between flex-col md:flex-row">
                        <p class="text-sm md:text-base leading-[19px] md:leading-[22px]">Турбокомпрессор HE 35W QSB</p>
                        <div class="flex items-start md:items-center md:gap-[42px] flex-col md:flex-row">
                            <p class="text-color-4 text-sm md:text-base leading-[19px] md:leading-[22px]">10 шт</p>
                            <h4 class="text-base md:text-xl leading-[22px] md:leading-8 tracking-[-0.2px]">222000 ₽</h4>
                        </div>
                    </div>
                </div>
                <div class="px-[15px] md:px-5 py-3 md:py-2 flex items-center gap-[10px]">
                    <div class="flex-shrink-0">
                        <img src="~/assets/images/basket-card.svg" alt="">
                    </div>
                    <div class="w-full flex items-start md:items-center justify-start md:justify-between flex-col md:flex-row">
                        <p class="text-sm md:text-base leading-[19px] md:leading-[22px]">Турбокомпрессор HE 35W QSB</p>
                        <div class="flex items-start md:items-center md:gap-[42px] flex-col md:flex-row">
                            <p class="text-color-4 text-sm md:text-base leading-[19px] md:leading-[22px]">10 шт</p>
                            <h4 class="text-base md:text-xl leading-[22px] md:leading-8 tracking-[-0.2px]">222000 ₽</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white">
                <div class="border-b relative border-b-color-8 border-solid flex flex-col md:flex-row items-stretch justify-center md:justify-between min-h-[90px] md:min-h-max py-[7px] md:py-0 pl-[15px] md:pl-0 pr-11 md:pr-0">
                    <div class="md:pl-5 md:py-[5px]">
                        <p class="flex items-center gap-[10px] text-sm md:text-base leading-[19px] md:leading-[22px]">
                            <span class="text-color-4">Заказ от</span> 
                            <span>22 августа 2024 г</span>
                        </p>
                        <h4 class="text-sm md:text-xl leading-[19px] md:leading-8">№ 1234567890</h4>
                    </div>
                    <div class="flex items-start md:items-center md:gap-[42px] flex-col md:flex-row">
                        <p class="flex items-center gap-[5px] md:gap-[10px] text-color-1">
                            <span class="text-sm md:text-base laeding-[19px] leading-[22px]">Ожидает оплаты</span>
                            <span class="text-sm md:text-xl leading-[19px] md:leading-8 tracking-[-0.2px]">222000 ₽</span>
                        </p>
                    </div>
                    <div class="flex flex-col-reverse md:flex-row items-center md:items-stretch border-l border-l-color-4 absolute md:static right-0 top-0 h-full md:h-auto">
                        <button class="h-full md:h-auto w-11 md:w-[60px] flex items-center justify-center">
                            <img src="~/assets/images/wallet-icon.svg" alt="">
                        </button>
                        <button class="h-full md:h-auto w-11 md:w-[60px] flex items-center justify-center md:border-l md:border-l-color-4 border-b border-b-color-4 md:border-b-0">
                            <img src="~/assets/images/edit-icon.svg" alt="">
                        </button>
                        <button class="h-full md:h-auto w-11 md:w-[60px] flex items-center justify-center md:border-l md:border-l-color-4 border-b border-b-color-4 md:border-b-0">
                            <img src="~/assets/images/times.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="px-[15px] md:px-5 py-3 md:py-2 flex items-center gap-[10px]">
                    <div class="flex-shrink-0">
                        <img src="~/assets/images/basket-card.svg" alt="">
                    </div>
                    <div class="w-full flex items-start md:items-center justify-start md:justify-between flex-col md:flex-row">
                        <p class="text-sm md:text-base leading-[19px] md:leading-[22px]">Турбокомпрессор HE 35W QSB</p>
                        <div class="flex items-start md:items-center md:gap-[42px] flex-col md:flex-row">
                            <p class="text-color-4 text-sm md:text-base leading-[19px] md:leading-[22px]">10 шт</p>
                            <h4 class="text-base md:text-xl leading-[22px] md:leading-8 tracking-[-0.2px]">222000 ₽</h4>
                        </div>
                    </div>
                </div>
                <div class="px-[15px] md:px-5 py-3 md:py-2 flex items-center gap-[10px]">
                    <div class="flex-shrink-0">
                        <img src="~/assets/images/basket-card.svg" alt="">
                    </div>
                    <div class="w-full flex items-start md:items-center justify-start md:justify-between flex-col md:flex-row">
                        <p class="text-sm md:text-base leading-[19px] md:leading-[22px]">Турбокомпрессор HE 35W QSB</p>
                        <div class="flex items-start md:items-center md:gap-[42px] flex-col md:flex-row">
                            <p class="text-color-4 text-sm md:text-base leading-[19px] md:leading-[22px]">10 шт</p>
                            <h4 class="text-base md:text-xl leading-[22px] md:leading-8 tracking-[-0.2px]">222000 ₽</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>