import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import Banner from "./componentes/Banner"
import bannerBackground from "./assets/banner.png"
import Galeria from "./componentes/Galeria"

import { useState } from "react"

import fotos from './fotos.json'
import ModalZoom from "./componentes/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const App = () => {
  const [fotosGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <ConteudoGaleria>
            <Banner
              texto="O principio do futuro!"
              backgroundImage={bannerBackground}
            />
            <Galeria 
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              fotos={fotosGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
      />
    </FundoGradiente>
  )
}

export default App
