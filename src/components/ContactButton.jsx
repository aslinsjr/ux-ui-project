import "./ContactButton.css"

import { useState } from "react"

const ContactButton = () => {

    const [contactUs, setContactUs] = useState("")

    return (
        <div id="contact-us" onMouseOver={() => setContactUs("Entre em contato!")} onMouseLeave={() => setContactUs("")}>
            <i class="bi bi-whatsapp"></i>
            <p>{contactUs}</p>
        </div>
    )
}

export default ContactButton