import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import firstPost from "../../../public/images/thumb.png";
import {FiChevronLeft, FiChevronsLeft,FiChevronRight,FiChevronsRight} from 'react-icons/fi'
const Posts = () => {
  return (
    <>
      <Head>
        <title>Blog | OscarDev</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src={firstPost}
                alt="Post Titulo 1"
                width={720}
                height={410}
                quality="100"
              />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>14 julho 2023</time>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                totam tenetur obcaecati corrupti, perspiciatis explicabo, nam
                illo sint ipsa possimus accusamus quasi, atque ea nisi vero eius
                nihil repellendus. Odit!
              </p>
            </a>
          </Link>
          <div className={styles.buttonNavigate}>
            <div>
               <button>
               <FiChevronLeft
               size={22}
               
               />
               </button>
               <button>
               <FiChevronsLeft
               size={22}
              
               />
               </button>
            </div>
            <div>
               <button>
               <FiChevronRight
               size={22}
               
               />
               </button>
               <button>
               <FiChevronsRight
               size={22}
              
               />
               </button>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default Posts;
