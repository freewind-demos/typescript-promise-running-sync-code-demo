TypeScript Promise Running Sync Code Demo
=========================================

下面的代码，第2行与第4行谁先执行？

```
1   new Promise((resolve) => {
2     resolve(Date.now())
3   })
4   console.log('Hello');
```

答案是2先执行。虽然它在new Promise里，但是实际上，在遇到真正的异步代码前（比如setTimeout）等，
它是同步执行的。

```
npm install
npm run demo
```
