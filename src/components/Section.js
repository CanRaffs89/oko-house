import Button from "./Button"

const Section = () => {
    return (
        <div className="section-container">
            <div className="section-content-container">
                <div className="section-text">
                    <h1>House Designs</h1>
                    <span className="span-line-text"></span>
                    <p>Eco-friendly, future-proof, self-build kit houses designed for modern living.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima doloribus natus molestias doloremque sint corporis. Doloribus quam deleniti nobis ullam. Quae adipisci nam voluptatibus nemo consequuntur esse corrupti eaque.</p>
                    <Button link={'/'} text={'DESIGNS'}/>
                </div>
                <div className="section-grid-1">
                    <a className="grid-sm" href="/"></a>
                    <a className="grid-md" href="/"></a>
                    <a className="grid-lg" href="/"></a>
                    <a className="grid-md" href="/"></a>
                    <a className="grid-sm" href="/"></a>
                </div>
            </div>
            <span className="span-line-bottom-border"></span>
        </div>
    )
}

export default Section
