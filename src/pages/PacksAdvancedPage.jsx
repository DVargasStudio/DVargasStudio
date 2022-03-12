import "./packsPages.scss"

import Header from "../components/header/Header"

import ReactPlayer from "react-player";
import { Helmet } from 'react-helmet-async'
import video from './../assets/videos/video2.mp4'

export default function PacksAdvancedPage({refHeader}) {
  return (
    <div className="PacksPages">
      <Helmet>
        <title>Pacote Avançado</title>
        <meta name="description" content="A gente sabe que as vezes ter o projeto pronto nem sempre é tudo o que deve ser feito para levar ele ao sucesso..."/>
        <link rel="canonical" href="/Pacote-Avancado" />
      </Helmet>

      <Header title="Nossos Pacotes" refHeader={refHeader}/>
      <h1>Pacote Avançado</h1>
      <div className="PacksPages-Content">
        <ReactPlayer url={video} playing={false} width="80%" height="80%" pip={true} controls={true} className="PacksPages-Video"/>

        <h2>Legenda</h2>

        <p>A gente sabe que as vezes ter o projeto pronto nem sempre é tudo o que deve ser feito para levar ele ao sucesso, uma parte muito importante de toda boa empreitada rumo as estrelas é o Marketing/Atendimento/Suporte ou melhor, toda a estratégia de Marketing e é por isso que a D’Vargas criou o pacote avançado onde não só criaremos o seu projeto como também lhe daremos o suporte posterior com assistência técnicas e escalabilidade. Você tem um sonho? Quer levar sua empresa até o ponto X? Nós vamos junto com vocês nessa caminhada! <br /><br />Ok, mas como funciona? <br /><br />Ao passo que todo o período de desenvolvimento é feito nossos especialistas montam o que vem a ser a estratégia de combate do seu projeto diante do mercado, traçando o que deverá ser feito com o produto em questão. O valor não é orçado junto com o projeto não se preocupe, apenas a consultoria mensal e mão de obra estão incluídas na acessória em especifico.  Durante 2 meses de analise nós estudaremos o ponto central do problema pelo qual seu projeto existe e veio resolver aumentando suas chances de sucesso em 12% a cada mês de analise. <br /><br /> Quer saber mais? Entre em contato pelo botão abaixo, até daqui a pouco, tchau tchau.</p>
        <a href="/#Contato"><h4 className="PacksPages-Button" >Contato</h4></a>
      </div>  
    </div>
  )
}
