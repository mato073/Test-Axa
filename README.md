## Getting started

Install both Front and Back application

```
npm run init
```

Start Front and Back application

```bash
npm run start
```
You can access the application by following this link

<http://localhost:5173/>


Launch all tests

```bash
npm run all-tests
```

Start Server

## Api Routes

To load the last 20 stock value samples :

```console
$> curl http://localhost:3000/stocks?_limit=20
```

To load all available stock value samples :

```console
$> curl http://localhost:3000/stocks
```

<!-- More exemple : [here](https://github.com/typicode/json-server#routes)

Queries return a JSON array of stock samples :

```javascript
[
  {
    timestamp: "2018-11-08T14:47:41.157Z",
    index: 0,
    stocks: "17.482"
  },
  {
    timestamp: "2018-11-07T14:47:41.158Z",
    index: 1,
    stocks: "18.335"
  }
];
``` -->
