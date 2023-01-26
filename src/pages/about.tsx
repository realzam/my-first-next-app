import styles from "@/styles/Home.module.css";
import Link from "next/link";
import MainLayout from "@/layouts/MainLayout";
import DarkLayout from "@/layouts/DarkLayout";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <h1>About Page</h1>

      <h1 className={styles.title}>
        Ir a <Link href="/">home</Link>
      </h1>
      <p className={styles.description}>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default AboutPage;
