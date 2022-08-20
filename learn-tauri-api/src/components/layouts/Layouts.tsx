import Header from './header/Header';
import style from './style.module.scss';
export default function Layouts(){
    return (
    <div className={style.layouts}>
        <Header />
        <main>main</main>
        <footer>footer</footer>
    </div>
    );
}