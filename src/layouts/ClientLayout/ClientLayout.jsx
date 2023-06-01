import React from 'react'
import "./ClientLayout.scss"

export function ClientLayout(props) {
    const { children } =  props;
    return (
        <div>
            <p>Desde ClientLayout</p>
            <div>{children}</div>
        </div>
    )
}


