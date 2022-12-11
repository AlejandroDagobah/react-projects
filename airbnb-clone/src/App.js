import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'


import data from './data'

export default function App()
{
    var Cards = data.map(card =>{
        	
        return  <Card 
                    key={card.id}
                    {...card}                
                />

    })

    return(
        <div>
            <Navbar/>
            <Header/>
            <div className='cards-container'>
                {Cards}
            </div>
            
        </div>
    )
}