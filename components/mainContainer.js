import styles from "../styles/navbar.module.css";
import Head from "next/head";
import A from "../components/A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"test, nextjs" + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className={styles.navbar}>
        <A href={"/"} text="Главная"></A>
        <A href={"/users"} text="Пользователи"></A>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
