import logo from './logo.svg';
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
    </div>
  );
}

export default App;
