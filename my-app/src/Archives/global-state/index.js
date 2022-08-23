import ReactDOM from "react-dom";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

ReactDOM.render(  
    // 関数名をHTMLのように囲むことで「コンポーネント」として扱う
    <AdminFlagProvider>
        <App />
    </AdminFlagProvider>,
    document.getElementById("root") // public/index.html内のid"root"のdivタグを示す
);