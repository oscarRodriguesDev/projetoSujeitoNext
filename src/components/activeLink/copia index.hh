import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const { asPath } = useRouter();

  const isActive = (path: string) => asPath === path;


  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
       
       <Link legacyBehavior href='/'>
       <a>
          {/* definição do logotipo no header da pagina */}
          <Image src={logo} alt="logo da pagina" />
        </a>
       </Link> 
    
        {/*definição do menu  do header */}
        <nav>
          
          {/* definição dos links do nosso menu */}
          <Link legacyBehavior href="/"  >
            <a className={isActive("/") ? styles.ativado : styles.noAtivate}>Home</a>
          </Link>

          <Link legacyBehavior  href="/posts" >
            <a  className={isActive("/posts") ? styles.ativado : styles.noAtivate}>Conteudos</a>
          </Link>

          <Link legacyBehavior href='/sobre'>
            <a  className={isActive("/sobre") ? styles.ativado : styles.noAtivate}>Sobre Nos</a>
          </Link>
        </nav>
        <a
            className={styles.readyButton}
            type="button"
            href="https://sujeitoprogramador.com.br"
          >
            COMEÇAR
          </a>
      </div>
    </header>
  );
};

export default Header;
