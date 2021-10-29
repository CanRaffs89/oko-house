import Button from "./Button"

const Hero = () => {
    return (
        <div id="hero-img">
            <div className="hero-container">
                <h1 className="hero-text">Designs for Life</h1>
                <span></span>
                <h3 className="hero-text-small">Eco-friendly, future-proof, self-build kit houses designed for modern living</h3>
                <Button link={'/'} text={'ABOUT'}/>
            </div>
        </div>
    )
}

export default Hero
