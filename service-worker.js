/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/mine/mylog/public/2020/05/14/MySQL/index.html","728a4b6855575a0d7cc13711544c3887"],["C:/Users/mine/mylog/public/2020/05/15/access/index.html","37022a86328ad13106e83c2efb312c95"],["C:/Users/mine/mylog/public/2020/05/18/MSSQL/index.html","523b95c4fce1466b1d89e0a1ae085823"],["C:/Users/mine/mylog/public/2020/05/20/oracle/index.html","aedd2679c4edecde44b13fea172fef9a"],["C:/Users/mine/mylog/public/2020/05/29/XSS/index.html","67e8b1d79cf4f892a4d65afd55a54146"],["C:/Users/mine/mylog/public/2020/05/30/CSRF/index.html","a8fe24e9263e906dfad607b00169b10f"],["C:/Users/mine/mylog/public/2020/05/31/HTTP/index.html","51b75eb530b823869f01eb484dc8b16f"],["C:/Users/mine/mylog/public/2020/06/03/文件上传/index.html","6cc7f951320d26dca0125a1b4a9f0195"],["C:/Users/mine/mylog/public/2021/04/03/web安全整理/index.html","d45542c31b45bbc5a1fb5c534f69cc29"],["C:/Users/mine/mylog/public/2021/04/04/内网信息收集/index.html","7cf455354fe6ed9c5c8fd3c7aca4499a"],["C:/Users/mine/mylog/public/2021/04/18/SSRF/index.html","07c9498c16e2e51b001746301703569d"],["C:/Users/mine/mylog/public/404.html","001618dbc438261af86dcab61c3799cb"],["C:/Users/mine/mylog/public/archives/2020/05/index.html","4abb8b5c5f912b06bc6ab422e2d5d8ab"],["C:/Users/mine/mylog/public/archives/2020/06/index.html","8dcacc35977126b94f302ca0c6ef45eb"],["C:/Users/mine/mylog/public/archives/2020/index.html","2a3f8486944419bc1a5107b1fabb727b"],["C:/Users/mine/mylog/public/archives/2021/04/index.html","e94e744103b13019d0074cb516279d48"],["C:/Users/mine/mylog/public/archives/2021/index.html","114153e818b65e14c4092f2f456f0ebf"],["C:/Users/mine/mylog/public/archives/index.html","9a9f5c26559a48b71e4f65d6cb9a92cb"],["C:/Users/mine/mylog/public/archives/page/2/index.html","5bf6ec1b1bb0ab7175ff704eb0c3ad3f"],["C:/Users/mine/mylog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/mine/mylog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/mine/mylog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/mine/mylog/public/categories/WEB安全/index.html","4952891d0b7a49bf2f4701d99058760e"],["C:/Users/mine/mylog/public/categories/index.html","651ede28414a2021254444f0a2ee50d2"],["C:/Users/mine/mylog/public/categories/内网/index.html","634795e402687fe277146335cd126ef4"],["C:/Users/mine/mylog/public/css/index.css","980fac541da6f3ef9069d9779e216449"],["C:/Users/mine/mylog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/mine/mylog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/mine/mylog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/mine/mylog/public/img/avatar.png","813d40fd054f2cce83cdd026f2585ffb"],["C:/Users/mine/mylog/public/img/favicon.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/mine/mylog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/mine/mylog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/mine/mylog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/mine/mylog/public/img/touxiang.png","d27c93724a63b8a9232b802fe51ea581"],["C:/Users/mine/mylog/public/img/tubiao.png","ab63bdfd13aade50b8ac88ad860e090d"],["C:/Users/mine/mylog/public/index.html","1b5a44eec5b8dc9471c97ec166d1a73c"],["C:/Users/mine/mylog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["C:/Users/mine/mylog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["C:/Users/mine/mylog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["C:/Users/mine/mylog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/mine/mylog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/mine/mylog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/mine/mylog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["C:/Users/mine/mylog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/mine/mylog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/mine/mylog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/mine/mylog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["C:/Users/mine/mylog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["C:/Users/mine/mylog/public/link/index.html","e58c90e2b5700963168dfd3fce34b1bc"],["C:/Users/mine/mylog/public/page/2/index.html","c477535aff74b3c3c448eaebd16a0ed8"],["C:/Users/mine/mylog/public/tags/ATT-CK/index.html","3fa672d687c262beb0c51885bd983076"],["C:/Users/mine/mylog/public/tags/CSRF/index.html","095ab501931ed15a87490bc84539dd8a"],["C:/Users/mine/mylog/public/tags/HTTP/index.html","7a0b190b7c2a4b3cec5ff121f2084715"],["C:/Users/mine/mylog/public/tags/SSRF/index.html","2a9c4e9a9688ce83b7f8d59ac5e7d322"],["C:/Users/mine/mylog/public/tags/XSS/index.html","8e26659a3e596f16bff10d64254102d7"],["C:/Users/mine/mylog/public/tags/index.html","d1c10643304467e9b36a445873850cd2"],["C:/Users/mine/mylog/public/tags/文件上传/index.html","964098d7a0d9cd2308958cb54c287f9c"],["C:/Users/mine/mylog/public/tags/注入/index.html","688d484eb648ae7de443cc8c5db4ef47"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







