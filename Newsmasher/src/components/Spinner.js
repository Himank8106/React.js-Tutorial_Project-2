import React, { Component } from 'react'
import loading from './loading.gif'

export default function Spinner() {
    return (
        <div className='text-center'>
            <img style={{ height: "40px" }} src={loading} alt="loading gif" />
        </div>
    )
}