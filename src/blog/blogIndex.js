// Import blog post components
import ExamplePost from './posts/example-post';
import RelearningPhotography from './posts/relearning-photography';

// Blog posts configuration
export const blogPosts = [
  {
    id: 1,
    slug: 'relearning-photography',
    title: 'Relearning Photography',
    excerpt: 'After 10 years of chasing technical perfection, I\'m breaking all the rules to rediscover what photography truly means to me.',
    date: 'February 9, 2026',
    category: 'Personal',
    author: 'Jayden',
    coverImage: null,
    component: RelearningPhotography
  },
  {
    id: 2,
    slug: 'welcome-to-my-blog',
    title: 'Welcome to My Photography Blog',
    excerpt: 'An introduction to my blog and what you can expect to find here. Stories, tips, and insights from behind the lens.',
    date: 'February 9, 2026',
    category: 'Personal',
    author: 'Jayden',
    coverImage: null,
    component: ExamplePost
  },
  // Add more blog posts here following the same structure
  // {
  //   id: 2,
  //   slug: 'my-second-post',
  //   title: 'My Second Post',
  //   excerpt: 'A brief description of your post...',
  //   date: 'February 10, 2026',
  //   category: 'Photography Tips',
  //   author: 'Jayden',
  //   coverImage: require('../assets/images/photos/street/portfolio-001.jpg'),
  //   component: MySecondPost
  // },
];

export default blogPosts;
