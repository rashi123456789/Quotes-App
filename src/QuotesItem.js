import React , {useState} from 'react'
import EditQuote from './EditQuote'
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';


const QuotesItem = (props) =>{
    const {id,name,body,removeItem,editItem} =props
    const [toggle,setToggle] = useState(false)

    const handleRemove = ()=>{
            const confirmRemove = window.confirm("Are you sure?")
            if(confirmRemove){
                removeItem(id)
            }                
        }
            const handleToggle = () =>{
                const result = !toggle
                setToggle(result)  // setToggle(!toggle)
            }

    return (
        <div>
            {toggle ? (
                <div>
                    <EditQuote 
                        id={id} 
                        name={name} 
                        body={body}
                        editItem={editItem}
                        handleToggle={handleToggle}
                        />
                    <button className='btn btn-warning mt-3'  onClick={handleToggle}>cancel</button>
                </div>
            ) : (
                <div className="card mb-3"  style={{width:"100%"}}>
                    <div className="card-body">
                        <p className="card-text"><blockquote>{ body }  <b>~{ name }</b></blockquote></p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className='btn btn-primary' onClick ={handleToggle}> <span> <FiEdit/></span> </button>
                            <button className='btn btn-danger' onClick={handleRemove}> <MdDelete/> </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}
export default QuotesItem