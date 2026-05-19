const http = require('http');

// Server banana
const server = http.createServer((req, res) => {
    console.log('Nayi Request Aayi!');
    
    // Response Header set karna (Status Code: 200 OK)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Client ko message bhejna aur response khatam karna
    res.end('Hello! From Backend!');
});

// Methods 




// Server ko port 3000 par chalana
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
