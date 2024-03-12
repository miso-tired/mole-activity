// import { useState } from 'react'

// function EmptySlot() {
//     return (
//         <div>
//             <h1>Empty Slot</h1>
//         </div>
//     )
// }

// export default EmptySlot

import React, { useEffect } from "react"
import MoleHill from './molehill.png'

function EmptySlot(props) {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} />
        </div>
    )
}

export default EmptySlot