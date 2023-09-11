import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BookShelf from "./pages/BookShelf";
import ErrorPage from "./pages/ErrorPage";

//Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/bookshelf",
    element: <BookShelf />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
