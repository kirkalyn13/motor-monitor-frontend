
# Motor Monitor Frontend

Frontend for the Induction Motor Monitoring System. 

To view sensor readings and analysis, visit the [web app](https://motor-monitor-frontend.vercel.app/).

## Tech Stack
- **Next JS** - Frontend Framework; Overkill since the app is client heavy
- **Apexcharts** - For charts
- **Tailwind CSS** - For styles
- **Firebase** - For user auth
- **Vercel** - For deployment


## Installation

1. Clone repository
2. Run `npm install`
3. Run `npm run dev`

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`NEXT_PUBLIC_FIREBASE_API_KEY`

`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`

`NEXT_PUBLIC_FIREBASE_PROJECT_ID`

`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`

`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`

`NEXT_PUBLIC_FIREBASE_APP_ID`

`NEXT_PUBLIC_API_URL`


## Deployment
Merging to main automatically deploys to [Vercel](https://vercel.com/).

To view production website, visit [here](https://motor-monitor-frontend.vercel.app/).


## Authors

- [Engr. Kirk Alyn Santos](https://github.com/kirkalyn13)

## License

[MIT](https://choosealicense.com/licenses/mit/)
