/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

const cors = require('cors');

server.use(cors());
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
    }
    next();
});

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 1000);
    });
    next();
});

server.use(jsonServer.defaults({
    bodyParser: true,
}));

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
    const { users } = db;

    const userFromBd = users.find(
        (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
        return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(router);

const PORT = 8888;
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
});
