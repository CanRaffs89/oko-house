const Design = ({ match }) => {
    const { params: { designId } } = match;

    return (
        <div className='container page-container'>
           <h1>Design 00{ designId }</h1>  
           <span className='designs-span'></span>
           <div className="design-content">
               <div className="design-content-text">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, necessitatibus. Explicabo excepturi optio enim voluptates saepe nesciunt nobis illum, ab tempore similique veritatis eaque laboriosam omnis debitis, recusandae, ratione blanditiis!</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et laborum impedit magni, itaque fugiat, soluta distinctio voluptatibus eaque officiis iste repellat doloremque corrupti dolor inventore dolorem delectus, assumenda aliquid?</p>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure optio dolorem eos nesciunt praesentium adipisci nam in, assumenda recusandae perspiciatis voluptatem dignissimos quidem vitae harum amet? Obcaecati voluptatem consectetur eius!</p>
               </div>
               <div className="design-content-grid">
                   <div className="design-content-grid-item-main"></div>
                   <div className="design-content-grid-item-sm"></div>
                   <div className="design-content-grid-item-sm"></div>
               </div>
           </div>
        </div>
    )
}

export default Design
