// src/app/[locale]/blogas/page.tsx
import { fetchAPI } from "src/lib/api";

// Užklausa, kurią siųsime į WordPress
const GET_ALL_POSTS = `
  query GetAllPosts {
    posts(first: 10) {
      nodes {
        id
        title
        content
        slug
      }
    }
  }
`;

// Tipas, aprašantis, kaip atrodo vienas straipsnis
interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
}

export default async function BlogPage() {
  // Gauname duomenis iš WordPress
  const data = await fetchAPI(GET_ALL_POSTS) as { posts: { nodes: Post[] } };
  const posts = data.posts.nodes;

  return (
    <main className="bg-white dark:bg-slate-950 py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Tinklaraštis</h1>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              {/* Svarbu: naudojame dangerouslySetInnerHTML, nes turinys iš WP ateina kaip HTML */}
              <div 
                className="prose dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
