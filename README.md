## Stock Graphique

The purpose of the application is to display the evolution of data during a certain period of time.

<p align="center">
  <img src="./Pictures/App.png" width="350" title="hover text">
</p>

## Description
This application will fetch a set of 20 object that containe a value and timeStemp and will then be displayd as 
a chart. the user can then change the value of a difined value by clicking on it and then the chart will be modify acordingly


## Technologies Used
- Node.Js
- React.js
- Vite.js
- D3.js
- Jest
- React testing libray
- supertest
- SCSS
- Axios


## Installation and usage

Install both Front and Back application

```
npm run init
```

Start Front and Back application

```bash
npm run start
```
You can access the application by following this link

<http://localhost:5173>

Launch all tests

```bash
npm run all-tests
```

## Project Hierachy

bash```
├── Back
│   ├── api.js
│   ├── app
│   │   ├── app.test.js
│   │   └── routes.js
│   ├── front
│   │   ├── index.html
│   │   ├── index.js
│   │   └── index.scss
│   ├── index.js
│   ├── package.json
│   └── webpack.config.js
├── Front
│   ├── index.html
│   ├── jest.config.ts
│   ├── package.json
│   ├── public
│   ├── src
│   │   ├── App.tsx
│   │   ├── __ tests __
│   │   │   └── App.spec.tsx
│   │   ├── components
│   │   │   ├── Chart
│   │   │   │   ├── Chart.test.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   ├── Container
│   │   │   │   ├── Comtainer.test.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   └── Datas
│   │   │       ├── Datas.test.tsx
│   │   │       ├── components
│   │   │       │   ├── EditableCell
│   │   │       │   │   ├── EditableCell.test.tsx
│   │   │       │   │   ├── index.tsx
│   │   │       │   │   └── style.scss
│   │   │       │   └── HeaderCell
│   │   │       │       ├── HeaderCell.test.tsx
│   │   │       │       └── index.tsx
│   │   │       ├── index.tsx
│   │   │       └── style.scss
│   │   ├── index.scss
│   │   ├── main.tsx
│   │   ├── test
│   │   │   └── __ mocks __
│   │   │       └── fileMock.js
│   │   ├── types
│   │   │   └── stock.ts
│   │   ├── utils
│   │   │   └── api.ts
│   │   └── vite-env.d.ts
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── Pictures
│   └── App.png
├── README.md
├── package-lock.json
└── package.json
```

