// Vercel 빌드 시 환경변수를 읽어 정적 config.js 를 생성한다.
const fs = require('fs');
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_PUBLISHABLE_KEY;
if (!url || !key) {
  console.error('SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY must be set');
  process.exit(1);
}
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('index.html', 'dist/index.html');
fs.writeFileSync(
  'dist/config.js',
  'window.APP_CONFIG = ' + JSON.stringify({ SUPABASE_URL: url, SUPABASE_PUBLISHABLE_KEY: key }) + ';\n'
);
