import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

/**
 * About page
 *
 * This page expands on the company overview, capturing the narrative and
 * philosophy of Catalyst Communications Network. It borrows sections from
 * the home page but provides additional space to tell the story and
 * introduce the team or mission. When connected to Sanity you can
 * replace the static text with fields from a singletons document.
 */
export default function About() {
  return (
    <>
      <Head>
        <title>About – Catalyst Communications Network</title>
        <meta
          name="description"
          content="Learn more about Catalyst Communications Network, the leading B2B publisher and marketing partner for agriculture, construction and industrial sectors."
        />
      </Head>
      <Header />
      <main className="pt-20">
        <section className="bg-neutral-light py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="max-w-3xl mx-auto text-neutral-dark/80">
            We’re a team of storytellers, strategists and technologists committed to
            elevating brands in agriculture, construction and industrial
            markets. Our mission is to simplify the complex, amplify our
            clients’ messages and earn the trust that their brands deserve.
          </p>
        </section>
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-neutral-dark/80 mb-4">
                Founded by industry veterans who saw an opportunity to better
                serve complex B2B markets, Catalyst Communications Network
                started with a simple idea: combine decades of experience
                with modern technology to deliver content and advertising
                solutions that drive results. Over the years we’ve grown into
                a trusted partner for brands big and small, always staying
                true to our values of integrity, transparency and
                collaboration.
              </p>
              <p className="text-neutral-dark/80 mb-4">
                Whether we’re producing award‑winning publications or building
                bespoke demand generation campaigns, our focus remains on
                delivering measurable value for our partners. We believe that
                effective marketing stems from understanding our clients’
                industries, audiences and goals—so we immerse ourselves in
                their worlds to craft solutions that resonate.
              </p>
            </div>
            <div className="relative h-80">
              <Image
                src="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Team work"
                fill
                className="object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </section>
        <section className="bg-neutral-light py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="max-w-3xl mx-auto text-neutral-dark/80 mb-8">
              We’re guided by principles that ensure our work is meaningful and
              impactful. These values define how we operate and how we
              partner with clients.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-xl mb-2">Integrity</h3>
                <p className="text-neutral-dark/80 text-sm">
                  We lead with honesty and transparency in all interactions. Our
                  clients’ success and trust come before everything else.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-xl mb-2">Expertise</h3>
                <p className="text-neutral-dark/80 text-sm">
                  Our team’s deep knowledge of agriculture, construction and
                  manufacturing allows us to create solutions that are both
                  insightful and impactful.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-xl mb-2">Innovation</h3>
                <p className="text-neutral-dark/80 text-sm">
                  We embrace new technologies and creative approaches to help
                  our partners stay ahead of the curve and connect with their
                  audiences in meaningful ways.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}