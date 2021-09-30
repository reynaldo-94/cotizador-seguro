import React, { useState } from 'react'
import Button from '../../Button'
import Select from '../../Select'
import Input from '../../Input'
import Checkbox from '../../Checkbox'
import Information from '../../Header/Information'
import './style.scss'

const optionsDocuments = [
  {
    id: 1,
    label: 'DNI'
  },
  {
    id: 2,
    label: 'R.U.C.'
  }
]

export default function Form() {
  const [checked, setChecked] = useState(false)
  return (
    <div className='block'>
      <Information />
      <div className='form'>
        <h1 className='form__title'>Déjanos tus datos</h1>
        <div className='form__body'>
          <div className='form_block'>
            <Select initialOptions={optionsDocuments} />
            <Input placeholder={'Nro. de doc'} />
          </div>
          <div>
            <Input placeholder={'Celular'} />
          </div>
          <div>
            <Input placeholder={'Placa'} />
          </div>
          <Checkbox 
            checked={checked}
            label={'Acepto la Política de Protección de Datos Personales y los Términos y Condiciones'} 
            onChange={(val) => setChecked(val)}
          />
        </div>
        <Button>COTÍZALO</Button>
      </div>
    </div>
  )
}
