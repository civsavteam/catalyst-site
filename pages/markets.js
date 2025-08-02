import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

/**
 * Markets page
 *
 * This page dives deeper into the three core markets Catalyst serves: agriculture,
 * construction and industrial. You could expand this to include case
 * studies, statistics or service offerings specific to each vertical. For
 * now, the content gives visitors a sense of how Catalyst tailors its
 * expertise to different industries.
 */
export default function Markets() {
  return (
    <>
      <Head>
        <title>Markets – Catalyst Communications Network</title>
        <meta
          name="description"
          content="Explore the markets served by Catalyst Communications Network, including agriculture, construction and industrial sectors."
        />
      </Head>
      <Header />
      <main className="pt-20">
        <section className="bg-neutral-light py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Markets</h1>
          <p className="max-w-3xl mx-auto text-neutral-dark/80">
            Catalyst Communications Network brings critical information and
            marketing solutions to agriculture, construction and industrial
            professionals. Learn how we support these industries below.
          </p>
        </section>
        {/* Agriculture */}
        <section id="agriculture" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Agriculture</h2>
              <p className="text-neutral-dark/80 mb-4">
                From row‑crop farmers to ranchers and agribusinesses, agriculture
                professionals rely on timely data and industry insight. Our
                agriculture brands deliver market reports, equipment guides,
                supplier directories and educational resources to keep the
                agricultural community informed and thriving.
              </p>
              <p className="text-neutral-dark/80">
                Through targeted advertising and content syndication, we help
                agriculture brands connect with growers, input suppliers and
                producers who are actively seeking solutions. Whether you sell
                heavy equipment, crop protection or financial services, we
                position your brand at the centre of the conversation.
              </p>
            </div>
            <div className="relative h-80">
              <Image
                src="https://images.pexels.com/photos/2336883/pexels-photo-2336883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Agriculture industry"
                fill
                className="object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </section>
        {/* Construction */}
        <section id="construction" className="bg-neutral-light py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 order-2 md:order-1">
              <Image
                src="https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Construction industry"
                fill
                className="object-cover rounded-lg shadow"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Construction</h2>
              <p className="text-neutral-dark/80 mb-4">
                The construction sector demands accurate pricing, product
                specifications and trend analysis. Our construction brands
                provide data on equipment auctions, rental listings and
                regulatory changes, giving contractors and fleet managers the
                information they need to stay competitive.
              </p>
              <p className="text-neutral-dark/80">
                Advertisers gain access to a highly targeted audience through
                digital advertising, print publications and lead generation
                programmes. Whether it’s heavy machinery, safety equipment or
                project management tools, Catalyst delivers your message to
                decision makers in commercial, residential and civil
                construction markets.
              </p>
            </div>
          </div>
        </section>
        {/* Industrial */}
        <section id="industrial" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Industrial</h2>
              <p className="text-neutral-dark/80 mb-4">
                Industrial buyers in metalworking, manufacturing and heavy
                equipment rely on trusted sources when evaluating vendors and
                services. Our industrial brands curate auctions, product
                catalogues and technical articles to inform and educate
                professionals across the supply chain.
              </p>
              <p className="text-neutral-dark/80">
                Through targeted media placements, we connect industrial
                suppliers with purchasing managers and engineers seeking new
                solutions. From CNC machinery to industrial lubricants, we help
                you reach niche audiences that drive revenue growth.
              </p>
            </div>
            <div className="relative h-80">
              <Image
                src="https://images.pexels.com/photos/327042/pexels-photo-327042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Industrial industry"
                fill
                className="object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}