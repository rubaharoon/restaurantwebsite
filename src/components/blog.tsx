import Image from 'next/image';

export interface BlogCardProps {
  imageSrc: string;
  title: string;
  date: string;
  comments: number;
  description: string;
  author: string;
}

// BlogCard component
const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  date,
  comments,
  description,
  author,
}) => {
  return (
    <div className="bg-purple-200 shadow-md rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image src={imageSrc} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="p-4">
        <div className="flex justify-between text-gray-500 text-sm mb-2">
          <span>{date}</span>
          <span>Comments: {comments}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <span className="text-purple-600 text-sm font-medium">{author}</span>
      </div>
    </div>
  );
};

// BlogSection component
const BlogSection: React.FC = () => {
  const blogPosts: BlogCardProps[] = [
    {
      imageSrc: '/images/blog1.png',
      title: 'Quick Cravings: Unraveling Fast Food Delights',
      date: '13 Oct 2024',
      comments: 12,
      description: 'From classic favorites to surprising new options...',
      author: 'Chef Mark',
    },
    {
      imageSrc: '/images/blog2.png',
      title: 'Veggie Vibes: Garden Fresh Delightful Creations',
      date: '15 Oct 2024',
      comments: 8,
      description: 'Explore the delicious world of vegetarian and vegan...',
      author: 'Chef Emma',
    },
    {
      imageSrc: '/images/blog3.png',
      title: 'Bold Bite: Exotic Flavors, Global Adventure',
      date: '18 Oct 2024',
      comments: 10,
      description: 'A journey across tastes of different cultures...',
      author: 'Chef Alex',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800">
          <span className="text-purple-400">News & Blogs</span>
        </h2>
        <h3 className="text-3xl font-semibold text-gray-600">Update News & Blog</h3>
      </div>
      <div className="container mx-auto grid gap-8 px-4 md:px-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
