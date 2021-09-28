import React, { useState } from 'react'
import Button from './components/Button';
// import Input from './components/Input';
// import Select from './components/Select';
import Checkbox from "./components/Checkbox";
import { FaPhoneAlt } from 'react-icons/fa'

export default function App() {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      {/* <Input
        type='text'
        initialValue=''
        onChange={(value) => console.log(value)}
        placeholder='Ingrese el texto'
      /> */}
      {/* <Select 
        initialOptions={[
          {
            id: 1,
            label: 'DNI'
          },
          {
            id: 2,
            label: 'RUC'
          },
          {
            id: 3,
            label: 'Pasaporte'
          }
        ]}
        selectionChange={(id) => {
          console.log('id:', id)
        }}
      /> */}
      {/* <Checkbox 
        checked={checked}
        onChange={(val) => setChecked(val)}
        label={'Acepto'}
      /> */}
      <Button onClick={() => {console.log("You Clicked on Me!")}}>COTIZALO</Button>
      <FaPhoneAlt color="cornflowerblue" /> Check out my phone
    </div>
  );
}
