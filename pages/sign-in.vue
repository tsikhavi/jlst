<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { z } from 'zod';

const strapi = useStrapi();
const router = useRouter();
const formErrors = ref<Record<string, string>>({});

definePageMeta({
  layout: 'auth',
});

interface SignInForm {
  email: string;
  password: string;
}

const signInSchema = z.object({
  email: z.string().email("Неверный формат email"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
});

const formData = ref<SignInForm>({
  email: '',
  password: '',
});

const onSubmit = async () => {
  try {
    // Validate form data
    signInSchema.parse(formData.value);

    // Send login request to custom Strapi login API
    const response = await fetch('http://localhost:1337/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: formData.value.email,
        password: formData.value.password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
      router.push('/account');
    } else {
      formErrors.value.general = data.message || 'Login failed';
      alert(`Error: ${formErrors.value.general}`);
    }
  } catch (e: unknown) {
    if (e instanceof z.ZodError) {
      formErrors.value = e.errors.reduce((acc, err) => {
        if (err.path[0]) {
          acc[err.path[0] as string] = err.message;
        }
        return acc;
      }, {} as Record<string, string>);
    } else {
      console.error(e);
      alert(`Unexpected Error: ${e}`);
    }
  }
};
</script>

<template>
    <div class="w-full">
      <h2 class="text-center text-4xl md:text-5xl md:leading-[55px] mb-6">Авторизация</h2>
      <div class="flex flex-col gap-3">
        <!-- Email Input -->
        <input v-model="formData.email" type="email" placeholder="Email" class="form-inp">
        <p v-if="formErrors.email" class="text-red-500">{{ formErrors.email }}</p>
  
        <!-- Password Input -->
        <input v-model="formData.password" type="password" placeholder="Пароль" class="form-inp">
        <p v-if="formErrors.password" class="text-red-500">{{ formErrors.password }}</p>
      </div>
      
      <!-- Submit Button -->
      <div class="flex items-center justify-center">
        <Btn @click="onSubmit" class="w-[251px] h-[49px]">Войти в личный кабинет</Btn>
      </div>
    </div>
  </template>