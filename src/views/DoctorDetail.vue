<script setup lang="ts">
import DoctorDetailCard from '@/components/DoctorDetailCard.vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useDoctorsStore } from '@/stores/doctors'
import { onMounted, computed } from 'vue'

// utilities
const doctorsStore = useDoctorsStore()
const { doctors, loading, error } = storeToRefs(doctorsStore)

// props

// state || variables
const route = useRoute()
const doctorId = route.params.id as string

// computed
const doctor = computed(() => doctors.value.find((item) => item.id === doctorId))

// method

//onMount
onMounted(async () => {
  if (doctors.value.length === 0) await doctorsStore.fetchDoctors()
})
</script>

<template>
  <DoctorDetailCard :doctor="doctor" :loading="loading" :error="error" />
</template>
