import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [procesos, setProcesos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use a relative URL so the browser requests the same origin
        // Vite dev server will proxy `/api` to the backend (configured in vite.config.js)
        const res = await axios.get('/api/procesos')
        setProcesos(res.data)
      } catch (err) {
        console.error('Error fetching procesos', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      <h1>Proceso logístico de compra y comercialización externa del camarón (MARANSA S.A.S.)</h1>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Actor</th>
              <th>Actividad</th>
              <th>Descripción</th>
              <th>Evidencia / comunicación</th>
            </tr>
          </thead>
          <tbody>
            {procesos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.actor}</td>
                <td>{p.actividad}</td>
                <td>{p.descripcion}</td>
                <td>{p.evidencia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
