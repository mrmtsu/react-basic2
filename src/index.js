import ReactDom from "react-dom";
import { App } from "./App";

const Home = () => {
  return <App />;
};

ReactDom.render(<Home />, document.getElementById("root"));
