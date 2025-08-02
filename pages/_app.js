import '../styles/globals.css';

/**
 * Custom App component
 *
 * This component wraps every page of the Next.js application. It's the
 * appropriate place to import global styles and pass additional props to
 * pages or providers. If you use providers (such as Sanity's context
 * provider) they should be set up here so that all pages can access them.
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}