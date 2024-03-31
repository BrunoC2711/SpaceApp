import { styled } from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"
import { useState } from "react"

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
    padding-right: 12px;
`

const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ aoFotoSelecionada , fotos = [] }) => {

    const [itensFiltrados, setItensFiltrados] = useState(fotos);

    return (
        <>
            <Tags itens={fotos} setItensFiltrados={setItensFiltrados} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {itensFiltrados.map(foto => <Imagem 
                            aoZoomSolicitado={aoFotoSelecionada}
                            key={foto.id} 
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria