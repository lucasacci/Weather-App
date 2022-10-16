import React from 'react'

export const Card = ({weather}) => {

   console.log(weather);

  let temp = Math.round((weather.main.temp-273));
  console.log(temp)
  return (
    <div className='divResponsive'>
        <h4 className='text-light text-center'>Clima: </h4>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-4 col-lg-4'>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" />
            <h5 className='text-light'>{weather.weather[0].description}</h5>
          </div>
          <div className='col-12 col-md-4 col-lg-4 d-flex align-items-center'>
            <h1 className='text-light'>{temp}ºC</h1>
          </div>
        </div>
    </div>
  )
}
