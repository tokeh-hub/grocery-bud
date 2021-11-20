import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


export default function List({ items,deleteItem,editItem}) {
    return (
        <div className='list'>
        {items.map((item)=>{
            const {id,title} = item
            console.log(id)
            return (
                <article key={id}>
                 <p>{title}</p>
                 <section className='icons' >
                 <FaEdit className='icon1' onClick={()=>editItem(id)}/>
                 <FaTrash className='icon2' onClick={()=>deleteItem(id)} />
                 </section>
                </article>
            )
        })}
        </div>
    )
}
