// Global styles
import '../styles/globals.css';
// Import vendor styles from the provided template. These are copied into
// the public/css directory and provide the sleek look and feel from the
// original design. Note that Next.js does not allow importing CSS from
// the public directory at runtime, so we create a `vendor` folder in
// `public/css` and import them here.
import '../styles/vendor/bootstrap.min.css';
import '../styles/vendor/font-awesome.css';
import '../styles/vendor/perfect-scrollbar.css';
import '../styles/vendor/style.css';

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