<script setup>
   import  {FormKit}  from "@formkit/vue"
   import RouterLink from '../components/UI/RouterLink.vue';
   import Heading from '../components/UI/Heading.vue';
   
   defineProps({
      titulo: {
         type: String
      }
   })
</script>

<template>
   <div>
      <div class="flex justify-end">
         <RouterLink to="inicio">
            Volver
         </RouterLink>
      </div>

      <Heading>{{ titulo }}</Heading>

      <div class="mx-auto mt-10 bg-white shadow" >
         <Formkit
            type="form"
         >
            <FormKit
               type="text"
               label="Nombre"
               placeholder="Nombre del cliente"
               help="Escribe el nombre del cliente que deseas registrar"
               validation="required"
               :validation-messages="{
                  required: 'El nombre del Cliente es obligatorio'
               }"
            />
         </Formkit>
      </div>
   </div>
</template>

