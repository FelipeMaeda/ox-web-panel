Frontend for [OX Admin Rest API](https://github.com/leomarangoni/ox-rest-api).

### Developed on top of [Marmelab's React Admin](https://marmelab.com/react-admin/)

## Get Started

```
git clone https://github.com/leomarangoni/ox-web-panel.git
cd ox-web-panel
npm install
cp src/template_config.json src/config.js
```
edit src/config.js with your api address and other custom configs and then `npm start` 

## Building for production using AWS S3

- [Install](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) and [configure](https://docs.aws.amazon.com/cli/latest/reference/configure/) awscli.
- configure a [website bucket](https://docs.aws.amazon.com/pt_br/AmazonS3/latest/dev/WebsiteHosting.html)
- Execute: `npm run build && aws s3 sync build s3://<bucket_addres>`



