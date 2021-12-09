import React from 'react'

const Footer = () => {
    const myStyle = {
        color:'white',
        textAlign:'center',
        width:'100%',
        fontFamily:'var(--font-roboto)',
        padding:'30px 0px',
        fontSize:'16px',
        lineHeight:'2rem',
        letterSpacing:'1.5px'
    }
    return (
        <div >
            <pre style={myStyle}>
            &copy; CopyRights Reserved
            <br />
             <b>newsground.app.com</b> <br/>2021-2022 
            </pre>
        </div>
    )
}

export default Footer
