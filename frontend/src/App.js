import { ThemeProvider } from "@mui/material";
import { createStore } from "redux";
import {  Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Login, Order, WebSocketPage } from "./pages";

import theme from "./themes";
import rootReducer from "./services/reducers"

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/order/*" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/websocket" element={<WebSocketPage />} />
            <Route path="/chat" element={<Order />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
