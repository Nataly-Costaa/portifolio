import * as S from "./contact_style";

export default function Contact() {
  return (
    <S.Contact id="contact">
        <h1 className="title-contact">Contact</h1>


        <div className="forms">
            <form>
                <label htmlFor="name">
                    Name:<input type="text" id="name" name="name" placeholder="Digite seu nome..."/>
                </label>
                <label htmlFor="email">
                    E-mail:<input type="email" id="email" name="email" placeholder="Digite seu e-mail..."/>
                </label>

                <label htmlFor="msg">
                    Message:<textarea rows={4} cols={50} placeholder="Digite sua mensagem aqui..."></textarea>
                </label>

                <button id="submit">Submit</button>
            </form>
        </div>
    </S.Contact>
  )
}
