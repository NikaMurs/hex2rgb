import React, { ChangeEvent, useState } from "react"
import './hex2rgb.css'

export default function Hex2rgb() {
    const [form, setForm] = useState({ 
        hexColor: '#'
    })

    const [rgbColor, setColor] = useState('rgb (0, 0, 0)')

    function converter(hex: string) {
        const hex2rgbEl = document.querySelector('.hex2rgb') as HTMLElement
        if (/^#?([A-Fa-f\d]{2})([A-Fa-f\d]{2})([A-Fa-f\d]{2})$/.test(hex)) {
            const r = parseInt(hex.substring(1, 3), 16);
            const g = parseInt(hex.substring(3, 5), 16);
            const b = parseInt(hex.substring(5, 7), 16);
            setColor(`rgb (${r}, ${g}, ${b})`);
            hex2rgbEl.style.background = hex
        } else {
            setColor(`Ошибка!`)
            hex2rgbEl.style.background = '#e94b35'
        }
    }

    const onChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        console.log(target.name)
        const { name, value } = target;
        setForm((prevForm) => ({...prevForm, [name]: value}))

        if (value.length === 7) {
            converter(value)
        }
    }

    return (
        <div className="hex2rgb">
            <form className="hex2rgbForm">
                <input className="hexInput" maxLength={7} type="text" name="hexColor" value={form.hexColor} onChange={onChange} />
                <div className="hexOutput">{rgbColor}</div>
            </form>
        </div>
    )
}