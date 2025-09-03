<script setup lang="ts">
// imports
import type { Doctor } from "@/types/doctor"
import { useRouter } from "vue-router"

// utilities


// state || variables
const router = useRouter()

// props
const props = defineProps<{
  doctors: Doctor[]
}>()

// computed

// methods
const goToDetails = (doctor: Doctor) =>  router.push(`/doctors/${doctor.id}`)

//onMount

</script>

<template>
  <ul class="list bg-base-100 rounded-box shadow-md">
    <li class="p-4 pb-2 text-2xl tracking-wide">
      Available Doctors
    </li>

    <li
      v-for="doctor in props.doctors"
      :key="doctor.id"
      class="list-row flex items-center justify-between px-4 py-2"
    >
      <div>
        <div class="font-medium">
          Dr. {{ doctor.firstName }} {{ doctor.lastName }}
        </div>
        <div class="text-xs uppercase font-semibold opacity-60">
          {{ doctor.state }}
        </div>
      </div>
      
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-sm btn-ghost m-1">
          ⋮
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
        >
          <li>
            <a @click="goToDetails(doctor)">Details</a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
