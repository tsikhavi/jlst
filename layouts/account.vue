<script>
export default {
    data () {
        return {
            breadcrumb: [
                {title: 'Главная', to: '/'},
                {title: 'Личный кабинет', to: '#'},
            ],
            navLink: ['account', 'account-order', 'account-settings'],
        }
    },
    methods: {
        toPrev () {
            let idx = this.navLink.indexOf(this.$nuxt._route.name);
            if (idx == 0) {
                this.$router.push({name: this.navLink[this.navLink.length - 1]});
            } else {
                this.$router.push({name: this.navLink[idx - 1]});
            }
        },
        toNext () {
            let idx = this.navLink.indexOf(this.$nuxt._route.name);
            if (idx == this.navLink.length - 1) {
                this.$router.push({name: this.navLink[0]});
            } else {
                this.$router.push({name: this.navLink[idx + 1]});
            }
        }
    }
}
</script>

<template>
    <div class="pb-[30px] lg:pb-[65px]" >
        <Search />
        <Breadcrumb :navs="breadcrumb" />

        <div class="container">
            <div class="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-[10px] mb-[30px]">
                <h2 class="text-4xl md:text-5xl md:leading-[55px]">Личный кабинет</h2>
                <div class="flex xl:hidden justify-between w-full md:w-[380px] border-[2px] border-[#EDEFF2] border-solid py-3 px-6 rounded-[3px]">
                    <button @click="toPrev()">
                        <img src="~/assets/images/left-icon.svg" alt="">
                    </button>
                    <div>
                        <NuxtLink v-if="$nuxt._route.name == 'account'" to="/account" class="flex items-center gap-[20px]">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.125 8.28613C12.125 6.21507 13.8039 4.53613 15.875 4.53613C17.9461 4.53613 19.625 6.21507 19.625 8.28613C19.625 10.3572 17.9461 12.0361 15.875 12.0361C13.8039 12.0361 12.125 10.3572 12.125 8.28613ZM15.875 2.03613C12.4232 2.03613 9.625 4.83435 9.625 8.28613C9.625 11.7379 12.4232 14.5361 15.875 14.5361C19.3268 14.5361 22.125 11.7379 22.125 8.28613C22.125 4.83435 19.3268 2.03613 15.875 2.03613ZM12.125 17.0361C8.67322 17.0361 5.875 19.8344 5.875 23.2861V27.0361C5.875 27.7265 6.43464 28.2861 7.125 28.2861C7.81536 28.2861 8.375 27.7265 8.375 27.0361V23.2861C8.375 21.2151 10.0539 19.5361 12.125 19.5361H19.625C21.6961 19.5361 23.375 21.2151 23.375 23.2861V27.0361C23.375 27.7265 23.9346 28.2861 24.625 28.2861C25.3154 28.2861 25.875 27.7265 25.875 27.0361V23.2861C25.875 19.8344 23.0768 17.0361 19.625 17.0361H12.125Z" :fill="$nuxt._route.name == 'account' ? '#FFD200' : '#757575'"/>
                            </svg>
                            <span class="text-xl leading-8 tracking-[-0.2px]">Личные данные</span>
                        </NuxtLink>
                        <NuxtLink v-if="$nuxt._route.name == 'account-order'" to="/account/order" class="flex items-center gap-[20px]">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.875 7.97363C10.3625 7.97363 9.9375 7.54863 9.9375 7.03613V3.28613C9.9375 2.77363 10.3625 2.34863 10.875 2.34863C11.3875 2.34863 11.8125 2.77363 11.8125 3.28613V7.03613C11.8125 7.54863 11.3875 7.97363 10.875 7.97363Z" :fill="$nuxt._route.name == 'account-order' ? '#FFD200' : '#757575'"/>
                                <path d="M20.875 7.97363C20.3625 7.97363 19.9375 7.54863 19.9375 7.03613V3.28613C19.9375 2.77363 20.3625 2.34863 20.875 2.34863C21.3875 2.34863 21.8125 2.77363 21.8125 3.28613V7.03613C21.8125 7.54863 21.3875 7.97363 20.875 7.97363Z" :fill="$nuxt._route.name == 'account-order' ? '#FFD200' : '#757575'"/>
                                <path d="M20.875 29.2236H10.875C6.3125 29.2236 3.6875 26.5986 3.6875 22.0361V11.4111C3.6875 6.84863 6.3125 4.22363 10.875 4.22363H20.875C25.4375 4.22363 28.0625 6.84863 28.0625 11.4111V22.0361C28.0625 26.5986 25.4375 29.2236 20.875 29.2236ZM10.875 6.09863C7.3 6.09863 5.5625 7.83613 5.5625 11.4111V22.0361C5.5625 25.6111 7.3 27.3486 10.875 27.3486H20.875C24.45 27.3486 26.1875 25.6111 26.1875 22.0361V11.4111C26.1875 7.83613 24.45 6.09863 20.875 6.09863H10.875Z" :fill="$nuxt._route.name == 'account-order' ? '#FFD200' : '#757575'"/>
                                <path d="M20.875 15.4736H10.875C10.3625 15.4736 9.9375 15.0486 9.9375 14.5361C9.9375 14.0236 10.3625 13.5986 10.875 13.5986H20.875C21.3875 13.5986 21.8125 14.0236 21.8125 14.5361C21.8125 15.0486 21.3875 15.4736 20.875 15.4736Z" :fill="$nuxt._route.name == 'account-order' ? '#FFD200' : '#757575'"/>
                                <path d="M15.875 21.7236H10.875C10.3625 21.7236 9.9375 21.2986 9.9375 20.7861C9.9375 20.2736 10.3625 19.8486 10.875 19.8486H15.875C16.3875 19.8486 16.8125 20.2736 16.8125 20.7861C16.8125 21.2986 16.3875 21.7236 15.875 21.7236Z" :fill="$nuxt._route.name == 'account-order' ? '#FFD200' : '#757575'"/>
                            </svg>
                            <span class="text-xl leading-8 tracking-[-0.2px]">Заказы</span>
                        </NuxtLink>
                        <NuxtLink v-if="$nuxt._route.name == 'account-settings'" to="/account/settings" class="flex items-center gap-[20px]">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8752 29.2269C15.0377 29.2269 14.1877 29.0144 13.4377 28.5769L6.01267 24.2894C4.51267 23.4144 3.5752 21.8019 3.5752 20.0644V11.5145C3.5752 9.77695 4.51267 8.16444 6.01267 7.28944L13.4377 3.00195C14.9377 2.12695 16.8002 2.12695 18.3127 3.00195L25.7377 7.28944C27.2377 8.16444 28.1752 9.77695 28.1752 11.5145V20.0644C28.1752 21.8019 27.2377 23.4144 25.7377 24.2894L18.3127 28.5769C17.5627 29.0144 16.7127 29.2269 15.8752 29.2269ZM15.8752 4.22693C15.3627 4.22693 14.8377 4.36444 14.3752 4.62694L6.95017 8.91443C6.02517 9.45193 5.4502 10.4395 5.4502 11.5145V20.0644C5.4502 21.1269 6.02517 22.1269 6.95017 22.6644L14.3752 26.9519C15.3002 27.4894 16.4502 27.4894 17.3752 26.9519L24.8002 22.6644C25.7252 22.1269 26.3002 21.1394 26.3002 20.0644V11.5145C26.3002 10.452 25.7252 9.45193 24.8002 8.91443L17.3752 4.62694C16.9127 4.36444 16.3877 4.22693 15.8752 4.22693Z" :fill="$nuxt._route.name == 'account-settings' ? '#FFD200' : '#757575'"/>
                                <circle cx="4.4375" cy="4.4375" r="3.6875" transform="matrix(-1 0 0 1 20.3125 11.3486)" :stroke="$nuxt._route.name == 'account-settings' ? '#FFD200' : '#757575'" stroke-width="1.5"/>
                            </svg>
                            <span class="text-xl leading-8 tracking-[-0.2px]">Настройки</span>
                        </NuxtLink>
                    </div>
                    <button @click="toNext()">
                        <img src="~/assets/images/right-icon.svg" alt="">
                    </button>
                </div>
                <div class="bg-color-2 w-full md:w-auto flex justify-center items-center gap-[15px] md:px-[30px] py-2 rounded-[5px]">
                    <img src="~/assets/images/catalog-icon.svg" alt="">
                    <h3 class="text-lg md:text-2xl font-semibold tracking-[-0.2px]">Каталог автозапчастей</h3>
                </div>
            </div>
            <div class="flex items-start gap-6">
                <div class="w-[300px] 2xl:w-[360px] flex-shrink-0 hidden xl:flex flex-col gap-[20px] py-[42px] px-6 border-[2px] border-[#EDEFF2] border-solid rounded-[3px]">
                    <NuxtLink to="/account" class="flex items-center justify-between">
                        <span class="flex items-center gap-[20px]">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.125 8.28613C12.125 6.21507 13.8039 4.53613 15.875 4.53613C17.9461 4.53613 19.625 6.21507 19.625 8.28613C19.625 10.3572 17.9461 12.0361 15.875 12.0361C13.8039 12.0361 12.125 10.3572 12.125 8.28613ZM15.875 2.03613C12.4232 2.03613 9.625 4.83435 9.625 8.28613C9.625 11.7379 12.4232 14.5361 15.875 14.5361C19.3268 14.5361 22.125 11.7379 22.125 8.28613C22.125 4.83435 19.3268 2.03613 15.875 2.03613ZM12.125 17.0361C8.67322 17.0361 5.875 19.8344 5.875 23.2861V27.0361C5.875 27.7265 6.43464 28.2861 7.125 28.2861C7.81536 28.2861 8.375 27.7265 8.375 27.0361V23.2861C8.375 21.2151 10.0539 19.5361 12.125 19.5361H19.625C21.6961 19.5361 23.375 21.2151 23.375 23.2861V27.0361C23.375 27.7265 23.9346 28.2861 24.625 28.2861C25.3154 28.2861 25.875 27.7265 25.875 27.0361V23.2861C25.875 19.8344 23.0768 17.0361 19.625 17.0361H12.125Z" :fill="$nuxt._route.name == 'account' ? '#FFD200' : '#757575'"/>
                            </svg>
                            <span class="text-xl leading-8 tracking-[-0.2px]">Личные данные</span>
                        </span>
                        <img src="~/assets/images/arrow-right.svg" :class="$nuxt._route.name == 'account' ? 'block' : 'hidden'" alt="">
                    </NuxtLink>
                    <NuxtLink to="/account/order" class="flex items-center justify-between">
                        <span class="flex items-center gap-[20px]">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.875 7.97363C10.3625 7.97363 9.9375 7.54863 9.9375 7.03613V3.28613C9.9375 2.77363 10.3625 2.34863 10.875 2.34863C11.3875 2.34863 11.8125 2.77363 11.8125 3.28613V7.03613C11.8125 7.54863 11.3875 7.97363 10.875 7.97363Z" :fill="$nuxt._route.name == 'account-order' ? '#FFD200' : '#757575'"/>
                                <path d="M20.875 7.97363C20.3625 7.97363 19.9375 7.54863 19.9375 7.03613V3.28613C19.9375 2.77363 20.3625 2.34863 20.875 2.34863C21.3875 2.34863 21.8125 2.77363 21.8125 3.28613V7.03613C21.8125 7.54863 21.3875 7.97363 20.875 7.97363Z" :fill="$nuxt._route.name == 'account-order' ? '#FFD200' : '#757575'"/>
                                <path d="M20.875 29.2236H10.875C6.3125 29.2236 3.6875 26.5986 3.6875 22.0361V11.4111C3.6875 6.84863 6.3125 4.22363 10.875 4.22363H20.875C25.4375 4.22363 28.0625 6.84863 28.0625 11.4111V22.0361C28.0625 26.5986 25.4375 29.2236 20.875 29.2236ZM10.875 6.09863C7.3 6.09863 5.5625 7.83613 5.5625 11.4111V22.0361C5.5625 25.6111 7.3 27.3486 10.875 27.3486H20.875C24.45 27.3486 26.1875 25.6111 26.1875 22.0361V11.4111C26.1875 7.83613 24.45 6.09863 20.875 6.09863H10.875Z" :fill="$nuxt._route.name == 'account-order' ? '#FFD200' : '#757575'"/>
                                <path d="M20.875 15.4736H10.875C10.3625 15.4736 9.9375 15.0486 9.9375 14.5361C9.9375 14.0236 10.3625 13.5986 10.875 13.5986H20.875C21.3875 13.5986 21.8125 14.0236 21.8125 14.5361C21.8125 15.0486 21.3875 15.4736 20.875 15.4736Z" :fill="$nuxt._route.name == 'account-order' ? '#FFD200' : '#757575'"/>
                                <path d="M15.875 21.7236H10.875C10.3625 21.7236 9.9375 21.2986 9.9375 20.7861C9.9375 20.2736 10.3625 19.8486 10.875 19.8486H15.875C16.3875 19.8486 16.8125 20.2736 16.8125 20.7861C16.8125 21.2986 16.3875 21.7236 15.875 21.7236Z" :fill="$nuxt._route.name == 'account-order' ? '#FFD200' : '#757575'"/>
                            </svg>
                            <span class="text-xl leading-8 tracking-[-0.2px]">Заказы</span>
                        </span>
                        <img src="~/assets/images/arrow-right.svg" :class="$nuxt._route.name == 'account-order' ? 'block' : 'hidden'" alt="">
                    </NuxtLink>
                    <NuxtLink to="/account/settings" class="flex items-center justify-between">
                        <span class="flex items-center gap-[20px]">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8752 29.2269C15.0377 29.2269 14.1877 29.0144 13.4377 28.5769L6.01267 24.2894C4.51267 23.4144 3.5752 21.8019 3.5752 20.0644V11.5145C3.5752 9.77695 4.51267 8.16444 6.01267 7.28944L13.4377 3.00195C14.9377 2.12695 16.8002 2.12695 18.3127 3.00195L25.7377 7.28944C27.2377 8.16444 28.1752 9.77695 28.1752 11.5145V20.0644C28.1752 21.8019 27.2377 23.4144 25.7377 24.2894L18.3127 28.5769C17.5627 29.0144 16.7127 29.2269 15.8752 29.2269ZM15.8752 4.22693C15.3627 4.22693 14.8377 4.36444 14.3752 4.62694L6.95017 8.91443C6.02517 9.45193 5.4502 10.4395 5.4502 11.5145V20.0644C5.4502 21.1269 6.02517 22.1269 6.95017 22.6644L14.3752 26.9519C15.3002 27.4894 16.4502 27.4894 17.3752 26.9519L24.8002 22.6644C25.7252 22.1269 26.3002 21.1394 26.3002 20.0644V11.5145C26.3002 10.452 25.7252 9.45193 24.8002 8.91443L17.3752 4.62694C16.9127 4.36444 16.3877 4.22693 15.8752 4.22693Z" :fill="$nuxt._route.name == 'account-settings' ? '#FFD200' : '#757575'"/>
                                <circle cx="4.4375" cy="4.4375" r="3.6875" transform="matrix(-1 0 0 1 20.3125 11.3486)" :stroke="$nuxt._route.name == 'account-settings' ? '#FFD200' : '#757575'" stroke-width="1.5"/>
                            </svg>
                            <span class="text-xl leading-8 tracking-[-0.2px]">Настройки</span>
                        </span>
                        <img src="~/assets/images/arrow-right.svg" alt="" :class="$nuxt._route.name == 'account-settings' ? 'block' : 'hidden'">
                    </NuxtLink>
                </div>
                <div class="bg-color-6 rounded-[3px] p-[15px] lg:p-[30px] 2xl:p-[42px] min-w-[calc(100%_+_34px)] lg:min-w-full xl:min-w-[calc(100%_-_324px)] 2xl:min-w-[calc(100%_-_384px)] ml-[-17px] lg:ml-0">
                    <slot />
                </div>
            </div>
        </div>
        
    </div>
</template>
