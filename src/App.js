import  {useState,useEffect} from 'react'
import './App.css'
import WeatherCard from './WeatherCard'

const App = () => {
  const [tempInfo,setTempInfo]=useState({})
 const [searchValue,setSearchValue]=useState('Gurgaon');
 const getWeatherReport = async() => {
  try {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=04727c2e43f9b2ce0c3b23fbab29bf62`;
  let res = await fetch(url);
  let data= await res.json();
 console.log(data);
  const{humidity,pressure,temp}=data.main;
  const{name}=data;
  const{country,sunset}=data.sys;
  const{main:weathermood}=data.weather[0];
  const {speed
  }= data.wind;
  const newWeather = {
    humidity,pressure,temp,name,country,sunset,weathermood,speed

  };
 
  
  setTempInfo(newWeather);



  } catch (error) {
   alert('City not Found!')
  }
}
  
 useEffect(() => {
  getWeatherReport();
 }, [])
 
    
  return (
    <>
    <div className='main-container'>
    <div className='A'>
        <input className='input' type="Search" name="" id="input" placeholder='Search...'autoFocus value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
        <button id='' onClick={getWeatherReport}>Search</button>
        </div>
        <WeatherCard weatherReport={tempInfo}/>
            </div>
                
                   
                    
               
           
        
   
    </>
  )
}

export default App