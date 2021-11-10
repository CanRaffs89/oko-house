const Design = ({ match, location }) => {
    const { params: { designId } } = match;

    return (
        <div className='container page-container'>
           <h1>Design 00{ designId }</h1>  
           <span className='designs-span'></span>
           <p>
                <strong>Match Props: </strong>
                <code>{JSON.stringify(match, null, 2)}</code>      
            </p>
            <p>
                <strong>Location Props: </strong>
                <code>{JSON.stringify(location, null, 2)}</code>      
            </p>
           <div className="design-content">
               <div className="design-content-text"></div>
               <div className="design-content-grid"></div>
           </div>
        </div>
    )
}

export default Design
