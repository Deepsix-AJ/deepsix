import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - DEEPSIX DEV',
  description: 'Technical insights, tutorials, and thoughts on full-stack development, system design, and modern web technologies.',
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Microservices with Node.js and Docker',
      excerpt: 'Learn how to design and implement microservices architecture that can handle millions of requests while maintaining performance and reliability.',
      category: 'Architecture',
      readTime: '8 min read',
      date: '2024-01-15',
      author: 'Deepsix Dev',
      tags: ['Microservices', 'Node.js', 'Docker', 'Architecture'],
      featured: true
    },
    {
      id: 2,
      title: 'Optimizing React Performance: A Deep Dive',
      excerpt: 'Advanced techniques for improving React application performance, including code splitting, memoization, and bundle optimization.',
      category: 'Frontend',
      readTime: '12 min read',
      date: '2024-01-10',
      author: 'Deepsix Dev',
      tags: ['React', 'Performance', 'Optimization', 'JavaScript']
    },
    {
      id: 3,
      title: 'Cloud-Native Development with AWS and Kubernetes',
      excerpt: 'Complete guide to building and deploying cloud-native applications using AWS services and Kubernetes orchestration.',
      category: 'Cloud',
      readTime: '15 min read',
      date: '2024-01-05',
      author: 'Deepsix Dev',
      tags: ['AWS', 'Kubernetes', 'Cloud', 'DevOps']
    },
    {
      id: 4,
      title: 'Creating Immersive 3D Web Experiences',
      excerpt: 'Explore the world of 3D web development using Three.js, WebGL, and modern web technologies for engaging user experiences.',
      category: '3D Web',
      readTime: '10 min read',
      date: '2023-12-28',
      author: 'Deepsix Dev',
      tags: ['Three.js', 'WebGL', '3D', 'Web Development']
    },
    {
      id: 5,
      title: 'Database Design Patterns for High-Performance Applications',
      excerpt: 'Essential database design patterns and optimization strategies for building fast, scalable applications.',
      category: 'Backend',
      readTime: '14 min read',
      date: '2023-12-20',
      author: 'Deepsix Dev',
      tags: ['Database', 'Performance', 'SQL', 'Architecture']
    },
    {
      id: 6,
      title: 'The Future of Web Development: What\'s Next?',
      excerpt: 'Predictions and insights into emerging web technologies and how they will shape the future of development.',
      category: 'Trends',
      readTime: '6 min read',
      date: '2023-12-15',
      author: 'Deepsix Dev',
      tags: ['Web Development', 'Future', 'Technology', 'Trends']
    }
  ]

  const categories = ['All', 'Architecture', 'Frontend', 'Backend', 'Cloud', '3D Web', 'Trends']

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-h1 font-bold text-text mb-6">
            Technical <span className="glow-text">Blog</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on full-stack development, system design, and modern web technologies
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <div key={post.id} className="card-glass p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="text-muted text-sm">{post.readTime}</span>
                  <span className="text-muted text-sm">{post.date}</span>
                </div>
                <h2 className="text-h2 font-bold text-text mb-4">{post.title}</h2>
                <p className="text-muted text-lg mb-6">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-surface text-muted text-sm rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                <a href={`/blog/${post.id}`} className="btn-primary">
                  Read Full Article
                </a>
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <span className="text-muted text-lg">Featured Post</span>
              </div>
            </div>
          </div>
        ))}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-primary/30 text-text hover:bg-primary/10 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="card-glass group hover:scale-105 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted text-sm">Blog Post</span>
              </div>
              
              <div className="flex items-center gap-4 mb-3">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                  {post.category}
                </span>
                <span className="text-muted text-sm">{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-surface text-muted text-xs rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted">
                  By {post.author} • {post.date}
                </div>
                <a href={`/blog/${post.id}`} className="text-primary hover:text-primary/80 transition-colors">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="card-glass p-8 text-center mb-16">
          <h2 className="text-h2 font-bold text-text mb-4">Stay Updated</h2>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Get the latest insights on web development, system design, and emerging technologies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-surface border border-primary/30 rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary"
            />
            <button className="btn-primary px-6 py-3">
              Subscribe
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-h2 font-bold text-text mb-6">Have a Topic in Mind?</h2>
          <p className="text-lg text-muted mb-8">
            I'm always looking for interesting topics to write about. Let me know what you'd like to learn more about!
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-4">
            Suggest a Topic
          </a>
        </div>
      </div>
    </div>
  )
}

