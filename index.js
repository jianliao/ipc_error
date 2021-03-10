const cp = require('child_process');

const main = async () => {
  const workerNum = 5;

  for (let i = 0; i < workerNum; i++) {
    const worker = cp.fork('./worker');

    worker.send({ msg: 'starts working', num: i });

    worker.on('message', data => {
      console.log(`Msg: ${data}`);
      worker.kill();
    });
  }
}

process.on('exit', () => {
  console.log('Parent process exit');
});

// process.on('uncaughtException', error => {
//   console.log(`Uncaught Exception ${error}`);
// }); 

(async () => main())();
