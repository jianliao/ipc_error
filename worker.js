process.on('message', ({msg, num}) => {
  console.log(`Work ${num} ${msg}`);

  process.send(`Worker ${num} done`);
});