<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: ""
        }
    },
    data () {
        return {
            v: this.value
        }
    }
}
</script>

<template>
    <button class="flex items-center gap-3 text-left" @click="v = !v">
        <span class="w-6 h-6 rounded-[3px] flex-shrink-0" :class="v ? 'bg-color-2' : 'bg-white'"></span>
        <span v-if="text.length" class="text-color-4 text-sm lg:text-base leading-[19px] lg:leading-6 font-normal lg:font-semibold">{{text}}</span>
    </button>
</template>