<script setup lang="ts">
import DoctorsList from '@/components/DoctorsList.vue'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDoctorsStore } from '@/stores/doctors'

// utilities
const doctorsStore = useDoctorsStore()
const { doctors, loading, error } = storeToRefs(doctorsStore)

// props

// state || variables

// computed

// method

//onMount
onMounted(() => {
  doctorsStore.fetchDoctors()
})
</script>

<template>
  <main class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 px-3 py-3">
    <p v-if="loading" class="col-span-full text-center">Loading doctors lists...</p>

    <p v-else-if="error" class="col-span-full text-center text-error">{{ error }}</p>

    <DoctorsList v-else class="col-span-1 sm:col-span-2 lg:col-span-6" :doctors="doctors" />
  </main>
</template>
