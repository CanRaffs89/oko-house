import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="container">
                <Section 
                title={'House Designs'}
                firstPara={'Eco-friendly, future-proof, self-build kit houses designed for modern living.'}
                secondPara={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima doloribus natus molestias doloremque sint corporis. Doloribus quam deleniti nobis ullam. Quae adipisci nam voluptatibus nemo consequuntur esse corrupti eaque.'}
                thirdPara={'Delectus nam qui nisi. Ipsum consequatur non dolorem praesentium ut molestiae velit. Optio aliquid voluptatem corporis quia.'}
                />
                <Section 
                title={'Features'}
                firstPara={'Delectus mollitia nulla modi adipisci aliquid. Veniam ipsa delectus ratione labore.'}
                secondPara={'Rem recusandae temporibus provident quae perspiciatis esse. Possimus id est esse est consequatur architecto aspernatur deserunt. Minima ut voluptas aliquam labore qui impedit sunt. Libero soluta neque et quidem. Aut porro quibusdam est.'}
                thirdPara={'Natus soluta qui et porro culpa earum et. Quos et praesentium voluptatem alias non dolorum.'}
                />
                <Footer />
            </div>
        </>
    )
}

export default Home
