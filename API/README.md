# quick-books
Integration playground for quick-book API. This can be used to fetch revenue for a given time
## How to set up
1. Clone repo `git clone git@github.com:Savinda96/quick-books.git`
2. Move to API folder `cd quick-books/API`
3. Install node modules `npm install`
4. Create .env file 
5. Add the your clientid and secrete in following format

```
CLIENT_ID=<client id>
CLIENT_SECRET=<client secret>
```
6. Build the project `npm run build`
7. Start the project `npm run start`
8. Navigate to  `http://localhost:3000/` in your browser
9. Press on connect to connect to quick books
10. You might have to login into your quick book accounts to provide authorization to your app
11. Once it is completed you will be navigate into revenue calculator

## Demo

https://user-images.githubusercontent.com/54589431/215542014-43ae8200-66a8-40b2-9ca0-7c93800abe94.mov

## Folder structure
```bash
.
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── config
│   │   └── config.ts
│   ├── core
│   │   ├── authentication-handler.ts
│   │   ├── index.ts
│   │   └── node-cache.ts
│   ├── index.ts
│   ├── router.ts
│   └── services
│       ├── get-qb-tokens.ts
│       ├── get-revenue.ts
│       ├── index.ts
│       ├── retry-api.ts
│       ├── revenue-calculator.ts
│       └── set-quick-books-auth-code.ts
├── tsconfig.json
└── views
    ├── index.pug
    ├── information.pug
    ├── revenue.pug
    └── styles.css
```
### To Do
* Refresh token will be outdated after 100 hundred days, server restart would resolve this issue until implemented
