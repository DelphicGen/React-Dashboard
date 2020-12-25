import React from 'react'

function Container({className, children}) {
    return (
        <div className={`${className} mx-5`}>
            {children}
        </div>
    )
}

export default Container
