import { ExternalLink, Calendar } from "lucide-react";
import FadeIn from "../../components/FadeIn";

export const metadata = {
  title: "Blog | Komal Harshita",
  description: "Data analysis insights and articles by Komal Harshita.",
};

async function getMediumPosts() {
  try {
    // using RSS2JSON API to fetch medium feed
    const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@komalharshita", { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Failed to fetch Medium posts:", error);
    return [];
  }
}

function getAestheticThumbnail(post, idx) {
  // Ignore empty strings or Medium tracking pixels
  if (post.thumbnail && !post.thumbnail.includes("stat?event=post") && post.thumbnail.trim() !== "") {
    return post.thumbnail;
  }

  const title = (post.title || "").toLowerCase();
  
  // 1. Gemini and Imagen (GenAI Apps)
  if (title.includes("imagen") || title.includes("image generator") || title.includes("creative")) {
    return "/blog/blog-gemini-imagen.png";
  }
  
  // 2. Gemini API / Coding / Function Calling / Python
  if (title.includes("api") || title.includes("function calling") || title.includes("python")) {
    return "/blog/blog-gemini-api.png";
  }
  
  // 3. Multimodality / RAG / Data nodes
  if (title.includes("multimodality") || title.includes("rag") || title.includes("rich documents")) {
    return "/blog/blog-multimodality.png";
  }
  
  // 4. Prompt Design / Prompt Engineering / LLMs
  if (title.includes("prompt design") || title.includes("prompt engineering") || title.includes("prompt")) {
    return "/blog/blog-prompt-design.png";
  }

  // Premium fallbacks using local theme-matched blog images
  const fallbacks = [
    "/blog/blog-gemini-imagen.png",
    "/blog/blog-gemini-api.png",
    "/blog/blog-multimodality.png",
    "/blog/blog-prompt-design.png"
  ];
  
  return fallbacks[idx % fallbacks.length];
}

export default async function Blog() {
  const posts = await getMediumPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-2xl">
          My thoughts, tutorials, and insights on data analysis, machine learning, and navigating the tech industry.
        </p>
      </FadeIn>
 
      {posts.length === 0 ? (
        <FadeIn delay={0.2}>
          <div className="glass-card p-12 text-center">
            <h3 className="text-xl font-semibold mb-2">No posts yet!</h3>
            <p className="text-[var(--text-secondary)]">I&apos;m currently working on my first data analysis article. Check back soon!</p>
            <a href="https://komalharshita.medium.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 glass-button secondary">
              Follow me on Medium
            </a>
          </div>
        </FadeIn>
      ) : (
        <div className="grid gap-8">
          {posts.map((post, idx) => {
            // Map custom cyber-aesthetic thumbnail based on post theme
            const thumbnail = getAestheticThumbnail(post, idx);
            const date = new Date(post.pubDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            
            return (
              <FadeIn key={post.guid} delay={idx * 0.1}>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="glass-card overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:border-[var(--accent-primary)]">
                    <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden bg-[var(--bg-color)]">
                      <img 
                        src={thumbnail} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8 md:w-2/3 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs text-[var(--accent-secondary)] mb-3 font-medium tracking-wider uppercase">
                        <span className="flex items-center gap-1"><Calendar size={14}/> {date}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent-primary)] transition-colors">{post.title}</h2>
                      
                      <div className="flex items-center gap-2 mt-4 text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        Read on Medium <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>
      )}
    </div>
  );
}
