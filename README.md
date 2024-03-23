## What is this?
This is a template Typescript Express.js server for quick boosted bootstrapping.

## Ready to mod it to your needs?
First, get it from the source:
```bash
git clone https://github.com/charlescaseymartin/typescript-express-server.git
```

Then, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.\
You can start editing the page by modifying `index.ts`. The page auto-updates as you edit the file.

## Need it contained?
I`ve got you!

Build the image from source:
```bash
docker build -t ts-express-server .
```

Then run the create a container from it:
```bash
docker run --rm -dp 8000:8000 ts-express-server
```

## Thanks for stopping by!
Enjoy this easy-of-life and happy hacking!

