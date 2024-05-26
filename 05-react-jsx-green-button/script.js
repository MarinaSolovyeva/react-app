// функциональный компонент, который возвращает JSX код
const App = () => {
  console.log('Called');
  let [buttonText, setButtonTest] = React.useState('Click me');
  const onButtonClick = () => {
    setButtonTest('Hello from React');
  };

  return (
    <div className="app">
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />); // все пользовательские компоненты должны начинаться с большой буквы
