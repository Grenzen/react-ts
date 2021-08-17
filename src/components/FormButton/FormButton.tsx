import React from 'react'
import s from './FormButton.module.css'

interface FormButtonProps {
    primary?: boolean
    value: string
    size?: 'small' | 'medium' | 'large',
    position?: 'start' | 'end' | 'center' | 'stretch'
}

export const FormButton:React.FC<FormButtonProps> = (
    {
       primary = true,
       value,
       size = 'medium',
       position = 'end'
    }
) => {
    const mode = primary ? 'primary' : 'secondary'
    return (
        <input
            className={[s.formButton, s[`${ mode }`], s[`${ size }`], s[`${ position }`]].join(' ')}
            type="submit"
            value={ value }
        />
    )
}