// studio.js - Helper script to load environment variables for drizzle-kit studio
require('dotenv').config({ path: './.env.local' });

const { loadEnvConfig } = require('@next/env');
// Load environment variables from .env.local
loadEnvConfig(process.cwd());

console.log('Database URL:', process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);

// You can run this with: node studio.js
// Then manually run: npx drizzle-kit studio
