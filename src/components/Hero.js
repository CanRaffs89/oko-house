import arrow from '../img/arrow.svg'

const Hero = () => {
    return (
        <div id="hero-img">
            <div className="hero-container">
                <h1 className="hero-text">Designs for Life</h1>
                <span></span>
                <h3 className="hero-text-small">Eco-friendly, future-proof, self-build kit houses designed for modern living</h3>
                <button>
                    <a href="/">MORE </a>
                    <img className="btn-arrow" src={arrow} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Hero
