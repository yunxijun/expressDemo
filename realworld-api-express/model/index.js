const mongoose = require('mongoose');
const { dbUri } = require('../config/config.default')

// 链接mongoDB 数据库
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// 当连接失败
db.on('error', (err) => {
    console.log('MongoDB 数据库连接失败', err);
});

// 连接成功
db.once('open', function () {
    // we're connected!
    console.log('MongoDB 数据库连接成功');
});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));