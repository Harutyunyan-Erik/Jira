
import './App.css';
import { Image, Button, Rate } from "antd";

function App() {
  return (
    <div className="App">
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />

      <Button>Submit</Button>

      <Rate />
      <h2>Hello</h2>
    </div>
  );
}

export default App;
