import './App.css'
import { useState } from 'react'
import { Banner } from '@/componentes/Banner'
import { CardEvento } from '@/componentes/CardEvento'
import { Tema } from '@/componentes/Tema'
import { temas } from '@/temas'

function App() {
  const [eventos, setEventos] = useState([])

  function adicionarEvento(evento) {
    setEventos([...eventos, evento])
  }

  const temasComEventos = temas.filter(function(tema) {
    return eventos.some(function(evento) {
      return evento.tema.id === tema.id
    })
  })

  return (
    <main className="main">
      <header>
        <img src="/Logo.png" alt="" />
      </header>
      <Banner aoAdicionarEvento={adicionarEvento} />
      {temasComEventos.map(function(tema) {
        const eventosdoTema = eventos.filter(function(evento) {
          return evento.tema.id === tema.id
        })
        return (
          <section className="container" key={tema.id}>
            <div className="eventos">
              <Tema tema={tema} />
              <div className="cards">
                {eventosdoTema.map(function(evento, index) {
                  return <CardEvento evento={evento} key={index} />
                })}
              </div>
            </div>
          </section>
        )
      })}
    </main>
  )
}

export default App
