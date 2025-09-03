import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Doctor } from '@/types/doctor'

export const useDoctorsStore = defineStore('doctors', () => {
  const doctors = ref<Doctor[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  async function fetchDoctors() {
    loading.value = true
    error.value = null

    try {
      const res = await fetch('/api/doctors', {
        headers: {
          Authorization: 'Bearer dGhpcyBpcyBzdXBlciBzYWZlLiBqdXN0IHRydXN0IG1lLiBoZWhl',
        },
      })

      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          throw new Error('Authentication failed. Please check your credentials.')
        }
        throw new Error(`Error ${res.status}: ${res.statusText}`)
      }

      doctors.value = await res.json()
    } catch (err: any) {
      error.value = err.message || 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  return { doctors, loading, error, fetchDoctors }
})
