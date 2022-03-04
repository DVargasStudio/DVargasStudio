import './contact.scss';

export default function Contact() {
  return (
    <div id="Contato">
      <h1>Contato</h1>
      <div className="Contact-Content">
        <div className="Contact-Form">
          
           <form method="POST" action="https://formsubmit.co/62b22d0528a45d94eef6d32f3bba2378">
             <div className="Contact-Form-Session">
                <div className="Contact-Form-Obj">
                  <label>Nome:</label>
                  <input type="text" name="Nome" required/>
                </div>
                <div className="Contact-Form-Obj">
                  <label>Telefone:</label>
                  <input type="tel" name="Telefone"  pattern="[0-9+.#- ]+$" required/>
                </div>
             </div>

             <div className="Contact-Form-Session">
                <div className="Contact-Form-Obj">
                  <label>Email:</label>
                  <input type="email" name="Email" required/>
                </div>
              </div>

             <div className="Contact-Form-Session">
                <div className="Contact-Form-Obj">
                  <label>Mensagem:</label>
                  <textarea name="Mensagem" cols="2" rows="6"></textarea>
                </div>
              </div>

              <div className="Contact-Form-Session">
                <div className="Contact-Form-Obj">
                  <input type="text" name="_honey" className="Contact-Honey"/>
                  <input type="hidden" name="_subject" value="D'Vargas - Nova Mensagem de seu site"/>
                  <input type="hidden" name="_captcha" value="false"/>
                  <input type="hidden" name="_next" value="http://grramp.github.io/DVargasStudio/#Contact"/>
                  <input type="hidden" name="_template" value="box"/>
                  <button type="submit">Enviar</button>
                </div>
              </div>

           </form>
           
        </div>
        <div className="Contact-Info">
          <h3>Rio de Janeiro</h3>
          <p>R. Agostinho de Souza Amaral, 514<br/>Madruga, Vassouras - RJ, 27700-000</p>
          <p>Telefone: (24) 99248-2724</p>
          </div>
      </div>
    </div>
  )
}
