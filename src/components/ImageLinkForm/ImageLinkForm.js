import React from 'react';
import '../../App.css'
import './ImageLinkForm.css'

const ImageLinkForm = () =>{
    return(
        <div>
            <p className='f3'>
                {'This Magic brain will detect faces in your pictures. Git it a try'}
            </p>
            <form className='center'>
                <div className='form  Center pa4 br3 shadow-5' >
                <input type='text' className='f4 pa2 w-70 center text-box ' />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </form>
        </div>
    );
}

export default ImageLinkForm;