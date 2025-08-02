import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

/**
 * Solutions page
 *
 * The solutions page outlines how Catalyst supports its clients through
 * advertising, data and content services. Each solution highlights a key
 * offering with a short description. In a full implementation these
 * sections can be managed through Sanity or link to dedicated pages.
 */
export default function Solutions() {
  const solutions = [
    {
      title: 'Advertising & Media',
      description: 'Reach targeted audiences in agriculture, construction and industrial markets through our print and digital media properties.',
      image: 'https://images.pexels.com/photos/2619494/pexels-photo-2619494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'Data & Audience Insights',
      description: 'Leverage Catalyst’s proprietary Forge platform to unify data, track engagement and optimise your marketing efforts.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'Content & Creative',
      description: 'Partner with our editors and designers to produce generative content, videos, infographics and custom publications.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ];

  return (
    <>
      <Head>
        <title>Solutions – Catalyst Communications Network</title>
        <meta
          name="description"
          content="Discover the solutions offered by Catalyst Communications Network, from advertising and data to creative content services."
        />
      </Head>
      <Header />
      <main className="pt-20 bg-neutral-light min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>
          <p className="max-w-3xl mx-auto text-neutral-dark/80 mb-12">
            As an extension of your team, Catalyst provides a full suite of
            services to help you connect with buyers, build your brand and
            generate results. We unify media, data and creative expertise so
            you can focus on what you do best.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map(({ title, description, image }) => (
              <div key={title} className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
                <div className="relative h-40">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="font-semibold text-xl mb-2 text-primary">{title}</h2>
                  <p className="text-neutral-dark/80 flex-1">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}