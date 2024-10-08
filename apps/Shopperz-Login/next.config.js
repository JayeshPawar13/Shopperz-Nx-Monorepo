//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  env: {
    mongodb_username: 'jay',
    mongodb_password: 'lQZwniM4j3QhemVD',
    mongodb_clustername: 'cluster0',
    mongodb_database: 'shopping-app',
    mongodb_user_database: 'user',
    NEXT_PUBLIC_PAGE_URL: process.env.NEXT_PUBLIC_PAGE_URL,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
