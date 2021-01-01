import React from 'react';
import '../../App.css'

const ImageLinkForm = () =>{
    return(
        <div>
            <p className='f3'>
                {'This Magic brain will detect faces in your pictures. Git it a try'}
            </p>
            <div className='Center'>
                <div className='pa4 br3 shadow-5' >
                <input type='tex' className='f4 pa2 w-70 center' />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;