const get = async (route) => {
	const URL = 'https://ckucijpib12919151bs6rwwjg22p-server-vn57etnuya-ue.a.run.app';
	const myHeaders = new Headers();
	myHeaders.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	const response = await fetch(
		`https://ckucijpib12919151bs6rwwjg22p-server-vn57etnuya-ue.a.run.app${route}`,
		requestOptions
	);

	const result = await response.json();
	return result;
};

export const getAllPostsData = async () => {
	return await get('/api/posts');
};

export const getPostData = async (postId) => {
	return await get(`/api/posts/${postId}`);
};
