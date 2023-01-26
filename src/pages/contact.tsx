import styles from "@/styles/Home.module.css";
import Link from "next/link";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={styles.title}>
        Ir a <Link href="/">home</Link>
      </h1>
      <p className={styles.description}>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/contact.tsx</code>
      </p>
    </MainLayout>
  );
}
