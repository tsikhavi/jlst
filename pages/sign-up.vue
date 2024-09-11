<script setup lang="ts">
import { z } from 'zod';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface FormData {
  username: string;
  email: string;
  password: string;
  phoneNumber?: string;
  companyName?: string;
  inn?: string;
  isIndividual: boolean;
}

definePageMeta({
  layout: 'auth',
});

const strapi = useStrapi(); 
const router = useRouter();
const formErrors = ref<Record<string, string>>({}); 

const registerSchema = z.object({
  username: z.string().min(1, "Имя обязательно"),
  email: z.string().email("Неверный формат email"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
  phoneNumber: z.string()
    .optional()
    .refine((val) => !val || /^\d{10}$/.test(val), {
      message: "Номер телефона должен содержать 10 цифр",
    }),
  companyName: z.string().optional(),
  inn: z.string()
    .optional()
    .refine((val) => !val || /^\d{12}$/.test(val), {
      message: "ИНН должен содержать 12 цифр",
    }),
  isIndividual: z.boolean(), 
});

const formData = ref<FormData>({
  username: '',
  email: '',
  password: '',
  phoneNumber: '',
  companyName: '',
  inn: '',
  isIndividual: true, 
});

const onSubmit = async () => {
  console.log("Form Data on Submit:", formData.value);
  alert(`Form Data: ${JSON.stringify(formData.value)}`);

  try {
    registerSchema.parse(formData.value);
    console.log("Validation successful");

    const response = await fetch('http://localhost:1337/api/registrations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { 
          username: formData.value.username,
          email: formData.value.email,
          Password: formData.value.password,
          phoneNumber: formData.value.phoneNumber,
          companyName: formData.value.companyName,
          inn: formData.value.inn,
          isIndividual: formData.value.isIndividual, 
        }
      }),
    });

    const data = await response.json();
    console.log("Server Response:", data);
    alert(`Server Response: ${JSON.stringify(data)}`);

    if (response.ok) {
      alert("Registration successful!");
      router.push('/account');
    } else {
      formErrors.value.general = data.message || 'Registration failed';
      console.log("Error: ", formErrors.value.general);
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
      console.log("Validation Errors:", formErrors.value);
      alert(`Validation Errors: ${JSON.stringify(formErrors.value)}`);
    } else {
      console.error(e);
      alert(`Unexpected Error: ${e}`);
    }
  }
};

</script>



<template>
  <div class="w-full">
    <p class="text-base md:text-xl leading-[19px] md:leading-8 text-color-4 text-center">
      Для регистрации и полному доступу к сайту
    </p>
    <h2 class="text-center text-4xl md:text-5xl md:leading-[55px] mb-6">
      Заполните форму
    </h2>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <Checkbox
          text="Физическое лицо"
          :value="formData.isIndividual"
          @update:value="formData.isIndividual = true"
        />
        <Checkbox
          text="Юридическое лицо/ ИП"
          :value="!formData.isIndividual"
          @update:value="formData.isIndividual = false"
        />
      </div>
      <input v-model="formData.username" type="text" placeholder="Ваше имя*" class="form-inp">
      <p v-if="formErrors.username" class="text-red-500">{{ formErrors.username }}</p>

      <div class="flex flex-col md:flex-row items-center gap-3">
        <input v-model="formData.email" type="email" placeholder="Email *" class="form-inp">
        <p v-if="formErrors.email" class="text-red-500">{{ formErrors.email }}</p>

        <input v-model="formData.phoneNumber" type="tel" placeholder="Телефон +7" class="form-inp">
      </div>

      <input v-model="formData.companyName" type="text" placeholder="Ваша компания" class="form-inp">
      <input v-model="formData.inn" type="text" placeholder="ИНН" class="form-inp">
      <input v-model="formData.password" type="password" placeholder="Пароль*" class="form-inp">
      <p v-if="formErrors.password" class="text-red-500">{{ formErrors.password }}</p>
    </div>

    <p class="text-center text-color-4 text-xs md:text-sm leading-4 md:leading-[19px] my-3 md:my-6">
      Нажимая на кнопку “Отправить” даю согласие на обработку 
      <a href="#" class="inline underline">Персональных данных</a>
    </p>

    <div class="flex items-center justify-center">
      <Btn @click="onSubmit" class="w-[251px] h-[49px]">Зарегистрироваться</Btn>
    </div>
  </div>
</template>
