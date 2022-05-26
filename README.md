# fimio-xyz.github.io

## Start the Project

0. Install React `npm install react`
1. Navigate to "/fimio-landing" directory `cd fimio-landing`
2. Install dependency packages `npm install`
3. Start the project `npm start`
4. Visit the local dev environment at http://localhost:3000 in the browser

## Web Stack

**Frontend**
- React: frontend JS framework for creating dynamic websites
- [Styled components (react)](https://styled-components.com/): lightweight library for creating UI components

**DNS**
- [Go Daddy](https://jinnabalu.medium.com/godaddy-domain-with-github-pages-62aed906d4ef): request access from Omoju to configure the domain records. Nameserver points to cloudflare. A records point to Github pages. Changes to either the nameserver or DNS records needs to be edited on GoDaddy.
- [Github Pages](https://pages.github.com/): serves the flat landing page.
- Cloudflare: provides nameserver and free self-signed SSL certificate. Request Cloudflare access from Daniel. TODO: transfer cloudflare ownership

Helpful links:
- [Configuring custom Github pages domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages#using-an-apex-domain-for-your-github-pages-site)
- [Cloudflare SSL with Github pages](https://www.goyllo.com/cloudflare-ssl-for-github-pages/)

## Deployment

1. Run `npm deploy` will bundle and push latest code from your local main branch to the remote Github repo on the gh-pages branch. Changes should reflect in a few minutes.
