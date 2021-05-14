import React from 'react'
import styles from './Display.module.css'

function Top({ greeting }) {
        return (
            <div className={styles.colorShell}>
                {greeting}
            </div>
        )
    
}

export default Top;
