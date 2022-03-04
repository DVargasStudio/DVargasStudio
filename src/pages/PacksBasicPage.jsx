import "./packsPages.scss"

import Header from "../components/header/Header"

import ReactPlayer from "react-player";
import video from './../assets/videos/video1.mp4'

export default function PacksBasicPage() {
  return (
    <div class="PacksPages">
      <Header title="Nossos Pacotes"/>
      <h1>Pacote Básico</h1>
      <div class="PacksPages-Content">
        <ReactPlayer url={video} playing={false} width="80%" height="80%" pip={true} controls={true} className="PacksPages-Video"/>

        <h2>Legenda</h2>

        <p>Este é o pacote básico de desenvolvimento de projetos, me acompanhe nessa resenha para saber se é tão completo como a gente fala mesmo.<br/><br /> Contratando o pacote básico de desenvolvimento de projetos sua ideia sai do papel exatamente como deseja, dês da parte arquitetônica até os toques finais do layout a DVargas acompanha e produz passo a passo segundo a sua aprovação e consultoria o objetivo desta empreitada é 100% do projeto entregue e funcional na sua mão pronto para uso e monetização. <br /><br /> Ok, mas que tipo de projetos podem ser desenvolvidos? <br /><br /> Nós trabalhamos com produção digital isso inclui: Desenvolvimento dos mais variados tipos de softwares Desktop, VSL para o anuncio da sua empresa já em funcionamento, SPA ( Single Page Aplications), Identidade Visual da sua marca ou projeto em particular, Games de todas as plataformas incluindo os Famosos NFTs, Animações tanto para comerciais como Curta e Longa metragem, além da possibilidade de nós encaixarmos a sua demanda! <br /><br /> Não entendeu o modelo de negócio? É simples, acompanha o raciocínio... <br /><br />Nós trabalhamos com delegação de porcentagem da equipe para cada projeto em especifico o que quer dizer que dependendo do tamanho do seu projeto podemos utilizar dês de 30% a 100% da equipe exclusivamente para você. A capacidade de flexibilidade da empresa se molda de acordo com o desejo do cliente quanto maior for o seu sonho mais podemos lhe atender! Entre em contato pelo botão a baixo!</p>
        <a href="/#Contact"><h4 className="PacksPages-Button" >Contato</h4></a>
      </div>  
    </div>
  )
}
