import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Header } from '../components/Header/Header';
import styles from '../styles/Home.module.css'
import { NameCard } from '../components/NameCard/NameCard';
import { Projects } from '../components/Projects/Projects';
import { HamburgerMenu } from '../components/HamburgerMenu/HamburgerMenu';
import { RelatedCourseWork } from '../components/RelatedCoursework/RelatedCoursework';
import { getCourses, Course } from '../utils/get-courses';

export const getStaticProps: GetStaticProps = async (context) => {
  const regenTimeout = 60 * 60 * 4;
  let courses: Course[] = getCourses();
  return {
    revalidate: regenTimeout,
    props: {
      courses
    }
  }
}

type HomeProps = {
  courses: Course[]
}

export default function Home({ courses }: HomeProps) {
  return (
    <>
      <Head>
        <title>Ross Johnson</title>
        <meta name="description" content="Ross Johnson's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.menu}>
          <HamburgerMenu />
        </div>
        <Header />
        <main className={styles.main}>
          <NameCard />
          <RelatedCourseWork
            courses={courses}
          />
        </main>
      </div>
    </>
  )
}
