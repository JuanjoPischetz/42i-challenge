
# 42i-Challenge by JuanjoPischetz

This project develops my solution for the technical Challenge proposed by 42i tech team. It resolves "smallest difference" and "Non-Constructible Change" algorithms.

## Mayor Technologies:

- Full-Stack App: Nextjs 13 @latest
- Testing: Jest - Testing Library
- CSS: modules.CSS
- Virtualization: Docker
- Deploy: https://42i-challenge-jkt28z4jm-juanjopischetz.vercel.app/








## Install the project

Clone the project

```bash
  git clone https://github.com/JuanjoPischetz/42i-challenge.git
```

Go to the project directory

```bash
  cd 42i-challenge
```

Install dependencies

```bash
  npm install
```



## Run Locally

You can run a development environment 

```bash
  npm run dev
```

Or you can run a production environment


```bash
  npm run build
  npm start
```

On your browse:

http://localhost:3000

## Run Locally with Docker

Be sure to have installed docker and enabled virtualization (BIOS Settings) before trying this steps.

Be sure there´s no another container running on port 3000:

```bash
  docker ps
```

If theres one Docker container running on port 3000 just stop it:

```bash
  docker stop <Container_ID>
```

Build project Image. On project´s root:

```bash
  docker build -t 42i-challenge .
```
Once it finish do:

```bash
  docker run -dp 3000:3000 42i-challenge
```

Check your browser:

http://localhost:3000
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

