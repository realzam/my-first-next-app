import Link from "next/link";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className={styles.title}>
        Ir a <Link href="/about">About</Link>
      </h1>
      <p className={styles.description}>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/about.tsx</code>
      </p>
    </MainLayout>
  );
}
