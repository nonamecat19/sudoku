import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/index.css'
import {Providers} from "./app/Providers.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Providers>
      <main className="dark text-foreground bg-background">
        <App />
      </main>
    </Providers>
)
