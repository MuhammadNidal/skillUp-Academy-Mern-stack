const http = require('http');

function post(path, data) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data);
    const options = {
      hostname: 'localhost',
      port: process.env.PORT || 3000,
      path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve({ status: res.statusCode, body: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, body: body });
        }
      });
    });

    req.on('error', (e) => reject(e));
    req.write(payload);
    req.end();
  });
}

(async () => {
  try {
    console.log('Registering test user...');
    const reg = await post('/register', { name: 'John', email: 'john@example.com', password: '123456' });
    console.log('Register response:', reg.status, reg.body);

    console.log('Logging in test user...');
    const login = await post('/login', { email: 'john@example.com', password: '123456' });
    console.log('Login response:', login.status, login.body);

    if (login.body && login.body.token) {
      console.log('✅ Received token:', login.body.token);
    } else {
      console.log('❌ No token received.');
    }
  } catch (err) {
    console.error('Error during test requests:', err);
  }
})();
