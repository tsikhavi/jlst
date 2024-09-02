<script>
export default {

}
</script>

<template>
    <div>
        <h3 class="text-2xl md:text-4xl mb-[30px] md:mb-[42px]">Личные данные</h3>
        <div class="flex flex-col gap-[30px] md:gap-[42px]">
            <div class="flex flex-col gap-3">
                <div class="flex flex-wrap items-stretch">
                    <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">Ваше имя</label>
                    <input type="text" value="Иванов Иван Иванович" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                    <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                        <img src="~/assets/images/edit-icon.svg" alt="">
                    </button>
                </div>
                <div class="flex flex-col lg:flex-row items-center gap-6">
                    <div class="flex flex-wrap items-stretch w-full">
                        <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">Email</label>
                        <input type="email" value="ivanov@ii.ru" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                        <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                            <img src="~/assets/images/edit-icon.svg" alt="">
                        </button>
                    </div>
                    <div class="flex flex-wrap items-stretch w-full">
                        <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">Телефон</label>
                        <input type="tel" value="+7 (000) 000-00-00" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                        <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                            <img src="~/assets/images/edit-icon.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <div class="flex flex-wrap items-stretch">
                    <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">Юридический статус</label>
                    <input type="text" value="ООО" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                    <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                        <img src="~/assets/images/edit-icon.svg" alt="">
                    </button>
                </div>
                <div class="flex flex-wrap items-stretch">
                    <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">Название компании</label>
                    <input type="text" value="Рога и копыта" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                    <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                        <img src="~/assets/images/edit-icon.svg" alt="">
                    </button>
                </div>
                <div class="flex flex-col lg:flex-row items-center gap-6">
                    <div class="flex flex-wrap items-stretch w-full">
                        <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">ИНН</label>
                        <input type="number" value="000000000" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                        <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                            <img src="~/assets/images/edit-icon.svg" alt="">
                        </button>
                    </div>
                    <div class="flex flex-wrap items-stretch w-full">
                        <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">КПП</label>
                        <input type="number" value="0000000000" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                        <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                            <img src="~/assets/images/edit-icon.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="flex flex-wrap items-stretch">
                    <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">Юридический адрес</label>
                    <input type="text" value="Рога и копыта" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                    <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                        <img src="~/assets/images/edit-icon.svg" alt="">
                    </button>
                </div>
                <div class="flex flex-wrap items-stretch">
                    <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">Фактический адрес</label>
                    <input type="text" value="Рога и копыта" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                    <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                        <img src="~/assets/images/edit-icon.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <div class="flex flex-wrap items-stretch">
                    <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">Банк</label>
                    <input type="text" value="Зеленый" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                    <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                        <img src="~/assets/images/edit-icon.svg" alt="">
                    </button>
                </div>
                <div class="flex flex-col lg:flex-row items-center gap-6">
                    <div class="flex flex-wrap items-stretch w-full">
                        <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">БИК</label>
                        <input type="number" value="000000000" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                        <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                            <img src="~/assets/images/edit-icon.svg" alt="">
                        </button>
                    </div>
                    <div class="flex flex-wrap items-stretch w-full">
                        <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">К/счет</label>
                        <input type="number" value="0000000000" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                        <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                            <img src="~/assets/images/edit-icon.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="flex flex-wrap items-stretch">
                    <label for="" class="w-full md:w-[200px] mb-[10px] md:mb-0 flex items-center md:px-5 text-base leading-[22px] text-color-4 md:border-r md:border-r-color-4 border-solid md:rounded-[5px_0_0_5px] md:bg-white">Р/счет</label>
                    <input type="number" value="000000000000000000" class="py-2 md:py-[15px] px-3 md:px-5 w-[calc(100%_-_36px)] md:w-[calc(100%_-_260px)] outline-none text-sm md:text-base leading-[19px] md:leading-[22px] text-black">
                    <button class="w-9 md:w-[60px] flex items-center justify-center bg-white border-l border-color-4 border-solid rounded-[0_5px_5px_0]">
                        <img src="~/assets/images/edit-icon.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>