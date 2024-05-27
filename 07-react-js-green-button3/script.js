// функциональный компонент, который возвращает JSX код
const App = (props) => {
  console.log(props);
  const { initialButtonText, initialClassesList } = props;
  console.log(initialButtonText);
  console.log(initialClassesList);
  const [buttonText, setButtonTest] = React.useState(props.initialButtonText);
  const [classesList, setclassesList] = React.useState(
    props.initialClassesList
  );
  const onButtonClick = () => {
    setButtonTest('Hello from React');
    setclassesList('white-btn');
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
root.render(
  <App initialButtonText="Click me" initialClassesList="green-btn" />
); // все пользовательские компоненты должны начинаться с большой буквы
