<script>
export default {
    props: {
        btnClass: {
            type: String,
            default: '',
        },
        defaultCount: {
            type: Number,
            default: 1,
        }
    },
    data () {
        return {
            count: this.defaultCount,
        }
    }
}
</script>

<template>
    <div class="flex items-stretch border border-color-4 border-solid rounded-[3px] overflow-hidden">
        <button
            class="flex items-center justify-center text-[45px] text-black flex-shrink-0 border-r border-r-color-4 rounded-[3px]"
            :class="btnClass"
            @click="count != 1 ? count-- : count = count"
        >-</button>
        <p class="w-full flex items-center justify-center text-xl leading-8 text-black">{{count}}</p>
        <button
            class="flex items-center justify-center text-[32px] text-black flex-shrink-0 border-l border-l-color-4 rounded-[3px]"
            :class="btnClass"
            @click="count++"
        >+</button>
    </div>
</template>