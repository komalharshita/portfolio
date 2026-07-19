const fs = require('fs');
const https = require('https');

https.get('https://magicui.design/r/smooth-cursor.json', { rejectUnauthorized: false }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('smooth-cursor.json', data);
    console.log('Downloaded smooth-cursor.json');
  });
}).on('error', (err) => console.error(err));
