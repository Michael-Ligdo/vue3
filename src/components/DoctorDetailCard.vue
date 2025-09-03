<script setup lang="ts">
import { dateFormatter } from '@/utils/dateFormatter'
import { useRouter } from 'vue-router'

// utilities

// props
const props = defineProps<{
  doctor: any | undefined
  loading: boolean
  error: string | null
}>()

// state || variables
const router = useRouter()

// computed

// method
const goBack = () => router.back()

//onMount
</script>

<template>
  <div class="p-6">
    <div class="flex items-center mb-10">
      <button
        class="mr-5 textarea-lg font-medium text-[#AE8EFF] hover:underline underline-offset-4 cursor-pointer"
        @click="goBack"
      >
        ← Back
      </button>
      <h1 class="text-2xl font-bold">Doctor Details</h1>
    </div>

    <p v-if="loading" class="text-center text-gray-500">Loading doctor details...</p>
    <p v-else-if="error" class="text-center text-error">{{ error }}</p>

    <div v-else-if="doctor" class="card w-full max-w-md bg-base-100 shadow-md p-6">
      <div class="card-body">
        <h2 class="card-title text-xl mb-4">Dr. {{ doctor.firstName }} {{ doctor.lastName }}</h2>
        <p><strong>State:</strong> {{ doctor.state }}</p>
        <p><strong>Date Of Birth:</strong> {{ dateFormatter(doctor.dob) }}</p>
        <p><strong>Signed Up:</strong> {{ dateFormatter(doctor.signedUpDate) }}</p>
      </div>
    </div>

    <p v-else class="text-error">Doctor not found.</p>
  </div>
</template>
