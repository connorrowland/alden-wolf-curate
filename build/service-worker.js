"use strict";var precacheConfig=[["/index.html","9e1e354ff683cd64b10d176050e87f32"],["/static/css/main.b90fe9c1.css","e6939c1f9360ec67574fe1fa3acc6c6f"],["/static/js/main.a7544fa9.js","fb22824996860aa5a2a5b42129f97723"],["/static/media/01LandingPageAdHero.109c8623.gif","109c86232540bc66e408aa269ff9ae8e"],["/static/media/Award_Background.52d884a7.png","52d884a7c0f14a810c56f7ebdaee3d99"],["/static/media/Graphik-Medium-Web.40df565a.svg","40df565ace7160e5f1f25426c6458f76"],["/static/media/Graphik-Medium-Web.53196d10.eot","53196d1066bcb358c3311346e13d322e"],["/static/media/Graphik-Medium-Web.bfce7d25.ttf","bfce7d258b83fe0288516a603e6c8938"],["/static/media/Graphik-Medium-Web.d01c03d0.woff","d01c03d0ac69e9b030e0cd9e748a307b"],["/static/media/Graphik-Medium-Web.fb3c68f3.woff2","fb3c68f3ecb4f79401c28b797358b1ff"],["/static/media/Graphik-Semibold-Web.40668d93.svg","40668d9393aec5d62b0680712f9bf142"],["/static/media/Graphik-Semibold-Web.4e026edf.ttf","4e026edf40ac1c4f95d38fecf1e95a94"],["/static/media/Graphik-Semibold-Web.5d3a9bf9.woff2","5d3a9bf9d6b3680b37f346fcee15e0cc"],["/static/media/Graphik-Semibold-Web.7e01b67e.eot","7e01b67e13f19f457352e43ed09f26cd"],["/static/media/Graphik-Semibold-Web.f0383c2f.woff","f0383c2f966b9e37462998e6c73b7eed"],["/static/media/Landing_Globe_Bg.707ced20.png","707ced202aa86caefaa42db2e8ff2ee3"],["/static/media/Landing_Graph_BG.ef74c664.png","ef74c6644a08827f471feb786135cfcb"],["/static/media/Landing_Graph_BG_Mobile.b9e64795.png","b9e64795c850e33f15d74c6f877f4998"],["/static/media/Landing_Product_Mockup.e35c4d80.png","e35c4d801a3d4acb79ccecf6719a60df"],["/static/media/Logo.c598060d.png","c598060db8ce2dea6f9d07e1a8d266db"],["/static/media/Platform_BG.fb3165c3.png","fb3165c377b3cb064b7c2ab117ceb323"],["/static/media/Platform_Hero_Image.c6464abd.png","c6464abd1bf655be20a7c23530083e3e"],["/static/media/Platform_Hero_Mobile.cdbc1108.png","cdbc11080479202ef1b7da05d27ce05c"],["/static/media/PublishersPageAd1.58cffed5.png","58cffed5b15a497b935214a8bf861e02"],["/static/media/PublishersPageAd2.48c1c7d6.png","48c1c7d6ae130fd363f067b35d65d6e9"],["/static/media/PublishersPageAd3.e2e9b52a.png","e2e9b52a807f1ca44a59fec905716191"],["/static/media/PublishersPageAd4.70bdb3c8.gif","70bdb3c85e2be53c0794b5dfb01284f6"],["/static/media/PublishersPageAd5.ad8d4fad.png","ad8d4fad32bc9c39703030b9e4791065"],["/static/media/Publishers_Mockup_1.190d4b99.png","190d4b999c31220d577ef37fbae9e88e"],["/static/media/Publishers_Mockup_2.bba653af.png","bba653af1eec3b1f0d961fa591720085"],["/static/media/Publishers_Mockup_3.14ea7a68.png","14ea7a684b93f553a90665de070518ff"],["/static/media/SampleAd1.340b7d91.png","340b7d91f0e73d2f4ededc66fdeb2c6f"],["/static/media/SampleAd2.e8fda1c9.png","e8fda1c986cdaede8198df759adac1fd"],["/static/media/SampleAd3.f2cac000.png","f2cac00087fed5c5622fd50bc377e152"],["/static/media/Shield_Icon.143a2d5b.png","143a2d5b872c50537755706066dda597"],["/static/media/Team_Photo.86378c0f.png","86378c0fc515cc97ed54e050da85b5b9"],["/static/media/ecommerce.26352e77.png","26352e7759c97835f954ff3f4a2ce200"],["/static/media/entertainment.ffb94255.png","ffb94255e0a12dff77b5c45575f96926"],["/static/media/finance.c6b12f2e.png","c6b12f2e1a5715a66f8dbb07c529aa07"],["/static/media/fitness.ee5435bb.png","ee5435bb19dba948b088d9db97aaa23c"],["/static/media/food.1971780d.png","1971780d91527b4271ed908da539132c"],["/static/media/game.2b154fd8.png","2b154fd8d1347eb33917ff0251c730cb"],["/static/media/lifestyle.cb62bfd3.png","cb62bfd3b4bb2740cf3d794c131f74b1"],["/static/media/quick.028fe584.png","028fe584684ae94e736e8435203c58ad"],["/static/media/social.0068164e.png","0068164e8814a4e5d1f97cdc2f0e226c"],["/static/media/utilities.350755cd.png","350755cd1b85690df3150a14e7253306"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});