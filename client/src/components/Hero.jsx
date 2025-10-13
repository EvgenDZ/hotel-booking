// Импорт необходимых зависимостей
import React from 'react' // Основная библиотека React
import { assets, cities } from '../assets/assets' // Импорт ресурсов: иконок и списка городов

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
        
        <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>The Ultimate Hotel Experinence</p>

        <h1 className='font-playfair text-2x1 md:text-5x1 md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Gateway Destination</h1>

        <p className='max-w-130 mt-2 text-sm md:text-base'>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.</p>

        {/* Форма поиска отелей с адаптивным layout */} 
      <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            {/* Поле выбора направления (города) */}
            <div>
                <div className='flex items-center gap-2'>
                   <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                {/* Поле ввода с автодополнением из списка городов */}
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                {/* Список вариантов для автодополнения */}
                <datalist id='destinations'>
                    {cities.map((city,index)=>(
                      <option value={city} key={index} />
                    ))}
                </datalist>
            </div>

            {/* Поле выбора даты заезда */}        
            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            {/* Поле выбора даты выезда */}        
            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>
            
            {/* Поле выбора количества гостей */}
            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            {/* Кнопка поиска с иконкой */}        
            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                 <img src={assets.searchIcon} alt="searchIcon" className='h-7'/>
                <span>Search</span>
            </button>
        </form>
    </div>
  )
}

export default Hero