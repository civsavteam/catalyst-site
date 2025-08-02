import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

/**
 * Home page
 *
 * This page is a re‑implementation of the Catalyst Communications Network
 * landing page using Next.js and Tailwind CSS. The layout follows the
 * structure of the current site, with sections for the hero, about,
 * features, markets, insights, testimonials, partners and social media.
 * When Sanity CMS is configured, the content here can be replaced by
 * dynamic data. For now, static placeholders ensure the page is fully
 * rendered and showcases how the site will look.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Catalyst Communications Network</title>
        <meta
          name="description"
          content="Catalyst Communications Network delivers data‑driven media and advertising solutions for agriculture, construction and industrial sectors."
        />
      </Head>
      <Header />
      <main className="pt-20">
        {/* Hero section */}
        <section className="relative bg-neutral-light overflow-hidden">
          <div className="absolute inset-0">
            {/* Background image for hero. You can replace this with a local
                image in the public folder or load via next/image. */}
            <Image
              src="https://images.pexels.com/photos/158827/tractor-field-farm-agriculture-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Field background"
              fill
              className="object-cover object-center opacity-60"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 py-32 text-center text-neutral-dark">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Informing, Supporting, and Delivering…
            </h1>
            <p className="text-xl sm:text-3xl mb-8">
              to Our Critical Industries
            </p>
            <a
              href="#join"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white font-semibold px-8 py-3 rounded-full shadow hover:from-primary-dark hover:to-primary focus:outline-none"
            >
              Join Our Network
            </a>
          </div>
        </section>
        {/* About section: B2B marketing expertise */}
        <section className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
              About Catalyst Communications Network
            </h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              <strong>B2B Marketing Expertise for Agriculture, Construction, and Manufacturing</strong>
            </p>
            <p className="text-neutral-dark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Catalyst Communications Network is the leading B2B publisher and
              marketing partner dedicated to the agriculture, construction and
              manufacturing sectors. We specialize in helping brands
              navigate complex products, services and applications where buyer
              education is critical and industry standards are rigorous. As a true
              extension of your team, Catalyst delivers the expertise,
              technology and loyalty you need to grow and lead in your market.
            </p>
            <a
              href="#learn"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white font-medium px-8 py-3 rounded-full shadow hover:from-primary-dark hover:to-primary"
            >
              Learn More
            </a>
          </div>
        </section>
        {/* Features: Decades of experience, advanced tech, generative content */}
        <section className="bg-neutral-light py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Decades of Industry Experience</h3>
              <p className="text-neutral-dark/80 mb-6">
                Our leadership and editorial teams bring decades of hands‑on
                experience in demanding industries including the ones we serve.
                We understand the unique challenges and opportunities you face
                because we’ve worked alongside the professionals, associations
                and innovators who drive these sectors forward. This deep‑rooted
                knowledge ensures that our strategies and content resonate with
                your audience and support your business goals.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-primary">Advanced Technology and Data Integration</h3>
              <p className="text-neutral-dark/80 mb-6">
                Catalyst’s proprietary Forge platform unifies advanced data,
                audience insights and engagement tracking—so you don’t have to
                purchase or manage multiple apps and data sources. Our all‑in‑one
                solution streamlines your marketing, digital advertising and
                content creation, saving you time and money while maximizing
                your return on investment.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-primary">Generative Content and AI Capabilities</h3>
              <p className="text-neutral-dark/80">
                Catalyst is at the forefront of generative content and AI‑driven
                marketing. Our team creates compelling, customized content using
                the latest generative technologies, ensuring your brand’s
                message is consistent, engaging and optimized for both human
                readers and answer engines. We help you stay ahead in the
                digital landscape—without the need to invest in multiple
                content tools or platforms.
              </p>
            </div>
            <div className="space-y-8">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                {/* Feature card: Smart Data */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                  <Image
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Smart Data"
                    width={80}
                    height={80}
                    className="rounded-full mb-4 object-cover"
                  />
                    <h4 className="font-semibold mb-2">Smart Data, Real Results</h4>
                    <p className="text-sm text-neutral-dark/80">
                      We leverage intelligent data to identify and engage your most
                      valuable customers, ensuring your message reaches the right
                      audience.
                    </p>
                </div>
                {/* Feature card: Continuous Optimization */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                  <Image
                    src="https://images.pexels.com/photos/5772107/pexels-photo-5772107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Continuous Optimization"
                    width={80}
                    height={80}
                    className="rounded-full mb-4 object-cover"
                  />
                    <h4 className="font-semibold mb-2">Continuous Optimization</h4>
                    <p className="text-sm text-neutral-dark/80">
                      Our integrated tools track campaign performance, allowing
                      for rapid adjustments and measurable growth—no guesswork,
                      just results.
                    </p>
                </div>
                {/* Feature card: Cost Savings */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                  <Image
                    src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Cost Savings"
                    width={80}
                    height={80}
                    className="rounded-full mb-4 object-cover"
                  />
                    <h4 className="font-semibold mb-2">Cost Savings</h4>
                    <p className="text-sm text-neutral-dark/80">
                      By consolidating technology and analytics, we reduce your
                      need for additional software or expensive data buys.
                    </p>
                </div>
              </div>
              <Image
                src="https://images.pexels.com/photos/134548/pexels-photo-134548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Generative content"
                width={600}
                height={400}
                className="rounded-lg shadow"
              />
            </div>
          </div>
        </section>
        {/* Trusted section with quote */}
        <section className="bg-white py-20 text-center px-4">
          <h3 className="text-2xl sm:text-4xl font-bold mb-4">
            A Trusted, Loyal Extension of Your Brand
          </h3>
          <p className="max-w-3xl mx-auto text-neutral-dark/80 mb-8">
            Trust and loyalty are the cornerstones of every Catalyst partnership.
            We know that in high‑stakes industries, you need a partner who is as
            committed to your reputation and success as you are. Our team
            becomes a seamless extension of yours, telling your story with
            integrity and clarity, and always putting your goals first.
          </p>
          <blockquote className="italic text-xl font-medium text-primary max-w-3xl mx-auto">
            “We believe in building relationships that last. Our clients trust
            us because we deliver on our promises, simplify the complex, and
            always put their goals first.”
            <span className="block mt-4 text-sm not-italic text-neutral-dark">— Shae McBride, CEO</span>
          </blockquote>
        </section>
        {/* Why choose section */}
        <section className="bg-neutral-light py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Why Choose Catalyst Communications Network?</h3>
              <ul className="list-disc pl-6 space-y-3 text-neutral-dark/80 mb-6">
                <li>Deep industry expertise in agriculture, construction and manufacturing</li>
                <li>Proprietary technology and data tools—no need for extra apps or costly data subscriptions</li>
                <li>Generative content and AI‑driven solutions for modern marketing</li>
                <li>Proven results connecting you with serious buyers and driving sales</li>
                <li>A true partner—loyal, transparent and dedicated to your long‑term growth</li>
              </ul>
              <p className="text-neutral-dark/80">
                Let Catalyst Communications Network be your guide, advocate and
                most loyal ally in building your brand and driving business
                growth. We simplify the complex, amplify your message and earn
                the trust your brand deserves.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="https://images.pexels.com/photos/197539/pexels-photo-197539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Why choose Catalyst"
                fill
                className="object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </section>
        {/* Markets section */}
        <section id="markets" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-12">Markets</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Agriculture card */}
              <div className="bg-neutral-light rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Image
                  src="https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Agriculture"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 object-cover"
                />
                <h4 className="font-semibold text-xl mb-2">Agriculture</h4>
                <p className="text-sm text-neutral-dark/80">
                  Connecting farmers, ranchers, co‑ops, agribusinesses and more with
                  essential data and insights, keeping the agricultural
                  community informed and empowered.
                </p>
              </div>
              {/* Construction card */}
              <div className="bg-neutral-light rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Image
                  src="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Construction"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 object-cover"
                />
                <h4 className="font-semibold text-xl mb-2">Construction</h4>
                <p className="text-sm text-neutral-dark/80">
                  Providing the construction industry with critical data,
                  resources and access to online marketplaces for heavy
                  equipment, helping professionals stay competitive.
                </p>
              </div>
              {/* Industrial card */}
              <div className="bg-neutral-light rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Image
                  src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Industrial"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 object-cover"
                />
                <h4 className="font-semibold text-xl mb-2">Industrial</h4>
                <p className="text-sm text-neutral-dark/80">
                  Delivering vital information on auctions, products and
                  services, keeping metalworking and manufacturing professionals
                  up‑to‑date on the industry.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Insights section */}
        <section id="insights" className="bg-neutral-light py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-12">Latest Insights</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Blog post card 1 */}
              <article className="bg-white rounded-lg shadow overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2102433/pexels-photo-2102433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Blog 1"
                  width={400}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-6 text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    Why Direct Ad Placement with Catalyst Communications Network Delivers Better Results
                  </h4>
                  <p className="text-sm text-neutral-dark/80 mb-4">
                    In 2025, your brand’s reputation depends on where your ads
                    appear. Discover how Catalyst Communications Network delivers
                    human‑curated, brand‑safe advertising across trusted industry
                    platforms.
                  </p>
                  <p className="text-xs text-neutral-dark/60">Jul 31, 2025</p>
                </div>
              </article>
              {/* Blog post card 2 */}
              <article className="bg-white rounded-lg shadow overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/38554/pexels-photo-38554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Blog 2"
                  width={400}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-6 text-left">
                  <h4 className="font-semibold text-lg mb-2">Halftime Hustle: Your Comeback Season Starts Now</h4>
                  <p className="text-sm text-neutral-dark/80 mb-4">
                    The first half of 2025 threw plenty of curveballs at
                    businesses in heavy industry—but the game’s far from over.
                    If your team’s been on defence, it’s time to regroup,
                    rethink your strategy and run a smarter second‑half offense
                    with Catalyst.
                  </p>
                  <p className="text-xs text-neutral-dark/60">Jul 17, 2025</p>
                </div>
              </article>
              {/* Blog post card 3 */}
              <article className="bg-white rounded-lg shadow overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Blog 3"
                  width={400}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-6 text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    AI Copyright: What Every Owner, CEO and Leadership Team Needs to Know Now
                  </h4>
                  <p className="text-sm text-neutral-dark/80 mb-4">
                    AI is transforming how businesses create and share
                    content—but without the right strategy, your best ideas could
                    be up for grabs. Learn how to stay visible, competitive
                    and protected in the AI era.
                  </p>
                    <p className="text-xs text-neutral-dark/60">Jul 16, 2025</p>
                </div>
              </article>
            </div>
            <div className="mt-8">
              <Link
                href="/insights"
                className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white font-medium px-8 py-3 rounded-full shadow hover:from-primary-dark hover:to-primary"
              >
                Explore More Insights
              </Link>
            </div>
          </div>
        </section>
        {/* Testimonials section */}
        <section id="testimonials" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-12">What Our Clients Are Saying</h3>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Testimonial 1 */}
              <div className="flex items-start space-x-4">
                <Image
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Kayla Arpin"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="italic text-neutral-dark/80 mb-2">
                    “The team at AcreageLife is an incredible resource to our
                    company. They continue to tailor their offerings to best
                    meet our goals and provide us access to an audience that we
                    are passionate about serving.”
                  </p>
                  <p className="font-semibold text-neutral-dark">Kayla Arpin</p>
                  <p className="text-sm text-neutral-dark/60">Marketing Coordinator, United Country Real Estate</p>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="flex items-start space-x-4">
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Cecily Casey"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="italic text-neutral-dark/80 mb-2">
                    “Catalyst has provided a way for our family business to
                    reach beyond our limits and also provides us with leads
                    when customers inquire about our products, which in turn,
                    has been very profitable for our business.”
                  </p>
                  <p className="font-semibold text-neutral-dark">Cecily Casey</p>
                  <p className="text-sm text-neutral-dark/60">Director of Sales & Operations, The LimbSaw Company</p>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="flex items-start space-x-4">
                <Image
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Tobias Ilg"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="italic text-neutral-dark/80 mb-2">
                    “As one of the top sources for valuable information within
                    the crane and lifting industry in North America, we would
                    recommend Crane Hot Line as one of the most important
                    magazines – and one to look at to gain great insights,
                    in‑depth knowledge and gather information and opinions from
                    the industry.”
                  </p>
                  <p className="font-semibold text-neutral-dark">Tobias Ilg</p>
                  <p className="text-sm text-neutral-dark/60">Head of Marketing & Communications, Liebherr‑Werk Ehingen GmbH</p>
                </div>
              </div>
              {/* Testimonial 4 */}
              <div className="flex items-start space-x-4">
                <Image
                  src="https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Jacob Cummings"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="italic text-neutral-dark/80 mb-2">
                    “Contractors Hot Line has been wonderful to work with.
                    Whether it’s making sure that our advertising budget is
                    getting the highest ROI to overall customer service, our
                    sales representative has been a pleasure to work with and
                    goes above and beyond most advertising consultants.”
                  </p>
                  <p className="font-semibold text-neutral-dark">Jacob Cummings</p>
                  <p className="text-sm text-neutral-dark/60">Advertising Coordinator, James G. Murphy Co.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Partners section */}
        <section id="partners" className="bg-neutral-light py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-12">Our Brand Partners</h3>
            {/* Grid of partner logos. Replace the placeholders below with real
                logos placed in the public directory. */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
              {['bigge-crane', 'bobcat', 'yanmar', 'jcb', 'equiplinc', 'liebherr', 'gordons-usa', 'bidspotter', 'terex', 'link-belt', 'stronghold', 'kubota', 'tym', 'harris-machine', 'lgh', 'jeff-martin'].map((name) => (
                <div key={name} className="flex items-center justify-center p-2">
                  <div className="bg-white rounded-lg shadow p-4">
                    <span className="text-sm font-medium">{name.replace(/-/g, ' ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Social section */}
        <section id="social" className="bg-white py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8">Check Us Out On Social Media</h3>
            <p className="text-neutral-dark/80 mb-6">
              Follow us on LinkedIn and Facebook to see our latest thought
              leadership pieces, behind the scenes content and industry news.
              We regularly post insights on marketing trends and share stories
              from our clients and partners.
            </p>
            <div className="flex justify-center space-x-8">
              <a
                href="#"
                className="bg-primary text-white rounded-full px-6 py-3 inline-block hover:bg-primary-dark"
              >
                Follow on LinkedIn
              </a>
              <a
                href="#"
                className="bg-primary text-white rounded-full px-6 py-3 inline-block hover:bg-primary-dark"
              >
                Like on Facebook
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}