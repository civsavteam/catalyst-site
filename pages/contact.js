import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Contact page
 *
 * Provides a simple contact form and contact details. The form is set up to
 * submit to Netlify’s serverless form handling when the site is deployed
 * there. If you choose another hosting provider you can connect the form
 * submission to a serverless function or CRM.
 */
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – Catalyst Communications Network</title>
        <meta
          name="description"
          content="Get in touch with Catalyst Communications Network to discuss your marketing needs or media opportunities."
        />
      </Head>
      <Header />
      <main className="pt-20 bg-neutral-light min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
          <p className="max-w-2xl mx-auto text-center text-neutral-dark/80 mb-12">
            We’d love to hear from you! Whether you have a question about our
            services, want to explore advertising opportunities or simply want
            to learn more about what we do, fill out the form below and one of
            our team members will reach out.
          </p>
          {/*
           * Contact form
           *
           * We intentionally omit the `data-netlify` attribute here because the
           * Netlify Next.js runtime v5 requires a static HTML form for
           * detection. To enable Netlify Forms, create a static form in
           * `public/__forms.html` matching this form’s fields. If you don’t
           * need Netlify’s built‑in form handling, leaving off the attribute
           * prevents build errors.
           */}
          <form
            name="contact"
            method="POST"
            className="bg-white rounded-lg shadow p-8 grid gap-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 font-medium text-sm">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="border border-neutral-light rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium text-sm">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="border border-neutral-light rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="company" className="mb-1 font-medium text-sm">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                className="border border-neutral-light rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 font-medium text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="border border-neutral-light rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-primary-dark text-white font-medium px-8 py-3 rounded-full shadow hover:from-primary-dark hover:to-primary w-full md:w-auto self-center"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 text-center text-sm text-neutral-dark/80">
            <p>Or reach us directly at:</p>
            <p className="mt-2">400 Interstate North Parkway SE, Suite 560, Atlanta, GA 30339</p>
            <p className="mt-2">(515) 955‑1600</p>
            <p className="mt-2">
              <a href="mailto:info@catcomnet.com" className="text-primary hover:underline">info@catcomnet.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}