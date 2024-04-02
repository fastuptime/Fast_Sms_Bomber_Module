const { FastBoomber } = require('./src/index');

const fastBoomber = new FastBoomber({
    target: '5000000000',
    amount: 1,
});

fastBoomber.start();