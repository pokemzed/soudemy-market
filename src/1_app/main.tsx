import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../6_shared/style/index.css'
import Provider from "./Provider";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider>
        <Router/>
    </Provider>
)
