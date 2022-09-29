# Deploy Worker GitHub Action

### Blazing Fast Build & Deployment of Cloudflare Workers 
- Supports HTTP imports
- Supports Workers for Platforms 

You don't even need a Cloudflare account to deploy workers with this action.

```yaml
name: Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - name: deploy-worker
        uses: drivly/deploy-worker
        with:
          name: 'hello-world'
          main: './worker.js'
```

But you can deploy to your Cloudflare account if you prefer:
```yaml
name: Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - name: deploy-worker
        uses: drivly/deploy-worker
        with:
          name: 'hello-world'
          main: './worker.js'
          cloudflareAccountId: ${{ secrets.CF_ACCOUNT_ID }}
          cloudflareApiToken: ${{ secrets.CF_API_TOKEN }}
```

You can also specify a 'wrangler.toml' file to use for configuration:
```yaml
name: Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - name: deploy-worker
        uses: drivly/deploy-worker
        with:
          name: 'hello-world'
          main: './worker.js'
          config: './wrangler.toml'
          cloudflareAccountId: ${{ secrets.CF_ACCOUNT_ID }}
          cloudflareApiToken: ${{ secrets.CF_API_TOKEN }}
```

But you can also specify your configuration in YAML:
```yaml
name: Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - name: deploy-worker
        uses: drivly/deploy-worker
        with:
          name: 'hello-world'
          main: './worker.js'
          config: './worker.yaml'
          cloudflareAccountId: ${{ secrets.CF_ACCOUNT_ID }}
          cloudflareApiToken: ${{ secrets.CF_API_TOKEN }}
```


Or JSON if you prefer:
```yaml
          config: './worker.json'
```

