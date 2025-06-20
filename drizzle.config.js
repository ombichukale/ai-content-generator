/** @type { import("drizzle-kit").Config } */
module.exports = {  
    schema: "./utils/schema.tsx",
    out: "./drizzle",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://AICONTENTGENERATOR_owner:npg_M29tCnaAvEfk@ep-falling-night-a4lv1b8x-pooler.us-east-1.aws.neon.tech/AICONTENTGENERATOR?sslmode=require"
    }
  };