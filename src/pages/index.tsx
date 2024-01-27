import { GetStaticProps } from "next";
import styles from "../styles/home.module.scss";
import Image from "next/image";
import Head from "next/head";
import TecsImage from "../../public/images/techs.svg";

import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";


type Content ={
  title:string,
  sub: string,
  linkaction:string,
  mobile: string,
  mobileContent:string,
  mobileBanner:string,
  titleWeb:string,
  webContent:string,
  webBanner: string,
}

interface ContentProps{
content: Content

}

export default function Home({content}:ContentProps) {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <span>
             {content.sub}
            </span>
            <br />
            <a href={content.linkaction}>
              <button>Começar Agora</button>
            </a>
          </section>
          <img
            src={"/images/banner-conteudos.png"}
            alt="Conteúdos Sujeito Programador"
          />
        </div>
        <hr className={styles.divisor} />
        <div className={styles.sectionContent}>
          <section>
            <h2>{content.mobile}</h2>
            <span>
              {content.mobileContent}
            </span>
          </section>
          <img
            src={content.mobileBanner}
            alt="conteudo de desenvolvimentos de apps"
          />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img
            src={content.webBanner}
            alt="conteudo de desenvolvimentos de aplicações web"
          />
          <section>
            <h2>{content.titleWeb}</h2>
            <span>
             {content.webContent}
            </span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image src={TecsImage} alt="Tecnologias" />
          <h2>
            Mais de <span className={styles.alunos}>15 mil </span> ja levaram
            suas carreiras ao proximo nível
          </h2>
          <span>
            E você vai perder a chance de evoluir de uma vez por todas?
          </span>
          <a href={content.linkaction}>
            <button>ACESSAR TURMA!</button>
          </a>
        </div>
      </main>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  //conectando com prismic
  const prismic = getPrismicClient();

  //realizando a conexão com prismic
  const response = await prismic.query([
    Prismic.predicates.at("document.type", "home"),
  ]);
  /* console.log(response.results[0].data) */
  const {
    title,
    sub_title,
    link_action,
    mobile,
    mobile_content,
    mobile_banner,
    title_web,
    web_content,
    web_banner,
  } = response.results[0].data;

  const content = {
    title: RichText.asText(title),
    sub: RichText.asText(sub_title),
    linkaction: link_action.url,
    mobile: RichText.asText(mobile),
    mobileContent: RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    titleWeb: RichText.asText(title_web),
    webContent: RichText.asText(web_content),
    webBanner: web_banner.url,
  };

  return {
    props: {
      content,
      revalidade:60*60*2 //gerado a cada duas horas
    },
  };
};
