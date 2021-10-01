import React, { useState } from 'react'
import styles from './style.module.scss'

export default function Input ({
  type = 'text',
  initialValue = '',
  placeholder = '',
  style = {},
  min = 0,
  max = 99999,
  onChange = () => { }
}) {

  const [value, setValue] = useState(initialValue)

  const onKeyDown = (event) => {
    if (type === 'number') {
      if (event.keyCode === 69 || event.keyCode === 189) event.preventDefault()
    }
  }

  const onChangeHandler = (event) => {
    const val = event?.target?.value ?? ""
    setValue(val)
    onChange(val)
  }

  return (
    <div>
      <input
        className={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        onKeyDown={onKeyDown}
        style={style}
        min={min}
        max={max}
      />
    </div>
  )
}
