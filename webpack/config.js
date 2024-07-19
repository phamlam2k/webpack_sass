const listConnectSrc = ['http://14.225.0.210:3010']

const listImageSrc = ['https://api.maptiler.com']

const CSP = `
  default-src 'self';
  connect-src 'self' ${listConnectSrc.join(' ')};
  connect-src 'self';
  worker-src 'self';
  script-src 'self' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: ${listImageSrc.join(' ')};
  media-src 'self';
  object-src 'none';
  frame-src http: https:;
  form-action 'none';`
  .replace(/\s+/g, ' ')
  .trim()

module.exports = {
  CSP
}
