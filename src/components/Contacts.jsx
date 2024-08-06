import './Contacts.css'

const Contacts = () => {
    return (
        <div className='contacts-container'>
            <h3 className='title'>Entre em contato</h3>
            <div className="inner-container">
                <div className="phone-contact">
                    <h2>Fale com um de nossos atendentes agora!</h2>
                    <button><i class="bi bi-whatsapp"></i> (81) 99999-9999</button>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>Informe seu nome:
                        <input type="text" />
                    </label>
                    <label>Informe seu email:
                        <input type="text" />
                    </label>
                    <label>Informe sua solicitação ou sugestão:
                        <textarea></textarea>
                    </label>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Contacts