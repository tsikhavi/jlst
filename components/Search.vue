<script>
export default {

}
</script>

<template>
    <section class="bg-[linear-gradient(157.72deg,_rgb(142,142,142)_37.635%,_rgb(40,40,40)_74.223%,_rgb(80,80,80)_85.673%)] lg:bg-none">
        <div class="container flex gap-[10px] xl:gap-[60px] flex-col xl:flex-row items-center py-[15px] lg:py-[15px] lg:px-12 lg:bg-[linear-gradient(157.72deg,_rgb(142,142,142)_37.635%,_rgb(40,40,40)_74.223%,_rgb(80,80,80)_85.673%)] rounded-[3px]">
            <h2 class="text-white text-lg lg:text-4xl leading-[115%] lg:leading-10 tracking-[-0.3px] flex-shrink-0 uppercase lg:normal-case font-semibold lg:font-normal">Поиск запчастей по номеру</h2>
            <div class="w-full bg-white flex items-stretch rounded-[5px] overflow-hidden h-10 lg:h-[43px]">
                <select name="" id="" class="border-r border-color-4 border-solid text-xs lg:text-sm text-black w-[138px] lg:w-[158px] flex-shrink-0 outline-none px-[15px] lg:px-5 rounded-none form-select">
                    <option value="" selected hidden>Новая запчасть</option>
                    <option value="" v-for="i in 5" :key="i">select {{ i }}</option>
                </select>
                <input type="text" placeholder="Номер запчасти" class="w-full outline-none text-black px-[15px] lg:px-5 text-xs lg:text-sm leading-4 lg:leading-[135%]">
                <Btn class="flex-shrink-0 w-10 lg:w-[147px] rounded-none lg:rounded-[5px_0_0_5px] border-l border-l-color-4 border-solid lg:border-l-0 bg-white lg:bg-color-2">
                    <span class="hidden lg:block">Найти</span>
                    <svg class="lg:hidden" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 13.0309C3.18629 13.0309 0.5 10.3261 0.5 6.98958C0.5 3.65304 3.18629 0.948242 6.5 0.948242C9.81371 0.948242 12.5 3.65304 12.5 6.98958C12.5 8.38566 12.0297 9.67113 11.2399 10.6941L15.2804 14.7624L14.2197 15.8304L10.1793 11.7621C9.16324 12.5574 7.88655 13.0309 6.5 13.0309ZM11 6.98959C11 9.49199 8.98528 11.5206 6.5 11.5206C4.01472 11.5206 2 9.49199 2 6.98959C2 4.48718 4.01472 2.45858 6.5 2.45858C8.98528 2.45858 11 4.48718 11 6.98959Z" fill="black"/>
                    </svg>
                </Btn>
            </div>
        </div>
    </section>
</template>

<style>

</style>