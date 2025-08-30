export const blogData = [
	{
		id: 1,
		title: 'Building a Modern Blog with Next.js and MDX',
		href: '/blog/building-a-modern-blog-with-nextjs-and-mdx',
		date: '2025-08-15',
		author: 'Golam Rabbani',
		excerpt: 'Step-by-step guide to creating a high-performance blog using Next.js and MDX',
		slug: 'nextjs-mdx-blog',
		tags: ['nextjs', 'mdx', 'blog'],
		readingTime: '8 min read',
		image: {
			src: '/images/nextjs.png',
			alt: 'Next.js MDX Blog',
		},
		content: (
			<article className="lg:w-3/4" key={1}>
				<h2 id="preface" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Why Next.js for Blogging?
				</h2>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					Next.js provides the perfect foundation for blogs with:
				</p>
				<ul className="mb-4 list-inside list-disc text-sm text-white/60 md:text-base">
					<li className="mb-2">Static site generation for fast loading</li>
					<li className="mb-2">Built-in API routes for custom functionality</li>
					<li className="mb-2">Automatic code splitting for optimized performance</li>
					<li className="mb-2">Image optimization with next/image</li>
					<li className="mb-2">Built-in CSS and Sass support</li>
				</ul>

				<h2 id="setup" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Project Setup
				</h2>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>npx create-next-app@latest my-blog</code>
				</pre>

				<h3 id="mdx-config" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					MDX Configuration
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// next.config.js
const withMDX = require('@next/mdx')()
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
})`}</code>
				</pre>

				<h3 id="folder-structure" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					Recommended Folder Structure
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`my-blog/
├── components/
│   ├── Layout.jsx
│   └── MarkdownComponents.jsx
├── content/
│   └── posts/
│       ├── first-post.mdx
│       └── second-post.mdx
├── pages/
│   ├── blog/
│   │   └── [slug].jsx
│   └── _app.js
├── public/
│   └── images/
└── styles/`}</code>
				</pre>

				<h2 id="content-management" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Content Management
				</h2>
				<h3 id="frontmatter" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					Frontmatter Example
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`---
title: "My First Post"
date: "2024-01-01"
author: "Golam Rabbani"
excerpt: "Introduction to Next.js blogging"
tags: ["nextjs", "tutorial"]
coverImage: "/images/cover.jpg"
---`}</code>
				</pre>

				<h3 id="markdown-components" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					Custom MDX Components
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// components/MarkdownComponents.jsx
import { Tweet } from 'react-tweet'

export const components = {
  h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
  Callout: ({ children }) => (
    <div className="p-4 my-6 bg-blue-50 border-l-4 border-blue-500">
      {children}
    </div>
  ),
  Tweet
}`}</code>
				</pre>

				<h2 id="dynamic-routes" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Dynamic Routes Implementation
				</h2>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// pages/blog/[slug].jsx
import { getPostBySlug, getAllPosts } from '../../lib/api'

export async function getStaticPaths() {
  const posts = getAllPosts()
  
  return {
    paths: posts.map(post => ({
      params: { slug: post.slug }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  
  return {
    props: { post }
  }
}`}</code>
				</pre>

				<h3 id="api-implementation" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					API Implementation
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// lib/api.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug,
      ...data
    }
  })
}`}</code>
				</pre>

				<h2 id="deployment" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Deployment
				</h2>
				<div className="grid md:grid-cols-2 gap-4 my-6">
					<div className="p-4 border rounded-lg">
						<h4 className="font-bold mb-2">Vercel</h4>
						<pre className="text-sm">
							<code>{`# Install Vercel CLI
npm i -g vercel

# Deploy
vercel`}</code>
						</pre>
					</div>
					<div className="p-4 border rounded-lg">
						<h4 className="font-bold mb-2">Netlify</h4>
						<pre className="text-sm">
							<code>{`# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod`}</code>
						</pre>
					</div>
				</div>

				<h3 id="ci-cd" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					CI/CD Integration
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}`}</code>
				</pre>
			</article>
		),
	},
	{
		id: 2,
		title: 'React Hooks: Beyond the Basics',
		href: '/blog/react-hooks-beyond-the-basics',
		date: '2025-08-10',
		author: 'Golam Rabbani',
		excerpt: 'Master advanced React Hooks patterns for professional applications',
		slug: 'advanced-react-hooks',
		tags: ['react', 'hooks', 'javascript'],
		readingTime: '10 min read',
		image: {
			src: '/images/react-hooks-best-practices-lead_.jpg',
			alt: 'Next.js MDX Blog',
		},
		content: (
			<article className="lg:w-3/4" key={2}>
				<h2 id="custom-hooks" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Building Custom Hooks
				</h2>

				<p className="mb-4 text-sm text-white/60 md:text-base">
					Custom hooks let you extract component logic into reusable functions. Here are several
					practical examples:
				</p>

				<h3 id="local-storage-hook" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					1. Local Storage Hook
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      // Only runs on client-side
      if (typeof window !== 'undefined') {
        const stored = window.localStorage.getItem(key)
        return stored !== null ? JSON.parse(stored) : initialValue
      }
      return initialValue
    } catch (error) {
      console.error('LocalStorage error:', error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('LocalStorage error:', error)
    }
  }, [key, value])

  return [value, setValue]
}`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>Usage:</strong> Persist form inputs, user preferences, or theme settings across
					sessions.
				</p>

				<h3 id="fetch-hook" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					2. Data Fetching Hook
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)
        if (!response.ok) throw new Error(response.statusText)
        
        const json = await response.json()
        setData(json)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    
    return () => {
      // Cleanup function to abort fetch if component unmounts
    }
  }, [url])

  return { data, error, loading }
}`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>Usage:</strong> Standardize API calls across your application with built-in
					loading and error states.
				</p>

				<h3 id="intersection-observer-hook" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					3. Intersection Observer Hook
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`function useIntersectionObserver(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return isIntersecting
}`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>Usage:</strong> Implement lazy loading, infinite scroll, or trigger animations
					when elements become visible.
				</p>

				<h2 id="performance" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Performance Optimization
				</h2>

				<h3 id="memoization" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					1. Memoization Techniques
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// Memoize expensive calculations
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b] // Only recompute when dependencies change
)

// Memoize functions to prevent unnecessary re-renders
const memoizedCallback = useCallback(
  () => doSomething(a, b),
  [a, b]
)

// Memoize entire components
const MemoizedComponent = React.memo(Component, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value
})`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>When to use:</strong> When passing callbacks to optimized child components or
					computing derived data.
				</p>

				<h3 id="virtualization" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					2. List Virtualization
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`import { FixedSizeList as List } from 'react-window'

function BigList({ data }) {
  return (
    <List
      height={600}
      itemCount={data.length}
      itemSize={50}
      width={'100%'}
    >
      {({ index, style }) => (
        <div style={style}>
          {data[index]}
        </div>
      )}
    </List>
  )
}`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>Usage:</strong> Render large lists efficiently by only showing visible items.
				</p>

				<h3 id="code-splitting" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					3. Code Splitting
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// Dynamic import with React.lazy
const HeavyComponent = React.lazy(() => import('./HeavyComponent'))

function MyComponent() {
  return (
    <Suspense fallback={<Spinner />}>
      <HeavyComponent />
    </Suspense>
  )
}

// Next.js dynamic imports
const DynamicComponent = dynamic(
  () => import('../components/HeavyComponent'),
  { loading: () => <p>Loading...</p>, ssr: false }
)`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>Benefits:</strong> Reduce initial bundle size by loading components only when
					needed.
				</p>

				<h3 id="profiling" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					4. Performance Profiling
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// Wrap components to measure rendering time
import { unstable_trace as trace } from 'scheduler/tracing'

function ExpensiveComponent() {
  return trace('ExpensiveComponent render', performance.now(), () => (
    <div>{/* ... */}</div>
  ))
}

// Use React DevTools Profiler
// or Chrome Performance tab to identify bottlenecks`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>Tip:</strong> Always measure before optimizing to focus on real performance
					issues.
				</p>
			</article>
		),
	},
	{
		id: 3,
		title: 'TypeScript with Next.js: Complete Guide',
		href: '/blog/typescript-with-nextjs-complete-guide',
		date: '2025-08-05',
		author: 'Golam Rabbani',
		excerpt: 'How to properly integrate TypeScript in your Next.js projects',
		slug: 'nextjs-typescript',
		tags: ['nextjs', 'typescript'],
		readingTime: '12 min read',
		image: {
			src: '/images/nextjs-types.jpg',
			alt: 'Next.js MDX Blog',
		},
		content: (
			<article className="lg:w-3/4" key={3}>
				<h2 id="typescript-setup" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					TypeScript in Next.js: Complete Setup Guide
				</h2>

				<h3 id="initial-config" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					1. Initial Setup
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`# Initialize TypeScript config
touch tsconfig.json

# Install required dependencies
npm install --save-dev typescript @types/react @types/node

# Next.js will automatically configure TypeScript
# when you run the dev server after adding tsconfig.json
npm run dev`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					Next.js will automatically create a <code>tsconfig.json</code> with recommended settings
					when you start the dev server.
				</p>

				<h3 id="custom-config" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					2. Customizing tsconfig.json
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					This configuration enables strict type checking, path aliases, and other recommended
					settings for Next.js projects.
				</p>

				<h2 id="typing-components" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Typing Components
				</h2>

				<h3 id="props-typing" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					1. Component Props
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`interface BlogPostProps {
  title: string;
  content: string;
  publishedAt: Date;
  tags?: string[]; // Optional prop
  views: number;
  featured?: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  title, 
  content, 
  publishedAt,
  tags = [], // Default value for optional prop
  views,
  featured = false
}) => {
  return (
    <article className={featured ? 'border-2 border-yellow-400' : ''}>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex gap-4 my-2">
        <time dateTime={publishedAt.toISOString()}>
          {publishedAt.toLocaleDateString()}
        </time>
        <span>{views} views</span>
      </div>
      {tags.length > 0 && (
        <div className="flex gap-2 my-2">
          {tags.map(tag => (
            <span key={tag} className="bg-gray-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="prose">{content}</div>
    </article>
  )
}`}</code>
				</pre>

				<h3 id="children-typing" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					2. Typing Children
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`interface CardProps {
  title: string;
  children: React.ReactNode; // For any React children
}

const Card = ({ title, children }: CardProps) => (
  <div className="border rounded-lg p-4">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {children}
  </div>
)

// Usage:
<Card title="Featured Post">
  <p>This content will be rendered as children</p>
  <button>Click me</button>
</Card>`}</code>
				</pre>

				<h2 id="advanced-types" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Advanced Type Patterns
				</h2>

				<h3 id="utility-types" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					1. Utility Types
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// Partial: Make all properties optional
type DraftPost = Partial<BlogPostProps>

// Pick: Select specific properties
type PostPreview = Pick<BlogPostProps, 'title' | 'publishedAt'>

// Omit: Remove specific properties
type PostWithoutViews = Omit<BlogPostProps, 'views'>

// Record: Dictionary type
type CategoryPosts = Record<string, BlogPostProps[]>

// Extract union types from arrays
const tags = ['react', 'nextjs', 'typescript'] as const
type Tag = typeof tags[number] // 'react' | 'nextjs' | 'typescript'`}</code>
				</pre>

				<h3 id="generics" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					2. Generic Components
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

// Usage with different types:
<List 
  items={posts} 
  renderItem={(post) => <PostCard {...post} />} 
/>

<List
  items={[1, 2, 3]}
  renderItem={(number) => <span>{number}</span>}
/>`}</code>
				</pre>

				<h2 id="api-routes" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Typing API Routes
				</h2>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// types/api.ts
export interface ApiResponse<T> {
  data?: T
  error?: string
  success: boolean
}

// pages/api/posts.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from '../../types/api'

interface PostData {
  id: string
  title: string
  content: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<PostData[]>>
) {
  try {
    const posts: PostData[] = await getPostsFromDB()
    res.status(200).json({ 
      success: true, 
      data: posts 
    })
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch posts' 
    })
  }
}`}</code>
				</pre>

				<h3 id="react-hooks" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					Typing Custom Hooks
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`function useLocalStorage<T>(
  key: string, 
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}`}</code>
				</pre>
			</article>
		),
	},
	{
		id: 4,
		title: 'Modern JavaScript Patterns You Should Know',
		href: '/blog/modern-javascript-patterns-you-should-know',
		date: '2025-07-28',
		author: 'Golam Rabbani',
		excerpt: 'Essential JavaScript patterns for clean and maintainable code',
		slug: 'modern-javascript-patterns',
		tags: ['javascript', 'es6'],
		readingTime: '9 min read',
		image: {
			src: '/images/modern-js.jpg',
			alt: 'Modern JavaScript Patterns',
		},
		content: (
			<article className="lg:w-3/4" key={4}>
				<h2 id="destructuring" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Modern JavaScript: Destructuring and Null Safety
				</h2>

				<h3 id="object-destructuring" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					1. Advanced Object Destructuring
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// Basic destructuring
const { name, age } = user;

// Renaming variables
const { name: userName, age: userAge } = user;

// Default values
const { role = 'user', permissions = [] } = user;

// Nested destructuring
const { 
  address: { city, country }, 
  preferences: { theme = 'light' } 
} = user;

// Rest pattern
const { id, ...userDetails } = user;

// Function parameters
function createUser({ name, email, role = 'member' }) {
  return { name, email, role };
}`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>Practical use:</strong> Cleanly extract values from API responses or component
					props.
				</p>

				<h3 id="array-destructuring" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					2. Array Destructuring Patterns
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// Basic array destructuring
const [first, second] = colors;

// Skipping items
const [primary, , tertiary] = colors;

// Rest operator
const [head, ...tail] = numbers;

// Default values
const [firstItem = 'default'] = maybeEmptyArray;

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a]; // a=2, b=1

// React useState
const [state, setState] = useState(initialValue);

// Multiple return values
function usePagination() {
  // ...
  return [currentPage, totalPages, goToPage];
}`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>Practical use:</strong> Working with React hooks, tuple returns, and array
					manipulation.
				</p>

				<h2 id="null-safety" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Null Safety Operators
				</h2>

				<h3 id="optional-chaining" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					1. Optional Chaining (?.)
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// Safe property access
const username = user?.profile?.name;

// Safe array access
const firstItem = items?.[0];

// Safe function calls
const result = apiResponse?.getData?.();

// React component optional props
function UserCard({ user }) {
  return (
    <div>
      <h2>{user?.name ?? 'Anonymous'}</h2>
      <p>{user?.bio?.trim() || 'No bio provided'}</p>
    </div>
  );
}

// Optional chaining with destructuring
const { preferences: { darkMode = false } = {} } = user ?? {};`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>When to use:</strong> When dealing with nested data that might be undefined.
				</p>

				<h3 id="nullish-coalescing" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					2. Nullish Coalescing (??)
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// Default values only for null/undefined
const pageSize = userPreference ?? 10; // 0, '', false are kept

// Combined with optional chaining
const displayName = user?.name ?? 'Guest';

// Configuration fallbacks
const config = {
  timeout: userTimeout ?? defaultTimeout,
  retries: maxRetries ?? 3
};

// React state initialization
const [count, setCount] = useState(initialCount ?? 0);

// Difference from || operator
const value = 0;
console.log(value || 10); // 10 (0 is falsy)
console.log(value ?? 10); // 0 (only null/undefined trigger fallback)`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>Key difference:</strong> <code>??</code> only falls back for <code>null</code> or{' '}
					<code>undefined</code>, while <code>||</code> falls back for any falsy value.
				</p>

				<h3 id="practical-patterns" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					3. Combined Practical Patterns
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// API response handling
const posts = apiResponse?.data?.posts ?? [];

// Configuration with defaults
const settings = {
  theme: userConfig?.theme ?? 'light',
  notifications: userConfig?.notifications ?? true,
  itemsPerPage: userConfig?.pagination?.limit ?? 10
};

// React component with safe props
function ProductCard({ product }) {
  const { 
    name = 'Unnamed Product',
    price = 0,
    images = [],
    details = {}
  } = product ?? {};
  
  const primaryImage = images?.[0]?.url ?? '/placeholder.jpg';

  return (
    <div className="card">
      <img src={primaryImage} alt={name} />
      <h3>{name}</h3>
      <p>${'price.toFixed(2)'}</p>
      <p>{details?.description ?? 'No description available'}</p>
    </div>
  );
}

// Function parameters with defaults
function createOrder({
  items = [],
  customer = {},
  shipping = 'standard',
  discount = 0
} = {}) {
  // ...
}`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>Best practice:</strong> Combine these techniques for robust data handling in
					real-world applications.
				</p>
			</article>
		),
	},
	{
		id: 5,
		title: 'Next.js API Routes: Complete Guide',
		href: '/blog/nextjs-api-routes-complete-guide',
		date: '2025-07-20',
		author: 'Golam Rabbani',
		excerpt: 'How to build powerful backend APIs directly in your Next.js application',
		slug: 'nextjs-api-routes',
		tags: ['nextjs', 'api', 'backend'],
		readingTime: '11 min read',
		image: {
			src: '/images/next-api.jpg',
			alt: 'Next.js API Routes',
		},
		content: (
			<article className="lg:w-3/4" key={5}>
				<h2 id="api-routes" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Next.js API Routes: Complete Guide
				</h2>

				<h3 id="basic-route" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					1. Basic API Route
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// pages/api/hello.js
    export default function handler(req, res) {
      // Set caching headers
      res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
      
      // Return JSON response
      res.status(200).json({ 
        message: 'Hello World',
        timestamp: new Date().toISOString() 
      });
    }`}</code>
				</pre>
				<p className="mb-4 text-sm text-white/60 md:text-base">
					<strong>Key points:</strong> Automatic route creation, no CORS needed for same-origin
					requests.
				</p>

				<h3 id="rest-api" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					2. RESTful API Implementation
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// pages/api/posts/[id].js
    import { getPost, createPost, updatePost, deletePost } from '../../../lib/posts';
    
    export default async function handler(req, res) {
      const { id } = req.query;
    
      try {
        switch (req.method) {
          case 'GET':
            const post = await getPost(id);
            return res.status(200).json(post);
          
          case 'POST':
            const createdPost = await createPost(req.body);
            return res.status(201).json(createdPost);
          
          case 'PUT':
            const updatedPost = await updatePost(id, req.body);
            return res.status(200).json(updatedPost);
          
          case 'DELETE':
            await deletePost(id);
            return res.status(204).end();
          
          default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            return res.status(405).json({ 
              error: Method \${req.method} Not Allowed
            });
        }
      } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ 
          error: 'Internal Server Error',
          details: error.message 
        });
      }
    }`}</code>
				</pre>

				<h3 id="middleware" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					3. Route Middleware
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// pages/api/_middleware.js
    import { NextResponse } from 'next/server';
    
    export function middleware(req) {
      // Authentication check
      const token = req.cookies.get('authToken');
      if (!token) {
        return NextResponse.redirect('/login');
      }
    
      // Add security headers
      const response = NextResponse.next();
      response.headers.set('X-Content-Type-Options', 'nosniff');
      response.headers.set('X-Frame-Options', 'DENY');
      
      return response;
    }
    
    // pages/api/protected-route.js
    export default function handler(req, res) {
      // This route is automatically protected by the middleware
      res.status(200).json({ secretData: 'Authenticated content' });
    }`}</code>
				</pre>

				<h2 id="advanced-patterns" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Advanced API Patterns
				</h2>

				<h3 id="dynamic-handlers" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					1. Dynamic Route Handlers
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// pages/api/[...slug].js - Catch-all route
    export default function handler(req, res) {
      const { slug } = req.query;
      const path = slug.join('/');
      
      if (path === 'users/profile') {
        return res.status(200).json({ user: 'Profile Data' });
      }
      
      if (path.startsWith('products/')) {
        const productId = path.split('/')[1];
        return res.status(200).json({ productId });
      }
      
      return res.status(404).json({ error: 'Endpoint not found' });
    }`}</code>
				</pre>

				<h3 id="typed-routes" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					2. Type-Safe API Routes
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// types/api.ts
    import type { NextApiRequest, NextApiResponse } from 'next';
    
    type ResponseData<T = any> = {
      data?: T;
      error?: string;
      success: boolean;
    };
    
    interface Post {
      id: string;
      title: string;
      content: string;
    }
    
    // pages/api/posts.ts
    export default async function handler(
      req: NextApiRequest,
      res: NextApiResponse<ResponseData<Post[]>>
    ) {
      try {
        if (req.method !== 'GET') {
          return res.status(405).json({ 
            success: false, 
            error: 'Method not allowed' 
          });
        }
    
        const posts = await fetchPostsFromDB();
        return res.status(200).json({ 
          success: true, 
          data: posts 
        });
      } catch (error) {
        return res.status(500).json({ 
          success: false, 
          error: 'Server error' 
        });
      }
    }`}</code>
				</pre>

				<h3 id="edge-functions" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					3. Edge Function API Routes
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// pages/api/hello-edge.ts
    import { NextResponse } from 'next/server';
    import type { NextRequest } from 'next/server';
    
    export const config = {
      runtime: 'edge', // Specifies the Edge Runtime
    };
    
    export default function handler(request: NextRequest) {
      // Get query params
      const { searchParams } = new URL(request.url);
      const name = searchParams.get('name') || 'World';
    
      // Access headers
      const userAgent = request.headers.get('user-agent');
    
      return NextResponse.json({
        message: \`Hello \${name} from the Edge!\`,
        userAgent,
        timestamp: new Date().toISOString(),
      });
    }`}</code>
				</pre>

				<h2 id="best-practices" className="mb-4 mt-8 text-xl font-semibold md:text-3xl">
					Best Practices
				</h2>
				<div className="grid md:grid-cols-2 gap-4 my-6">
					<div className="p-4 border rounded-lg">
						<h4 className="font-bold mb-2">Security</h4>
						<ul className="list-disc pl-5 space-y-1 text-sm">
							<li>Validate all incoming data</li>
							<li>Sanitize user inputs</li>
							<li>Use HTTPS exclusively</li>
							<li>Implement rate limiting</li>
							<li>Set proper CORS headers</li>
						</ul>
					</div>
					<div className="p-4 border rounded-lg">
						<h4 className="font-bold mb-2">Performance</h4>
						<ul className="list-disc pl-5 space-y-1 text-sm">
							<li>Cache responses when possible</li>
							<li>Use Edge Functions for low-latency</li>
							<li>Implement pagination for large datasets</li>
							<li>Compress responses with gzip/brotli</li>
							<li>Batch requests when appropriate</li>
						</ul>
					</div>
				</div>

				<h3 id="error-handling" className="mb-3 mt-6 text-lg font-semibold md:text-2xl">
					Error Handling Pattern
				</h3>
				<pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-white/80 md:text-base">
					<code>{`// lib/api-handler.js
    export default function apiHandler(handler) {
      return async (req, res) => {
        const method = req.method.toLowerCase();
        
        // Check handler supports HTTP method
        if (!handler[method]) {
          return res.status(405).end(\`Method \${req.method} Not Allowed\`);
        }
    
        try {
          // Global middleware (e.g., authentication)
          await authenticate(req);
    
          // Route handler
          await handler[method](req, res);
        } catch (err) {
          // Global error handler
          errorHandler(err, req, res);
        }
      };
    }
    
    // pages/api/protected-route.js
    import apiHandler from '../../lib/api-handler';
    
    const handler = {
      get: async (req, res) => {
        const data = await fetchData();
        res.json(data);
      },
      post: async (req, res) => {
        const result = await createItem(req.body);
        res.status(201).json(result);
      }
    };
    
    export default apiHandler(handler);`}</code>
				</pre>
			</article>
		),
	},
];
