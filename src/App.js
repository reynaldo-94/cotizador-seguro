// import Input from './components/Input';
import Select from './components/Select';

export default function App() {
  return (
    <div>
      {/* <Input
        type='text'
        initialValue=''
        onChange={(value) => console.log(value)}
        placeholder='Ingrese el texto'
      /> */}
      <Select 
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
      />
    </div>
  );
}
