// функциональный компонент, который возвращает JSX код
const App = () => {
  const [buttonText, setButtonTest] = React.useState('Click me');
  const [classesList, setclassesList] = React.useState();
  const onButtonClick = () => {
    setButtonTest('Hello from React');
    setclassesList('green-btn');
  };

  return (
    <div className="app">
      <button onClick={onButtonClick} className={classesList}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />); // все пользовательские компоненты должны начинаться с большой буквы
