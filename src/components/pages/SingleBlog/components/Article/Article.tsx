const Article = () => {
	const blogPosts = [
		{
			id: 1,
			title: 'Building a Blog with Next.js and MDX',
			date: '2024-03-15',
			excerpt: 'Learn how to create a modern blog using Next.js and MDX',
			slug: 'nextjs-mdx-blog',
			content: (
				<article className="lg:w-3/4" key={1}>
					<h2 id="preface" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
						Preface
					</h2>
					<p className="mb-4 text-sm text-white/60 md:text-base">The packages to be used:</p>
					<ul className="mb-4 list-inside list-disc text-sm text-white/60 md:text-base">
						<li className="mb-2 text-sm text-white/60 md:text-base">Next.js framework</li>
						<li className="mb-2 text-sm text-white/60 md:text-base">
							next-mdx-remote for handling MDX content
						</li>
						<li className="mb-2 text-sm text-white/60 md:text-base">
							gray-matter for parsing front matter
						</li>
					</ul>

					<h2 id="how-to-create-a-blog" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
						How to create a blog
					</h2>
					<p className="mb-4 text-sm text-white/60 md:text-base">
						First, create the Next.js project:
					</p>
					<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
						<code>yarn create next-app nextjs-mdx-blog</code>
					</pre>

					<p className="mb-4 text-sm text-white/60 md:text-base">Required file structure:</p>
					<ul className="mb-4 list-inside list-disc text-sm text-white/60 md:text-base">
						<li className="mb-2 text-sm text-white/60 md:text-base">
							<code>components/layout.jsx</code>
						</li>
						<li className="mb-2 text-sm text-white/60 md:text-base">
							<code>data/blog/*.mdx</code>
						</li>
						<li className="mb-2 text-sm text-white/60 md:text-base">
							<code>lib/format-date.js</code>
						</li>
						<li className="mb-2 text-sm text-white/60 md:text-base">
							<code>pages/blog/[slug].jsx</code>
						</li>
					</ul>

					<h3 id="markdown-handling" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
						Markdown Handling
					</h3>
					<p className="mb-4 text-sm text-white/60 md:text-base">Basic MDX file example:</p>
					<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
						<code>{`---
  title: "My First Post"
  date: "2023-01-01"
  ---
  
  # Hello World
  
  This is my first blog post!`}</code>
					</pre>

					<h3 id="home-page" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
						Home Page
					</h3>
					<p className="mb-4 text-sm text-white/60 md:text-base">Basic blog listing page:</p>
					<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
						<code>{`export default function Home({ posts }) {
    return (
      <div>
        {posts.map(post => (
          <article key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    )
  }`}</code>
					</pre>

					<h3 id="article-page" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
						Article Page
					</h3>
					<p className="mb-4 text-sm text-white/60 md:text-base">Basic article template:</p>
					<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
						<code>{`export default function Post({ post }) {
    return (
      <article>
        <h1>{post.title}</h1>
        <div>{post.content}</div>
      </article>
    )
  }`}</code>
					</pre>
				</article>
			),
		},
	];
	return <>{blogPosts.map((post) => post.content)}</>;
};

export default Article;
