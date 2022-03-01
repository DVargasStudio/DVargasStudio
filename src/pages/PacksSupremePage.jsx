import "./packsPages.scss"

import Header from "../components/header/Header"

import ReactPlayer from "react-player";
import video from './../assets/videos/video3.mp4'

export default function PacksBasicPage() {
  return (
    <div class="PacksPages">
      <Header title="Nossos Pacotes"/>
      <h1>Pacote Supremo</h1>
      <div class="PacksPages-Content">
        <ReactPlayer url={video} playing={false} width="80%" height="80%" pip={true} controls={true} className="PacksPages-Video"/>

        <h2>Legenda</h2>

        <p>Se você gostou dessa ideia então já sabemos que deseja muito ter um negocio de sucesso no mundo digital, mas não sabe nem por onde começar ou talvez não tenha nem a habilidade para isso, mas não se preocupe, seus problemas acabaram! Com o pacote Supremo não só nós desenvolveremos o seu projeto, mas o ajudaremos a elabora-lo! Além de treinar você para geri-lo após o lançamento ainda atuando com o suporte de Marketing que você precisa! <br /><br /> A ideia desse pacote é transformar você num profissional de primeira linha e ligar todo o seu projeto com a habilidade necessária que você precisara para “tocar o barco” quando já estiver em andamento.<br /><br /> Ok, mas como funciona?<br /><br />Serão feitas a princípio as consultas necessárias para a analise adequada do nicho pretendido ao seu projeto, após a sua aprovação o desenvolvimento é iniciado paralelamente enquanto uma equipe de tutores lhe ensinarão o necessário para compreender e gerir tudo o que estará sendo feito, além de novamente após os 2 primeiros meses de projetos ainda estarem sendo acompanhados para a postura do Marketing que vai levar o seu sonho as estrelas! <br /><br />Gostou desse pacote? Entre em contato pelo botão abaixo, aguardo você daqui a pouco!</p>
        <a href="/DVargasStudio/#Contact"><h4 className="PacksPages-Button" >Contato</h4></a>
      </div>  
    </div>
  )
}
