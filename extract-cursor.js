const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('smooth-cursor.json', 'utf8'));
const file = data.files[0];

const dir = path.dirname('src/components/ui/smooth-cursor.tsx');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync('src/components/ui/smooth-cursor.tsx', file.content);
console.log('Successfully wrote smooth-cursor.tsx');
