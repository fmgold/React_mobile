import React from 'react'
import './Button.css'

const SiZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']
const STYLES = ['btn--primary', 'btn--outline']
const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = 
    ({children,
         type, 
         onClick, 
         buttonStyle, 
         buttonSize, 
         buttonColor})=>{
        
        const  checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
        const  checkButtonSize = SiZES.includes(buttonSize) ? buttonSize : SiZES[0]
        const  checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null

        return(
            <button className={`btn ${checkButtonStyle} ${checkButtonColor} ${checkButtonSize}`} type={type} onClick={onClick}>
                {children}
            </button>
        )
}