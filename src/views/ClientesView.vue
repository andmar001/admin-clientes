<script setup>
   import { RouterLink } from 'vue-router';
</script>

<template>
   <div>
      <div>
         <RouterLink :to="{ name:'agregar-cliente'}">
            <button class="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
               Agregar Cliente
            </button>
         </RouterLink>
      </div>
      <h1 class="text-4xl font-extrabold text-slate-500">Clientes</h1>
   </div>
</template>

