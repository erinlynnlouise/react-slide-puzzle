!function(n){function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};r.m=n,r.c=t,r.i=function(n){return n},r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},r.p="/build/",r(r.s=0)}([function(n,r){self.onmessage=function(n){if("solve"===n.data.cmd){var r=n.data.sequence,o=r.length>10?t(r):e(r);self.postMessage({cmd:"solved",solution:o})}};var t=function(n){var r=[],t=null,i=n.slice(0);t=e(i,[1,2,"x","x","x","x","x","x","x","x","x","x","x","x","x","x"]),r=r.concat(t);var u=o(t,n),a=u.slice(0);t=e(a,[1,2,3,4,"x","x","x","x","x","x","x","x","x","x","x","x"]),r=r.concat(t);var f=o(t,u),x=f.slice(0);t=e(x,[1,2,3,4,5,"x","x","x",9,"x","x","x",13,"x","x","x"]),r=r.concat(t);var c=o(t,f),l=c.slice(0);return t=e(l,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"x"]),r=r.concat(t)},e=function(n,r){if(r)for(var t=0;t<r.length-1;)"x"===r[t]&&(n[n.indexOf(t+1)]="x"),"o"===r[t]&&(n[n.indexOf(t+1)]="o"),t++;var e=n.toString(),o=[e],a={},f=!1,c=Math.sqrt(n.length),s=u(n,c);a[e]=[0,null];for(var v=[];o.length>0&&!f;){var h=1/0;n:for(var g=0;g<o.length;g++){var d=function(n){var t=o[n],e=a[t][0],d=a[t][1],p=l(t),b=e+u(p,c);if(b>s)return h=Math.min(b,h),"continue";if(0===x(p)){for(var y=t;y;){var O=l(y),m=O.indexOf(O.length);y=a[y][1],y&&v.unshift(m)}return f=!0,"break"}i(t,d,c,r).forEach(function(r){var i=e+1;if(!(a[r]&&a[r][0]<=i)){var u=o.indexOf(r);-1!==u&&(o.splice(u,1),u<=n&&n--),o.splice(n+1,0,r),a[r]=[i,t]}}),o.splice(n,1),n--,g=n}(g);switch(d){case"continue":continue;case"break":break n}}s=h,0===o.length&&console.log("not found")}return v},o=function(n,r){for(var t=r,e=0;e<n.length;){var o=n[e],i=t.indexOf(t.length),u=t[o];t[o]=t.length,t[i]=u,e++}return t},i=function(n,r,t,e){var o=l(n),i=r?l(r):null,u=s(o,t),a=r&&i?i.indexOf(i.length):null,f=[],x=o.indexOf(o.length);return u.forEach(function(n,r,t){if(n!==a){var e=o.slice(0),i=e[x],u="x"===o[n]?o[n]:Number(o[n]);e[x]=u,e[n]=i;var c=e.toString();f.unshift(c)}}),f},u=function(n,r){return c(n,r)},a=function(n,r){var t=Math.floor(n/r);return{x:n-t*r,y:t}},f=function(n,r,t){return r*t+n},x=function(n){for(var r=0,t=0;t<n.length;)"x"!==n[t]&&n[t]!==t+1&&n[t]!==n.length&&r++,t++;return r},c=function(n,r){var t=0;return n.forEach(function(n,e,o){if(n===o.length);else if("x"===n);else{var i=a(e,r),u=a(n-1,r),f=Math.abs(i.x-u.x),x=Math.abs(i.y-u.y);t+=f+x}}),t},l=function(n){for(var r=n.split(","),t=0;t<r.length;)"x"!==r[t]&&(r[t]=Number(r[t])),t++;return r},s=function(n,r){var t=[],e=n.indexOf(n.length),o=a(e,r);if(o.x>0){var i=f(o.x-1,o.y,r);t.push(i)}if(o.x<r-1){var u=f(o.x+1,o.y,r);t.push(u)}if(o.y>0){var x=f(o.x,o.y-1,r);t.push(x)}if(o.y<r-1){var c=f(o.x,o.y+1,r);t.push(c)}return t}}]);
//# sourceMappingURL=40dd3cd709791d666ad0.worker.js.map