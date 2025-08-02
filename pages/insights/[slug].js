import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { sanityFetch } from '../../lib/sanity';

/**
 * Individual blog post page
 *
 * Displays a single article pulled from Sanity based on its slug. If Sanity
 * isn’t configured or the slug is missing, falls back to a static
 * placeholder. You can expand this page to render Portable Text using
 * @portabletext/react when you define rich text fields in Sanity.
 */
export default function PostPage({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading…</p>;
  }
  return (
    <>
      <Head>
        <title>{post.title} – Catalyst Communications Network</title>
        <meta name="description" content={post.excerpt || post.title} />
      </Head>
      <Header />
      <main className="pt-20 bg-neutral-light min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-20 bg-white rounded-lg shadow">
          {post.mainImage?.url && (
            <div className="relative h-60 mb-6 rounded-md overflow-hidden">
              <Image
                src={post.mainImage.url}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-neutral-dark/60 mb-8">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
          {post.content ? (
            // When Portable Text is available you can render it like this:
            // <PortableText value={post.content} components={...} />
            <div className="prose prose-neutral max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <p className="text-neutral-dark/80">{post.excerpt}</p>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}

/**
 * Generate paths for all posts. When Sanity is configured we fetch all
 * slugs; otherwise we return static slugs. Fallback is set to true so
 * that new posts can be generated on demand.
 */
export async function getStaticPaths() {
  try {
    const slugs = await sanityFetch(`*[_type == "post" && defined(slug.current)]{ 'slug': slug.current }`);
    return {
      paths: slugs.map(({ slug }) => ({ params: { slug } })),
      fallback: true,
    };
  } catch (err) {
    return {
      paths: [
        { params: { slug: 'why-direct-ad-placement-delivers-better-results' } },
        { params: { slug: 'halftime-hustle-your-comeback-season-starts-now' } },
        { params: { slug: 'ai-copyright-what-you-need-to-know' } },
      ],
      fallback: true,
    };
  }
}

/**
 * Fetch a single post by slug. If the slug isn’t found in Sanity,
 * falls back to a static placeholder. When implementing Portable Text
 * you’ll need to add a proper serializer here.
 */
export async function getStaticProps({ params }) {
  const { slug } = params;
  try {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      'slug': slug.current,
      publishedAt,
      excerpt,
      mainImage{ asset->{ url } },
      content
    }`;
    const post = await sanityFetch(query, { slug });
    if (post) {
      return { props: { post }, revalidate: 60 };
    }
  } catch (err) {
    // ignore
  }
  // fallback static post
  const staticPosts = {
    'why-direct-ad-placement-delivers-better-results': {
      title:
        'Why Direct Ad Placement with Catalyst Communications Network Delivers Better Results',
      publishedAt: '2025-07-31',
      excerpt:
        'In 2025, your brand’s reputation depends on where your ads appear. Discover how Catalyst Communications Network delivers human‑curated, brand‑safe advertising across trusted industry platforms.',
      mainImage: { url: 'https://images.pexels.com/photos/2102433/pexels-photo-2102433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    },
    'halftime-hustle-your-comeback-season-starts-now': {
      title: 'Halftime Hustle: Your Comeback Season Starts Now',
      publishedAt: '2025-07-17',
      excerpt:
        'The first half of 2025 threw plenty of curveballs at businesses in heavy industry—but the game’s far from over. If your team’s been on defence, it’s time to regroup, rethink your strategy and run a smarter second‑half offence with Catalyst.',
      mainImage: { url: 'https://images.pexels.com/photos/38554/pexels-photo-38554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    },
    'ai-copyright-what-you-need-to-know': {
      title: 'AI Copyright: What Every Owner, CEO and Leadership Team Needs to Know Now',
      publishedAt: '2025-07-16',
      excerpt:
        'AI is transforming how businesses create and share content—but without the right strategy, your best ideas could be up for grabs. Learn how to stay visible, competitive and protected in the AI era.',
      mainImage: { url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    },
  };
  const post = staticPosts[slug] || null;
  return { props: { post: post || { title: 'Post not found', excerpt: '', publishedAt: new Date().toISOString() } }, notFound: !post };
}