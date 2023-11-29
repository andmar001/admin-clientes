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
}