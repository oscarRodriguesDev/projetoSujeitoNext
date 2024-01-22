import styles from "../styles/home.module.scss";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>Levando você ao proximo nivel!</h1>
          <span>
            Uma plataforma com cursos que vão do zero ao profissional na prática, direto ao ponto, aplicando o que usamos no mercado de trabalho
          </span><br/>
          <a>
            <button>COMEÇAR AGORA</button>
          </a>
        </section>
          <img src="/images/banner-conteudos.png" alt="Conteúdos Sujeito Programador" />
        </div>
      </main>
    </>
  );
}
