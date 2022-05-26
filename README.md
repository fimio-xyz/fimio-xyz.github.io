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

## Cloudflare
Cloudflare provides both our nameserver and free self-signed SSL certificate to certify the security of the Fimio site. 

By going to GoDaddy under "DNS Management," you can see that the nameservers are no longer the default GoDaddy nameservers, but the Cloudflare nameservers.
<img width="1215" alt="Screen Shot 2022-05-26 at 2 00 24 PM" src="https://user-images.githubusercontent.com/12959959/170579789-50a560b8-e320-417a-9b1a-5fdf015b9597.png">

Once logged into Cloudflare, you can see under the "SSL/TLS" tab that we're set to "Full" SSL/TLS Encryption mode. This means that we have not purchased a third party SSL certificate, and we are verifying the legitimacy of the site ourselves. This does not pose a security risk to us as this site does not handle sensitive data. 
<img width="1216" alt="Screen Shot 2022-05-26 at 2 00 58 PM" src="https://user-images.githubusercontent.com/12959959/170579952-9d364e57-0769-4308-a90d-15e9f1381c38.png">
