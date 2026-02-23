import codeImage from '../assets/code.jpg';

function Hero () {
    return (
        <section className="hero" style={{ backgroundImage: `url(${codeImage})` }}>
            <div className="hero-content">
            <h1>Mon Portfolio</h1>
            <p>Découvrez mes projets </p>

            </div>
        </section>
    );
}

export default Hero;