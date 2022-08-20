import { Route, Routes } from "react-router-dom";
import TopPage from "../../pages/top/TopPage";
import AppPage from "../../pages/app/AppPage";
import Header from "./header/Header";
import style from "./style.module.scss";
export default function Layouts() {
  return (
    <div className={style.layouts}>
      <Header />
      <main>
        <Routes>
          <Route index element={<TopPage />} />
          <Route path="/app" element={<AppPage />} />
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  );
}
