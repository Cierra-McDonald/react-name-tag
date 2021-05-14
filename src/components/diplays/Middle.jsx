import React from 'react'
import styles from './Display.module.css'


function Middle({ name }) {
        return (
            <div>
                <input className={styles.textArea} type="text" onChange={name}/>
            </div>
        )
    
}

export default Middle;
