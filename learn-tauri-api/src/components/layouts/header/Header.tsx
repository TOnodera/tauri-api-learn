import style from "./style.module.scss";
import Menu from "../menu/Menu";
import Logo from "./logo/Logo";
export default function Header() {
  return (
    <>
      <header>
        <div className={style.headerTitleWrapper}>
          <Menu />
          <div className={style.headerTitle}>
            <Logo />
            <div>
              <h1>Tauri</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
