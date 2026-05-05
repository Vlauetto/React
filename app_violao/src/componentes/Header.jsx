import styles from "../css/Header.module.css";

function Header() {
  return (
    <header>
      <nav>
        <li><a href="/">Home</a></li>
        <li><a href="/">Quem somos</a></li>
        <li><a href="/Section_Dois">Instrumentos</a></li>
        <li><a href="/Section_Tres">Endereço</a></li>
        <li><a href="/Section_Quatro">Contato</a></li>
      </nav>
    </header>
  );
}

export default Header;