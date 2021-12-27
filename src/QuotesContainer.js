import React, {useEffect, useState} from 'react'
import QuotesList from  './QuotesList'
import AddQuote from './AddQuote'

const QuotesContainer = (props) =>{
    const[quotes,setQuotes]=useState([])

    useEffect(()=>{
        //console.log(localStorage.getItem('quotes'))
        const result = JSON.parse(localStorage.getItem('quotes')) || []
        setQuotes(result)
    },[])

    useEffect(()=>{
        localStorage.setItem('quotes',JSON.stringify(quotes))
    },[quotes])

    const addItem =(formData)=>{
        const result = [formData,...quotes] //adding formData in quotes
        setQuotes(result)
    }

    const removeItem = (id) =>{
        const result = quotes.filter((quote)=>{
            return quote.id !== id
        })
        setQuotes(result)
        console.log('container',id)
    }

    const editItem = (quote) =>{
        const result = quotes.map((q)=>{
            if(q.id === quote.id) {
                return {...q,...quote}
            }else{
                return {...q}
            }
        })
        setQuotes(result)
    }
    
    return (
        <div className='container'>
            <div className="row">
                <div className='col'>
                    <QuotesList 
                    quotes={quotes} 
                    removeItem={removeItem}
                    editItem = {editItem}
                    />
                </div>
                <div className='col'>
                    <AddQuote addItem={addItem}/>
                </div>
            </div>
        </div>
    )
}
export default QuotesContainer