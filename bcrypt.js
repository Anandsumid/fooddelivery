var bcrypt = require('bcryptjs');
bcrypt.hash("password", 10)
.then(data => console.log(data))