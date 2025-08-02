import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { sanityFetch } from '../../lib/sanity';

/**
 * Insights listing page
 *
 * This page lists the latest blog posts from Sanity. If Sanity isn’t
 * configured or returns no posts, it falls back to a small set of
 * placeholder articles. Each article links to its own page via its slug.
 */
export default function InsightsPage({ posts }) {
  return (
    <>
      <Head>
        <title>Industry Insights – Catalyst Communications Network</title>
        <meta
          name="description"
          content="Read the latest thought leadership and news from Catalyst Communications Network."
        />
      </Head>
      <Header />
      <main className="pt-20 bg-neutral-light min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8 text-center">Industry Insights</h1>
          <p className="max-w-3xl mx-auto text-neutral-dark/80 text-center mb-12">
            Stay informed with our latest articles and thought leadership on
            marketing, technology and trends within agriculture, construction and
            industrial sectors.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
                {post.mainImage && post.mainImage.url && (
                  <div className="relative h-40">
                    <Image
                      src={post.mainImage.url}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="font-semibold text-xl mb-2">
                    <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-neutral-dark/80 mb-4 flex-1">{post.excerpt}</p>
                  )}
                  <p className="text-xs text-neutral-dark/60 mt-auto">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/**
 * Fetch posts at build time. If the Sanity query fails (e.g. missing
 * project ID) we return static placeholder posts defined locally.
 */
export async function getStaticProps() {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc)[0..8]{
      _id,
      title,
      'slug': slug.current,
      publishedAt,
      excerpt,
      mainImage{ asset->{ url } }
    }`;
    const posts = await sanityFetch(query);
    if (posts && posts.length > 0) {
      return { props: { posts }, revalidate: 60 };
    }
  } catch (err) {
    // swallow errors and fall through to static posts
  }
  // fallback static posts
  const staticPosts = [
    {
      slug: 'why-direct-ad-placement-delivers-better-results',
      title:
        'Why Direct Ad Placement with Catalyst Communications Network Delivers Better Results',
      publishedAt: '2025-07-31',
      excerpt:
        'In 2025, your brand’s reputation depends on where your ads appear. Discover how Catalyst Communications Network delivers human‑curated, brand‑safe advertising across trusted industry platforms.',
      mainImage: { url: 'https://images.pexels.com/photos/2102433/pexels-photo-2102433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    },
    {
      slug: 'halftime-hustle-your-comeback-season-starts-now',
      title: 'Halftime Hustle: Your Comeback Season Starts Now',
      publishedAt: '2025-07-17',
      excerpt:
        'The first half of 2025 threw plenty of curveballs at businesses in heavy industry—but the game’s far from over. If your team’s been on defence, it’s time to regroup, rethink your strategy and run a smarter second‑half offence with Catalyst.',
      mainImage: { url: 'https://images.pexels.com/photos/38554/pexels-photo-38554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    },
    {
      slug: 'ai-copyright-what-you-need-to-know',
      title: 'AI Copyright: What Every Owner, CEO and Leadership Team Needs to Know Now',
      publishedAt: '2025-07-16',
      excerpt:
        'AI is transforming how businesses create and share content—but without the right strategy, your best ideas could be up for grabs. Learn how to stay visible, competitive and protected in the AI era.',
      mainImage: { url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    },
  ];
  return { props: { posts: staticPosts } };
}