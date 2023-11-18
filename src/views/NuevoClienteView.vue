<script setup>
   import { RouterLink } from 'vue-router';

</script>

<template>
   <div>
      <RouterLink :to="{ name:'inicio'}">
         <button class="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
            Volver
         </button>
      </RouterLink>
   </div>
   <div>
      <h1 class="text-4xl font-extrabold text-slate-500">Agregar Cliente</h1>
   </div>
</template>

