let nock = require('nock');

module.exports.hash = "2f708f51c86beeac13bfb5af217c4ed0";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/synonymmaps(%27my-azure-synonymmap-1%27)')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147bf6735cbda6c3cad966dfeaefde8d147f3b65d358feede6df3a66df2ac9ecea759933763f97d7c552c67d555335ee6eddddf6d91b7195efff1e67a592daf178b6cd5dcfdddf2655bb4d71f8d0c6c6a7441807fdf8f76de1d3c7df8e9d3a79f3ef8f4e0d39ddd074f7fdf8fa8d5325be4f4f5e27a3bfbc1baceb71daced5dfafabcaa1719106baab2a6bff5eb863ef96a59b4f92c7ddd6684ec280dfe4cabf3f47891d7c5344b3f3b4abf7a7dfcfb2ebf9b35f36279d156cb518adfc7f8e6bbc704345f4eebeb555b54cbdf2bbffee8d1725d96bfe4ff01582f66661c010000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; odata.metadata=minimal',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'ETag',
  'W/"0x8D96DD67686017D"',
  'Vary',
  'Accept-Encoding',
  'request-id',
  'bee64da5-991d-4e74-baad-88f12fbffed6',
  'elapsed-time',
  '8',
  'OData-Version',
  '4.0',
  'Preference-Applied',
  'odata.include-annotations="*"',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains',
  'Date',
  'Thu, 02 Sep 2021 05:56:57 GMT',
  'Content-Length',
  '335'
]);
