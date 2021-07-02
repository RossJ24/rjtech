import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Header } from '../components/Header/Header';
import styles from '../styles/Home.module.css'
import { NameCard } from '../components/NameCard/NameCard';
import { Projects, ProjectsProps } from '../components/Projects/Projects';
import { AboutCard } from '../components/AboutCard/AboutCard';
import { getProjects, Project } from '../utils/get-projects';
import { HamburgerMenu } from '../components/HamburgerMenu/HamburgerMenu';

export const getStaticProps: GetStaticProps = async (context) => {
  const regenTimeout = 60 * 60 * 4;
  let projects: Project[] = await getProjects();
  return {
    revalidate: regenTimeout,
    props: {
      projects,
    }
  }
}

export default function Home({ projects }: ProjectsProps) {
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
          <AboutCard />
          <Projects
            projects={projects}
          />
        </main>
      </div>
    </>
  )
}
