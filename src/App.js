import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";


const tg = window.Telegram.WebApp;
function App() {
  const {onClose} = useTelegram();
    useEffect(() => {
        tg.ready();
    }, []);
  return (
    <div className="App">
        <Header />
        <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
