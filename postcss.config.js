/**
 * PostCSS configuration.
 *
 * Next.js uses PostCSS internally; this configuration ensures that
 * TailwindCSS and Autoprefixer run on your styles. You rarely need to
 * modify this file unless you introduce additional PostCSS plugins.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};