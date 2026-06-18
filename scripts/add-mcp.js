const { spawnSync } = require('child_process');

const body = {
  name: "magic",
  type: "stdio",
  command: "npx",
  args: ["-y", "@21st-dev/magic@latest"],
  env: { API_KEY: "0beda69528b2e9eae75fea9488370b5239b1117fbe30f23d48c78ee79a1d0cbe" }
};

const payload = JSON.stringify(body);
console.log('Invoking: code --add-mcp <json>');
const r = spawnSync('code', ['--add-mcp', payload], { stdio: 'inherit' });
if (r.error) {
  console.error('Error spawning code:', r.error);
  process.exit(1);
}
console.log('code exit status:', r.status);
process.exit(r.status || 0);
