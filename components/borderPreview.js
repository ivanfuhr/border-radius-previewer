import styles from '../styles/borderPreview.module.css'
import react, { useState } from 'react'

export default function borderPreview() {

    const [radius, setRadius] = useState({
        topLeft: "0",
        topRight: "0",
        bottomLeft: "0",
        bottomRight: "0"
    })

    const alterRadius = (target, value) => {
        setRadius(prevState => { return { ...prevState, [target]: value.length > 0 ? value : 0 } })
    }

    return (
        <div className={styles.borderPreview}>
            <h1>Border-Radius CSS Previewer</h1>
            <div className={styles.main}>
                <h2>Valores</h2>
                <div className={styles.inputs}>
                    <label className={styles.labelInputs}>
                        <span>Top-Left</span>
                        <input className={styles.input} type="number" onChange={event => alterRadius('topLeft', event.target.value)} />
                    </label>

                    <label className={styles.labelInputs}>
                        <span>Top-Right</span>
                        <input className={styles.input} type="number" onChange={event => alterRadius('topRight', event.target.value)} />
                    </label>

                    <label className={styles.labelInputs}>
                        <span>Bottom-Left</span>
                        <input className={styles.input} type="number" onChange={event => alterRadius('bottomLeft', event.target.value)} />
                    </label>

                    <label className={styles.labelInputs}>
                        <span>Bottom-Right</span>
                        <input className={styles.input} type="number" onChange={event => alterRadius('bottomRight', event.target.value)} />
                    </label>
                </div>

                <h2>Preview</h2>
                <div className={styles.preview}>
                    <div className={styles.box} style={{ borderRadius: `${radius.topLeft}px ${radius.topRight}px ${radius.bottomLeft}px ${radius.bottomRight}px` }} />
                </div>

                <h2>Code</h2>
                <textarea className={styles.input} style={{ resize: 'none', width: '93%' }} cols="30" rows="10" value={`border-radius: ${radius.topLeft}px ${radius.topRight}px ${radius.bottomLeft}px ${radius.bottomRight}px;`} readOnly={true} />

                <div className={styles.preview}>
                    <a href="https://github.com/ivanfuhr/border-radius-previewer" target="_blank" rel="noopener noreferrer" className={styles.link}><i className="fa fa-github" aria-hidden="true" style={{marginTop: '10px', fontSize: '30px'}}/></a>
                </div>
            </div>
        </div >
    )
}