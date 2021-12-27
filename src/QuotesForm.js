import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const QuotesForm = (props) =>{
    const {formSubmission,id : slNo ,name:author,body:quote,handleToggle} = props
    const [id,setId] = useState(slNo ? slNo : uuidv4())
    const[name,setName]=useState( author ? author : '')
    const[body,setBody]=useState(quote ? quote : '')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData ={
            //id:Number(new Date()),
            //id:uuidv4(),
            id:id,
            name:name,
            body:body
        }
            formSubmission(formData)
            //reset form
            if(handleToggle){
                handleToggle()
            }
            setName('')
            setBody('')
    }
    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    const handleBodyChange = (e) =>{
        setBody(e.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label className="form-label">Name</label>
                <input className="form-control mb-3 mt-3" placeholder='Quotes-written-by' type="text" value={name} onChange={handleNameChange}/>
                <label className="form-label mb-3">Body</label>
                <textarea className="form-control mb-3 "  placeholder='Quote' value={body} onChange={handleBodyChange}/>
                <input type="submit" value="save" className="btn btn-success btn-lg"/>
            </form>
        </div>
    )
}
export default QuotesForm 