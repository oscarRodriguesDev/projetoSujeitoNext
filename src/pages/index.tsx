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
              Uma plataforma com cursos que vão do zero ao profissional na
              prática, direto ao ponto, aplicando o que usamos no mercado de
              trabalho
            </span>
            <br />
            <a>
              <button>COMEÇAR AGORA</button>
            </a>
          </section>
          <img
            src="/images/banner-conteudos.png"
            alt="Conteúdos Sujeito Programador"
          />
        </div>
        <hr className={styles.divisor} />
        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos com Android e IOS</h2>
            <span>Você vai descobrir o jeito mais moderno apps nativos para IOS e Android, construindo aplicativos do zero até aplicativos</span>
          </section>
          <img src="/images/financasApp.png" alt="conteudo de desenvolvimentos de apps" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="conteudo de desenvolvimentos de aplicações web" />
          <section>
            <h2>Aprenda a criar Sistemas Web</h2>
            <span>Criar sistemas e sites usando as tecnologias mais modernas do mercado</span>
          </section>
        </div>

      </main>
    </>
  );
}
