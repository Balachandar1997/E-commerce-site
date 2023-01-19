import React from 'react'
import './MovieDetail.css'

const IMGPATH='https://image.tmdb.org/t/p/w1280';



const MovieDetail = ({data}) => {
  return (
    <div className='card-item'>
        <div className='card-inner'>
            <div className='card-top'>
                <img src={IMGPATH+data.poster_path} alt={data.title} />
            </div>
            <div className='card-bottom'>
                <div className='card-info'>
                    {data.title ? (
                    <>
                      <h4>{data.title}</h4>
                    <p>{data.release_date}</p>
                    </>

                    ) : (
                        <>
                          <h4>{data.original_name}</h4>
                          <p>{data.first_air_date}</p>
                        </>
                    )
                    }
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default MovieDetail