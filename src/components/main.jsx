import { useState } from 'react';

const marchioMacchine = ["bmw", "mercedes", "audi", "opel", "toyota"]
// componente
export default function Main() {
    // stato della lista
    const [marchiMacchine, aggiungiMarchio] = useState(marchioMacchine);

    // stato del imput che ggiunge marchi di macchine
    const [nuovoMarchio, setNuovoMarchio] = useState('');

    // funzione di CB di aggiunta elemento alla todo
    const addTask = e => {
        e.preventDefault();
        // modifica 
        const updatedTasks = [...marchiMacchine, nuovoMarchio];
        aggiungiMarchio(updatedTasks);
    }

       // funzione di CB di cancellazione elemento dalla lista
        const eliminaMarchio = i => {
        const updatedTasks = marchiMacchine.filter((task, index) => {
            return index !== i
        });
        aggiungiMarchio(updatedTasks);
    }
  
    return (
        <> 
         {/* form di gestione lista */}
        <form onSubmit={addTask}>
            <input type="text" value={nuovoMarchio}
                onChange={event => { setNuovoMarchio(event.target.value) }}
            />
            <button>Invia</button>
        </form >
            
            {/*output lista  */}
        {marchiMacchine.map((task, i) => (
            <li key={i}>
                {task}
                {/* bottone di eliminazione elemento */}
                <button onClick={() => eliminaMarchio(i)}>
                    Elimina
                </button>
            </li>
         ))}
        </>
    )
}