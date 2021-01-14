import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faUnderscore } from "../lib/icons";
import "../styles/global.css";

library.add(fas, faUnderscore);

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
