import { useState } from 'react';

const marchioMacchine = ["bmw", "mercedes", "audi", "opel", "toyota"]
// componente
export default function Main() {

    const [firstName, setFirstName] = useState('Marco');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Il nome inviato è:' + firstName)
    }
    function stampaLista() {
        return marchioMacchine.map(lista => {
            return <li>{lista}</li>
        }

        )
    }
    return (
        <>
           
            {stampaLista()}
        </>
    )
}