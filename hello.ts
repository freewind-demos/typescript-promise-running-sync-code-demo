function slowAction() {
  for (let i = 0; i < 100000; i += 1) {
    console.log('########################')
  }
}

async function main() {
  const tasks = [
    new Promise((resolve) => {
      resolve(Date.now())
    }),
    new Promise((resolve) => {
      slowAction();
      resolve(Date.now())
    }),
    new Promise((resolve) => {
      resolve(Date.now())
    }),
  ]

  const [result1, result2, result3] = await Promise.all(tasks);
  console.log([result1, result2, result3])
}

main();
