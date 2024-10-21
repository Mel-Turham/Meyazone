import { blogPosts } from '@/db';
import { BlogPost } from '@/types';

function getAllBlogs(): BlogPost[] {
	return blogPosts.map((blogPost) => ({
		id: blogPost.id,
		title: blogPost.title,
		author: blogPost.author,
		tags: blogPost.tags,
		publishDate: blogPost.publishDate,
		imageUrl: blogPost.imageUrl,
		description: blogPost.description,
		customTitle: blogPost.customTitle,
		videoUrl: blogPost.videoUrl,
	}));
}

export default getAllBlogs;
