# TreeNav

Branch breakdown:
- main: Deployed to vercel with no backend implemented.
- dockerisation: Dockerised version of TreeNav with backend

# Run locally

## main
1. Run `npm install` in base directory.
2. Run `npm start` to run locally. Page should be accessible at `localhost:3000` in default configuration.
3. Enjoy an amazing TreeNav experience

## dockerisation
1. Run `docker build -t treenav .` to build the container locally.
2. Run `docker run -p 80:80 treenav`.
3. Container should start and serve at `localhost:80`.
4. Enjoy an amazing TreeNav experience


# Vercel Deployment
Find this deployed at `https://tree-nav-6jep.vercel.app/`.