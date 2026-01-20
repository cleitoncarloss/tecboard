import './banner.estilos.css'
import Form from "@/componentes/Form"
import { temas } from "@/temas.js"

export function Banner({ aoAdicionarEvento }) {
  return (
    <section className='banner'>
      <img src="/banner.png" alt="" />
      <Form temas={temas} aoSubmeter={aoAdicionarEvento} />
    </section>
  )
}
