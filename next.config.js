/**
 * @type {import('next').NextConfig}
 */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserSite = repoName.endsWith('.github.io');
const basePath = isGitHubActions && !isUserSite ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  ...(basePath
      ? {
            basePath,
            assetPrefix: `${basePath}/`
        }
      : {}),

  env: {
    stackbitPreview: process.env.STACKBIT_PREVIEW
  },

  trailingSlash: true,
  reactStrictMode: true,

  allowedDevOrigins: [
    '192.168.1.84'
  ]
};

module.exports = nextConfig;
