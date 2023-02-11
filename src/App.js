import "./App.css";
import Text from "./components/text/text";
import Button from "./components/button/button";
function App() {
  return (
    <>
      <Text textTransform="uppercase" color="blue">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          molestiae commodi. Minus, esse expedita consectetur illo, ratione nemo
          aut tenetur reiciendis placeat maxime velit quas repellat obcaecati
          ipsa numquam vitae.
        </p>
      </Text>
      <Button label="Baixar CV" />
    </>
  );
}
export default App;
