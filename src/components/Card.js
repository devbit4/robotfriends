import React from 'react';


const Card = ({id, name, email})=>{
    // const {id, name, email} = props;

    return (
        <div className='bg-light-green dib br3 pa2 ma4 grow bw2 shadow5 tc'>
            <img alt='robots'src={`https://robohash.org/${id}?size=250x250`}/>
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;