import React from 'react'
import { useEffect } from 'react'

export default function Alert({msg,type, showAlert}) {
    useEffect(() => {
        const timeout = setTimeout(()=>{showAlert()},3000)
        return () => {
            clearTimeout(timeout)
        }
    })
    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    )
}
