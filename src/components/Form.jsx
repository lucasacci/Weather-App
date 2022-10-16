import React, { useEffect, useState } from 'react'

export const Form = () => {

    const [input, setInput] = useState("miami");
    const [spinner, setSpinner] = useState(true);

    const apiKey = 'ee004fac650c15297103962e7bac44bd';

  




    useEffect(() => {
      
      apiCall();

    }, [input])

    const handleSubmit = (e) =>{
      e.preventDefault();
      const keyword = e.currentTarget.city.value.trim();
      setInput(keyword);
      console.log(input);
  }

    const apiCall = async () =>{

      try{
        setSpinner(true);

        //api request for geocoding

        const respuesta0 = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${apiKey}`
        )

        let coordenadas = await respuesta0.json();

        let lat = coordenadas[0].lat;
        let lon = coordenadas[0].lon;
       

          //api request for weather
        const respuesta1 = await fetch (
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es`
        )

        const weather = await respuesta1.json();
          console.log(weather.weather)

      }catch(error){
        console.log(error)
      }
    }


    

    
    

  return (
    <div className='my-5 d-flex justify-content-center p-3 bg-dark  divBorder'>     
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <label className='form-label text-light text-center my-4'>Ingrese la ubicacion:</label>
                <input className="form-control mb-4" placeholder='Miami' name='city'/>
                <button className='btn btn-primary mb-4' type='submit'>Buscar</button>
            </div>
        </form>
    </div>
  )
}
