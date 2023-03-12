import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chat, Dashboard, Ggmap, Login, Order } from "./pages";

import theme from "./themes";
import rootReducer from "./services/reducers";
import { lazy, Suspense } from "react";
import { Loading } from "./components";

const Tech = lazy(() => import("./pages/Tech"));

const store = rootReducer;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/order/*" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/ggmap" element={<Ggmap />} />
            <Route
              path="/tech"
              element={
                <Suspense fallback={<Loading />}>
                  <Tech />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
