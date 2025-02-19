import "./App.css";
import Perfil from "./Components/Meio";
import Valores from "./Components/Lado";
import Titulo from "./Components/Header";
import Footer from "./Components/Footer";
import Imagem_1 from "./assets/Giovanna_Img.jpeg";
import Imagem_2 from "./assets/Duarte_Img.jpeg";
import Imagem_3 from "./assets/Julia_Img.jpeg";
import Imagem_4 from "./assets/Kamilly_Img.jpeg";
import Email from "./assets/Email_Img.jpeg";
import Insta from "./assets/Insta_Img.jpeg";
<<<<<<< HEAD
import Logo from "./assets/Logo_Img.jpg"
import Seguir from "./Components/Botao";
=======
import Logo from "./assets/Logo_Img.jpg";
>>>>>>> e8a3eaff9abe4bc3d2f4732a0b9153883ed87c1c

function App() {
  return (
    <>
      <Titulo titulo="DESAFIO - PROPS REACT" imagem={Logo} />

      <div className="Junt1">
        <div className="Lateral">
          <div className="Agrupar">
            <div className="Junt2">
              <Perfil
                user="Giovanna Ferreira"
                img={Imagem_1}
                texto="giovanna ☾
                      Ele tem um plano, e você um propósito.
                       Romanos 8:28 🇻🇦"
              />
              <Seguir/>
            </div> 
          </div>
          
          <div className="Agrupar">
            <div className="Junt2">
              <Perfil
                user="Maria Clara Duarte"
                img={Imagem_2}
                texto="Clara Duarte
                       Vinhedo | SP
                       Cristã ❤‍🔥
                       God is good all the time ✝️🤍
                       💍."
              />
              <Seguir/>
            </div>
          </div>

          <div className="Agrupar">
            <div className="Junt2">
              <Perfil
                user="Julia Piazzoli"
                img={Imagem_3}
<<<<<<< HEAD
                texto="Hobby: Academia, Pilates..."
              />
              <Seguir/>
=======
                texto="Julia Piazzoli
                       2007 | Valinhos, SP
<<<<<<< HEAD
                       👑 • 🍸 • 🪐"/>
>>>>>>> 848efdacb571b13becfbccd8451181f8bdf1b904
=======
                       👑 • 🍸 • 🪐"
              />
>>>>>>> e8a3eaff9abe4bc3d2f4732a0b9153883ed87c1c
            </div>
          </div>

          <div className="Agrupar">
            <div className="Junt2">
              <Perfil
                user="Kamilly Barra"
                img={Imagem_4}
                texto="kamilly barra
                       Romanos 8:26
                       Louveira | SP
                       "
              />
              <Seguir/>
            </div>
          </div>
        </div>

        <div className="Valores">
          <Valores
            Valor1="Compromisso: Dedicação e responsabilidade de cada integrante para o sucesso do grupo."
            Valor2="Responsabilidade: Cada membro assume as consequências de suas ações e contribui ativamente para o grupo."
            Valor3="Proatividade: Agir com iniciativa e buscar melhorias contínuas sem esperar ordens ou problemas surgirem."
            Valor4="Autonomia: A capacidade de agir de forma independente e tomar decisões próprias. Embora a autonomia seja importante para o crescimento individual, ela também precisa ser equilibrada com o respeito às normas do grupo."
            Valor5="Criatividade: A disposição para pensar fora da caixa e inovar. Grupos que valorizam a criatividade incentivam a diversidade de ideias e soluções originais, o que pode ser crucial para enfrentar desafios de maneira eficaz."
            Valor6="Disciplina: A habilidade de manter o foco, seguir regras e cumprir prazos. Grupos disciplinados são mais organizados e conseguem atingir suas metas de forma eficaz, mesmo diante de desafios."
            Valor7="Resiliência: A capacidade de se recuperar e aprender com adversidades. Grupos resilientes são capazes de enfrentar desafios e obstáculos com coragem e perseverança, mantendo a motivação para seguir em frente."
          />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="Footer">
        <Footer
          logo={Email}
          email="giovanna.ferreira31@senaisp.edu.br"
          icone={Insta}
          insta="@giihdot"
          texto=" A confecção e desenvolvimento do site foi realizada por todas as integrantes do grupo!"
        />
      </div>
    </>
  );
}

export default App;
