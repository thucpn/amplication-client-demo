import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getAllPostsData } from '../utils/api';

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Sample blog built by Amplication and NextJs</p>
				<p>
					I use Amplication as the backend of my blog. That saves a lot of time because I don't need
					to write any lines of code to setup the CMS. UI is rendered from server side with NextJs (
					template from <a href='https://nextjs.org/learn'>Next.js tutorial</a>. )
				</p>
				<p>
					You should have a look at the <a href='https://nextjs.org/learn'>Admin dashboard</a> (username: admin, password: admin) that automatically generated by Amplication. That's awesome, all roles and permissions have been set up already.
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, updatedAt: date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = await getAllPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
