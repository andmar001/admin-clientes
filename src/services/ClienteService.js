import api from '../lib/axios'

export default {
   obtenerClientes() {
      return api.get('/clientes')
   },
   obtenerCliente(id) {
      return api.get(`/clientes/${id}`)
   },
   agregarCliente(data) {
      return api.post('/clientes', data)
   },
   editarCliente(id, data) {
      return api.patch(`/clientes/${id}`, data)
   },
   cambiarEstadoCliente(id, data) {
      console.log(data)
      return api.patch('/clientes/' + id, data)
   }
}