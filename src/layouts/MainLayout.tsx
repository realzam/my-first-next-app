import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "./MainLayout.module.css";

type Props = {
  children: JSX.Element | JSX.Element[];
};
const MainLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Sergio</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
