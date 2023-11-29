<script setup>
   import  { FormKit }  from "@formkit/vue"
   import { useRouter } from "vue-router";
   import ClienteService from "../services/ClienteService";
   import RouterLink from '../components/UI/RouterLink.vue';
   import Heading from '../components/UI/Heading.vue';
   
   const router = useRouter();

   defineProps({
      titulo: {
         type: String
      }
   })

   const handleSubmit = (data) => {
      data.estado = 1
      ClienteService.agregarCliente(data)
         .then(({ respuesta }) => {
            router.push({ name: 'listado-clientes' })
            console.log(respuesta)
         })
         .catch(error => console.log(error))
   }

</script>

<template>
   <div>
      <div class="flex justify-end">
         <RouterLink to="listado-clientes">
            Volver
         </RouterLink>
      </div>

      <Heading>{{ titulo }}</Heading>

      <div class="mx-auto mt-10 bg-white shadow" >

         <div class="mx-auto md:w-2/3 py-20 px-6">
            <FormKit
               type="form"
               submit-label="Agregar Cliente"
               incomplete-message="No se pudo enviar el formulario, verifica los campos"
               @submit="handleSubmit"
            >
               <FormKit
                  type="text"
                  label="Nombre"
                  name="nombre"
                  placeholder="Nombre del cliente"
                  validation="required"
                  :validation-messages="{
                     required: 'El Nombre del Cliente es obligatorio'
                  }"
               />
               <FormKit
                  type="text"
                  label="Apellido"
                  name="apellido"
                  placeholder="Apellido del cliente"
                  validation="required"
                  :validation-messages="{
                     required: 'El Apellido del Cliente es obligatorio'
                  }"
               />
               <FormKit
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="Email del cliente"
                  validation="required|email"
                  :validation-messages="{
                     required: 'El Email del Cliente es obligatorio',
                     email: 'El Email debe ser válido'
                  }"
               />
               <FormKit
                  type="text"
                  label="Teléfono"
                  name="telefono"
                  placeholder="Teléfono: XXX-XXX-XXXX"
                  validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                  :validation-messages="{
                     matches: 'El formato debe ser válido'
                  }"
               />
               <FormKit
                  type="text"
                  label="Empresa"
                  name="empresa"
                  placeholder="Empresa del cliente"
               />
               <FormKit
                  type="text"
                  label="Puesto"
                  name="puesto"
                  placeholder="Puesto del cliente"
               />
                
            </FormKit>
         </div>

      </div>
   </div>
</template>

<style>
   .formkit-wrapper {
      max-width: 100%;
   }
</style>