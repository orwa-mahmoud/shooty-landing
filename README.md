## Getting Started

First, create an environment file.

```bash
touch .env
```

Copy and paste below environment variables in newly created .env file.

```bash
NEXT_PUBLIC_API_URL = BACKEND_API_URL
NEXT_PUBLIC_SAAS_APP_URL = SAAS_APP_URL_FOR_REDIRECTION
```

After that run below commands

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can add virtual host by modifying your hosts file.
