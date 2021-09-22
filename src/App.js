import Input from './components/Input';

export default function App() {
  return (
    <div>
      <Input
        type='text'
        initialValue=''
        onChange={(value) => console.log(value)}
        placeholder='Ingrese el texto'
      />
    </div>
  );
}
