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

var precacheConfig = [["C:/Users/mine/mylog/public/2020/05/14/MySQL/index.html","30cbe602c6a2115d2e489dc02484d98a"],["C:/Users/mine/mylog/public/2020/05/15/access/index.html","06020bf7277ff2abfe34ab011e3652c0"],["C:/Users/mine/mylog/public/2020/05/18/MSSQL/index.html","e435f00d0bbe5a8f977af027710c301d"],["C:/Users/mine/mylog/public/2020/05/20/oracle/index.html","14ab4bf3e422ebf7b57fe70db034505b"],["C:/Users/mine/mylog/public/2020/05/29/XSS/index.html","68d130c5b05393849d39f7962ddf4273"],["C:/Users/mine/mylog/public/2020/05/30/CSRF/index.html","89f43faddcb034b568ea447e2901c77e"],["C:/Users/mine/mylog/public/2020/05/31/HTTP/index.html","30d505f69cbc1c8b37f276d0b820fcaf"],["C:/Users/mine/mylog/public/2020/06/03/文件上传/index.html","0a4ee6d181bc2ef5aa0505a01c6738fd"],["C:/Users/mine/mylog/public/2020/06/17/serialize/index.html","ec50ec0103618426fbd1f511e351a833"],["C:/Users/mine/mylog/public/2020/06/17/文件包含/index.html","74a7be4ef70045284eeb7fc83e93a229"],["C:/Users/mine/mylog/public/2020/06/21/SYSTEM/index.html","42552cc01998191ecc0e983b0681f04e"],["C:/Users/mine/mylog/public/404.html","f900e25a8a2f98c6e774a816cda0292a"],["C:/Users/mine/mylog/public/archives/2020/05/index.html","a8e0e8a71b07e40361660e096609c9ff"],["C:/Users/mine/mylog/public/archives/2020/06/index.html","cfdb337b2d8fc7759bf1ff726960d57a"],["C:/Users/mine/mylog/public/archives/2020/index.html","fd79f32be32baa4969fe358462e99927"],["C:/Users/mine/mylog/public/archives/2020/page/2/index.html","3a32eb21b6c7386a889e770f416c0965"],["C:/Users/mine/mylog/public/archives/index.html","27c16d361a72fe03d0b7886bed24704a"],["C:/Users/mine/mylog/public/archives/page/2/index.html","e39e41fe03bccbcdfc720eb38e8a18bc"],["C:/Users/mine/mylog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/mine/mylog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/mine/mylog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/mine/mylog/public/categories/WEB安全/index.html","68f7969efb40e20699511ff4da628997"],["C:/Users/mine/mylog/public/categories/index.html","af225e154e07f9555c9ba95a14b09198"],["C:/Users/mine/mylog/public/categories/内网渗透/index.html","cd4a65203d8f061d9bf5cc87cd798e21"],["C:/Users/mine/mylog/public/css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["C:/Users/mine/mylog/public/css/fonts/fontawesome-webfont.svg","b526f0637e912fae979bcfe9f0c9bd74"],["C:/Users/mine/mylog/public/css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["C:/Users/mine/mylog/public/css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["C:/Users/mine/mylog/public/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["C:/Users/mine/mylog/public/css/index.css","c21ac12011a4b3a22a96bcbfe261a633"],["C:/Users/mine/mylog/public/css/style.css","e0f2834f57fe78ecb80012a3863d05f5"],["C:/Users/mine/mylog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/mine/mylog/public/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["C:/Users/mine/mylog/public/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["C:/Users/mine/mylog/public/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["C:/Users/mine/mylog/public/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["C:/Users/mine/mylog/public/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["C:/Users/mine/mylog/public/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["C:/Users/mine/mylog/public/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["C:/Users/mine/mylog/public/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["C:/Users/mine/mylog/public/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["C:/Users/mine/mylog/public/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["C:/Users/mine/mylog/public/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["C:/Users/mine/mylog/public/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["C:/Users/mine/mylog/public/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["C:/Users/mine/mylog/public/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["C:/Users/mine/mylog/public/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["C:/Users/mine/mylog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/mine/mylog/public/img/MySQL.jpg","0577878a2a39a8d0be81700328c3d69c"],["C:/Users/mine/mylog/public/img/access.jpg","176092ddee6d06626fff1633b2c72e8e"],["C:/Users/mine/mylog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/mine/mylog/public/img/avatar.png","813d40fd054f2cce83cdd026f2585ffb"],["C:/Users/mine/mylog/public/img/baohan.png","886288c2a573d9f600454cbfa95d6566"],["C:/Users/mine/mylog/public/img/beijing.jpg","35cd35e2746f82f77f74a3d1f0dbc8d5"],["C:/Users/mine/mylog/public/img/csrf.jpg","d403aacde47464ed2e35d0c9b830404a"],["C:/Users/mine/mylog/public/img/favicon.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/mine/mylog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/mine/mylog/public/img/http.jpg","9516b6c9eec7d30ce7fba7aa8af54930"],["C:/Users/mine/mylog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/mine/mylog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/mine/mylog/public/img/mssql.jpg","bd4d35a9a9be7df12382276b92170aa0"],["C:/Users/mine/mylog/public/img/oracle.jpg","0c7614237fdb6d425851d3162e5be05a"],["C:/Users/mine/mylog/public/img/serialize.jpg","31cddc5a4eb6fbbd1fc9ef635657a68f"],["C:/Users/mine/mylog/public/img/system.jpg","ca806a33bf8c11df9e8f8f9c9ac2c238"],["C:/Users/mine/mylog/public/img/touxiang.png","d27c93724a63b8a9232b802fe51ea581"],["C:/Users/mine/mylog/public/img/tubiao.png","ab63bdfd13aade50b8ac88ad860e090d"],["C:/Users/mine/mylog/public/img/wenjian.jpg","d83fb720ab185c2fe1d0917ec6753ae3"],["C:/Users/mine/mylog/public/img/xss.jpg","4debaffcf18b2494d866d14456f233b3"],["C:/Users/mine/mylog/public/index.html","f62b7d79eacb237f866f98ba8d87dbc2"],["C:/Users/mine/mylog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["C:/Users/mine/mylog/public/js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["C:/Users/mine/mylog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["C:/Users/mine/mylog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["C:/Users/mine/mylog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/mine/mylog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/mine/mylog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/mine/mylog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["C:/Users/mine/mylog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/mine/mylog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/mine/mylog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/mine/mylog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["C:/Users/mine/mylog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["C:/Users/mine/mylog/public/link/index.html","01a5ca88ff54f071942743b1d65567e3"],["C:/Users/mine/mylog/public/page/2/index.html","5f90e27d355319b2e55084d88cd4be70"],["C:/Users/mine/mylog/public/tags/CSRF/index.html","b8edeeadd4a479ec0697c78093599c2a"],["C:/Users/mine/mylog/public/tags/HTTP/index.html","bd0f5002001a307a76fee19a166976c2"],["C:/Users/mine/mylog/public/tags/XSS/index.html","46e795f62a7a949d1afb32c7d1986656"],["C:/Users/mine/mylog/public/tags/index.html","4655256b79a92602f45e31d5c1603fd7"],["C:/Users/mine/mylog/public/tags/内网渗透/index.html","efc98efc6bb9893a1b1cf935e88ceb6a"],["C:/Users/mine/mylog/public/tags/反序列化/index.html","f1af7d38e53c9094ce8c3520e1d36860"],["C:/Users/mine/mylog/public/tags/文件上传/index.html","7b8a7fe3c6beff6619ca0862ccf74d05"],["C:/Users/mine/mylog/public/tags/文件包含/index.html","a29c2617f033d83a4d38a637011de4fa"],["C:/Users/mine/mylog/public/tags/注入/index.html","99c4c083116df1fc7357d21a6fb9a64b"]];
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







