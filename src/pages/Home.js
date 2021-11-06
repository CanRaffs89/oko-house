import Hero from "../components/Hero";
import Section from "../components/Section";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="container">
                <Section 
                title={"House Designs"}
                firstPara={"Stop dreaming and start building with a custom-designed flat-pack kit."}
                secondPara={"Choose the perfect, energy-efficient home at a price that suits you. We offer an extensive range of flat-pack homes suitable for individuals, couples and families. Whether you're a first-time homeowner searching for an affordable entry into the property market, or a growing family looking for more space, we have options to suit all budgets."}
                thirdPara={"View the designs gallery to start your eco house journey."}
                buttonLink={"/designs"}
                buttonText={"DESIGNS"}
                />
                <Section 
                title={'Features'}
                firstPara={'Delectus mollitia nulla modi adipisci aliquid. Veniam ipsa delectus ratione labore.'}
                secondPara={'Rem recusandae temporibus provident quae perspiciatis esse. Possimus id est esse est consequatur architecto aspernatur deserunt. Minima ut voluptas aliquam labore qui impedit sunt. Libero soluta neque et quidem. Aut porro quibusdam est.'}
                thirdPara={'Natus soluta qui et porro culpa earum et. Quos et praesentium voluptatem alias non dolorum.'}
                buttonLink={"/about"}
                buttonText={"MORE"}
                />
            </div>
        </>
    )
}

export default Home
