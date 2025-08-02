import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Brands page
 *
 * This page introduces the portfolio of publications and media properties in
 * the Catalyst family. Each brand could link out to its own microsite or
 * provide further information. For the purpose of the migration, we
 * summarise the brands here.
 */
export default function Brands() {
  const brands = [
    {
      name: 'Farmers Hot Line',
      description: 'Delivering news, classifieds and product reviews for row‑crop farmers and ranchers.',
    },
    {
      name: 'AcreageLife',
      description: 'Connecting small acreage owners with tips and stories on rural living and property management.',
    },
    {
      name: 'Chicken Whisperer Magazine',
      description: 'The definitive source for backyard poultry enthusiasts covering husbandry, health and equipment.',
    },
    {
      name: 'Contractors Hot Line',
      description: 'A marketplace and resource hub for buying, selling and renting heavy construction equipment.',
    },
    {
      name: 'Crane Hot Line',
      description: 'Providing crane and lifting industry news, crane rentals and safety information for operators.',
    },
    {
      name: 'Lift & Access',
      description: 'Focused on aerial work platforms, telehandlers and safety innovations in the access industry.',
    },
    {
      name: 'Industrial Machine Trader',
      description: 'Connecting buyers and sellers of new and used industrial machinery, auctions and parts.',
    },
  ];

  return (
    <>
      <Head>
        <title>Brands – Catalyst Communications Network</title>
        <meta
          name="description"
          content="Discover the portfolio of brands within Catalyst Communications Network, serving agriculture, construction and industrial markets."
        />
      </Head>
      <Header />
      <main className="pt-20 bg-neutral-light min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Brands</h1>
          <p className="text-center max-w-3xl mx-auto text-neutral-dark/80 mb-12">
            Catalyst Communications Network owns and operates a diverse group of
            publications and digital platforms that inform and connect
            professionals across agriculture, construction and industrial
            markets. Explore our brands below.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold mb-2 text-primary">{brand.name}</h2>
                <p className="text-neutral-dark/80">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}