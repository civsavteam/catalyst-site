import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas';

/**
 * Sanity Studio configuration
 *
 * This configuration loads your custom schema and sets up the desk
 * interface. It reads the project ID and dataset from environment
 * variables to avoid hard coding secrets. When you set up your Sanity
 * project, ensure these variables are populated in `.env` or your
 * Netlify/CI environment.
 */
export default defineConfig({
  name: 'CatalystStudio',
  title: 'Catalyst Communications Network',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yourProjectId',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});