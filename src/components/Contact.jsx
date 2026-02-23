function Contact () {
    return (
        <section className="contact" id="contact">
            <h2>Contacter moi</h2>
            
            <form className="contact-form">
                <input type="text" placeholder="Nom"/>
                <input type="email" placeholder="Email"/>
                <textarea placeholder="Message"></textarea>
                <button type="submit">Envoyer un message</button>
                </form>
        </section>
    );
}

export default Contact;