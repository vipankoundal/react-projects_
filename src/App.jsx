import { Link } from "react-router-dom";
import "./App.css";
//import BgColor from "./components/BgColor";
//import Card from "./components/Card";

function App() {
  // const [isCount, setIsCount] = useState(0);
  // const handlePlus = () => {
  //   setIsCount((prev) => prev + 1);
  // };
  // const handleMinus = () => {
  //   setIsCount((prev) => (prev > 0 ? prev - 1 : 0));
  // };
  return (
    <div className="px-4 mx-auto max-w-container sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      {/* {isCount} <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button> */}

      {/* <Card username="John" btnText="Click me" />
      <Card username="Jack" /> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1 xl:grid-cols-5 p-12">
        <Link to="/bg-color">
          <div className="flex items-center gap-4 cursor-pointer list-demo">
            <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <h4 className="text-gray-700">Tab Color Switcher</h4>
          </div>
        </Link>
        <Link to="/pass-genie">
          <div className="flex items-center gap-4 cursor-pointer list-demo">
            <div className="p-2 bg-white shadow-xl w-14 h-14 rounded-3xl">
              <img src="./pin-code.png" />
            </div>
            <h4 className="text-gray-700">PassGenie</h4>
          </div>
        </Link>
      </div>

      {/* <BgColor/> */}
    </div>
  );
}

export default App;
