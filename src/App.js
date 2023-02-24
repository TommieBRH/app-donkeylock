import './App.css';
import './index.css'
import {useMemo, useState} from "react";
import axios from 'axios';

function App() {
    const [activeness, setActive] = useState(false)
    const configureActive = () => {
        setActive(true);
    }

    let donkeySound = new Audio('./donkey/audio/donkey.mp3');
    useMemo(() => {
        const handleVisibilityChange = () => {
            if (!document.hidden) {
                donkeySound.play()
            } else {
                setActive(false);
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

  return (
    <div className="App">
        <div className={'bg'}></div>
        <header>
            <h1>Donkey lock</h1>
            <h3>Invented by <div className={'brh-blue-text'}>Broekhuis</div> solutions</h3>
        </header>

        {activeness ?
                <div className={'wrapper'}>
                    <li className={'noti active'}>De donkey lock staat op scherp, vergrendel nu de pc!</li>
                </div>
            :
                <div className={'wrapper'}>
                    <li className={'noti'}>Zet de donkey lock op scherp voordat je de computer vergrendeld!</li>
                    <button className={'activator'} onClick={configureActive}>Klik hier om de donkey lock op scherp te zetten!</button>
                </div>
        }
    </div>
  );
}

export default App;
