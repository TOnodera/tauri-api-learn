import { Route, Routes } from "react-router-dom";
import TopPage from "../../pages/top/TopPage";
import AppPage from "../../pages/app/AppPage";
import Header from "./header/Header";
import style from "./style.module.scss";
import CpuPage from "../../pages/cpu/CpuPage";
export default function Layouts() {
  return (
    <div className={style.layouts}>
      <Header />
      <main>
        <Routes>
          <Route index element={<TopPage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/cpu" element={<CpuPage/>} />
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  );
}
