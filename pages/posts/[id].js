import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostsData, getPostData } from '../../utils/api';

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.updatedAt} />
				</div>
        <img src={postData.image} alt={postData.title} style={{marginTop: '10px'}}/>
				<div dangerouslySetInnerHTML={{ __html: postData.content }} />
			</article>
		</Layout>
	);
}

export async function getStaticPaths() {
	const allPostsData = await getAllPostsData();
	const paths = allPostsData.map((post) => ({ params: { id: post.id } }));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
