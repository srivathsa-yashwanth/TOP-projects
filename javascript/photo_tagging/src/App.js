
import ImageContainer from "./components/ImageContainer";
import AppCss from './styles/app.module.css'

function App() {
  return (
    <div className={AppCss.root} >
      <h1>Where are they</h1>
      < ImageContainer/>
    </div>
  );
}

export default App;
