(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="180",Fi={ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cu=0,il=1,Pu=2,Uc=1,Du=2,wn=3,Yn=0,kt=1,mn=2,Wn=0,Ni=1,rl=2,sl=3,al=4,Uu=5,ni=100,Lu=101,Iu=102,Fu=103,Nu=104,Ou=200,Bu=201,ku=202,zu=203,Aa=204,wa=205,Gu=206,Vu=207,Hu=208,Wu=209,Xu=210,Yu=211,qu=212,ju=213,Ku=214,Ra=0,Ca=1,Pa=2,Bi=3,Da=4,Ua=5,La=6,Ia=7,Eo=0,Zu=1,Ju=2,Xn=0,Qu=1,$u=2,eh=3,th=4,nh=5,ih=6,rh=7,Lc=300,ki=301,zi=302,Fa=303,Na=304,bs=306,Oa=1e3,si=1001,Ba=1002,cn=1003,sh=1004,Ir=1005,$t=1006,zs=1007,ai=1008,_n=1009,Ic=1010,Fc=1011,mr=1012,bo=1013,ci=1014,Rn=1015,Er=1016,To=1017,Ao=1018,gr=1020,Nc=35902,Oc=35899,Bc=1021,kc=1022,ln=1023,_r=1026,vr=1027,zc=1028,wo=1029,Gc=1030,Ro=1031,Co=1033,cs=33776,us=33777,hs=33778,fs=33779,ka=35840,za=35841,Ga=35842,Va=35843,Ha=36196,Wa=37492,Xa=37496,Ya=37808,qa=37809,ja=37810,Ka=37811,Za=37812,Ja=37813,Qa=37814,$a=37815,eo=37816,to=37817,no=37818,io=37819,ro=37820,so=37821,ao=36492,oo=36494,lo=36495,co=36283,uo=36284,ho=36285,fo=36286,ah=3200,Vc=3201,Po=0,oh=1,Hn="",Ht="srgb",Gi="srgb-linear",xs="linear",st="srgb",vi=7680,ol=519,lh=512,ch=513,uh=514,Hc=515,hh=516,fh=517,dh=518,ph=519,ll=35044,cl="300 es",gn=2e3,Ss=2001;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const n=r[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ds=Math.PI/180,po=180/Math.PI;function br(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function mh(s,e){return(s%e+e)%e}function Gs(s,e,t){return(1-t)*s+t*e}function ir(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const gh={DEG2RAD:ds};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*r-a*n+e.x,this.y=i*n+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ui{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,a,o){let c=r[n+0],l=r[n+1],u=r[n+2],h=r[n+3];const f=i[a+0],d=i[a+1],g=i[a+2],_=i[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-o;const p=c*f+l*d+u*g+h*_,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),w=Math.atan2(R,p*y);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const x=o*y;if(c=c*m+f*x,l=l*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,n,i,a){const o=r[n],c=r[n+1],l=r[n+2],u=r[n+3],h=i[a],f=i[a+1],d=i[a+2],g=i[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(r/2),u=o(n/2),h=o(i/2),f=c(r/2),d=c(n/2),g=c(i/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=r+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(i-l)*d,this._z=(a-n)*d}else if(r>o&&r>h){const d=2*Math.sqrt(1+r-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(i+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-r-h);this._w=(i-l)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-r-o);this._w=(a-n)/d,this._x=(i+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=r*u+a*o+n*l-i*c,this._y=n*u+a*c+i*o-r*l,this._z=i*u+a*l+r*c-n*o,this._w=a*u-r*o-n*c-i*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,a=this._w;let o=a*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=n,this._z=i,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=r*h+this._x*f,this._y=n*h+this._y*f,this._z=i*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,a=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*a,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*a,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*r),u=2*(o*t-i*n),h=2*(i*r-a*t);return this.x=t+c*l+a*h-o*u,this.y=r+c*u+o*l-i*h,this.z=n+c*h+i*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-i*o,this.y=i*a-r*c,this.z=r*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vs.copy(this).projectOnVector(e),this.sub(Vs)}reflect(e){return this.sub(Vs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new K,ul=new ui;class qe{constructor(e,t,r,n,i,a,o,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,a,o,c,l)}set(e,t,r,n,i,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=c,u[6]=r,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[3],c=r[6],l=r[1],u=r[4],h=r[7],f=r[2],d=r[5],g=r[8],_=n[0],m=n[3],p=n[6],y=n[1],E=n[4],x=n[7],R=n[2],w=n[5],T=n[8];return i[0]=a*_+o*y+c*R,i[3]=a*m+o*E+c*w,i[6]=a*p+o*x+c*T,i[1]=l*_+u*y+h*R,i[4]=l*m+u*E+h*w,i[7]=l*p+u*x+h*T,i[2]=f*_+d*y+g*R,i[5]=f*m+d*E+g*w,i[8]=f*p+d*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-r*i*u+r*o*c+n*i*l-n*a*c}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*i,d=l*i-a*c,g=t*h+r*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(n*l-u*r)*_,e[2]=(o*r-n*a)*_,e[3]=f*_,e[4]=(u*t-n*c)*_,e[5]=(n*i-o*t)*_,e[6]=d*_,e[7]=(r*c-l*t)*_,e[8]=(a*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,a,o){const c=Math.cos(i),l=Math.sin(i);return this.set(r*c,r*l,-r*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new qe;function Wc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _h(){const s=Ms("canvas");return s.style.display="block",s}const hl={};function xr(s){s in hl||(hl[s]=!0,console.warn(s))}function vh(s,e,t){return new Promise(function(r,n){function i(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}const fl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dl=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xh(){const s={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(n,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===st&&(n.r=Cn(n.r),n.g=Cn(n.g),n.b=Cn(n.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[i].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(n.r=Oi(n.r),n.g=Oi(n.g),n.b=Oi(n.b))),n},workingToColorSpace:function(n,i){return this.convert(n,this.workingColorSpace,i)},colorSpaceToWorking:function(n,i){return this.convert(n,i,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hn?xs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,i=this.workingColorSpace){return n.fromArray(this.spaces[i].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,i,a){return n.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,i){return xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,i)},toWorkingColorSpace:function(n,i){return xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Gi]:{primaries:e,whitePoint:r,transfer:xs,toXYZ:fl,fromXYZ:dl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:r,transfer:st,toXYZ:fl,fromXYZ:dl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),s}const et=xh();function Cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Oi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xi;class Sh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xi===void 0&&(xi=Ms("canvas")),xi.width=e.width,xi.height=e.height;const n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),r=xi}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let a=0;a<i.length;a++)i[a]=Cn(i[a]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Cn(t[r]/255)*255):t[r]=Cn(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mh=0;class Do{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?i.push(Ws(n[a].image)):i.push(Ws(n[a]))}else i=Ws(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function Ws(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;const Xs=new K;class Lt extends fi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,r=si,n=si,i=$t,a=ai,o=ln,c=_n,l=Lt.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=br(),this.name="",this.source=new Do(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xs).x}get height(){return this.source.getSize(Xs).y}get depth(){return this.source.getSize(Xs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oa:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oa:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Lc;Lt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,r=0,n=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n+a[12]*i,this.y=a[1]*t+a[5]*r+a[9]*n+a[13]*i,this.z=a[2]*t+a[6]*r+a[10]*n+a[14]*i,this.w=a[3]*t+a[7]*r+a[11]*n+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,x=(d+1)/2,R=(p+1)/2,w=(u+f)/4,T=(h+_)/4,P=(g+m)/4;return E>x&&E>R?E<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(E),n=w/r,i=T/r):x>R?x<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(x),r=w/n,i=P/n):R<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(R),r=T/i,n=P/i),this.set(r,n,i,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eh extends fi{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const n={width:e,height:t,depth:r.depth},i=new Lt(n);this.textures=[];const a=r.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Do(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Eh{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Xc extends Lt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=cn,this.minFilter=cn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bh extends Lt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=cn,this.minFilter=cn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(i,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fr.copy(r.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Nr.subVectors(this.max,rr),Si.subVectors(e.a,rr),Mi.subVectors(e.b,rr),yi.subVectors(e.c,rr),Fn.subVectors(Mi,Si),Nn.subVectors(yi,Mi),jn.subVectors(Si,yi);let t=[0,-Fn.z,Fn.y,0,-Nn.z,Nn.y,0,-jn.z,jn.y,Fn.z,0,-Fn.x,Nn.z,0,-Nn.x,jn.z,0,-jn.x,-Fn.y,Fn.x,0,-Nn.y,Nn.x,0,-jn.y,jn.x,0];return!Ys(t,Si,Mi,yi,Nr)||(t=[1,0,0,0,1,0,0,0,1],!Ys(t,Si,Mi,yi,Nr))?!1:(Or.crossVectors(Fn,Nn),t=[Or.x,Or.y,Or.z],Ys(t,Si,Mi,yi,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new K,new K,new K,new K,new K,new K,new K,new K],rn=new K,Fr=new di,Si=new K,Mi=new K,yi=new K,Fn=new K,Nn=new K,jn=new K,rr=new K,Nr=new K,Or=new K,Kn=new K;function Ys(s,e,t,r,n){for(let i=0,a=s.length-3;i<=a;i+=3){Kn.fromArray(s,i);const o=n.x*Math.abs(Kn.x)+n.y*Math.abs(Kn.y)+n.z*Math.abs(Kn.z),c=e.dot(Kn),l=t.dot(Kn),u=r.dot(Kn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Th=new di,sr=new K,qs=new K;class Hi{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Th.setFromPoints(e).getCenter(r);let n=0;for(let i=0,a=e.length;i<a;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(sr,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(qs)),this.expandByPoint(sr.copy(e.center).sub(qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const yn=new K,js=new K,Br=new K,On=new K,Ks=new K,kr=new K,Zs=new K;class Tr{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){js.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),On.copy(this.origin).sub(js);const i=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=On.dot(this.direction),c=-On.dot(Br),l=On.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=i*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*i+o)),f=h>0?-i:Math.min(Math.max(-i,-c),i),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-i,-c),i),d=f*(f+2*c)+l):(h=Math.max(0,-(a*i+o)),f=h>0?i:Math.min(Math.max(-i,-c),i),d=-h*h+f*(f+2*c)+l);else f=a>0?-i:i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(js).addScaledVector(Br,f),d}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const r=yn.dot(this.direction),n=yn.dot(yn)-r*r,i=e.radius*e.radius;if(n>i)return null;const a=Math.sqrt(i-n),o=r-a,c=r+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(r=(e.min.x-f.x)*l,n=(e.max.x-f.x)*l):(r=(e.max.x-f.x)*l,n=(e.min.x-f.x)*l),u>=0?(i=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(i=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),r>a||i>n||((i>r||isNaN(r))&&(r=i),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),r>c||o>n)||((o>r||r!==r)&&(r=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,r,n,i){Ks.subVectors(t,e),kr.subVectors(r,e),Zs.crossVectors(Ks,kr);let a=this.direction.dot(Zs),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,e);const c=o*this.direction.dot(kr.crossVectors(On,kr));if(c<0)return null;const l=o*this.direction.dot(Ks.cross(On));if(l<0||c+l>a)return null;const u=-o*On.dot(Zs);return u<0?null:this.at(u/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,r,n,i,a,o,c,l,u,h,f,d,g,_,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,a,o,c,l,u,h,f,d,g,_,m)}set(e,t,r,n,i,a,o,c,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=i,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/Ei.setFromMatrixColumn(e,0).length(),i=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,a=Math.cos(r),o=Math.sin(r),c=Math.cos(n),l=Math.sin(n),u=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ah,e,wh)}lookAt(e,t,r){const n=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Bn.crossVectors(r,Gt),Bn.lengthSq()===0&&(Math.abs(r.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Bn.crossVectors(r,Gt)),Bn.normalize(),zr.crossVectors(Gt,Bn),n[0]=Bn.x,n[4]=zr.x,n[8]=Gt.x,n[1]=Bn.y,n[5]=zr.y,n[9]=Gt.y,n[2]=Bn.z,n[6]=zr.z,n[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[4],c=r[8],l=r[12],u=r[1],h=r[5],f=r[9],d=r[13],g=r[2],_=r[6],m=r[10],p=r[14],y=r[3],E=r[7],x=r[11],R=r[15],w=n[0],T=n[4],P=n[8],M=n[12],S=n[1],U=n[5],C=n[9],I=n[13],F=n[2],V=n[6],G=n[10],Q=n[14],W=n[3],q=n[7],Y=n[11],L=n[15];return i[0]=a*w+o*S+c*F+l*W,i[4]=a*T+o*U+c*V+l*q,i[8]=a*P+o*C+c*G+l*Y,i[12]=a*M+o*I+c*Q+l*L,i[1]=u*w+h*S+f*F+d*W,i[5]=u*T+h*U+f*V+d*q,i[9]=u*P+h*C+f*G+d*Y,i[13]=u*M+h*I+f*Q+d*L,i[2]=g*w+_*S+m*F+p*W,i[6]=g*T+_*U+m*V+p*q,i[10]=g*P+_*C+m*G+p*Y,i[14]=g*M+_*I+m*Q+p*L,i[3]=y*w+E*S+x*F+R*W,i[7]=y*T+E*U+x*V+R*q,i[11]=y*P+E*C+x*G+R*Y,i[15]=y*M+E*I+x*Q+R*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+i*c*h-n*l*h-i*o*f+r*l*f+n*o*d-r*c*d)+_*(+t*c*d-t*l*f+i*a*f-n*a*d+n*l*u-i*c*u)+m*(+t*l*h-t*o*d-i*a*h+r*a*d+i*o*u-r*l*u)+p*(-n*o*u-t*c*h+t*o*f+n*a*h-r*a*f+r*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*l-_*f*l+_*c*d-o*m*d-h*c*p+o*f*p,E=g*f*l-u*m*l-g*c*d+a*m*d+u*c*p-a*f*p,x=u*_*l-g*h*l+g*o*d-a*_*d-u*o*p+a*h*p,R=g*h*c-u*_*c-g*o*f+a*_*f+u*o*m-a*h*m,w=t*y+r*E+n*x+i*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(_*f*i-h*m*i-_*n*d+r*m*d+h*n*p-r*f*p)*T,e[2]=(o*m*i-_*c*i+_*n*l-r*m*l-o*n*p+r*c*p)*T,e[3]=(h*c*i-o*f*i-h*n*l+r*f*l+o*n*d-r*c*d)*T,e[4]=E*T,e[5]=(u*m*i-g*f*i+g*n*d-t*m*d-u*n*p+t*f*p)*T,e[6]=(g*c*i-a*m*i-g*n*l+t*m*l+a*n*p-t*c*p)*T,e[7]=(a*f*i-u*c*i+u*n*l-t*f*l-a*n*d+t*c*d)*T,e[8]=x*T,e[9]=(g*h*i-u*_*i-g*r*d+t*_*d+u*r*p-t*h*p)*T,e[10]=(a*_*i-g*o*i+g*r*l-t*_*l-a*r*p+t*o*p)*T,e[11]=(u*o*i-a*h*i-u*r*l+t*h*l+a*r*d-t*o*d)*T,e[12]=R*T,e[13]=(u*_*n-g*h*n+g*r*f-t*_*f-u*r*m+t*h*m)*T,e[14]=(g*o*n-a*_*n-g*r*c+t*_*c+a*r*m-t*o*m)*T,e[15]=(a*h*n-u*o*n+u*r*c-t*h*c-a*r*f+t*o*f)*T,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,a=e.x,o=e.y,c=e.z,l=i*a,u=i*o;return this.set(l*a+r,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+r,u*c-n*a,0,l*c-n*o,u*c+n*a,i*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,a){return this.set(1,r,i,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,a=t._y,o=t._z,c=t._w,l=i+i,u=a+a,h=o+o,f=i*l,d=i*u,g=i*h,_=a*u,m=a*h,p=o*h,y=c*l,E=c*u,x=c*h,R=r.x,w=r.y,T=r.z;return n[0]=(1-(_+p))*R,n[1]=(d+x)*R,n[2]=(g-E)*R,n[3]=0,n[4]=(d-x)*w,n[5]=(1-(f+p))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(g+E)*T,n[9]=(m-y)*T,n[10]=(1-(f+_))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=Ei.set(n[0],n[1],n[2]).length();const a=Ei.set(n[4],n[5],n[6]).length(),o=Ei.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],sn.copy(this);const l=1/i,u=1/a,h=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),r.x=i,r.y=a,r.z=o,this}makePerspective(e,t,r,n,i,a,o=gn,c=!1){const l=this.elements,u=2*i/(t-e),h=2*i/(r-n),f=(t+e)/(t-e),d=(r+n)/(r-n);let g,_;if(c)g=i/(a-i),_=a*i/(a-i);else if(o===gn)g=-(a+i)/(a-i),_=-2*a*i/(a-i);else if(o===Ss)g=-a/(a-i),_=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,a,o=gn,c=!1){const l=this.elements,u=2/(t-e),h=2/(r-n),f=-(t+e)/(t-e),d=-(r+n)/(r-n);let g,_;if(c)g=1/(a-i),_=a/(a-i);else if(o===gn)g=-2/(a-i),_=-(a+i)/(a-i);else if(o===Ss)g=-1/(a-i),_=-i/(a-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ei=new K,sn=new ut,Ah=new K(0,0,0),wh=new K(1,1,1),Bn=new K,zr=new K,Gt=new K,pl=new ut,ml=new ui;class hn{constructor(e=0,t=0,r=0,n=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],a=n[4],o=n[8],c=n[1],l=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ml.setFromEuler(this),this.setFromQuaternion(ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Uo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rh=0;const gl=new K,bi=new ui,En=new ut,Gr=new K,ar=new K,Ch=new K,Ph=new ui,_l=new K(1,0,0),vl=new K(0,1,0),xl=new K(0,0,1),Sl={type:"added"},Dh={type:"removed"},Ti={type:"childadded",child:null},Js={type:"childremoved",child:null};class Et extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new K,t=new hn,r=new ui,n=new K(1,1,1);function i(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ut},normalMatrix:{value:new qe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(_l,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return gl.copy(e).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_l,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Gr.copy(e):Gr.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ar,Gr,this.up):En.lookAt(Gr,ar,this.up),this.quaternion.setFromRotationMatrix(En),n&&(En.extractRotation(n.matrixWorld),bi.setFromRotationMatrix(En),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dh),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function i(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];i(e.shapes,h)}else i(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(i(e.materials,this.material[c]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(i(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),l.length>0&&(r.textures=l),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Et.DEFAULT_UP=new K(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new K,bn=new K,Qs=new K,Tn=new K,Ai=new K,wi=new K,Ml=new K,$s=new K,ea=new K,ta=new K,na=new ht,ia=new ht,ra=new ht;class on{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),an.subVectors(e,t),n.cross(an);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){an.subVectors(n,t),bn.subVectors(r,t),Qs.subVectors(e,t);const a=an.dot(an),o=an.dot(bn),c=an.dot(Qs),l=bn.dot(bn),u=bn.dot(Qs),h=a*l-o*o;if(h===0)return i.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,r,n,i,a,o,c){return this.getBarycoord(e,t,r,n,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(i,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(o,Tn.z),c)}static getInterpolatedAttribute(e,t,r,n,i,a){return na.setScalar(0),ia.setScalar(0),ra.setScalar(0),na.fromBufferAttribute(e,t),ia.fromBufferAttribute(e,r),ra.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(na,i.x),a.addScaledVector(ia,i.y),a.addScaledVector(ra,i.z),a}static isFrontFacing(e,t,r,n){return an.subVectors(r,t),bn.subVectors(e,t),an.cross(bn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),an.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return on.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let a,o;Ai.subVectors(n,r),wi.subVectors(i,r),$s.subVectors(e,r);const c=Ai.dot($s),l=wi.dot($s);if(c<=0&&l<=0)return t.copy(r);ea.subVectors(e,n);const u=Ai.dot(ea),h=wi.dot(ea);if(u>=0&&h<=u)return t.copy(n);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(r).addScaledVector(Ai,a);ta.subVectors(e,i);const d=Ai.dot(ta),g=wi.dot(ta);if(g>=0&&d<=g)return t.copy(i);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(r).addScaledVector(wi,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ml.subVectors(i,n),o=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(Ml,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(r).addScaledVector(Ai,a).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ze{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,r,n=et.workingColorSpace){return this.r=e,this.g=t,this.b=r,et.colorSpaceToWorking(this,n),this}setHSL(e,t,r,n=et.workingColorSpace){if(e=mh(e,1),t=Je(t,0,1),r=Je(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,a=2*r-i;this.r=sa(a,i,e+1/3),this.g=sa(a,i,e),this.b=sa(a,i,e-1/3)}return et.colorSpaceToWorking(this,n),this}setStyle(e,t=Ht){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const r=Yc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return et.workingToColorSpace(Ct.copy(this),e),Math.round(Je(Ct.r*255,0,255))*65536+Math.round(Je(Ct.g*255,0,255))*256+Math.round(Je(Ct.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ct.copy(this),t);const r=Ct.r,n=Ct.g,i=Ct.b,a=Math.max(r,n,i),o=Math.min(r,n,i);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case r:c=(n-i)/h+(n<i?6:0);break;case n:c=(i-r)/h+2;break;case i:c=(r-n)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Ht){et.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,r=Ct.g,n=Ct.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Vr);const r=Gs(kn.h,Vr.h,t),n=Gs(kn.s,Vr.s,t),i=Gs(kn.l,Vr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ze;Ze.NAMES=Yc;let Uh=0;class vn extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=br(),this.name="",this.type="Material",this.blending=Ni,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=wa,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(r.blending=this.blending),this.side!==Yn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Aa&&(r.blendSrc=this.blendSrc),this.blendDst!==wa&&(r.blendDst=this.blendDst),this.blendEquation!==ni&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const a=[];for(const o in i){const c=i[o];delete c.metadata,a.push(c)}return a}if(t){const i=n(e.textures),a=n(e.images);i.length>0&&(r.textures=i),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lo extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new K,Hr=new Ye;let Lh=0;class un{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=ll,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ir(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ot(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class qc extends un{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class jc extends un{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class yt extends un{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Ih=0;const Zt=new ut,aa=new Et,Ri=new K,Vt=new di,or=new di,Mt=new K;class Wt extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wc(e)?jc:qc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new qe().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,r){return Zt.makeTranslation(e,t,r),this.applyMatrix4(Zt),this}scale(e,t,r){return Zt.makeScale(e,t,r),this.applyMatrix4(Zt),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];r.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(r,3))}else{const r=Math.min(e.length,t.count);for(let n=0;n<r;n++){const i=e[n];t.setXYZ(n,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Vt.setFromBufferAttribute(i),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Vt.min,or.min),Vt.expandByPoint(Mt),Mt.addVectors(Vt.max,or.max),Vt.expandByPoint(Mt)):(Vt.expandByPoint(or.min),Vt.expandByPoint(or.max))}Vt.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)Mt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(Mt));if(t)for(let i=0,a=t.length;i<a;i++){const o=t[i],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Mt.fromBufferAttribute(o,l),c&&(Ri.fromBufferAttribute(e,l),Mt.add(Ri)),n=Math.max(n,r.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<r.count;P++)o[P]=new K,c[P]=new K;const l=new K,u=new K,h=new K,f=new Ye,d=new Ye,g=new Ye,_=new K,m=new K;function p(P,M,S){l.fromBufferAttribute(r,P),u.fromBufferAttribute(r,M),h.fromBufferAttribute(r,S),f.fromBufferAttribute(i,P),d.fromBufferAttribute(i,M),g.fromBufferAttribute(i,S),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(U),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),o[P].add(_),o[M].add(_),o[S].add(_),c[P].add(m),c[M].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,M=y.length;P<M;++P){const S=y[P],U=S.start,C=S.count;for(let I=U,F=U+C;I<F;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const E=new K,x=new K,R=new K,w=new K;function T(P){R.fromBufferAttribute(n,P),w.copy(R);const M=o[P];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),x.crossVectors(w,M);const U=x.dot(c[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,U)}for(let P=0,M=y.length;P<M;++P){const S=y[P],U=S.start,C=S.count;for(let I=U,F=U+C;I<F;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,d=r.count;f<d;f++)r.setXYZ(f,0,0,0);const n=new K,i=new K,a=new K,o=new K,c=new K,l=new K,u=new K,h=new K;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,i),h.subVectors(n,i),u.cross(h),o.fromBufferAttribute(r,g),c.fromBufferAttribute(r,_),l.fromBufferAttribute(r,m),o.add(u),c.add(u),l.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,c.x,c.y,c.z),r.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,i),h.subVectors(n,i),u.cross(h),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,r=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=e(c,r);t.setAttribute(o,l)}const i=this.morphAttributes;for(const o in i){const c=[],l=i[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,r);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const l=r[c];e.data.attributes[c]=l.toJSON(e.data)}const n={};let i=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(n[c]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const n=e.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(t))}const i=e.morphAttributes;for(const l in i){const u=[],h=i[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new ut,Zn=new Tr,Wr=new Hi,El=new K,Xr=new K,Yr=new K,qr=new K,oa=new K,jr=new K,bl=new K,Kr=new K;class Ut extends Et{constructor(e=new Wt,t=new Lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){jr.set(0,0,0);for(let c=0,l=i.length;c<l;c++){const u=o[c],h=i[c];u!==0&&(oa.fromBufferAttribute(h,e),a?jr.addScaledVector(oa,u):jr.addScaledVector(oa.sub(t),u))}t.add(jr)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wr.copy(r.boundingSphere),Wr.applyMatrix4(i),Zn.copy(e.ray).recast(e.near),!(Wr.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Wr,El)===null||Zn.origin.distanceToSquared(El)>(e.far-e.near)**2))&&(yl.copy(i).invert(),Zn.copy(e.ray).applyMatrix4(yl),!(r.boundingBox!==null&&Zn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,a=this.material,o=i.index,c=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv1,h=i.attributes.normal,f=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,R=E;x<R;x+=3){const w=o.getX(x),T=o.getX(x+1),P=o.getX(x+2);n=Zr(this,p,e,r,l,u,h,w,T,P),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);n=Zr(this,a,e,r,l,u,h,y,E,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,R=E;x<R;x+=3){const w=x,T=x+1,P=x+2;n=Zr(this,p,e,r,l,u,h,w,T,P),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,x=m+2;n=Zr(this,a,e,r,l,u,h,y,E,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Fh(s,e,t,r,n,i,a,o){let c;if(e.side===kt?c=r.intersectTriangle(a,i,n,!0,o):c=r.intersectTriangle(n,i,a,e.side===Yn,o),c===null)return null;Kr.copy(o),Kr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Kr);return l<t.near||l>t.far?null:{distance:l,point:Kr.clone(),object:s}}function Zr(s,e,t,r,n,i,a,o,c,l){s.getVertexPosition(o,Xr),s.getVertexPosition(c,Yr),s.getVertexPosition(l,qr);const u=Fh(s,e,t,r,Xr,Yr,qr,bl);if(u){const h=new K;on.getBarycoord(bl,Xr,Yr,qr,h),n&&(u.uv=on.getInterpolatedAttribute(n,o,c,l,h,new Ye)),i&&(u.uv1=on.getInterpolatedAttribute(i,o,c,l,h,new Ye)),a&&(u.normal=on.getInterpolatedAttribute(a,o,c,l,h,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new K,materialIndex:0};on.getNormal(Xr,Yr,qr,f.normal),u.face=f,u.barycoord=h}return u}class Ar extends Wt{constructor(e=1,t=1,r=1,n=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:a};const o=this;n=Math.floor(n),i=Math.floor(i),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,r,t,e,a,i,0),g("z","y","x",1,-1,r,t,-e,a,i,1),g("x","z","y",1,1,e,r,t,n,a,2),g("x","z","y",1,-1,e,r,-t,n,a,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(h,2));function g(_,m,p,y,E,x,R,w,T,P,M){const S=x/T,U=R/P,C=x/2,I=R/2,F=w/2,V=T+1,G=P+1;let Q=0,W=0;const q=new K;for(let Y=0;Y<G;Y++){const L=Y*U-I;for(let H=0;H<V;H++){const ee=H*S-C;q[_]=ee*y,q[m]=L*E,q[p]=F,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=w>0?1:-1,u.push(q.x,q.y,q.z),h.push(H/T),h.push(1-Y/P),Q+=1}}for(let Y=0;Y<P;Y++)for(let L=0;L<T;L++){const H=f+L+V*Y,ee=f+L+V*(Y+1),te=f+(L+1)+V*(Y+1),Z=f+(L+1)+V*Y;c.push(H,ee,Z),c.push(ee,te,Z),W+=6}o.addGroup(d,W,M),d+=W,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const n=s[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Pt(s){const e={};for(let t=0;t<s.length;t++){const r=Vi(s[t]);for(const n in r)e[n]=r[n]}return e}function Nh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Kc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Zc={clone:Vi,merge:Pt};var Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=Nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Jc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new K,Tl=new Ye,Al=new Ye;class Qt extends Jc{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Tl,Al),t.subVectors(Al,Tl)}setViewOffset(e,t,r,n,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;i+=a.offsetX*n/c,t-=a.offsetY*r/l,n*=a.width/c,r*=a.height/l}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Pi=1;class kh extends Et{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Qt(Ci,Pi,e,t);n.layers=this.layers,this.add(n);const i=new Qt(Ci,Pi,e,t);i.layers=this.layers,this.add(i);const a=new Qt(Ci,Pi,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Ci,Pi,e,t);o.layers=this.layers,this.add(o);const c=new Qt(Ci,Pi,e,t);c.layers=this.layers,this.add(c);const l=new Qt(Ci,Pi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,a,o,c]=t;for(const l of t)this.remove(l);if(e===gn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ss)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,a),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,c),e.setRenderTarget(r,4,n),e.render(t,l),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Qc extends Lt{constructor(e=[],t=ki,r,n,i,a,o,c,l,u){super(e,t,r,n,i,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zh extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Qc(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ar(5,5,5),i=new qn({name:"CubemapFromEquirect",uniforms:Vi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kt,blending:Wn});i.uniforms.tEquirect.value=t;const a=new Ut(n,i),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=$t),new kh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,r=!0,n=!0){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,n);e.setRenderTarget(i)}}class oi extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gh={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,r),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gh)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=i!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new oi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Vh extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hh extends un{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ca=new K,Wh=new K,Xh=new qe;class Vn{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=ca.subVectors(r,t).cross(Wh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ca),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Xh.getNormalMatrix(e),n=this.coplanarPoint(ca).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Hi,Yh=new Ye(.5,.5),Jr=new K;class Io{constructor(e=new Vn,t=new Vn,r=new Vn,n=new Vn,i=new Vn,a=new Vn){this.planes=[e,t,r,n,i,a]}set(e,t,r,n,i,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=gn,r=!1){const n=this.planes,i=e.elements,a=i[0],o=i[1],c=i[2],l=i[3],u=i[4],h=i[5],f=i[6],d=i[7],g=i[8],_=i[9],m=i[10],p=i[11],y=i[12],E=i[13],x=i[14],R=i[15];if(n[0].setComponents(l-a,d-u,p-g,R-y).normalize(),n[1].setComponents(l+a,d+u,p+g,R+y).normalize(),n[2].setComponents(l+o,d+h,p+_,R+E).normalize(),n[3].setComponents(l-o,d-h,p-_,R-E).normalize(),r)n[4].setComponents(c,f,m,x).normalize(),n[5].setComponents(l-c,d-f,p-m,R-x).normalize();else if(n[4].setComponents(l-c,d-f,p-m,R-x).normalize(),t===gn)n[5].setComponents(l+c,d+f,p+m,R+x).normalize();else if(t===Ss)n[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){Jn.center.set(0,0,0);const t=Yh.distanceTo(e.center);return Jn.radius=.7071067811865476+t,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Jr.x=n.normal.x>0?e.max.x:e.min.x,Jr.y=n.normal.y>0?e.max.y:e.min.y,Jr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ps extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ys=new K,Es=new K,wl=new ut,lr=new Tr,Qr=new Hi,ua=new K,Rl=new K;class qh extends Et{constructor(e=new Wt,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,i=t.count;n<i;n++)ys.fromBufferAttribute(t,n-1),Es.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=ys.distanceTo(Es);e.setAttribute("lineDistance",new yt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Line.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Qr.copy(r.boundingSphere),Qr.applyMatrix4(n),Qr.radius+=i,e.ray.intersectsSphere(Qr)===!1)return;wl.copy(n).invert(),lr.copy(e.ray).applyMatrix4(wl);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=r.index,f=r.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=u.getX(_),y=u.getX(_+1),E=$r(this,e,lr,c,p,y,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=$r(this,e,lr,c,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=$r(this,e,lr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=$r(this,e,lr,c,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function $r(s,e,t,r,n,i,a){const o=s.geometry.attributes.position;if(ys.fromBufferAttribute(o,n),Es.fromBufferAttribute(o,i),t.distanceSqToSegment(ys,Es,ua,Rl)>r)return;ua.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ua);if(!(l<e.near||l>e.far))return{distance:l,point:Rl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Cl=new K,Pl=new K;class Dl extends qh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,i=t.count;n<i;n+=2)Cl.fromBufferAttribute(t,n),Pl.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+Cl.distanceTo(Pl);e.setAttribute("lineDistance",new yt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ur extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ul=new ut,mo=new Tr,es=new Hi,ts=new K;class ha extends Et{constructor(e=new Wt,t=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),es.copy(r.boundingSphere),es.applyMatrix4(n),es.radius+=i,e.ray.intersectsSphere(es)===!1)return;Ul.copy(n).invert(),mo.copy(e.ray).applyMatrix4(Ul);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=r.index,h=r.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);ts.fromBufferAttribute(h,m),Ll(ts,m,c,n,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)ts.fromBufferAttribute(h,g),Ll(ts,g,c,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function Ll(s,e,t,r,n,i,a){const o=mo.distanceSqToPoint(s);if(o<t){const c=new K;mo.closestPointToPoint(s,c),c.applyMatrix4(r);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;i.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $c extends Lt{constructor(e,t,r=ci,n,i,a,o=cn,c=cn,l,u=_r,h=1){if(u!==_r&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,n,i,a,o,c,u,r,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Do(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class eu extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pi extends Wt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,a=t/2,o=Math.floor(r),c=Math.floor(n),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let E=0;E<l;E++){const x=E*h-i;g.push(x,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const E=y+l*p,x=y+l*(p+1),R=y+1+l*(p+1),w=y+1+l*p;d.push(E,x,w),d.push(x,R,w)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fo extends Wt{constructor(e=1,t=32,r=16,n=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new K,f=new K,d=[],g=[],_=[],m=[];for(let p=0;p<=r;p++){const y=[],E=p/r;let x=0;p===0&&a===0?x=.5/t:p===r&&c===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const w=R/t;h.x=-e*Math.cos(n+w*i)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(n+w*i)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+x,1-E),y.push(l++)}u.push(y)}for(let p=0;p<r;p++)for(let y=0;y<t;y++){const E=u[p][y+1],x=u[p][y],R=u[p+1][y],w=u[p+1][y+1];(p!==0||a>0)&&d.push(E,x,w),(p!==r-1||c<Math.PI)&&d.push(x,R,w)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tu extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jh extends vn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nu extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iu extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Il={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Kh{constructor(e,t,r){const n=this;let i=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.abortController=new AbortController,this.itemStart=function(u){o++,i===!1&&n.onStart!==void 0&&n.onStart(u,a,o),i=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Zh=new Kh;class No{constructor(e){this.manager=e!==void 0?e:Zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}No.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class Jh extends Error{constructor(e,t){super(e),this.response=t}}class Qh extends No{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=Il.get(`file:${e}`);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:r,onError:n});return}An[e]=[],An[e].push({onLoad:t,onProgress:r,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=An[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:E,value:x})=>{if(E)p.close();else{_+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,T=u.length;w<T;w++){const P=u[w];P.onProgress&&P.onProgress(R)}p.enqueue(x),y()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Jh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Il.add(`file:${e}`,l);const u=An[e];delete An[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=An[e];if(u===void 0)throw this.manager.itemError(e),l;delete An[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ru extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const fa=new ut,Fl=new K,Nl=new K;class $h{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fl),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class su extends Jc{constructor(e=-1,t=1,r=1,n=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,a=r+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,a=i+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ef extends $h{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class au extends ru{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new ef}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tf extends ru{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class nf extends Wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class rf extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ol=new ut;class sf{constructor(e,t,r=0,n=1/0){this.ray=new Tr(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ol.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ol),this}intersectObject(e,t=!0,r=[]){return go(e,this,r,t),r.sort(Bl),r}intersectObjects(e,t=!0,r=[]){for(let n=0,i=e.length;n<i;n++)go(e[n],this,r,t);return r.sort(Bl),r}}function Bl(s,e){return s.distance-e.distance}function go(s,e,t,r){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&r===!0){const i=s.children;for(let a=0,o=i.length;a<o;a++)go(i[a],e,t,!0)}}class kl{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class af extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function zl(s,e,t,r){const n=of(r);switch(t){case Bc:return s*e;case zc:return s*e/n.components*n.byteLength;case wo:return s*e/n.components*n.byteLength;case Gc:return s*e*2/n.components*n.byteLength;case Ro:return s*e*2/n.components*n.byteLength;case kc:return s*e*3/n.components*n.byteLength;case ln:return s*e*4/n.components*n.byteLength;case Co:return s*e*4/n.components*n.byteLength;case cs:case us:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hs:case fs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case za:case Va:return Math.max(s,16)*Math.max(e,8)/4;case ka:case Ga:return Math.max(s,8)*Math.max(e,8)/2;case Ha:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ja:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case eo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case to:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case no:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case io:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ro:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case so:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ao:case oo:case lo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case co:case uo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ho:case fo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function of(s){switch(s){case _n:case Ic:return{byteLength:1,components:1};case mr:case Fc:case Er:return{byteLength:2,components:1};case To:case Ao:return{byteLength:2,components:4};case ci:case bo:case Rn:return{byteLength:4,components:1};case Nc:case Oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ou(){let s=null,e=!1,t=null,r=null;function n(i,a){t(i,a),r=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function lf(s){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function r(o,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,o,c),l.version=o.version}}return{get:n,remove:i,update:a}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_f=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ef=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,If=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ed=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,od=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ld=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,np=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:cf,alphahash_pars_fragment:uf,alphamap_fragment:hf,alphamap_pars_fragment:ff,alphatest_fragment:df,alphatest_pars_fragment:pf,aomap_fragment:mf,aomap_pars_fragment:gf,batching_pars_vertex:_f,batching_vertex:vf,begin_vertex:xf,beginnormal_vertex:Sf,bsdfs:Mf,iridescence_fragment:yf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:bf,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:wf,color_fragment:Rf,color_pars_fragment:Cf,color_pars_vertex:Pf,color_vertex:Df,common:Uf,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:If,displacementmap_pars_vertex:Ff,displacementmap_vertex:Nf,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:kf,colorspace_pars_fragment:zf,envmap_fragment:Gf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Hf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:td,envmap_vertex:Xf,fog_vertex:Yf,fog_pars_vertex:qf,fog_fragment:jf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:Jf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:$f,lights_pars_begin:ed,lights_toon_fragment:nd,lights_toon_pars_fragment:id,lights_phong_fragment:rd,lights_phong_pars_fragment:sd,lights_physical_fragment:ad,lights_physical_pars_fragment:od,lights_fragment_begin:ld,lights_fragment_maps:cd,lights_fragment_end:ud,logdepthbuf_fragment:hd,logdepthbuf_pars_fragment:fd,logdepthbuf_pars_vertex:dd,logdepthbuf_vertex:pd,map_fragment:md,map_pars_fragment:gd,map_particle_fragment:_d,map_particle_pars_fragment:vd,metalnessmap_fragment:xd,metalnessmap_pars_fragment:Sd,morphinstance_vertex:Md,morphcolor_vertex:yd,morphnormal_vertex:Ed,morphtarget_pars_vertex:bd,morphtarget_vertex:Td,normal_fragment_begin:Ad,normal_fragment_maps:wd,normal_pars_fragment:Rd,normal_pars_vertex:Cd,normal_vertex:Pd,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Ud,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Fd,opaque_fragment:Nd,packing:Od,premultiplied_alpha_fragment:Bd,project_vertex:kd,dithering_fragment:zd,dithering_pars_fragment:Gd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:Hd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:Xd,shadowmap_vertex:Yd,shadowmask_pars_fragment:qd,skinbase_vertex:jd,skinning_pars_vertex:Kd,skinning_vertex:Zd,skinnormal_vertex:Jd,specularmap_fragment:Qd,specularmap_pars_fragment:$d,tonemapping_fragment:ep,tonemapping_pars_fragment:tp,transmission_fragment:np,transmission_pars_fragment:ip,uv_pars_fragment:rp,uv_pars_vertex:sp,uv_vertex:ap,worldpos_vertex:op,background_vert:lp,background_frag:cp,backgroundCube_vert:up,backgroundCube_frag:hp,cube_vert:fp,cube_frag:dp,depth_vert:pp,depth_frag:mp,distanceRGBA_vert:gp,distanceRGBA_frag:_p,equirect_vert:vp,equirect_frag:xp,linedashed_vert:Sp,linedashed_frag:Mp,meshbasic_vert:yp,meshbasic_frag:Ep,meshlambert_vert:bp,meshlambert_frag:Tp,meshmatcap_vert:Ap,meshmatcap_frag:wp,meshnormal_vert:Rp,meshnormal_frag:Cp,meshphong_vert:Pp,meshphong_frag:Dp,meshphysical_vert:Up,meshphysical_frag:Lp,meshtoon_vert:Ip,meshtoon_frag:Fp,points_vert:Np,points_frag:Op,shadow_vert:Bp,shadow_frag:kp,sprite_vert:zp,sprite_frag:Gp},Ue={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},pn={basic:{uniforms:Pt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Pt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Pt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Pt([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Pt([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Pt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Pt([Ue.points,Ue.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Pt([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Pt([Ue.common,Ue.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Pt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Pt([Ue.sprite,Ue.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Pt([Ue.common,Ue.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Pt([Ue.lights,Ue.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};pn.physical={uniforms:Pt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ns={r:0,b:0,g:0},Qn=new hn,Vp=new ut;function Hp(s,e,t,r,n,i,a){const o=new Ze(0);let c=i===!0?0:1,l,u,h=null,f=0,d=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function _(E){let x=!1;const R=g(E);R===null?p(o,c):R&&R.isColor&&(p(R,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?r.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===bs)?(u===void 0&&(u=new Ut(new Ar(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Vi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Qn.copy(x.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(Qn)),u.material.toneMapped=et.getTransfer(R.colorSpace)!==st,(h!==R||f!==R.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,d=s.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Ut(new pi(2,2),new qn({name:"BackgroundMaterial",uniforms:Vi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=et.getTransfer(R.colorSpace)!==st,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=R,f=R.version,d=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,x){E.getRGB(ns,Kc(s)),r.buffers.color.setClear(ns.r,ns.g,ns.b,x,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:m,dispose:y}}function Wp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},n=f(null);let i=n,a=!1;function o(S,U,C,I,F){let V=!1;const G=h(I,C,U);i!==G&&(i=G,l(i.object)),V=d(S,I,C,F),V&&g(S,I,C,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,x(S,U,C,I),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,U,C){const I=C.wireframe===!0;let F=r[S.id];F===void 0&&(F={},r[S.id]=F);let V=F[U.id];V===void 0&&(V={},F[U.id]=V);let G=V[I];return G===void 0&&(G=f(c()),V[I]=G),G}function f(S){const U=[],C=[],I=[];for(let F=0;F<t;F++)U[F]=0,C[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:C,attributeDivisors:I,object:S,attributes:{},index:null}}function d(S,U,C,I){const F=i.attributes,V=U.attributes;let G=0;const Q=C.getAttributes();for(const W in Q)if(Q[W].location>=0){const Y=F[W];let L=V[W];if(L===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(L=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(L=S.instanceColor)),Y===void 0||Y.attribute!==L||L&&Y.data!==L.data)return!0;G++}return i.attributesNum!==G||i.index!==I}function g(S,U,C,I){const F={},V=U.attributes;let G=0;const Q=C.getAttributes();for(const W in Q)if(Q[W].location>=0){let Y=V[W];Y===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor));const L={};L.attribute=Y,Y&&Y.data&&(L.data=Y.data),F[W]=L,G++}i.attributes=F,i.attributesNum=G,i.index=I}function _(){const S=i.newAttributes;for(let U=0,C=S.length;U<C;U++)S[U]=0}function m(S){p(S,0)}function p(S,U){const C=i.newAttributes,I=i.enabledAttributes,F=i.attributeDivisors;C[S]=1,I[S]===0&&(s.enableVertexAttribArray(S),I[S]=1),F[S]!==U&&(s.vertexAttribDivisor(S,U),F[S]=U)}function y(){const S=i.newAttributes,U=i.enabledAttributes;for(let C=0,I=U.length;C<I;C++)U[C]!==S[C]&&(s.disableVertexAttribArray(C),U[C]=0)}function E(S,U,C,I,F,V,G){G===!0?s.vertexAttribIPointer(S,U,C,F,V):s.vertexAttribPointer(S,U,C,I,F,V)}function x(S,U,C,I){_();const F=I.attributes,V=C.getAttributes(),G=U.defaultAttributeValues;for(const Q in V){const W=V[Q];if(W.location>=0){let q=F[Q];if(q===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const Y=q.normalized,L=q.itemSize,H=e.get(q);if(H===void 0)continue;const ee=H.buffer,te=H.type,Z=H.bytesPerElement,z=te===s.INT||te===s.UNSIGNED_INT||q.gpuType===bo;if(q.isInterleavedBufferAttribute){const k=q.data,J=k.stride,pe=q.offset;if(k.isInstancedInterleavedBuffer){for(let me=0;me<W.locationSize;me++)p(W.location+me,k.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let me=0;me<W.locationSize;me++)m(W.location+me);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let me=0;me<W.locationSize;me++)E(W.location+me,L/W.locationSize,te,Y,J*Z,(pe+L/W.locationSize*me)*Z,z)}else{if(q.isInstancedBufferAttribute){for(let k=0;k<W.locationSize;k++)p(W.location+k,q.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let k=0;k<W.locationSize;k++)m(W.location+k);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let k=0;k<W.locationSize;k++)E(W.location+k,L/W.locationSize,te,Y,L*Z,L/W.locationSize*k*Z,z)}}else if(G!==void 0){const Y=G[Q];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(W.location,Y);break;case 3:s.vertexAttrib3fv(W.location,Y);break;case 4:s.vertexAttrib4fv(W.location,Y);break;default:s.vertexAttrib1fv(W.location,Y)}}}}y()}function R(){P();for(const S in r){const U=r[S];for(const C in U){const I=U[C];for(const F in I)u(I[F].object),delete I[F];delete U[C]}delete r[S]}}function w(S){if(r[S.id]===void 0)return;const U=r[S.id];for(const C in U){const I=U[C];for(const F in I)u(I[F].object),delete I[F];delete U[C]}delete r[S.id]}function T(S){for(const U in r){const C=r[U];if(C[S.id]===void 0)continue;const I=C[S.id];for(const F in I)u(I[F].object),delete I[F];delete C[S.id]}}function P(){M(),a=!0,i!==n&&(i=n,l(i.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Xp(s,e,t){let r;function n(l){r=l}function i(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function a(l,u,h){h!==0&&(s.drawArraysInstanced(r,l,u,h),t.update(u,r,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,r,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(r,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,r,1)}}this.setMode=n,this.render=i,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Yp(s,e,t,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==ln&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==_n&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Rn&&!P)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:R,maxSamples:w}}function qp(s){const e=this;let t=null,r=0,n=!1,i=!1;const a=new Vn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||r!==0||n;return n=f,r=h.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!n||g===null||g.length===0||i&&!m)i?u(null):l();else{const y=i?0:r,E=y*4;let x=p.clippingState||null;c.value=x,x=u(g,f,E,d);for(let R=0;R!==E;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=d;E!==_;++E,x+=4)a.copy(h[E]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function jp(s){let e=new WeakMap;function t(a,o){return o===Fa?a.mapping=ki:o===Na&&(a.mapping=zi),a}function r(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fa||o===Na)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new zh(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",n),t(l.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}const Ii=4,Gl=[.125,.215,.35,.446,.526,.582],ii=20,da=new su,Vl=new Ze;let pa=null,ma=0,ga=0,_a=!1;const ti=(1+Math.sqrt(5))/2,Di=1/ti,Hl=[new K(-ti,Di,0),new K(ti,Di,0),new K(-Di,0,ti),new K(Di,0,ti),new K(0,ti,-Di),new K(0,ti,Di),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],Kp=new K;class Wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100,i={}){const{size:a=256,position:o=Kp}=i;pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Er,format:ln,colorSpace:Gi,depthBuffer:!1},n=Xl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zp(i)),this._blurMaterial=Jp(i,e,t)}return n}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,da)}_sceneToCubeUV(e,t,r,n,i){const c=new Qt(90,1,t,r),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Vl),h.toneMapping=Xn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null));const _=new Lo({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),m=new Ut(new Ar,_);let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(Vl),p=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(c.up.set(0,l[E],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x+u[E],i.y,i.z)):x===1?(c.up.set(0,0,l[E]),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y+u[E],i.z)):(c.up.set(0,l[E],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y,i.z+u[E]));const R=this._cubeSize;is(n,x*R,E>2?R:0,R,R),h.setRenderTarget(n),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===ki||e.mapping===zi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const i=n?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const c=this._cubeSize;is(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(a,da)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let i=1;i<n;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Hl[(n-i-1)%Hl.length];this._blur(e,i-1,i,a,o)}t.autoClear=r}_blur(e,t,r,n,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,n,"latitudinal",i),this._halfBlur(a,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ut(this._lodPlanes[n],l),f=l.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*ii-1),_=i/g,m=isFinite(i)?1+Math.floor(u*_):ii;m>ii&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const p=[];let y=0;for(let T=0;T<ii;++T){const P=T/_,M=Math.exp(-P*P/2);p.push(M),T===0?y+=M:T<m&&(y+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-r;const x=this._sizeLods[n],R=3*x*(n>E-Ii?n-E+Ii:0),w=4*(this._cubeSize-x);is(t,R,w,3*x,2*x),c.setRenderTarget(t),c.render(h,da)}}function Zp(s){const e=[],t=[],r=[];let n=s;const i=s-Ii+1+Gl.length;for(let a=0;a<i;a++){const o=Math.pow(2,n);t.push(o);let c=1/o;a>s-Ii?c=Gl[a-s+Ii-1]:a===0&&(c=0),r.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),E=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,P=w>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(M,_*g*w),E.set(f,m*g*w);const S=[w,w,w,w,w,w];x.set(S,p*g*w)}const R=new Wt;R.setAttribute("position",new un(y,_)),R.setAttribute("uv",new un(E,m)),R.setAttribute("faceIndex",new un(x,p)),e.push(R),n>Ii&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Xl(s,e,t){const r=new hi(s,e,t);return r.texture.mapping=bs,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function is(s,e,t,r,n){s.viewport.set(e,t,r,n),s.scissor.set(e,t,r,n)}function Jp(s,e,t){const r=new Float32Array(ii),n=new K(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Yl(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ql(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qp(s){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const c=o.mapping,l=c===Fa||c===Na,u=c===ki||c===zi;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Wl(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new Wl(s)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",i),h.texture):null}}}return o}function n(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function i(o){const c=o.target;c.removeEventListener("dispose",i);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function $p(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&xr("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function em(s,e,t,r){const n={},i=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete n[f.id];const d=i.get(f);d&&(e.remove(d),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let E=0,x=y.length;E<x;E+=3){const R=y[E+0],w=y[E+1],T=y[E+2];f.push(R,w,w,T,T,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,x=y.length/3-1;E<x;E+=3){const R=E+0,w=E+1,T=E+2;f.push(R,w,w,T,T,R)}}else return;const m=new(Wc(f)?jc:qc)(f,1);m.version=_;const p=i.get(h);p&&e.remove(p),i.set(h,m)}function u(h){const f=i.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return i.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function tm(s,e,t){let r;function n(f){r=f}let i,a;function o(f){i=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(r,d,i,f*a),t.update(d,r,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(r,d,i,f*a,g),t.update(d,r,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,i,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,r,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(r,d,0,i,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,r,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function nm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(i/3);break;case s.LINES:t.lines+=o*(i/2);break;case s.LINE_STRIP:t.lines+=o*(i-1);break;case s.LINE_LOOP:t.lines+=o*i;break;case s.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function im(s,e,t){const r=new WeakMap,n=new ht;function i(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=r.get(o);if(f===void 0||f.count!==h){let S=function(){P.dispose(),r.delete(o),o.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*w*4*h),P=new Xc(T,R,w,h);P.type=Rn,P.needsUpdate=!0;const M=x*4;for(let U=0;U<h;U++){const C=p[U],I=y[U],F=E[U],V=R*w*4*U;for(let G=0;G<C.count;G++){const Q=G*M;g===!0&&(n.fromBufferAttribute(C,G),T[V+Q+0]=n.x,T[V+Q+1]=n.y,T[V+Q+2]=n.z,T[V+Q+3]=0),_===!0&&(n.fromBufferAttribute(I,G),T[V+Q+4]=n.x,T[V+Q+5]=n.y,T[V+Q+6]=n.z,T[V+Q+7]=0),m===!0&&(n.fromBufferAttribute(F,G),T[V+Q+8]=n.x,T[V+Q+9]=n.y,T[V+Q+10]=n.z,T[V+Q+11]=F.itemSize===4?n.w:1)}}f={count:h,texture:P,size:new Ye(R,w)},r.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:i}}function rm(s,e,t,r){let n=new WeakMap;function i(c){const l=r.render.frame,u=c.geometry,h=e.get(c,u);if(n.get(h)!==l&&(e.update(h),n.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;n.get(f)!==l&&(f.update(),n.set(f,l))}return h}function a(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:i,dispose:a}}const lu=new Lt,jl=new $c(1,1),cu=new Xc,uu=new bh,hu=new Qc,Kl=[],Zl=[],Jl=new Float32Array(16),Ql=new Float32Array(9),$l=new Float32Array(4);function Wi(s,e,t){const r=s[0];if(r<=0||r>0)return s;const n=e*t;let i=Kl[n];if(i===void 0&&(i=new Float32Array(n),Kl[n]=i),e!==0){r.toArray(i,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(i,o)}return i}function xt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Ts(s,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function sm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function am(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function om(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function cm(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(xt(t,r))return;$l.set(r),s.uniformMatrix2fv(this.addr,!1,$l),St(t,r)}}function um(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(xt(t,r))return;Ql.set(r),s.uniformMatrix3fv(this.addr,!1,Ql),St(t,r)}}function hm(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(xt(t,r))return;Jl.set(r),s.uniformMatrix4fv(this.addr,!1,Jl),St(t,r)}}function fm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function dm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function pm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function gm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function _m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function vm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function xm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function Sm(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n);let i;this.type===s.SAMPLER_2D_SHADOW?(jl.compareFunction=Hc,i=jl):i=lu,t.setTexture2D(e||i,n)}function Mm(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||uu,n)}function ym(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||hu,n)}function Em(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||cu,n)}function bm(s){switch(s){case 5126:return sm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return um;case 35676:return hm;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return vm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Em}}function Tm(s,e){s.uniform1fv(this.addr,e)}function Am(s,e){const t=Wi(e,this.size,2);s.uniform2fv(this.addr,t)}function wm(s,e){const t=Wi(e,this.size,3);s.uniform3fv(this.addr,t)}function Rm(s,e){const t=Wi(e,this.size,4);s.uniform4fv(this.addr,t)}function Cm(s,e){const t=Wi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Pm(s,e){const t=Wi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Dm(s,e){const t=Wi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Um(s,e){s.uniform1iv(this.addr,e)}function Lm(s,e){s.uniform2iv(this.addr,e)}function Im(s,e){s.uniform3iv(this.addr,e)}function Fm(s,e){s.uniform4iv(this.addr,e)}function Nm(s,e){s.uniform1uiv(this.addr,e)}function Om(s,e){s.uniform2uiv(this.addr,e)}function Bm(s,e){s.uniform3uiv(this.addr,e)}function km(s,e){s.uniform4uiv(this.addr,e)}function zm(s,e,t){const r=this.cache,n=e.length,i=Ts(t,n);xt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||lu,i[a])}function Gm(s,e,t){const r=this.cache,n=e.length,i=Ts(t,n);xt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||uu,i[a])}function Vm(s,e,t){const r=this.cache,n=e.length,i=Ts(t,n);xt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||hu,i[a])}function Hm(s,e,t){const r=this.cache,n=e.length,i=Ts(t,n);xt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||cu,i[a])}function Wm(s){switch(s){case 5126:return Tm;case 35664:return Am;case 35665:return wm;case 35666:return Rm;case 35674:return Cm;case 35675:return Pm;case 35676:return Dm;case 5124:case 35670:return Um;case 35667:case 35671:return Lm;case 35668:case 35672:return Im;case 35669:case 35673:return Fm;case 5125:return Nm;case 36294:return Om;case 36295:return Bm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Hm}}class Xm{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=bm(t.type)}}class Ym{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wm(t.type)}}class qm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,a=n.length;i!==a;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const va=/(\w+)(\])?(\[|\.)?/g;function ec(s,e){s.seq.push(e),s.map[e.id]=e}function jm(s,e,t){const r=s.name,n=r.length;for(va.lastIndex=0;;){const i=va.exec(r),a=va.lastIndex;let o=i[1];const c=i[2]==="]",l=i[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){ec(t,l===void 0?new Xm(o,s,e):new Ym(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new qm(o),ec(t,h)),t=h}}}class ms{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),a=e.getUniformLocation(t,i.name);jm(i,a,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,a=t.length;i!==a;++i){const o=t[i],c=r[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const a=e[n];a.id in t&&r.push(a)}return r}}function tc(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Km=37297;let Zm=0;function Jm(s,e){const t=s.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=n;a<i;a++){const o=a+1;r.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return r.join(`
`)}const nc=new qe;function Qm(s){et._getMatrix(nc,et.workingColorSpace,s);const e=`mat3( ${nc.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case xs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ic(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),i=(s.getShaderInfoLog(e)||"").trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+Jm(s.getShaderSource(e),o)}else return i}function $m(s,e){const t=Qm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function eg(s,e){let t;switch(e){case Qu:t="Linear";break;case $u:t="Reinhard";break;case eh:t="Cineon";break;case th:t="ACESFilmic";break;case ih:t="AgX";break;case rh:t="Neutral";break;case nh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rs=new K;function tg(){et.getLuminanceCoefficients(rs);const s=rs.x.toFixed(4),e=rs.y.toFixed(4),t=rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ng(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function ig(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function rg(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=s.getActiveAttrib(e,n),a=i.name;let o=1;i.type===s.FLOAT_MAT2&&(o=2),i.type===s.FLOAT_MAT3&&(o=3),i.type===s.FLOAT_MAT4&&(o=4),t[a]={type:i.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function hr(s){return s!==""}function rc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(s){return s.replace(sg,og)}const ag=new Map;function og(s,e){let t=Ke[e];if(t===void 0){const r=ag.get(e);if(r!==void 0)t=Ke[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return _o(t)}const lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(s){return s.replace(lg,cg)}function cg(s,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function oc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ug(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function hg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ki:case zi:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function dg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Eo:e="ENVMAP_BLENDING_MULTIPLY";break;case Zu:e="ENVMAP_BLENDING_MIX";break;case Ju:e="ENVMAP_BLENDING_ADD";break}return e}function pg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function mg(s,e,t,r){const n=s.getContext(),i=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ug(t),l=hg(t),u=fg(t),h=dg(t),f=pg(t),d=ng(t),g=ig(i),_=n.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Xn?eg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,$m("linearToOutputTexel",t.outputColorSpace),tg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=_o(a),a=rc(a,t),a=sc(a,t),o=_o(o),o=rc(o,t),o=sc(o,t),a=ac(a),o=ac(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+a,x=y+p+o,R=tc(n,n.VERTEX_SHADER,E),w=tc(n,n.FRAGMENT_SHADER,x);n.attachShader(_,R),n.attachShader(_,w),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function T(U){if(s.debug.checkShaderErrors){const C=n.getProgramInfoLog(_)||"",I=n.getShaderInfoLog(R)||"",F=n.getShaderInfoLog(w)||"",V=C.trim(),G=I.trim(),Q=F.trim();let W=!0,q=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,R,w);else{const Y=ic(n,R,"vertex"),L=ic(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+Y+`
`+L)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||Q==="")&&(q=!1);q&&(U.diagnostics={runnable:W,programLog:V,vertexShader:{log:G,prefix:m},fragmentShader:{log:Q,prefix:p}})}n.deleteShader(R),n.deleteShader(w),P=new ms(n,_),M=rg(n,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(_,Km)),S},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let gg=0;class _g{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new vg(e),t.set(e,r)),r}}class vg{constructor(e){this.id=gg++,this.code=e,this.usedTimes=0}}function xg(s,e,t,r,n,i,a){const o=new Uo,c=new _g,l=new Set,u=[],h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,U,C,I){const F=C.fog,V=I.geometry,G=M.isMeshStandardMaterial?C.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),W=Q&&Q.mapping===bs?Q.image.height:null,q=g[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Y=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,L=Y!==void 0?Y.length:0;let H=0;V.morphAttributes.position!==void 0&&(H=1),V.morphAttributes.normal!==void 0&&(H=2),V.morphAttributes.color!==void 0&&(H=3);let ee,te,Z,z;if(q){const Ve=pn[q];ee=Ve.vertexShader,te=Ve.fragmentShader}else ee=M.vertexShader,te=M.fragmentShader,c.update(M),Z=c.getVertexShaderID(M),z=c.getFragmentShaderID(M);const k=s.getRenderTarget(),J=s.state.buffers.depth.getReversed(),pe=I.isInstancedMesh===!0,me=I.isBatchedMesh===!0,de=!!M.map,ge=!!M.matcap,D=!!Q,Fe=!!M.aoMap,Ae=!!M.lightMap,be=!!M.bumpMap,Me=!!M.normalMap,xe=!!M.displacementMap,ue=!!M.emissiveMap,ye=!!M.metalnessMap,oe=!!M.roughnessMap,De=M.anisotropy>0,b=M.clearcoat>0,v=M.dispersion>0,O=M.iridescence>0,ne=M.sheen>0,$=M.transmission>0,j=De&&!!M.anisotropyMap,Se=b&&!!M.clearcoatMap,he=b&&!!M.clearcoatNormalMap,we=b&&!!M.clearcoatRoughnessMap,Ce=O&&!!M.iridescenceMap,le=O&&!!M.iridescenceThicknessMap,fe=ne&&!!M.sheenColorMap,ve=ne&&!!M.sheenRoughnessMap,Re=!!M.specularMap,Ee=!!M.specularColorMap,Ge=!!M.specularIntensityMap,B=$&&!!M.transmissionMap,ae=$&&!!M.thicknessMap,_e=!!M.gradientMap,Ie=!!M.alphaMap,ce=M.alphaTest>0,ie=!!M.alphaHash,Pe=!!M.extensions;let Oe=Xn;M.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const Be={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:te,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:me,batchingColor:me&&I._colorsTexture!==null,instancing:pe,instancingColor:pe&&I.instanceColor!==null,instancingMorph:pe&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:k===null?s.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Gi,alphaToCoverage:!!M.alphaToCoverage,map:de,matcap:ge,envMap:D,envMapMode:D&&Q.mapping,envMapCubeUVHeight:W,aoMap:Fe,lightMap:Ae,bumpMap:be,normalMap:Me,displacementMap:f&&xe,emissiveMap:ue,normalMapObjectSpace:Me&&M.normalMapType===oh,normalMapTangentSpace:Me&&M.normalMapType===Po,metalnessMap:ye,roughnessMap:oe,anisotropy:De,anisotropyMap:j,clearcoat:b,clearcoatMap:Se,clearcoatNormalMap:he,clearcoatRoughnessMap:we,dispersion:v,iridescence:O,iridescenceMap:Ce,iridescenceThicknessMap:le,sheen:ne,sheenColorMap:fe,sheenRoughnessMap:ve,specularMap:Re,specularColorMap:Ee,specularIntensityMap:Ge,transmission:$,transmissionMap:B,thicknessMap:ae,gradientMap:_e,opaque:M.transparent===!1&&M.blending===Ni&&M.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ce,alphaHash:ie,combine:M.combine,mapUv:de&&_(M.map.channel),aoMapUv:Fe&&_(M.aoMap.channel),lightMapUv:Ae&&_(M.lightMap.channel),bumpMapUv:be&&_(M.bumpMap.channel),normalMapUv:Me&&_(M.normalMap.channel),displacementMapUv:xe&&_(M.displacementMap.channel),emissiveMapUv:ue&&_(M.emissiveMap.channel),metalnessMapUv:ye&&_(M.metalnessMap.channel),roughnessMapUv:oe&&_(M.roughnessMap.channel),anisotropyMapUv:j&&_(M.anisotropyMap.channel),clearcoatMapUv:Se&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(M.sheenRoughnessMap.channel),specularMapUv:Re&&_(M.specularMap.channel),specularColorMapUv:Ee&&_(M.specularColorMap.channel),specularIntensityMapUv:Ge&&_(M.specularIntensityMap.channel),transmissionMapUv:B&&_(M.transmissionMap.channel),thicknessMapUv:ae&&_(M.thicknessMap.channel),alphaMapUv:Ie&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Me||De),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(de||Ie),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:J,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:H,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:de&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===st,decodeVideoTextureEmissive:ue&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pe&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&M.extensions.multiDraw===!0||me)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)S.push(U),S.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(y(S,M),E(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function E(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const S=g[M.type];let U;if(S){const C=pn[S];U=Zc.clone(C.uniforms)}else U=M.uniforms;return U}function R(M,S){let U;for(let C=0,I=u.length;C<I;C++){const F=u[C];if(F.cacheKey===S){U=F,++U.usedTimes;break}}return U===void 0&&(U=new mg(s,S,M,i),u.push(U)),U}function w(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function T(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:P}}function Sg(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function r(a){s.delete(a)}function n(a,o,c){s.get(a)[o]=c}function i(){s=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:i}}function Mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function lc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cc(){const s=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function a(h,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?r.push(p):d.transparent===!0?n.push(p):t.push(p)}function c(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?r.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||Mg),r.length>1&&r.sort(f||lc),n.length>1&&n.sort(f||lc)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:c,finish:u,sort:l}}function yg(){let s=new WeakMap;function e(r,n){const i=s.get(r);let a;return i===void 0?(a=new cc,s.set(r,[a])):n>=i.length?(a=new cc,i.push(a)):a=i[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Eg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Ze};break;case"SpotLight":t={position:new K,direction:new K,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function bg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Tg=0;function Ag(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wg(s){const e=new Eg,t=bg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new K);const n=new K,i=new ut,a=new ut;function o(l){let u=0,h=0,f=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,E=0,x=0,R=0,w=0,T=0;l.sort(Ag);for(let M=0,S=l.length;M<S;M++){const U=l[M],C=U.color,I=U.intensity,F=U.distance,V=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=C.r*I,h+=C.g*I,f+=C.b*I;else if(U.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(U.sh.coefficients[G],I);T++}else if(U.isDirectionalLight){const G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,W=t.get(U);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,r.directionalShadow[d]=W,r.directionalShadowMap[d]=V,r.directionalShadowMatrix[d]=U.shadow.matrix,y++}r.directional[d]=G,d++}else if(U.isSpotLight){const G=e.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(C).multiplyScalar(I),G.distance=F,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,r.spot[_]=G;const Q=U.shadow;if(U.map&&(r.spotLightMap[R]=U.map,R++,Q.updateMatrices(U),U.castShadow&&w++),r.spotLightMatrix[_]=Q.matrix,U.castShadow){const W=t.get(U);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,r.spotShadow[_]=W,r.spotShadowMap[_]=V,x++}_++}else if(U.isRectAreaLight){const G=e.get(U);G.color.copy(C).multiplyScalar(I),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),r.rectArea[m]=G,m++}else if(U.isPointLight){const G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),G.distance=U.distance,G.decay=U.decay,U.castShadow){const Q=U.shadow,W=t.get(U);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,r.pointShadow[g]=W,r.pointShadowMap[g]=V,r.pointShadowMatrix[g]=U.shadow.matrix,E++}r.point[g]=G,g++}else if(U.isHemisphereLight){const G=e.get(U);G.skyColor.copy(U.color).multiplyScalar(I),G.groundColor.copy(U.groundColor).multiplyScalar(I),r.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=h,r.ambient[2]=f;const P=r.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==E||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==T)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=x+R-w,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=T,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=E,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=T,r.version=Tg++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const E=l[p];if(E.isDirectionalLight){const x=r.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=r.spot[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const x=r.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),i.copy(E.matrixWorld),i.premultiply(m),a.extractRotation(i),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=r.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const x=r.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:r}}function uc(s){const e=new wg(s),t=[],r=[];function n(u){l.camera=u,t.length=0,r.length=0}function i(u){t.push(u)}function a(u){r.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:c,pushLight:i,pushShadow:a}}function Rg(s){let e=new WeakMap;function t(n,i=0){const a=e.get(n);let o;return a===void 0?(o=new uc(s),e.set(n,[o])):i>=a.length?(o=new uc(s),a.push(o)):o=a[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dg(s,e,t){let r=new Io;const n=new Ye,i=new Ye,a=new ht,o=new nu({depthPacking:Vc}),c=new iu,l={},u=t.maxTextureSize,h={[Yn]:kt,[kt]:Yn,[mn]:mn},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Cg,fragmentShader:Pg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let p=this.type;this.render=function(w,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Wn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const I=p!==wn&&this.type===wn,F=p===wn&&this.type!==wn;for(let V=0,G=w.length;V<G;V++){const Q=w[V],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const q=W.getFrameExtents();if(n.multiply(q),i.copy(W.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/q.x),n.x=i.x*q.x,W.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/q.y),n.y=i.y*q.y,W.mapSize.y=i.y)),W.map===null||I===!0||F===!0){const L=this.type!==wn?{minFilter:cn,magFilter:cn}:{};W.map!==null&&W.map.dispose(),W.map=new hi(n.x,n.y,L),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const Y=W.getViewportCount();for(let L=0;L<Y;L++){const H=W.getViewport(L);a.set(i.x*H.x,i.y*H.y,i.x*H.z,i.y*H.w),C.viewport(a),W.updateMatrices(Q,L),r=W.getFrustum(),x(T,P,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===wn&&y(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,U)};function y(w,T){const P=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hi(n.x,n.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,P,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,P,d,_,null)}function E(w,T,P,M){let S=null;const U=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)S=U;else if(S=P.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const C=S.uuid,I=T.uuid;let F=l[C];F===void 0&&(F={},l[C]=F);let V=F[I];V===void 0&&(V=S.clone(),F[I]=V,T.addEventListener("dispose",R)),S=V}if(S.visible=T.visible,S.wireframe=T.wireframe,M===wn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const C=s.properties.get(S);C.light=P}return S}function x(w,T,P,M,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===wn)&&(!w.frustumCulled||r.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const I=e.update(w),F=w.material;if(Array.isArray(F)){const V=I.groups;for(let G=0,Q=V.length;G<Q;G++){const W=V[G],q=F[W.materialIndex];if(q&&q.visible){const Y=E(w,q,M,S);w.onBeforeShadow(s,w,T,P,I,Y,W),s.renderBufferDirect(P,null,I,Y,w,W),w.onAfterShadow(s,w,T,P,I,Y,W)}}}else if(F.visible){const V=E(w,F,M,S);w.onBeforeShadow(s,w,T,P,I,V,null),s.renderBufferDirect(P,null,I,V,w,null),w.onAfterShadow(s,w,T,P,I,V,null)}}const C=w.children;for(let I=0,F=C.length;I<F;I++)x(C[I],T,P,M,S)}function R(w){w.target.removeEventListener("dispose",R);for(const P in l){const M=l[P],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Ug={[Ra]:Ca,[Pa]:La,[Da]:Ia,[Bi]:Ua,[Ca]:Ra,[La]:Pa,[Ia]:Da,[Ua]:Bi};function Lg(s,e){function t(){let B=!1;const ae=new ht;let _e=null;const Ie=new ht(0,0,0,0);return{setMask:function(ce){_e!==ce&&!B&&(s.colorMask(ce,ce,ce,ce),_e=ce)},setLocked:function(ce){B=ce},setClear:function(ce,ie,Pe,Oe,Be){Be===!0&&(ce*=Oe,ie*=Oe,Pe*=Oe),ae.set(ce,ie,Pe,Oe),Ie.equals(ae)===!1&&(s.clearColor(ce,ie,Pe,Oe),Ie.copy(ae))},reset:function(){B=!1,_e=null,Ie.set(-1,0,0,0)}}}function r(){let B=!1,ae=!1,_e=null,Ie=null,ce=null;return{setReversed:function(ie){if(ae!==ie){const Pe=e.get("EXT_clip_control");ie?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ae=ie;const Oe=ce;ce=null,this.setClear(Oe)}},getReversed:function(){return ae},setTest:function(ie){ie?k(s.DEPTH_TEST):J(s.DEPTH_TEST)},setMask:function(ie){_e!==ie&&!B&&(s.depthMask(ie),_e=ie)},setFunc:function(ie){if(ae&&(ie=Ug[ie]),Ie!==ie){switch(ie){case Ra:s.depthFunc(s.NEVER);break;case Ca:s.depthFunc(s.ALWAYS);break;case Pa:s.depthFunc(s.LESS);break;case Bi:s.depthFunc(s.LEQUAL);break;case Da:s.depthFunc(s.EQUAL);break;case Ua:s.depthFunc(s.GEQUAL);break;case La:s.depthFunc(s.GREATER);break;case Ia:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=ie}},setLocked:function(ie){B=ie},setClear:function(ie){ce!==ie&&(ae&&(ie=1-ie),s.clearDepth(ie),ce=ie)},reset:function(){B=!1,_e=null,Ie=null,ce=null,ae=!1}}}function n(){let B=!1,ae=null,_e=null,Ie=null,ce=null,ie=null,Pe=null,Oe=null,Be=null;return{setTest:function(Ve){B||(Ve?k(s.STENCIL_TEST):J(s.STENCIL_TEST))},setMask:function(Ve){ae!==Ve&&!B&&(s.stencilMask(Ve),ae=Ve)},setFunc:function(Ve,ct,ot){(_e!==Ve||Ie!==ct||ce!==ot)&&(s.stencilFunc(Ve,ct,ot),_e=Ve,Ie=ct,ce=ot)},setOp:function(Ve,ct,ot){(ie!==Ve||Pe!==ct||Oe!==ot)&&(s.stencilOp(Ve,ct,ot),ie=Ve,Pe=ct,Oe=ot)},setLocked:function(Ve){B=Ve},setClear:function(Ve){Be!==Ve&&(s.clearStencil(Ve),Be=Ve)},reset:function(){B=!1,ae=null,_e=null,Ie=null,ce=null,ie=null,Pe=null,Oe=null,Be=null}}}const i=new t,a=new r,o=new n,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,E=null,x=null,R=null,w=null,T=new Ze(0,0,0),P=0,M=!1,S=null,U=null,C=null,I=null,F=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=Q>=2);let q=null,Y={};const L=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),ee=new ht().fromArray(L),te=new ht().fromArray(H);function Z(B,ae,_e,Ie){const ce=new Uint8Array(4),ie=s.createTexture();s.bindTexture(B,ie),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<_e;Pe++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(ae,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(ae+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return ie}const z={};z[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),z[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),z[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(s.DEPTH_TEST),a.setFunc(Bi),be(!1),Me(il),k(s.CULL_FACE),Fe(Wn);function k(B){u[B]!==!0&&(s.enable(B),u[B]=!0)}function J(B){u[B]!==!1&&(s.disable(B),u[B]=!1)}function pe(B,ae){return h[B]!==ae?(s.bindFramebuffer(B,ae),h[B]=ae,B===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ae),B===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ae),!0):!1}function me(B,ae){let _e=d,Ie=!1;if(B){_e=f.get(ae),_e===void 0&&(_e=[],f.set(ae,_e));const ce=B.textures;if(_e.length!==ce.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,Pe=ce.length;ie<Pe;ie++)_e[ie]=s.COLOR_ATTACHMENT0+ie;_e.length=ce.length,Ie=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(_e)}function de(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const ge={[ni]:s.FUNC_ADD,[Lu]:s.FUNC_SUBTRACT,[Iu]:s.FUNC_REVERSE_SUBTRACT};ge[Fu]=s.MIN,ge[Nu]=s.MAX;const D={[Ou]:s.ZERO,[Bu]:s.ONE,[ku]:s.SRC_COLOR,[Aa]:s.SRC_ALPHA,[Xu]:s.SRC_ALPHA_SATURATE,[Hu]:s.DST_COLOR,[Gu]:s.DST_ALPHA,[zu]:s.ONE_MINUS_SRC_COLOR,[wa]:s.ONE_MINUS_SRC_ALPHA,[Wu]:s.ONE_MINUS_DST_COLOR,[Vu]:s.ONE_MINUS_DST_ALPHA,[Yu]:s.CONSTANT_COLOR,[qu]:s.ONE_MINUS_CONSTANT_COLOR,[ju]:s.CONSTANT_ALPHA,[Ku]:s.ONE_MINUS_CONSTANT_ALPHA};function Fe(B,ae,_e,Ie,ce,ie,Pe,Oe,Be,Ve){if(B===Wn){_===!0&&(J(s.BLEND),_=!1);return}if(_===!1&&(k(s.BLEND),_=!0),B!==Uu){if(B!==m||Ve!==M){if((p!==ni||x!==ni)&&(s.blendEquation(s.FUNC_ADD),p=ni,x=ni),Ve)switch(B){case Ni:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rl:s.blendFunc(s.ONE,s.ONE);break;case sl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case al:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case sl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case al:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,E=null,R=null,w=null,T.set(0,0,0),P=0,m=B,M=Ve}return}ce=ce||ae,ie=ie||_e,Pe=Pe||Ie,(ae!==p||ce!==x)&&(s.blendEquationSeparate(ge[ae],ge[ce]),p=ae,x=ce),(_e!==y||Ie!==E||ie!==R||Pe!==w)&&(s.blendFuncSeparate(D[_e],D[Ie],D[ie],D[Pe]),y=_e,E=Ie,R=ie,w=Pe),(Oe.equals(T)===!1||Be!==P)&&(s.blendColor(Oe.r,Oe.g,Oe.b,Be),T.copy(Oe),P=Be),m=B,M=!1}function Ae(B,ae){B.side===mn?J(s.CULL_FACE):k(s.CULL_FACE);let _e=B.side===kt;ae&&(_e=!_e),be(_e),B.blending===Ni&&B.transparent===!1?Fe(Wn):Fe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),i.setMask(B.colorWrite);const Ie=B.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?k(s.SAMPLE_ALPHA_TO_COVERAGE):J(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(B){S!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),S=B)}function Me(B){B!==Cu?(k(s.CULL_FACE),B!==U&&(B===il?s.cullFace(s.BACK):B===Pu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):J(s.CULL_FACE),U=B}function xe(B){B!==C&&(G&&s.lineWidth(B),C=B)}function ue(B,ae,_e){B?(k(s.POLYGON_OFFSET_FILL),(I!==ae||F!==_e)&&(s.polygonOffset(ae,_e),I=ae,F=_e)):J(s.POLYGON_OFFSET_FILL)}function ye(B){B?k(s.SCISSOR_TEST):J(s.SCISSOR_TEST)}function oe(B){B===void 0&&(B=s.TEXTURE0+V-1),q!==B&&(s.activeTexture(B),q=B)}function De(B,ae,_e){_e===void 0&&(q===null?_e=s.TEXTURE0+V-1:_e=q);let Ie=Y[_e];Ie===void 0&&(Ie={type:void 0,texture:void 0},Y[_e]=Ie),(Ie.type!==B||Ie.texture!==ae)&&(q!==_e&&(s.activeTexture(_e),q=_e),s.bindTexture(B,ae||z[B]),Ie.type=B,Ie.texture=ae)}function b(){const B=Y[q];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{s.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{s.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{s.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{s.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{s.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{s.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(B){ee.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),ee.copy(B))}function ve(B){te.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),te.copy(B))}function Re(B,ae){let _e=l.get(ae);_e===void 0&&(_e=new WeakMap,l.set(ae,_e));let Ie=_e.get(B);Ie===void 0&&(Ie=s.getUniformBlockIndex(ae,B.name),_e.set(B,Ie))}function Ee(B,ae){const Ie=l.get(ae).get(B);c.get(ae)!==Ie&&(s.uniformBlockBinding(ae,Ie,B.__bindingPointIndex),c.set(ae,Ie))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},q=null,Y={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,E=null,x=null,R=null,w=null,T=new Ze(0,0,0),P=0,M=!1,S=null,U=null,C=null,I=null,F=null,ee.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:k,disable:J,bindFramebuffer:pe,drawBuffers:me,useProgram:de,setBlending:Fe,setMaterial:Ae,setFlipSided:be,setCullFace:Me,setLineWidth:xe,setPolygonOffset:ue,setScissorTest:ye,activeTexture:oe,bindTexture:De,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Ce,texImage3D:le,updateUBOMapping:Re,uniformBlockBinding:Ee,texStorage2D:he,texStorage3D:we,texSubImage2D:ne,texSubImage3D:$,compressedTexSubImage2D:j,compressedTexSubImage3D:Se,scissor:fe,viewport:ve,reset:Ge}}function Ig(s,e,t,r,n,i,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return d?new OffscreenCanvas(b,v):Ms("canvas")}function _(b,v,O){let ne=1;const $=De(b);if(($.width>O||$.height>O)&&(ne=O/Math.max($.width,$.height)),ne<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(ne*$.width),Se=Math.floor(ne*$.height);h===void 0&&(h=g(j,Se));const he=v?g(j,Se):h;return he.width=j,he.height=Se,he.getContext("2d").drawImage(b,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+Se+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){s.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(b,v,O,ne,$=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=v;if(v===s.RED&&(O===s.FLOAT&&(j=s.R32F),O===s.HALF_FLOAT&&(j=s.R16F),O===s.UNSIGNED_BYTE&&(j=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.R8UI),O===s.UNSIGNED_SHORT&&(j=s.R16UI),O===s.UNSIGNED_INT&&(j=s.R32UI),O===s.BYTE&&(j=s.R8I),O===s.SHORT&&(j=s.R16I),O===s.INT&&(j=s.R32I)),v===s.RG&&(O===s.FLOAT&&(j=s.RG32F),O===s.HALF_FLOAT&&(j=s.RG16F),O===s.UNSIGNED_BYTE&&(j=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RG8UI),O===s.UNSIGNED_SHORT&&(j=s.RG16UI),O===s.UNSIGNED_INT&&(j=s.RG32UI),O===s.BYTE&&(j=s.RG8I),O===s.SHORT&&(j=s.RG16I),O===s.INT&&(j=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGB8UI),O===s.UNSIGNED_SHORT&&(j=s.RGB16UI),O===s.UNSIGNED_INT&&(j=s.RGB32UI),O===s.BYTE&&(j=s.RGB8I),O===s.SHORT&&(j=s.RGB16I),O===s.INT&&(j=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),O===s.UNSIGNED_INT&&(j=s.RGBA32UI),O===s.BYTE&&(j=s.RGBA8I),O===s.SHORT&&(j=s.RGBA16I),O===s.INT&&(j=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),v===s.RGBA){const Se=$?xs:et.getTransfer(ne);O===s.FLOAT&&(j=s.RGBA32F),O===s.HALF_FLOAT&&(j=s.RGBA16F),O===s.UNSIGNED_BYTE&&(j=Se===st?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(b,v){let O;return b?v===null||v===ci||v===gr?O=s.DEPTH24_STENCIL8:v===Rn?O=s.DEPTH32F_STENCIL8:v===mr&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ci||v===gr?O=s.DEPTH_COMPONENT24:v===Rn?O=s.DEPTH_COMPONENT32F:v===mr&&(O=s.DEPTH_COMPONENT16),O}function R(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==cn&&b.minFilter!==$t?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function w(b){const v=b.target;v.removeEventListener("dispose",w),P(v),v.isVideoTexture&&u.delete(v)}function T(b){const v=b.target;v.removeEventListener("dispose",T),S(v)}function P(b){const v=r.get(b);if(v.__webglInit===void 0)return;const O=b.source,ne=f.get(O);if(ne){const $=ne[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(b),Object.keys(ne).length===0&&f.delete(O)}r.remove(b)}function M(b){const v=r.get(b);s.deleteTexture(v.__webglTexture);const O=b.source,ne=f.get(O);delete ne[v.__cacheKey],a.memory.textures--}function S(b){const v=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(v.__webglFramebuffer[ne]))for(let $=0;$<v.__webglFramebuffer[ne].length;$++)s.deleteFramebuffer(v.__webglFramebuffer[ne][$]);else s.deleteFramebuffer(v.__webglFramebuffer[ne]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[ne])}else{if(Array.isArray(v.__webglFramebuffer))for(let ne=0;ne<v.__webglFramebuffer.length;ne++)s.deleteFramebuffer(v.__webglFramebuffer[ne]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ne=0;ne<v.__webglColorRenderbuffer.length;ne++)v.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[ne]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=b.textures;for(let ne=0,$=O.length;ne<$;ne++){const j=r.get(O[ne]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),r.remove(O[ne])}r.remove(b)}let U=0;function C(){U=0}function I(){const b=U;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),U+=1,b}function F(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function V(b,v){const O=r.get(b);if(b.isVideoTexture&&ye(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(O,b,v);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function G(b,v){const O=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){z(O,b,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function Q(b,v){const O=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){z(O,b,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function W(b,v){const O=r.get(b);if(b.version>0&&O.__version!==b.version){k(O,b,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}const q={[Oa]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[Ba]:s.MIRRORED_REPEAT},Y={[cn]:s.NEAREST,[sh]:s.NEAREST_MIPMAP_NEAREST,[Ir]:s.NEAREST_MIPMAP_LINEAR,[$t]:s.LINEAR,[zs]:s.LINEAR_MIPMAP_NEAREST,[ai]:s.LINEAR_MIPMAP_LINEAR},L={[lh]:s.NEVER,[ph]:s.ALWAYS,[ch]:s.LESS,[Hc]:s.LEQUAL,[uh]:s.EQUAL,[dh]:s.GEQUAL,[hh]:s.GREATER,[fh]:s.NOTEQUAL};function H(b,v){if(v.type===Rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===$t||v.magFilter===zs||v.magFilter===Ir||v.magFilter===ai||v.minFilter===$t||v.minFilter===zs||v.minFilter===Ir||v.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,q[v.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,q[v.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,q[v.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,Y[v.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,Y[v.minFilter]),v.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,L[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==Ir&&v.minFilter!==ai||v.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function ee(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",w));const ne=v.source;let $=f.get(ne);$===void 0&&($={},f.set(ne,$));const j=F(v);if(j!==b.__cacheKey){$[j]===void 0&&($[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[j].usedTimes++;const Se=$[b.__cacheKey];Se!==void 0&&($[b.__cacheKey].usedTimes--,Se.usedTimes===0&&M(v)),b.__cacheKey=j,b.__webglTexture=$[j].texture}return O}function te(b,v,O){return Math.floor(Math.floor(b/O)/v)}function Z(b,v,O,ne){const j=b.updateRanges;if(j.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,ne,v.data);else{j.sort((le,fe)=>le.start-fe.start);let Se=0;for(let le=1;le<j.length;le++){const fe=j[Se],ve=j[le],Re=fe.start+fe.count,Ee=te(ve.start,v.width,4),Ge=te(fe.start,v.width,4);ve.start<=Re+1&&Ee===Ge&&te(ve.start+ve.count-1,v.width,4)===Ee?fe.count=Math.max(fe.count,ve.start+ve.count-fe.start):(++Se,j[Se]=ve)}j.length=Se+1;const he=s.getParameter(s.UNPACK_ROW_LENGTH),we=s.getParameter(s.UNPACK_SKIP_PIXELS),Ce=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let le=0,fe=j.length;le<fe;le++){const ve=j[le],Re=Math.floor(ve.start/4),Ee=Math.ceil(ve.count/4),Ge=Re%v.width,B=Math.floor(Re/v.width),ae=Ee,_e=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,Ge,B,ae,_e,O,ne,v.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,he),s.pixelStorei(s.UNPACK_SKIP_PIXELS,we),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function z(b,v,O){let ne=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=s.TEXTURE_3D);const $=ee(b,v),j=v.source;t.bindTexture(ne,b.__webglTexture,s.TEXTURE0+O);const Se=r.get(j);if(j.version!==Se.__version||$===!0){t.activeTexture(s.TEXTURE0+O);const he=et.getPrimaries(et.workingColorSpace),we=v.colorSpace===Hn?null:et.getPrimaries(v.colorSpace),Ce=v.colorSpace===Hn||he===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let le=_(v.image,!1,n.maxTextureSize);le=oe(v,le);const fe=i.convert(v.format,v.colorSpace),ve=i.convert(v.type);let Re=E(v.internalFormat,fe,ve,v.colorSpace,v.isVideoTexture);H(ne,v);let Ee;const Ge=v.mipmaps,B=v.isVideoTexture!==!0,ae=Se.__version===void 0||$===!0,_e=j.dataReady,Ie=R(v,le);if(v.isDepthTexture)Re=x(v.format===vr,v.type),ae&&(B?t.texStorage2D(s.TEXTURE_2D,1,Re,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,Re,le.width,le.height,0,fe,ve,null));else if(v.isDataTexture)if(Ge.length>0){B&&ae&&t.texStorage2D(s.TEXTURE_2D,Ie,Re,Ge[0].width,Ge[0].height);for(let ce=0,ie=Ge.length;ce<ie;ce++)Ee=Ge[ce],B?_e&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,fe,ve,Ee.data):t.texImage2D(s.TEXTURE_2D,ce,Re,Ee.width,Ee.height,0,fe,ve,Ee.data);v.generateMipmaps=!1}else B?(ae&&t.texStorage2D(s.TEXTURE_2D,Ie,Re,le.width,le.height),_e&&Z(v,le,fe,ve)):t.texImage2D(s.TEXTURE_2D,0,Re,le.width,le.height,0,fe,ve,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){B&&ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Re,Ge[0].width,Ge[0].height,le.depth);for(let ce=0,ie=Ge.length;ce<ie;ce++)if(Ee=Ge[ce],v.format!==ln)if(fe!==null)if(B){if(_e)if(v.layerUpdates.size>0){const Pe=zl(Ee.width,Ee.height,v.format,v.type);for(const Oe of v.layerUpdates){const Be=Ee.data.subarray(Oe*Pe/Ee.data.BYTES_PER_ELEMENT,(Oe+1)*Pe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Oe,Ee.width,Ee.height,1,fe,Be)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Ee.width,Ee.height,le.depth,fe,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,Re,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?_e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Ee.width,Ee.height,le.depth,fe,ve,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,Re,Ee.width,Ee.height,le.depth,0,fe,ve,Ee.data)}else{B&&ae&&t.texStorage2D(s.TEXTURE_2D,Ie,Re,Ge[0].width,Ge[0].height);for(let ce=0,ie=Ge.length;ce<ie;ce++)Ee=Ge[ce],v.format!==ln?fe!==null?B?_e&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,fe,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,Re,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?_e&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,fe,ve,Ee.data):t.texImage2D(s.TEXTURE_2D,ce,Re,Ee.width,Ee.height,0,fe,ve,Ee.data)}else if(v.isDataArrayTexture)if(B){if(ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Re,le.width,le.height,le.depth),_e)if(v.layerUpdates.size>0){const ce=zl(le.width,le.height,v.format,v.type);for(const ie of v.layerUpdates){const Pe=le.data.subarray(ie*ce/le.data.BYTES_PER_ELEMENT,(ie+1)*ce/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,fe,ve,Pe)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,fe,ve,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,le.width,le.height,le.depth,0,fe,ve,le.data);else if(v.isData3DTexture)B?(ae&&t.texStorage3D(s.TEXTURE_3D,Ie,Re,le.width,le.height,le.depth),_e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,fe,ve,le.data)):t.texImage3D(s.TEXTURE_3D,0,Re,le.width,le.height,le.depth,0,fe,ve,le.data);else if(v.isFramebufferTexture){if(ae)if(B)t.texStorage2D(s.TEXTURE_2D,Ie,Re,le.width,le.height);else{let ce=le.width,ie=le.height;for(let Pe=0;Pe<Ie;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,Re,ce,ie,0,fe,ve,null),ce>>=1,ie>>=1}}else if(Ge.length>0){if(B&&ae){const ce=De(Ge[0]);t.texStorage2D(s.TEXTURE_2D,Ie,Re,ce.width,ce.height)}for(let ce=0,ie=Ge.length;ce<ie;ce++)Ee=Ge[ce],B?_e&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,fe,ve,Ee):t.texImage2D(s.TEXTURE_2D,ce,Re,fe,ve,Ee);v.generateMipmaps=!1}else if(B){if(ae){const ce=De(le);t.texStorage2D(s.TEXTURE_2D,Ie,Re,ce.width,ce.height)}_e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,ve,le)}else t.texImage2D(s.TEXTURE_2D,0,Re,fe,ve,le);m(v)&&p(ne),Se.__version=j.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function k(b,v,O){if(v.image.length!==6)return;const ne=ee(b,v),$=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const j=r.get($);if($.version!==j.__version||ne===!0){t.activeTexture(s.TEXTURE0+O);const Se=et.getPrimaries(et.workingColorSpace),he=v.colorSpace===Hn?null:et.getPrimaries(v.colorSpace),we=v.colorSpace===Hn||Se===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!Ce&&!le?fe[ie]=_(v.image[ie],!0,n.maxCubemapSize):fe[ie]=le?v.image[ie].image:v.image[ie],fe[ie]=oe(v,fe[ie]);const ve=fe[0],Re=i.convert(v.format,v.colorSpace),Ee=i.convert(v.type),Ge=E(v.internalFormat,Re,Ee,v.colorSpace),B=v.isVideoTexture!==!0,ae=j.__version===void 0||ne===!0,_e=$.dataReady;let Ie=R(v,ve);H(s.TEXTURE_CUBE_MAP,v);let ce;if(Ce){B&&ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,Ge,ve.width,ve.height);for(let ie=0;ie<6;ie++){ce=fe[ie].mipmaps;for(let Pe=0;Pe<ce.length;Pe++){const Oe=ce[Pe];v.format!==ln?Re!==null?B?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,Oe.width,Oe.height,Re,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Ge,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,Oe.width,Oe.height,Re,Ee,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Ge,Oe.width,Oe.height,0,Re,Ee,Oe.data)}}}else{if(ce=v.mipmaps,B&&ae){ce.length>0&&Ie++;const ie=De(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,Ge,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){B?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,Re,Ee,fe[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,fe[ie].width,fe[ie].height,0,Re,Ee,fe[ie].data);for(let Pe=0;Pe<ce.length;Pe++){const Be=ce[Pe].image[ie].image;B?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,Be.width,Be.height,Re,Ee,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Ge,Be.width,Be.height,0,Re,Ee,Be.data)}}else{B?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,Ee,fe[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,Re,Ee,fe[ie]);for(let Pe=0;Pe<ce.length;Pe++){const Oe=ce[Pe];B?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,Re,Ee,Oe.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Ge,Re,Ee,Oe.image[ie])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),j.__version=$.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function J(b,v,O,ne,$,j){const Se=i.convert(O.format,O.colorSpace),he=i.convert(O.type),we=E(O.internalFormat,Se,he,O.colorSpace),Ce=r.get(v),le=r.get(O);if(le.__renderTarget=v,!Ce.__hasExternalTextures){const fe=Math.max(1,v.width>>j),ve=Math.max(1,v.height>>j);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,j,we,fe,ve,v.depth,0,Se,he,null):t.texImage2D($,j,we,fe,ve,0,Se,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),ue(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,$,le.__webglTexture,0,xe(v)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,$,le.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(b,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),v.depthBuffer){const ne=v.depthTexture,$=ne&&ne.isDepthTexture?ne.type:null,j=x(v.stencilBuffer,$),Se=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=xe(v);ue(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,j,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,j,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,j,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,b)}else{const ne=v.textures;for(let $=0;$<ne.length;$++){const j=ne[$],Se=i.convert(j.format,j.colorSpace),he=i.convert(j.type),we=E(j.internalFormat,Se,he,j.colorSpace),Ce=xe(v);O&&ue(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,we,v.width,v.height):ue(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,we,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,we,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=r.get(v.depthTexture);ne.__renderTarget=v,(!ne.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const $=ne.__webglTexture,j=xe(v);if(v.depthTexture.format===_r)ue(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(v.depthTexture.format===vr)ue(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function de(b){const v=r.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const ne=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",$)};ne.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=ne}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const ne=b.texture.mipmaps;ne&&ne.length>0?me(v.__webglFramebuffer[0],b):me(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=s.createRenderbuffer(),pe(v.__webglDepthbuffer[ne],b,!1);else{const $=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,j)}}else{const ne=b.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),pe(v.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,j)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(b,v,O){const ne=r.get(b);v!==void 0&&J(ne.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&de(b)}function D(b){const v=b.texture,O=r.get(b),ne=r.get(v);b.addEventListener("dispose",T);const $=b.textures,j=b.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=v.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let we=0;we<v.mipmaps.length;we++)O.__webglFramebuffer[he][we]=s.createFramebuffer()}else O.__webglFramebuffer[he]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)O.__webglFramebuffer[he]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Se)for(let he=0,we=$.length;he<we;he++){const Ce=r.get($[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&ue(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<$.length;he++){const we=$[he];O.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const Ce=i.convert(we.format,we.colorSpace),le=i.convert(we.type),fe=E(we.internalFormat,Ce,le,we.colorSpace,b.isXRRenderTarget===!0),ve=xe(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,fe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,O.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),H(s.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)J(O.__webglFramebuffer[he][we],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,we);else J(O.__webglFramebuffer[he],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let he=0,we=$.length;he<we;he++){const Ce=$[he],le=r.get(Ce);let fe=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,le.__webglTexture),H(fe,Ce),J(O.__webglFramebuffer,b,Ce,s.COLOR_ATTACHMENT0+he,fe,0),m(Ce)&&p(fe)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,ne.__webglTexture),H(he,v),v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)J(O.__webglFramebuffer[we],b,v,s.COLOR_ATTACHMENT0,he,we);else J(O.__webglFramebuffer,b,v,s.COLOR_ATTACHMENT0,he,0);m(v)&&p(he),t.unbindTexture()}b.depthBuffer&&de(b)}function Fe(b){const v=b.textures;for(let O=0,ne=v.length;O<ne;O++){const $=v[O];if(m($)){const j=y(b),Se=r.get($).__webglTexture;t.bindTexture(j,Se),p(j),t.unbindTexture()}}}const Ae=[],be=[];function Me(b){if(b.samples>0){if(ue(b)===!1){const v=b.textures,O=b.width,ne=b.height;let $=s.COLOR_BUFFER_BIT;const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=r.get(b),he=v.length>1;if(he)for(let Ce=0;Ce<v.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const we=b.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[Ce]);const le=r.get(v[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,le,0)}s.blitFramebuffer(0,0,O,ne,0,0,O,ne,$,s.NEAREST),c===!0&&(Ae.length=0,be.length=0,Ae.push(s.COLOR_ATTACHMENT0+Ce),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ae.push(j),be.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<v.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Se.__webglColorRenderbuffer[Ce]);const le=r.get(v[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function xe(b){return Math.min(n.maxSamples,b.samples)}function ue(b){const v=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(b){const v=a.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function oe(b,v){const O=b.colorSpace,ne=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Gi&&O!==Hn&&(et.getTransfer(O)===st?(ne!==ln||$!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function De(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=C,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=ge,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ue}function Fg(s,e){function t(r,n=Hn){let i;const a=et.getTransfer(n);if(r===_n)return s.UNSIGNED_BYTE;if(r===To)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ao)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Oc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ic)return s.BYTE;if(r===Fc)return s.SHORT;if(r===mr)return s.UNSIGNED_SHORT;if(r===bo)return s.INT;if(r===ci)return s.UNSIGNED_INT;if(r===Rn)return s.FLOAT;if(r===Er)return s.HALF_FLOAT;if(r===Bc)return s.ALPHA;if(r===kc)return s.RGB;if(r===ln)return s.RGBA;if(r===_r)return s.DEPTH_COMPONENT;if(r===vr)return s.DEPTH_STENCIL;if(r===zc)return s.RED;if(r===wo)return s.RED_INTEGER;if(r===Gc)return s.RG;if(r===Ro)return s.RG_INTEGER;if(r===Co)return s.RGBA_INTEGER;if(r===cs||r===us||r===hs||r===fs)if(a===st)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===cs)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===us)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===cs)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===us)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hs)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fs)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ka||r===za||r===Ga||r===Va)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===ka)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===za)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ga)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Va)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ha||r===Wa||r===Xa)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===Ha||r===Wa)return a===st?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===Xa)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ya||r===qa||r===ja||r===Ka||r===Za||r===Ja||r===Qa||r===$a||r===eo||r===to||r===no||r===io||r===ro||r===so)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===Ya)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qa)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ja)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ka)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Za)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ja)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qa)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$a)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===eo)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===to)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===no)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===io)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ro)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===so)return a===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ao||r===oo||r===lo)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===ao)return a===st?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===oo)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lo)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===co||r===uo||r===ho||r===fo)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===co)return i.COMPRESSED_RED_RGTC1_EXT;if(r===uo)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ho)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fo)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gr?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new eu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new qn({vertexShader:Ng,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new pi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kg extends fi{constructor(e,t){super();const r=this;let n=null,i=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Bg,p={},y=t.getContextAttributes();let E=null,x=null;const R=[],w=[],T=new Ye;let P=null;const M=new Qt;M.viewport=new ht;const S=new Qt;S.viewport=new ht;const U=[M,S],C=new rf;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let k=R[z];return k===void 0&&(k=new la,R[z]=k),k.getTargetRaySpace()},this.getControllerGrip=function(z){let k=R[z];return k===void 0&&(k=new la,R[z]=k),k.getGripSpace()},this.getHand=function(z){let k=R[z];return k===void 0&&(k=new la,R[z]=k),k.getHandSpace()};function V(z){const k=w.indexOf(z.inputSource);if(k===-1)return;const J=R[k];J!==void 0&&(J.update(z.inputSource,z.frame,l||a),J.dispatchEvent({type:z.type,data:z.inputSource}))}function G(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",Q);for(let z=0;z<R.length;z++){const k=w[z];k!==null&&(w[z]=null,R[z].disconnect(k))}I=null,F=null,m.reset();for(const z in p)delete p[z];e.setRenderTarget(E),d=null,f=null,h=null,n=null,x=null,Z.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){i=z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(z){if(n=z,n!==null){if(E=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",G),n.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,pe=null,me=null;y.depth&&(me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=y.stencil?vr:_r,pe=y.stencil?gr:ci);const de={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:i};h=this.getBinding(),f=h.createProjectionLayer(de),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new hi(f.textureWidth,f.textureHeight,{format:ln,type:_n,depthTexture:new $c(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const J={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,J),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new hi(d.framebufferWidth,d.framebufferHeight,{format:ln,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),Z.setContext(n),Z.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(z){for(let k=0;k<z.removed.length;k++){const J=z.removed[k],pe=w.indexOf(J);pe>=0&&(w[pe]=null,R[pe].disconnect(J))}for(let k=0;k<z.added.length;k++){const J=z.added[k];let pe=w.indexOf(J);if(pe===-1){for(let de=0;de<R.length;de++)if(de>=w.length){w.push(J),pe=de;break}else if(w[de]===null){w[de]=J,pe=de;break}if(pe===-1)break}const me=R[pe];me&&me.connect(J)}}const W=new K,q=new K;function Y(z,k,J){W.setFromMatrixPosition(k.matrixWorld),q.setFromMatrixPosition(J.matrixWorld);const pe=W.distanceTo(q),me=k.projectionMatrix.elements,de=J.projectionMatrix.elements,ge=me[14]/(me[10]-1),D=me[14]/(me[10]+1),Fe=(me[9]+1)/me[5],Ae=(me[9]-1)/me[5],be=(me[8]-1)/me[0],Me=(de[8]+1)/de[0],xe=ge*be,ue=ge*Me,ye=pe/(-be+Me),oe=ye*-be;if(k.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(oe),z.translateZ(ye),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),me[10]===-1)z.projectionMatrix.copy(k.projectionMatrix),z.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const De=ge+ye,b=D+ye,v=xe-oe,O=ue+(pe-oe),ne=Fe*D/b*De,$=Ae*D/b*De;z.projectionMatrix.makePerspective(v,O,ne,$,De,b),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function L(z,k){k===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(k.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(n===null)return;let k=z.near,J=z.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(J=m.depthFar)),C.near=S.near=M.near=k,C.far=S.far=M.far=J,(I!==C.near||F!==C.far)&&(n.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,F=C.far),C.layers.mask=z.layers.mask|6,M.layers.mask=C.layers.mask&3,S.layers.mask=C.layers.mask&5;const pe=z.parent,me=C.cameras;L(C,pe);for(let de=0;de<me.length;de++)L(me[de],pe);me.length===2?Y(C,M,S):C.projectionMatrix.copy(M.projectionMatrix),H(z,C,pe)};function H(z,k,J){J===null?z.matrix.copy(k.matrixWorld):(z.matrix.copy(J.matrixWorld),z.matrix.invert(),z.matrix.multiply(k.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(k.projectionMatrix),z.projectionMatrixInverse.copy(k.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=po*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(z){return p[z]};let ee=null;function te(z,k){if(u=k.getViewerPose(l||a),g=k,u!==null){const J=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let pe=!1;J.length!==C.cameras.length&&(C.cameras.length=0,pe=!0);for(let D=0;D<J.length;D++){const Fe=J[D];let Ae=null;if(d!==null)Ae=d.getViewport(Fe);else{const Me=h.getViewSubImage(f,Fe);Ae=Me.viewport,D===0&&(e.setRenderTargetTextures(x,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(x))}let be=U[D];be===void 0&&(be=new Qt,be.layers.enable(D),be.viewport=new ht,U[D]=be),be.matrix.fromArray(Fe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Fe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),D===0&&(C.matrix.copy(be.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),pe===!0&&C.cameras.push(be)}const me=n.enabledFeatures;if(me&&me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){h=r.getBinding();const D=h.getDepthInformation(J[0]);D&&D.isValid&&D.texture&&m.init(D,n.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),h=r.getBinding();for(let D=0;D<J.length;D++){const Fe=J[D].camera;if(Fe){let Ae=p[Fe];Ae||(Ae=new eu,p[Fe]=Ae);const be=h.getCameraImage(Fe);Ae.sourceTexture=be}}}}for(let J=0;J<R.length;J++){const pe=w[J],me=R[J];pe!==null&&me!==void 0&&me.update(pe,k,l||a)}ee&&ee(z,k),k.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:k}),g=null}const Z=new ou;Z.setAnimationLoop(te),this.setAnimationLoop=function(z){ee=z},this.dispose=function(){}}}const $n=new hn,zg=new ut;function Gg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,Kc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),_(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),E=y.envMap,x=y.envMapRotation;E&&(m.envMap.value=E,$n.copy(x),$n.x*=-1,$n.y*=-1,$n.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),m.envMapRotation.value.setFromMatrix4(zg.makeRotationFromEuler($n)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Vg(s,e,t,r){let n={},i={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){const x=E.program;r.uniformBlockBinding(y,x)}function l(y,E){let x=n[y.id];x===void 0&&(g(y),x=u(y),n[y.id]=x,y.addEventListener("dispose",m));const R=E.program;r.updateUBOMapping(y,R);const w=e.render.frame;i[y.id]!==w&&(f(y),i[y.id]=w)}function u(y){const E=h();y.__bindingPointIndex=E;const x=s.createBuffer(),R=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,x),x}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const E=n[y.id],x=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let w=0,T=x.length;w<T;w++){const P=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,S=P.length;M<S;M++){const U=P[M];if(d(U,w,M,R)===!0){const C=U.__offset,I=Array.isArray(U.value)?U.value:[U.value];let F=0;for(let V=0;V<I.length;V++){const G=I[V],Q=_(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,C+F,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,F),F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,E,x,R){const w=y.value,T=E+"_"+x;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const P=R[T];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[T]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(y){const E=y.uniforms;let x=0;const R=16;for(let T=0,P=E.length;T<P;T++){const M=Array.isArray(E[T])?E[T]:[E[T]];for(let S=0,U=M.length;S<U;S++){const C=M[S],I=Array.isArray(C.value)?C.value:[C.value];for(let F=0,V=I.length;F<V;F++){const G=I[F],Q=_(G),W=x%R,q=W%Q.boundary,Y=W+q;x+=q,Y!==0&&R-Y<Q.storage&&(x+=R-Y),C.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,x+=Q.storage}}}const w=x%R;return w>0&&(x+=R-w),y.__size=x,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(n[E.id]),delete n[E.id],delete i[E.id]}function p(){for(const y in n)s.deleteBuffer(n[y]);a=[],n={},i={}}return{bind:c,update:l,dispose:p}}class Hg{constructor(e={}){const{canvas:t=_h(),context:r=null,depth:n=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Ht;let w=0,T=0,P=null,M=-1,S=null;const U=new ht,C=new ht;let I=null;const F=new Ze(0);let V=0,G=t.width,Q=t.height,W=1,q=null,Y=null;const L=new ht(0,0,G,Q),H=new ht(0,0,G,Q);let ee=!1;const te=new Io;let Z=!1,z=!1;const k=new ut,J=new K,pe=new ht,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function ge(){return P===null?W:1}let D=r;function Fe(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yo}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ce,!1),D===null){const X="webgl2";if(D=Fe(X,A),D===null)throw Fe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ae,be,Me,xe,ue,ye,oe,De,b,v,O,ne,$,j,Se,he,we,Ce,le,fe,ve,Re,Ee,Ge;function B(){Ae=new $p(D),Ae.init(),Re=new Fg(D,Ae),be=new Yp(D,Ae,e,Re),Me=new Lg(D,Ae),be.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),xe=new nm(D),ue=new Sg,ye=new Ig(D,Ae,Me,ue,be,Re,xe),oe=new jp(x),De=new Qp(x),b=new lf(D),Ee=new Wp(D,b),v=new em(D,b,xe,Ee),O=new rm(D,v,b,xe),le=new im(D,be,ye),he=new qp(ue),ne=new xg(x,oe,De,Ae,be,Ee,he),$=new Gg(x,ue),j=new yg,Se=new Rg(Ae),Ce=new Hp(x,oe,De,Me,O,d,c),we=new Dg(x,O,be),Ge=new Vg(D,xe,be,Me),fe=new Xp(D,Ae,xe),ve=new tm(D,Ae,xe),xe.programs=ne.programs,x.capabilities=be,x.extensions=Ae,x.properties=ue,x.renderLists=j,x.shadowMap=we,x.state=Me,x.info=xe}B();const ae=new kg(x,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(G,Q,!1))},this.getSize=function(A){return A.set(G,Q)},this.setSize=function(A,X,re=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,Q=X,t.width=Math.floor(A*W),t.height=Math.floor(X*W),re===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(G*W,Q*W).floor()},this.setDrawingBufferSize=function(A,X,re){G=A,Q=X,W=re,t.width=Math.floor(A*re),t.height=Math.floor(X*re),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,X,re,se){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,X,re,se),Me.viewport(U.copy(L).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(H)},this.setScissor=function(A,X,re,se){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,X,re,se),Me.scissor(C.copy(H).multiplyScalar(W).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(A){Me.setScissorTest(ee=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,re=!0){let se=0;if(A){let N=!1;if(P!==null){const Te=P.texture.format;N=Te===Co||Te===Ro||Te===wo}if(N){const Te=P.texture.type,Le=Te===_n||Te===ci||Te===mr||Te===gr||Te===To||Te===Ao,ke=Ce.getClearColor(),Ne=Ce.getClearAlpha(),We=ke.r,Xe=ke.g,ze=ke.b;Le?(g[0]=We,g[1]=Xe,g[2]=ze,g[3]=Ne,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=We,_[1]=Xe,_[2]=ze,_[3]=Ne,D.clearBufferiv(D.COLOR,0,_))}else se|=D.COLOR_BUFFER_BIT}X&&(se|=D.DEPTH_BUFFER_BIT),re&&(se|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ce.dispose(),j.dispose(),Se.dispose(),ue.dispose(),oe.dispose(),De.dispose(),O.dispose(),Ee.dispose(),Ge.dispose(),ne.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ot),ae.removeEventListener("sessionend",ft),_t.stop()};function _e(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=xe.autoReset,X=we.enabled,re=we.autoUpdate,se=we.needsUpdate,N=we.type;B(),xe.autoReset=A,we.enabled=X,we.autoUpdate=re,we.needsUpdate=se,we.type=N}function ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const X=A.target;X.removeEventListener("dispose",ie),Pe(X)}function Pe(A){Oe(A),ue.remove(A)}function Oe(A){const X=ue.get(A).programs;X!==void 0&&(X.forEach(function(re){ne.releaseProgram(re)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,re,se,N,Te){X===null&&(X=me);const Le=N.isMesh&&N.matrixWorld.determinant()<0,ke=ji(A,X,re,se,N);Me.setMaterial(se,Le);let Ne=re.index,We=1;if(se.wireframe===!0){if(Ne=v.getWireframeAttribute(re),Ne===void 0)return;We=2}const Xe=re.drawRange,ze=re.attributes.position;let je=Xe.start*We,tt=(Xe.start+Xe.count)*We;Te!==null&&(je=Math.max(je,Te.start*We),tt=Math.min(tt,(Te.start+Te.count)*We)),Ne!==null?(je=Math.max(je,0),tt=Math.min(tt,Ne.count)):ze!=null&&(je=Math.max(je,0),tt=Math.min(tt,ze.count));const lt=tt-je;if(lt<0||lt===1/0)return;Ee.setup(N,se,ke,re,Ne);let rt,nt=fe;if(Ne!==null&&(rt=b.get(Ne),nt=ve,nt.setIndex(rt)),N.isMesh)se.wireframe===!0?(Me.setLineWidth(se.wireframeLinewidth*ge()),nt.setMode(D.LINES)):nt.setMode(D.TRIANGLES);else if(N.isLine){let He=se.linewidth;He===void 0&&(He=1),Me.setLineWidth(He*ge()),N.isLineSegments?nt.setMode(D.LINES):N.isLineLoop?nt.setMode(D.LINE_LOOP):nt.setMode(D.LINE_STRIP)}else N.isPoints?nt.setMode(D.POINTS):N.isSprite&&nt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))nt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const He=N._multiDrawStarts,it=N._multiDrawCounts,Qe=N._multiDrawCount,mt=Ne?b.get(Ne).bytesPerElement:1,dn=ue.get(se).currentProgram.getUniforms();for(let bt=0;bt<Qe;bt++)dn.setValue(D,"_gl_DrawID",bt),nt.render(He[bt]/mt,it[bt])}else if(N.isInstancedMesh)nt.renderInstances(je,lt,N.count);else if(re.isInstancedBufferGeometry){const He=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,it=Math.min(re.instanceCount,He);nt.renderInstances(je,lt,it)}else nt.render(je,lt)};function Be(A,X,re){A.transparent===!0&&A.side===mn&&A.forceSinglePass===!1?(A.side=kt,A.needsUpdate=!0,pt(A,X,re),A.side=Yn,A.needsUpdate=!0,pt(A,X,re),A.side=mn):pt(A,X,re)}this.compile=function(A,X,re=null){re===null&&(re=A),p=Se.get(re),p.init(X),E.push(p),re.traverseVisible(function(N){N.isLight&&N.layers.test(X.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),A!==re&&A.traverseVisible(function(N){N.isLight&&N.layers.test(X.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const se=new Set;return A.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Te=N.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const ke=Te[Le];Be(ke,re,N),se.add(ke)}else Be(Te,re,N),se.add(Te)}),p=E.pop(),se},this.compileAsync=function(A,X,re=null){const se=this.compile(A,X,re);return new Promise(N=>{function Te(){if(se.forEach(function(Le){ue.get(Le).currentProgram.isReady()&&se.delete(Le)}),se.size===0){N(A);return}setTimeout(Te,10)}Ae.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Ve=null;function ct(A){Ve&&Ve(A)}function ot(){_t.stop()}function ft(){_t.start()}const _t=new ou;_t.setAnimationLoop(ct),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(A){Ve=A,ae.setAnimationLoop(A),A===null?_t.stop():_t.start()},ae.addEventListener("sessionstart",ot),ae.addEventListener("sessionend",ft),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,X,P),p=Se.get(A,E.length),p.init(X),E.push(p),k.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(k,gn,X.reversedDepth),z=this.localClippingEnabled,Z=he.init(this.clippingPlanes,z),m=j.get(A,y.length),m.init(),y.push(m),ae.enabled===!0&&ae.isPresenting===!0){const Te=x.xr.getDepthSensingMesh();Te!==null&&Xt(Te,X,-1/0,x.sortObjects)}Xt(A,X,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(q,Y),de=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,de&&Ce.addToRenderList(m,A),this.info.render.frame++,Z===!0&&he.beginShadows();const re=p.state.shadowsArray;we.render(re,A,X),Z===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=m.opaque,N=m.transmissive;if(p.setupLights(),X.isArrayCamera){const Te=X.cameras;if(N.length>0)for(let Le=0,ke=Te.length;Le<ke;Le++){const Ne=Te[Le];en(se,N,A,Ne)}de&&Ce.render(A);for(let Le=0,ke=Te.length;Le<ke;Le++){const Ne=Te[Le];Yt(m,A,Ne,Ne.viewport)}}else N.length>0&&en(se,N,A,X),de&&Ce.render(A),Yt(m,A,X);P!==null&&T===0&&(ye.updateMultisampleRenderTarget(P),ye.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,X),Ee.resetDefaultState(),M=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],Z===!0&&he.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Xt(A,X,re,se){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){se&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(k);const Le=O.update(A),ke=A.material;ke.visible&&m.push(A,Le,ke,re,pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Le=O.update(A),ke=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pe.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),pe.copy(Le.boundingSphere.center)),pe.applyMatrix4(A.matrixWorld).applyMatrix4(k)),Array.isArray(ke)){const Ne=Le.groups;for(let We=0,Xe=Ne.length;We<Xe;We++){const ze=Ne[We],je=ke[ze.materialIndex];je&&je.visible&&m.push(A,Le,je,re,pe.z,ze)}}else ke.visible&&m.push(A,Le,ke,re,pe.z,null)}}const Te=A.children;for(let Le=0,ke=Te.length;Le<ke;Le++)Xt(Te[Le],X,re,se)}function Yt(A,X,re,se){const N=A.opaque,Te=A.transmissive,Le=A.transparent;p.setupLightsView(re),Z===!0&&he.setGlobalState(x.clippingPlanes,re),se&&Me.viewport(U.copy(se)),N.length>0&&qt(N,X,re),Te.length>0&&qt(Te,X,re),Le.length>0&&qt(Le,X,re),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function en(A,X,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new hi(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Er:_n,minFilter:ai,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const Te=p.state.transmissionRenderTarget[se.id],Le=se.viewport||U;Te.setSize(Le.z*x.transmissionResolutionScale,Le.w*x.transmissionResolutionScale);const ke=x.getRenderTarget(),Ne=x.getActiveCubeFace(),We=x.getActiveMipmapLevel();x.setRenderTarget(Te),x.getClearColor(F),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),de&&Ce.render(re);const Xe=x.toneMapping;x.toneMapping=Xn;const ze=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),Z===!0&&he.setGlobalState(x.clippingPlanes,se),qt(A,re,se),ye.updateMultisampleRenderTarget(Te),ye.updateRenderTargetMipmap(Te),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let tt=0,lt=X.length;tt<lt;tt++){const rt=X[tt],nt=rt.object,He=rt.geometry,it=rt.material,Qe=rt.group;if(it.side===mn&&nt.layers.test(se.layers)){const mt=it.side;it.side=kt,it.needsUpdate=!0,jt(nt,re,se,He,it,Qe),it.side=mt,it.needsUpdate=!0,je=!0}}je===!0&&(ye.updateMultisampleRenderTarget(Te),ye.updateRenderTargetMipmap(Te))}x.setRenderTarget(ke,Ne,We),x.setClearColor(F,V),ze!==void 0&&(se.viewport=ze),x.toneMapping=Xe}function qt(A,X,re){const se=X.isScene===!0?X.overrideMaterial:null;for(let N=0,Te=A.length;N<Te;N++){const Le=A[N],ke=Le.object,Ne=Le.geometry,We=Le.group;let Xe=Le.material;Xe.allowOverride===!0&&se!==null&&(Xe=se),ke.layers.test(re.layers)&&jt(ke,X,re,Ne,Xe,We)}}function jt(A,X,re,se,N,Te){A.onBeforeRender(x,X,re,se,N,Te),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),N.onBeforeRender(x,X,re,se,A,Te),N.transparent===!0&&N.side===mn&&N.forceSinglePass===!1?(N.side=kt,N.needsUpdate=!0,x.renderBufferDirect(re,X,se,N,A,Te),N.side=Yn,N.needsUpdate=!0,x.renderBufferDirect(re,X,se,N,A,Te),N.side=mn):x.renderBufferDirect(re,X,se,N,A,Te),A.onAfterRender(x,X,re,se,N,Te)}function pt(A,X,re){X.isScene!==!0&&(X=me);const se=ue.get(A),N=p.state.lights,Te=p.state.shadowsArray,Le=N.state.version,ke=ne.getParameters(A,N.state,Te,X,re),Ne=ne.getProgramCacheKey(ke);let We=se.programs;se.environment=A.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(A.isMeshStandardMaterial?De:oe).get(A.envMap||se.environment),se.envMapRotation=se.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",ie),We=new Map,se.programs=We);let Xe=We.get(Ne);if(Xe!==void 0){if(se.currentProgram===Xe&&se.lightsStateVersion===Le)return qi(A,ke),Xe}else ke.uniforms=ne.getUniforms(A),A.onBeforeCompile(ke,x),Xe=ne.acquireProgram(ke,Ne),We.set(Ne,Xe),se.uniforms=ke.uniforms;const ze=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=he.uniform),qi(A,ke),se.needsLights=Cr(A),se.lightsStateVersion=Le,se.needsLights&&(ze.ambientLightColor.value=N.state.ambient,ze.lightProbe.value=N.state.probe,ze.directionalLights.value=N.state.directional,ze.directionalLightShadows.value=N.state.directionalShadow,ze.spotLights.value=N.state.spot,ze.spotLightShadows.value=N.state.spotShadow,ze.rectAreaLights.value=N.state.rectArea,ze.ltc_1.value=N.state.rectAreaLTC1,ze.ltc_2.value=N.state.rectAreaLTC2,ze.pointLights.value=N.state.point,ze.pointLightShadows.value=N.state.pointShadow,ze.hemisphereLights.value=N.state.hemi,ze.directionalShadowMap.value=N.state.directionalShadowMap,ze.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ze.spotShadowMap.value=N.state.spotShadowMap,ze.spotLightMatrix.value=N.state.spotLightMatrix,ze.spotLightMap.value=N.state.spotLightMap,ze.pointShadowMap.value=N.state.pointShadowMap,ze.pointShadowMatrix.value=N.state.pointShadowMatrix),se.currentProgram=Xe,se.uniformsList=null,Xe}function fn(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=ms.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function qi(A,X){const re=ue.get(A);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function ji(A,X,re,se,N){X.isScene!==!0&&(X=me),ye.resetTextureUnits();const Te=X.fog,Le=se.isMeshStandardMaterial?X.environment:null,ke=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Gi,Ne=(se.isMeshStandardMaterial?De:oe).get(se.envMap||Le),We=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Xe=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ze=!!re.morphAttributes.position,je=!!re.morphAttributes.normal,tt=!!re.morphAttributes.color;let lt=Xn;se.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(lt=x.toneMapping);const rt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,nt=rt!==void 0?rt.length:0,He=ue.get(se),it=p.state.lights;if(Z===!0&&(z===!0||A!==S)){const dt=A===S&&se.id===M;he.setState(se,A,dt)}let Qe=!1;se.version===He.__version?(He.needsLights&&He.lightsStateVersion!==it.state.version||He.outputColorSpace!==ke||N.isBatchedMesh&&He.batching===!1||!N.isBatchedMesh&&He.batching===!0||N.isBatchedMesh&&He.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&He.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&He.instancing===!1||!N.isInstancedMesh&&He.instancing===!0||N.isSkinnedMesh&&He.skinning===!1||!N.isSkinnedMesh&&He.skinning===!0||N.isInstancedMesh&&He.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&He.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&He.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&He.instancingMorph===!1&&N.morphTexture!==null||He.envMap!==Ne||se.fog===!0&&He.fog!==Te||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==he.numPlanes||He.numIntersection!==he.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Xe||He.morphTargets!==ze||He.morphNormals!==je||He.morphColors!==tt||He.toneMapping!==lt||He.morphTargetsCount!==nt)&&(Qe=!0):(Qe=!0,He.__version=se.version);let mt=He.currentProgram;Qe===!0&&(mt=pt(se,X,N));let dn=!1,bt=!1,Sn=!1;const $e=mt.getUniforms(),It=He.uniforms;if(Me.useProgram(mt.program)&&(dn=!0,bt=!0,Sn=!0),se.id!==M&&(M=se.id,bt=!0),dn||S!==A){Me.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),$e.setValue(D,"projectionMatrix",A.projectionMatrix),$e.setValue(D,"viewMatrix",A.matrixWorldInverse);const At=$e.map.cameraPosition;At!==void 0&&At.setValue(D,J.setFromMatrixPosition(A.matrixWorld)),be.logarithmicDepthBuffer&&$e.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&$e.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,bt=!0,Sn=!0)}if(N.isSkinnedMesh){$e.setOptional(D,N,"bindMatrix"),$e.setOptional(D,N,"bindMatrixInverse");const dt=N.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),$e.setValue(D,"boneTexture",dt.boneTexture,ye))}N.isBatchedMesh&&($e.setOptional(D,N,"batchingTexture"),$e.setValue(D,"batchingTexture",N._matricesTexture,ye),$e.setOptional(D,N,"batchingIdTexture"),$e.setValue(D,"batchingIdTexture",N._indirectTexture,ye),$e.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&$e.setValue(D,"batchingColorTexture",N._colorsTexture,ye));const Tt=re.morphAttributes;if((Tt.position!==void 0||Tt.normal!==void 0||Tt.color!==void 0)&&le.update(N,re,mt),(bt||He.receiveShadow!==N.receiveShadow)&&(He.receiveShadow=N.receiveShadow,$e.setValue(D,"receiveShadow",N.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(It.envMap.value=Ne,It.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&X.environment!==null&&(It.envMapIntensity.value=X.environmentIntensity),bt&&($e.setValue(D,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Rs(It,Sn),Te&&se.fog===!0&&$.refreshFogUniforms(It,Te),$.refreshMaterialUniforms(It,se,W,Q,p.state.transmissionRenderTarget[A.id]),ms.upload(D,fn(He),It,ye)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ms.upload(D,fn(He),It,ye),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&$e.setValue(D,"center",N.center),$e.setValue(D,"modelViewMatrix",N.modelViewMatrix),$e.setValue(D,"normalMatrix",N.normalMatrix),$e.setValue(D,"modelMatrix",N.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const dt=se.uniformsGroups;for(let At=0,Un=dt.length;At<Un;At++){const Kt=dt[At];Ge.update(Kt,mt),Ge.bind(Kt,mt)}}return mt}function Rs(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Cr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,X,re){const se=ue.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ue.get(A.texture).__webglTexture=X,ue.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const re=ue.get(A);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const mi=D.createFramebuffer();this.setRenderTarget=function(A,X=0,re=0){P=A,w=X,T=re;let se=!0,N=null,Te=!1,Le=!1;if(A){const Ne=ue.get(A);if(Ne.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(D.FRAMEBUFFER,null),se=!1;else if(Ne.__webglFramebuffer===void 0)ye.setupRenderTarget(A);else if(Ne.__hasExternalTextures)ye.rebindTextures(A,ue.get(A.texture).__webglTexture,ue.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(Ne.__boundDepthTexture!==ze){if(ze!==null&&ue.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Le=!0);const Xe=ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[X])?N=Xe[X][re]:N=Xe[X],Te=!0):A.samples>0&&ye.useMultisampledRTT(A)===!1?N=ue.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?N=Xe[re]:N=Xe,U.copy(A.viewport),C.copy(A.scissor),I=A.scissorTest}else U.copy(L).multiplyScalar(W).floor(),C.copy(H).multiplyScalar(W).floor(),I=ee;if(re!==0&&(N=mi),Me.bindFramebuffer(D.FRAMEBUFFER,N)&&se&&Me.drawBuffers(A,N),Me.viewport(U),Me.scissor(C),Me.setScissorTest(I),Te){const Ne=ue.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,re)}else if(Le){const Ne=X;for(let We=0;We<A.textures.length;We++){const Xe=ue.get(A.textures[We]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+We,Xe.__webglTexture,re,Ne)}}else if(A!==null&&re!==0){const Ne=ue.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,re)}M=-1},this.readRenderTargetPixels=function(A,X,re,se,N,Te,Le,ke=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){Me.bindFramebuffer(D.FRAMEBUFFER,Ne);try{const We=A.textures[ke],Xe=We.format,ze=We.type;if(!be.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-se&&re>=0&&re<=A.height-N&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),D.readPixels(X,re,se,N,Re.convert(Xe),Re.convert(ze),Te))}finally{const We=P!==null?ue.get(P).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,X,re,se,N,Te,Le,ke=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(X>=0&&X<=A.width-se&&re>=0&&re<=A.height-N){Me.bindFramebuffer(D.FRAMEBUFFER,Ne);const We=A.textures[ke],Xe=We.format,ze=We.type;if(!be.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,Te.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),D.readPixels(X,re,se,N,Re.convert(Xe),Re.convert(ze),0);const tt=P!==null?ue.get(P).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,tt);const lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await vh(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Te),D.deleteBuffer(je),D.deleteSync(lt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,re=0){const se=Math.pow(2,-re),N=Math.floor(A.image.width*se),Te=Math.floor(A.image.height*se),Le=X!==null?X.x:0,ke=X!==null?X.y:0;ye.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,re,0,0,Le,ke,N,Te),Me.unbindTexture()};const Ki=D.createFramebuffer(),Cs=D.createFramebuffer();this.copyTextureToTexture=function(A,X,re=null,se=null,N=0,Te=null){Te===null&&(N!==0?(xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=N,N=0):Te=0);let Le,ke,Ne,We,Xe,ze,je,tt,lt;const rt=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(re!==null)Le=re.max.x-re.min.x,ke=re.max.y-re.min.y,Ne=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,Xe=re.min.y,ze=re.isBox3?re.min.z:0;else{const Tt=Math.pow(2,-N);Le=Math.floor(rt.width*Tt),ke=Math.floor(rt.height*Tt),A.isDataArrayTexture?Ne=rt.depth:A.isData3DTexture?Ne=Math.floor(rt.depth*Tt):Ne=1,We=0,Xe=0,ze=0}se!==null?(je=se.x,tt=se.y,lt=se.z):(je=0,tt=0,lt=0);const nt=Re.convert(X.format),He=Re.convert(X.type);let it;X.isData3DTexture?(ye.setTexture3D(X,0),it=D.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ye.setTexture2DArray(X,0),it=D.TEXTURE_2D_ARRAY):(ye.setTexture2D(X,0),it=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,X.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,X.unpackAlignment);const Qe=D.getParameter(D.UNPACK_ROW_LENGTH),mt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=D.getParameter(D.UNPACK_SKIP_PIXELS),bt=D.getParameter(D.UNPACK_SKIP_ROWS),Sn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);const $e=A.isDataArrayTexture||A.isData3DTexture,It=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Tt=ue.get(A),dt=ue.get(X),At=ue.get(Tt.__renderTarget),Un=ue.get(dt.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,At.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Kt=0;Kt<Ne;Kt++)$e&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ue.get(A).__webglTexture,N,ze+Kt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ue.get(X).__webglTexture,Te,lt+Kt)),D.blitFramebuffer(We,Xe,Le,ke,je,tt,Le,ke,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||A.isRenderTargetTexture||ue.has(A)){const Tt=ue.get(A),dt=ue.get(X);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Ki),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cs);for(let At=0;At<Ne;At++)$e?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,N,ze+At):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tt.__webglTexture,N),It?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dt.__webglTexture,Te,lt+At):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dt.__webglTexture,Te),N!==0?D.blitFramebuffer(We,Xe,Le,ke,je,tt,Le,ke,D.COLOR_BUFFER_BIT,D.NEAREST):It?D.copyTexSubImage3D(it,Te,je,tt,lt+At,We,Xe,Le,ke):D.copyTexSubImage2D(it,Te,je,tt,We,Xe,Le,ke);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(it,Te,je,tt,lt,Le,ke,Ne,nt,He,rt.data):X.isCompressedArrayTexture?D.compressedTexSubImage3D(it,Te,je,tt,lt,Le,ke,Ne,nt,rt.data):D.texSubImage3D(it,Te,je,tt,lt,Le,ke,Ne,nt,He,rt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Te,je,tt,Le,ke,nt,He,rt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Te,je,tt,rt.width,rt.height,nt,rt.data):D.texSubImage2D(D.TEXTURE_2D,Te,je,tt,Le,ke,nt,He,rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),D.pixelStorei(D.UNPACK_SKIP_ROWS,bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Sn),Te===0&&X.generateMipmaps&&D.generateMipmap(it),Me.unbindTexture()},this.initRenderTarget=function(A){ue.get(A).__webglFramebuffer===void 0&&ye.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ye.setTextureCube(A,0):A.isData3DTexture?ye.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ye.setTexture2DArray(A,0):ye.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){w=0,T=0,P=null,Me.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Wg=/^[og]\s*(.+)?/,Xg=/^mtllib /,Yg=/^usemtl /,qg=/^usemap /,hc=/\s+/,fc=new K,xa=new K,dc=new K,pc=new K,Jt=new K,ss=new Ze;function jg(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const r=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,i){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:n||"",mtllib:Array.isArray(i)&&i.length>0?i[i.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){const i=this.currentMaterial();if(i&&i.groupEnd===-1&&(i.groupEnd=this.geometry.vertices.length/3,i.groupCount=i.groupEnd-i.groupStart,i.inherited=!1),n&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),i}},r&&r.name&&typeof r.clone=="function"){const n=r.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/3)*3},parseNormalIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/3)*3},parseUVIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/2)*2},addVertex:function(e,t,r){const n=this.vertices,i=this.object.geometry.vertices;i.push(n[e+0],n[e+1],n[e+2]),i.push(n[t+0],n[t+1],n[t+2]),i.push(n[r+0],n[r+1],n[r+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,r){const n=this.normals,i=this.object.geometry.normals;i.push(n[e+0],n[e+1],n[e+2]),i.push(n[t+0],n[t+1],n[t+2]),i.push(n[r+0],n[r+1],n[r+2])},addFaceNormal:function(e,t,r){const n=this.vertices,i=this.object.geometry.normals;fc.fromArray(n,e),xa.fromArray(n,t),dc.fromArray(n,r),Jt.subVectors(dc,xa),pc.subVectors(fc,xa),Jt.cross(pc),Jt.normalize(),i.push(Jt.x,Jt.y,Jt.z),i.push(Jt.x,Jt.y,Jt.z),i.push(Jt.x,Jt.y,Jt.z)},addColor:function(e,t,r){const n=this.colors,i=this.object.geometry.colors;n[e]!==void 0&&i.push(n[e+0],n[e+1],n[e+2]),n[t]!==void 0&&i.push(n[t+0],n[t+1],n[t+2]),n[r]!==void 0&&i.push(n[r+0],n[r+1],n[r+2])},addUV:function(e,t,r){const n=this.uvs,i=this.object.geometry.uvs;i.push(n[e+0],n[e+1]),i.push(n[t+0],n[t+1]),i.push(n[r+0],n[r+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,r,n,i,a,o,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),d=this.parseVertexIndex(r,u);if(this.addVertex(h,f,d),this.addColor(h,f,d),o!==void 0&&o!==""){const g=this.normals.length;h=this.parseNormalIndex(o,g),f=this.parseNormalIndex(c,g),d=this.parseNormalIndex(l,g),this.addNormal(h,f,d)}else this.addFaceNormal(h,f,d);if(n!==void 0&&n!==""){const g=this.uvs.length;h=this.parseUVIndex(n,g),f=this.parseUVIndex(i,g),d=this.parseUVIndex(a,g),this.addUV(h,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let r=0,n=e.length;r<n;r++){const i=this.parseVertexIndex(e[r],t);this.addVertexPoint(i),this.addColor(i)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const r=this.vertices.length,n=this.uvs.length;for(let i=0,a=e.length;i<a;i++)this.addVertexLine(this.parseVertexIndex(e[i],r));for(let i=0,a=t.length;i<a;i++)this.addUVLine(this.parseUVIndex(t[i],n))}};return s.startObject("",!1),s}class Kg extends No{constructor(e){super(e),this.materials=null}load(e,t,r,n){const i=this,a=new Qh(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(i.parse(o))}catch(c){n?n(c):console.error(c),i.manager.itemError(e)}},r,n)}setMaterials(e){return this.materials=e,this}parse(e){const t=new jg;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const r=e.split(`
`);let n=[];for(let o=0,c=r.length;o<c;o++){const l=r[o].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(hc);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(ss.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),Ht),t.colors.push(ss.r,ss.g,ss.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=l.slice(1).trim().split(hc),d=[];for(let _=0,m=f.length;_<m;_++){const p=f[_];if(p.length>0){const y=p.split("/");d.push(y)}}const g=d[0];for(let _=1,m=d.length-1;_<m;_++){const p=d[_],y=d[_+1];t.addFace(g[0],p[0],y[0],g[1],p[1],y[1],g[2],p[2],y[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let f=[];const d=[];if(l.indexOf("/")===-1)f=h;else for(let g=0,_=h.length;g<_;g++){const m=h[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&d.push(m[1])}t.addLineGeometry(f,d)}else if(u==="p"){const f=l.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((n=Wg.exec(l))!==null){const h=(" "+n[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Yg.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Xg.test(l))t.materialLibraries.push(l.substring(7).trim());else if(qg.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(n=l.split(" "),n.length>1){const f=n[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const i=new oi;if(i.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],u=l.geometry,h=l.materials,f=u.type==="Line",d=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const _=new Wt;_.setAttribute("position",new yt(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new yt(u.normals,3)),u.colors.length>0&&(g=!0,_.setAttribute("color",new yt(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new yt(u.uvs,2));const m=[];for(let y=0,E=h.length;y<E;y++){const x=h[y],R=x.name+"_"+x.smooth+"_"+g;let w=t.materials[R];if(this.materials!==null){if(w=this.materials.create(x.name),f&&w&&!(w instanceof ps)){const T=new ps;vn.prototype.copy.call(T,w),T.color.copy(w.color),w=T}else if(d&&w&&!(w instanceof ur)){const T=new ur({size:10,sizeAttenuation:!1});vn.prototype.copy.call(T,w),T.color.copy(w.color),T.map=w.map,w=T}}w===void 0&&(f?w=new ps:d?w=new ur({size:1,sizeAttenuation:!1}):w=new jh,w.name=x.name,w.flatShading=!x.smooth,w.vertexColors=g,t.materials[R]=w),m.push(w)}let p;if(m.length>1){for(let y=0,E=h.length;y<E;y++){const x=h[y];_.addGroup(x.groupStart,x.groupCount,y)}f?p=new Dl(_,m):d?p=new ha(_,m):p=new Ut(_,m)}else f?p=new Dl(_,m[0]):d?p=new ha(_,m[0]):p=new Ut(_,m[0]);p.name=l.name,i.add(p)}else if(t.vertices.length>0){const o=new ur({size:1,sizeAttenuation:!1}),c=new Wt;c.setAttribute("position",new yt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new yt(t.colors,3)),o.vertexColors=!0);const l=new ha(c,o);i.add(l)}return i}}const mc={type:"change"},Bo={type:"start"},fu={type:"end"},as=new Tr,gc=new Vn,Zg=Math.cos(70*gh.DEG2RAD),vt=new K,Bt=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sa=1e-6;class Jg extends af{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new ui,this._lastTargetPosition=new K,this._quat=new ui().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kl,this._sphericalDelta=new kl,this._scale=1,this._panOffset=new K,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new K,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$g.bind(this),this._onPointerDown=Qg.bind(this),this._onPointerUp=e_.bind(this),this._onContextMenu=o_.bind(this),this._onMouseWheel=i_.bind(this),this._onKeyDown=r_.bind(this),this._onTouchStart=s_.bind(this),this._onTouchMove=a_.bind(this),this._onMouseDown=t_.bind(this),this._onMouseMove=n_.bind(this),this._interceptControlDown=l_.bind(this),this._interceptControlUp=c_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mc),this.update(),this.state=at.NONE}update(e=null){const t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(r)&&isFinite(n)&&(r<-Math.PI?r+=Bt:r>Math.PI&&(r-=Bt),n<-Math.PI?n+=Bt:n>Math.PI&&(n-=Bt),r<=n?this._spherical.theta=Math.max(r,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+n)/2?Math.max(r,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=a!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=vt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),i=!!c}else if(this.object.isOrthographicCamera){const o=new K(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=c!==this.object.zoom;const l=new K(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(as.origin.copy(this.object.position),as.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(as.direction))<Zg?this.object.lookAt(this.target):(gc.setFromNormalAndCoplanarPoint(this.object.up,this.target),as.intersectPlane(gc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Sa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sa||this._lastTargetPosition.distanceToSquared(this.target)>Sa?(this.dispatchEvent(mc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;vt.copy(n).sub(this.target);let i=vt.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/r.clientHeight,this.object.matrix),this._panUp(2*t*i/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),n=e-r.left,i=t-r.top,a=r.width,o=r.height;this._mouse.x=n/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(r,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(r,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,n=e.pageY-t.y,i=Math.sqrt(r*r+n*n);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),n=.5*(e.pageX+r.x),i=.5*(e.pageY+r.y);this._rotateEnd.set(n,i)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(r,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,n=e.pageY-t.y,i=Math.sqrt(r*r+n*n);this._dollyEnd.set(0,i),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function Qg(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function $g(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function e_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fu),this.state=at.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function t_(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=at.DOLLY;break;case Fi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=at.ROTATE}break;case Fi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Bo)}function n_(s){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function i_(s){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(s.preventDefault(),this.dispatchEvent(Bo),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(fu))}function r_(s){this.enabled!==!1&&this._handleKeyDown(s)}function s_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=at.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=at.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Bo)}function a_(s){switch(this._trackPointer(s),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=at.NONE}}function o_(s){this.enabled!==!1&&s.preventDefault()}function l_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function c_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function u_(){var s=Object.create(null);function e(n,i){var a=n.id,o=n.name,c=n.dependencies;c===void 0&&(c=[]);var l=n.init;l===void 0&&(l=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[a])try{c=c.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),l=r("<"+o+">.init",l),u&&(u=r("<"+o+">.getTransferables",u));var h=null;typeof l=="function"?h=l.apply(void 0,c):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:h,getTransferables:u},i(h)}catch(f){f&&f.noLog||console.error(f),i(f)}}function t(n,i){var a,o=n.id,c=n.args;(!s[o]||typeof s[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var l=(a=s[o]).value.apply(a,c);l&&typeof l.then=="function"?l.then(u,function(h){return i(h instanceof Error?h:new Error(""+h))}):u(l)}catch(h){i(h)}function u(h){try{var f=s[o].getTransferables&&s[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),i(h,f)}catch(d){console.error(d),i(d)}}}function r(n,i){var a=void 0;self.troikaDefine=function(c){return a=c};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(c){console.error(c)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var i=n.data,a=i.messageId,o=i.action,c=i.data;try{o==="registerModule"&&e(c,function(l){l instanceof Error?postMessage({messageId:a,success:!1,error:l.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof l=="function"}})}),o==="callModule"&&t(c,function(l,u){l instanceof Error?postMessage({messageId:a,success:!1,error:l.message}):postMessage({messageId:a,success:!0,result:l},u||void 0)})}catch(l){postMessage({messageId:a,success:!1,error:l.stack})}})}function h_(s){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,r=s.init;t=Array.isArray(t)?t.map(function(i){return i&&(i=i.onMainThread||i,i._getInitResult&&(i=i._getInitResult())),i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var du=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return du=function(){return s},s},f_=0,d_=0,Ma=!1,dr=Object.create(null),pr=Object.create(null),vo=Object.create(null);function Xi(s){if((!s||typeof s.init!="function")&&!Ma)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,r=s.getTransferables,n=s.workerId,i=h_(s);n==null&&(n="#default");var a="workerModule"+ ++f_,o=s.name||a,c=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Ma=!0,u=Xi({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+gs(u)+`
)}`}),Ma=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function l(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!du())return i.apply(void 0,u);if(!c){c=_c(n,"registerModule",l.workerModuleData);var f=function(){c=null,pr[n].delete(f)};(pr[n]||(pr[n]=new Set)).add(f)}return c.then(function(d){var g=d.isCallable;if(g)return _c(n,"callModule",{id:a,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:gs(t),getTransferables:r&&gs(r)},l.onMainThread=i,l}function p_(s){pr[s]&&pr[s].forEach(function(e){e()}),dr[s]&&(dr[s].terminate(),delete dr[s])}function gs(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function m_(s){var e=dr[s];if(!e){var t=gs(u_);e=dr[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,a=vo[i];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete vo[i],a(n)}}return e}function _c(s,e,t){return new Promise(function(r,n){var i=++d_;vo[i]=function(a){a.success?r(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},m_(s).postMessage({messageId:i,action:e,data:t})})}function pu(){var s=(function(e){function t(q,Y,L,H,ee,te,Z,z){var k=1-Z;z.x=k*k*q+2*k*Z*L+Z*Z*ee,z.y=k*k*Y+2*k*Z*H+Z*Z*te}function r(q,Y,L,H,ee,te,Z,z,k,J){var pe=1-k;J.x=pe*pe*pe*q+3*pe*pe*k*L+3*pe*k*k*ee+k*k*k*Z,J.y=pe*pe*pe*Y+3*pe*pe*k*H+3*pe*k*k*te+k*k*k*z}function n(q,Y){for(var L=/([MLQCZ])([^MLQCZ]*)/g,H,ee,te,Z,z;H=L.exec(q);){var k=H[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(J){return parseFloat(J)});switch(H[1]){case"M":Z=ee=k[0],z=te=k[1];break;case"L":(k[0]!==Z||k[1]!==z)&&Y("L",Z,z,Z=k[0],z=k[1]);break;case"Q":{Y("Q",Z,z,Z=k[2],z=k[3],k[0],k[1]);break}case"C":{Y("C",Z,z,Z=k[4],z=k[5],k[0],k[1],k[2],k[3]);break}case"Z":(Z!==ee||z!==te)&&Y("L",Z,z,ee,te);break}}}function i(q,Y,L){L===void 0&&(L=16);var H={x:0,y:0};n(q,function(ee,te,Z,z,k,J,pe,me,de){switch(ee){case"L":Y(te,Z,z,k);break;case"Q":{for(var ge=te,D=Z,Fe=1;Fe<L;Fe++)t(te,Z,J,pe,z,k,Fe/(L-1),H),Y(ge,D,H.x,H.y),ge=H.x,D=H.y;break}case"C":{for(var Ae=te,be=Z,Me=1;Me<L;Me++)r(te,Z,J,pe,me,de,z,k,Me/(L-1),H),Y(Ae,be,H.x,H.y),Ae=H.x,be=H.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",c=new WeakMap,l={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(q,Y){var L=q.getContext?q.getContext("webgl",l):q,H=c.get(L);if(!H){let Ae=function(oe){var De=te[oe];if(!De&&(De=te[oe]=L.getExtension(oe),!De))throw new Error(oe+" not supported");return De},be=function(oe,De){var b=L.createShader(De);return L.shaderSource(b,oe),L.compileShader(b),b},Me=function(oe,De,b,v){if(!Z[oe]){var O={},ne={},$=L.createProgram();L.attachShader($,be(De,L.VERTEX_SHADER)),L.attachShader($,be(b,L.FRAGMENT_SHADER)),L.linkProgram($),Z[oe]={program:$,transaction:function(Se){L.useProgram($),Se({setUniform:function(we,Ce){for(var le=[],fe=arguments.length-2;fe-- >0;)le[fe]=arguments[fe+2];var ve=ne[Ce]||(ne[Ce]=L.getUniformLocation($,Ce));L["uniform"+we].apply(L,[ve].concat(le))},setAttribute:function(we,Ce,le,fe,ve){var Re=O[we];Re||(Re=O[we]={buf:L.createBuffer(),loc:L.getAttribLocation($,we),data:null}),L.bindBuffer(L.ARRAY_BUFFER,Re.buf),L.vertexAttribPointer(Re.loc,Ce,L.FLOAT,!1,0,0),L.enableVertexAttribArray(Re.loc),ee?L.vertexAttribDivisor(Re.loc,fe):Ae("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Re.loc,fe),ve!==Re.data&&(L.bufferData(L.ARRAY_BUFFER,ve,le),Re.data=ve)}})}}}Z[oe].transaction(v)},xe=function(oe,De){k++;try{L.activeTexture(L.TEXTURE0+k);var b=z[oe];b||(b=z[oe]=L.createTexture(),L.bindTexture(L.TEXTURE_2D,b),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.NEAREST)),L.bindTexture(L.TEXTURE_2D,b),De(b,k)}finally{k--}},ue=function(oe,De,b){var v=L.createFramebuffer();J.push(v),L.bindFramebuffer(L.FRAMEBUFFER,v),L.activeTexture(L.TEXTURE0+De),L.bindTexture(L.TEXTURE_2D,oe),L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,oe,0);try{b(v)}finally{L.deleteFramebuffer(v),L.bindFramebuffer(L.FRAMEBUFFER,J[--J.length-1]||null)}},ye=function(){te={},Z={},z={},k=-1,J.length=0};var pe=Ae,me=be,de=Me,ge=xe,D=ue,Fe=ye,ee=typeof WebGL2RenderingContext<"u"&&L instanceof WebGL2RenderingContext,te={},Z={},z={},k=-1,J=[];L.canvas.addEventListener("webglcontextlost",function(oe){ye(),oe.preventDefault()},!1),c.set(L,H={gl:L,isWebGL2:ee,getExtension:Ae,withProgram:Me,withTexture:xe,withTextureFramebuffer:ue,handleContextLoss:ye})}Y(H)}function h(q,Y,L,H,ee,te,Z,z){Z===void 0&&(Z=15),z===void 0&&(z=null),u(q,function(k){var J=k.gl,pe=k.withProgram,me=k.withTexture;me("copy",function(de,ge){J.texImage2D(J.TEXTURE_2D,0,J.RGBA,ee,te,0,J.RGBA,J.UNSIGNED_BYTE,Y),pe("copy",a,o,function(D){var Fe=D.setUniform,Ae=D.setAttribute;Ae("aUV",2,J.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Fe("1i","image",ge),J.bindFramebuffer(J.FRAMEBUFFER,z||null),J.disable(J.BLEND),J.colorMask(Z&8,Z&4,Z&2,Z&1),J.viewport(L,H,ee,te),J.scissor(L,H,ee,te),J.drawArrays(J.TRIANGLES,0,3)})})})}function f(q,Y,L){var H=q.width,ee=q.height;u(q,function(te){var Z=te.gl,z=new Uint8Array(H*ee*4);Z.readPixels(0,0,H,ee,Z.RGBA,Z.UNSIGNED_BYTE,z),q.width=Y,q.height=L,h(Z,z,0,0,H,ee)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(q,Y,L,H,ee,te){te===void 0&&(te=1);var Z=new Uint8Array(q*Y),z=H[2]-H[0],k=H[3]-H[1],J=[];i(L,function(Ae,be,Me,xe){J.push({x1:Ae,y1:be,x2:Me,y2:xe,minX:Math.min(Ae,Me),minY:Math.min(be,xe),maxX:Math.max(Ae,Me),maxY:Math.max(be,xe)})}),J.sort(function(Ae,be){return Ae.maxX-be.maxX});for(var pe=0;pe<q;pe++)for(var me=0;me<Y;me++){var de=D(H[0]+z*(pe+.5)/q,H[1]+k*(me+.5)/Y),ge=Math.pow(1-Math.abs(de)/ee,te)/2;de<0&&(ge=1-ge),ge=Math.max(0,Math.min(255,Math.round(ge*255))),Z[me*q+pe]=ge}return Z;function D(Ae,be){for(var Me=1/0,xe=1/0,ue=J.length;ue--;){var ye=J[ue];if(ye.maxX+xe<=Ae)break;if(Ae+xe>ye.minX&&be-xe<ye.maxY&&be+xe>ye.minY){var oe=p(Ae,be,ye.x1,ye.y1,ye.x2,ye.y2);oe<Me&&(Me=oe,xe=Math.sqrt(Me))}}return Fe(Ae,be)&&(xe=-xe),xe}function Fe(Ae,be){for(var Me=0,xe=J.length;xe--;){var ue=J[xe];if(ue.maxX<=Ae)break;var ye=ue.y1>be!=ue.y2>be&&Ae<(ue.x2-ue.x1)*(be-ue.y1)/(ue.y2-ue.y1)+ue.x1;ye&&(Me+=ue.y1<ue.y2?1:-1)}return Me!==0}}function _(q,Y,L,H,ee,te,Z,z,k,J){te===void 0&&(te=1),z===void 0&&(z=0),k===void 0&&(k=0),J===void 0&&(J=0),m(q,Y,L,H,ee,te,Z,null,z,k,J)}function m(q,Y,L,H,ee,te,Z,z,k,J,pe){te===void 0&&(te=1),k===void 0&&(k=0),J===void 0&&(J=0),pe===void 0&&(pe=0);for(var me=g(q,Y,L,H,ee,te),de=new Uint8Array(me.length*4),ge=0;ge<me.length;ge++)de[ge*4+pe]=me[ge];h(Z,de,k,J,q,Y,1<<3-pe,z)}function p(q,Y,L,H,ee,te){var Z=ee-L,z=te-H,k=Z*Z+z*z,J=k?Math.max(0,Math.min(1,((q-L)*Z+(Y-H)*z)/k)):0,pe=q-(L+J*Z),me=Y-(H+J*z);return pe*pe+me*me}var y=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:m}),E="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",R="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),T=null,P=!1,M={},S=new WeakMap;function U(q){if(!P&&!V(q))throw new Error("WebGL generation not supported")}function C(q,Y,L,H,ee,te,Z){if(te===void 0&&(te=1),Z===void 0&&(Z=null),!Z&&(Z=T,!Z)){var z=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!z)throw new Error("OffscreenCanvas or DOM canvas not supported");Z=T=z.getContext("webgl",{depth:!1})}U(Z);var k=new Uint8Array(q*Y*4);u(Z,function(de){var ge=de.gl,D=de.withTexture,Fe=de.withTextureFramebuffer;D("readable",function(Ae,be){ge.texImage2D(ge.TEXTURE_2D,0,ge.RGBA,q,Y,0,ge.RGBA,ge.UNSIGNED_BYTE,null),Fe(Ae,be,function(Me){F(q,Y,L,H,ee,te,ge,Me,0,0,0),ge.readPixels(0,0,q,Y,ge.RGBA,ge.UNSIGNED_BYTE,k)})})});for(var J=new Uint8Array(q*Y),pe=0,me=0;pe<k.length;pe+=4)J[me++]=k[pe];return J}function I(q,Y,L,H,ee,te,Z,z,k,J){te===void 0&&(te=1),z===void 0&&(z=0),k===void 0&&(k=0),J===void 0&&(J=0),F(q,Y,L,H,ee,te,Z,null,z,k,J)}function F(q,Y,L,H,ee,te,Z,z,k,J,pe){te===void 0&&(te=1),k===void 0&&(k=0),J===void 0&&(J=0),pe===void 0&&(pe=0),U(Z);var me=[];i(L,function(de,ge,D,Fe){me.push(de,ge,D,Fe)}),me=new Float32Array(me),u(Z,function(de){var ge=de.gl,D=de.isWebGL2,Fe=de.getExtension,Ae=de.withProgram,be=de.withTexture,Me=de.withTextureFramebuffer,xe=de.handleContextLoss;if(be("rawDistances",function(ue,ye){(q!==ue._lastWidth||Y!==ue._lastHeight)&&ge.texImage2D(ge.TEXTURE_2D,0,ge.RGBA,ue._lastWidth=q,ue._lastHeight=Y,0,ge.RGBA,ge.UNSIGNED_BYTE,null),Ae("main",E,x,function(oe){var De=oe.setAttribute,b=oe.setUniform,v=!D&&Fe("ANGLE_instanced_arrays"),O=!D&&Fe("EXT_blend_minmax");De("aUV",2,ge.STATIC_DRAW,0,w),De("aLineSegment",4,ge.DYNAMIC_DRAW,1,me),b.apply(void 0,["4f","uGlyphBounds"].concat(H)),b("1f","uMaxDistance",ee),b("1f","uExponent",te),Me(ue,ye,function(ne){ge.enable(ge.BLEND),ge.colorMask(!0,!0,!0,!0),ge.viewport(0,0,q,Y),ge.scissor(0,0,q,Y),ge.blendFunc(ge.ONE,ge.ONE),ge.blendEquationSeparate(ge.FUNC_ADD,D?ge.MAX:O.MAX_EXT),ge.clear(ge.COLOR_BUFFER_BIT),D?ge.drawArraysInstanced(ge.TRIANGLES,0,3,me.length/4):v.drawArraysInstancedANGLE(ge.TRIANGLES,0,3,me.length/4)})}),Ae("post",a,R,function(oe){oe.setAttribute("aUV",2,ge.STATIC_DRAW,0,w),oe.setUniform("1i","tex",ye),ge.bindFramebuffer(ge.FRAMEBUFFER,z),ge.disable(ge.BLEND),ge.colorMask(pe===0,pe===1,pe===2,pe===3),ge.viewport(k,J,q,Y),ge.scissor(k,J,q,Y),ge.drawArrays(ge.TRIANGLES,0,3)})}),ge.isContextLost())throw xe(),new Error("webgl context lost")})}function V(q){var Y=!q||q===T?M:q.canvas||q,L=S.get(Y);if(L===void 0){P=!0;var H=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],te=C(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,q);L=te&&ee.length===te.length&&te.every(function(Z,z){return Z===ee[z]}),L||(H="bad trial run results",console.info(ee,te))}catch(Z){L=!1,H=Z.message}H&&console.warn("WebGL SDF generation not supported:",H),P=!1,S.set(Y,L)}return L}var G=Object.freeze({__proto__:null,generate:C,generateIntoCanvas:I,generateIntoFramebuffer:F,isSupported:V});function Q(q,Y,L,H,ee,te){ee===void 0&&(ee=Math.max(H[2]-H[0],H[3]-H[1])/2),te===void 0&&(te=1);try{return C.apply(G,arguments)}catch(Z){return console.info("WebGL SDF generation failed, falling back to JS",Z),g.apply(y,arguments)}}function W(q,Y,L,H,ee,te,Z,z,k,J){ee===void 0&&(ee=Math.max(H[2]-H[0],H[3]-H[1])/2),te===void 0&&(te=1),z===void 0&&(z=0),k===void 0&&(k=0),J===void 0&&(J=0);try{return I.apply(G,arguments)}catch(pe){return console.info("WebGL SDF generation failed, falling back to JS",pe),_.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=Q,e.generateIntoCanvas=W,e.javascript=y,e.pathToLineSegments=i,e.webgl=G,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}function g_(){var s=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(xe,ue){r[xe]=1<<ue+1,n[r[xe]]=xe}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,a=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,c=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,l=r.S|r.WS|r.B|i|r.PDI|c,u=null;function h(){if(!u){u=new Map;var xe=function(ye){if(t.hasOwnProperty(ye)){var oe=0;t[ye].split(",").forEach(function(De){var b=De.split("+"),v=b[0],O=b[1];v=parseInt(v,36),O=O?parseInt(O,36):0,u.set(oe+=v,r[ye]);for(var ne=0;ne<O;ne++)u.set(++oe,r[ye])})}};for(var ue in t)xe(ue)}}function f(xe){return h(),u.get(xe.codePointAt(0))||r.L}function d(xe){return n[f(xe)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(xe,ue){var ye=36,oe=0,De=new Map,b=ue&&new Map,v;return xe.split(",").forEach(function O(ne){if(ne.indexOf("+")!==-1)for(var $=+ne;$--;)O(v);else{v=ne;var j=ne.split(">"),Se=j[0],he=j[1];Se=String.fromCodePoint(oe+=parseInt(Se,ye)),he=String.fromCodePoint(oe+=parseInt(he,ye)),De.set(Se,he),ue&&b.set(he,Se)}}),{map:De,reverseMap:b}}var m,p,y;function E(){if(!m){var xe=_(g.pairs,!0),ue=xe.map,ye=xe.reverseMap;m=ue,p=ye,y=_(g.canonical,!1).map}}function x(xe){return E(),m.get(xe)||null}function R(xe){return E(),p.get(xe)||null}function w(xe){return E(),y.get(xe)||null}var T=r.L,P=r.R,M=r.EN,S=r.ES,U=r.ET,C=r.AN,I=r.CS,F=r.B,V=r.S,G=r.ON,Q=r.BN,W=r.NSM,q=r.AL,Y=r.LRO,L=r.RLO,H=r.LRE,ee=r.RLE,te=r.PDF,Z=r.LRI,z=r.RLI,k=r.FSI,J=r.PDI;function pe(xe,ue){for(var ye=125,oe=new Uint32Array(xe.length),De=0;De<xe.length;De++)oe[De]=f(xe[De]);var b=new Map;function v(Ft,nn){var Nt=oe[Ft];oe[Ft]=nn,b.set(Nt,b.get(Nt)-1),Nt&o&&b.set(o,b.get(o)-1),b.set(nn,(b.get(nn)||0)+1),nn&o&&b.set(o,(b.get(o)||0)+1)}for(var O=new Uint8Array(xe.length),ne=new Map,$=[],j=null,Se=0;Se<xe.length;Se++)j||$.push(j={start:Se,end:xe.length-1,level:ue==="rtl"?1:ue==="ltr"?0:tl(Se,!1)}),oe[Se]&F&&(j.end=Se,j=null);for(var he=ee|H|L|Y|i|J|te|F,we=function(Ft){return Ft+(Ft&1?1:2)},Ce=function(Ft){return Ft+(Ft&1?2:1)},le=0;le<$.length;le++){j=$[le];var fe=[{_level:j.level,_override:0,_isolate:0}],ve=void 0,Re=0,Ee=0,Ge=0;b.clear();for(var B=j.start;B<=j.end;B++){var ae=oe[B];if(ve=fe[fe.length-1],b.set(ae,(b.get(ae)||0)+1),ae&o&&b.set(o,(b.get(o)||0)+1),ae&he)if(ae&(ee|H)){O[B]=ve._level;var _e=(ae===ee?Ce:we)(ve._level);_e<=ye&&!Re&&!Ee?fe.push({_level:_e,_override:0,_isolate:0}):Re||Ee++}else if(ae&(L|Y)){O[B]=ve._level;var Ie=(ae===L?Ce:we)(ve._level);Ie<=ye&&!Re&&!Ee?fe.push({_level:Ie,_override:ae&L?P:T,_isolate:0}):Re||Ee++}else if(ae&i){ae&k&&(ae=tl(B+1,!0)===1?z:Z),O[B]=ve._level,ve._override&&v(B,ve._override);var ce=(ae===z?Ce:we)(ve._level);ce<=ye&&Re===0&&Ee===0?(Ge++,fe.push({_level:ce,_override:0,_isolate:1,_isolInitIndex:B})):Re++}else if(ae&J){if(Re>0)Re--;else if(Ge>0){for(Ee=0;!fe[fe.length-1]._isolate;)fe.pop();var ie=fe[fe.length-1]._isolInitIndex;ie!=null&&(ne.set(ie,B),ne.set(B,ie)),fe.pop(),Ge--}ve=fe[fe.length-1],O[B]=ve._level,ve._override&&v(B,ve._override)}else ae&te?(Re===0&&(Ee>0?Ee--:!ve._isolate&&fe.length>1&&(fe.pop(),ve=fe[fe.length-1])),O[B]=ve._level):ae&F&&(O[B]=j.level);else O[B]=ve._level,ve._override&&ae!==Q&&v(B,ve._override)}for(var Pe=[],Oe=null,Be=j.start;Be<=j.end;Be++){var Ve=oe[Be];if(!(Ve&c)){var ct=O[Be],ot=Ve&i,ft=Ve===J;Oe&&ct===Oe._level?(Oe._end=Be,Oe._endsWithIsolInit=ot):Pe.push(Oe={_start:Be,_end:Be,_level:ct,_startsWithPDI:ft,_endsWithIsolInit:ot})}}for(var _t=[],Xt=0;Xt<Pe.length;Xt++){var Yt=Pe[Xt];if(!Yt._startsWithPDI||Yt._startsWithPDI&&!ne.has(Yt._start)){for(var en=[Oe=Yt],qt=void 0;Oe&&Oe._endsWithIsolInit&&(qt=ne.get(Oe._end))!=null;)for(var jt=Xt+1;jt<Pe.length;jt++)if(Pe[jt]._start===qt){en.push(Oe=Pe[jt]);break}for(var pt=[],fn=0;fn<en.length;fn++)for(var qi=en[fn],ji=qi._start;ji<=qi._end;ji++)pt.push(ji);for(var Rs=O[pt[0]],Cr=j.level,mi=pt[0]-1;mi>=0;mi--)if(!(oe[mi]&c)){Cr=O[mi];break}var Ki=pt[pt.length-1],Cs=O[Ki],A=j.level;if(!(oe[Ki]&i)){for(var X=Ki+1;X<=j.end;X++)if(!(oe[X]&c)){A=O[X];break}}_t.push({_seqIndices:pt,_sosType:Math.max(Cr,Rs)%2?P:T,_eosType:Math.max(A,Cs)%2?P:T})}}for(var re=0;re<_t.length;re++){var se=_t[re],N=se._seqIndices,Te=se._sosType,Le=se._eosType,ke=O[N[0]]&1?P:T;if(b.get(W))for(var Ne=0;Ne<N.length;Ne++){var We=N[Ne];if(oe[We]&W){for(var Xe=Te,ze=Ne-1;ze>=0;ze--)if(!(oe[N[ze]]&c)){Xe=oe[N[ze]];break}v(We,Xe&(i|J)?G:Xe)}}if(b.get(M))for(var je=0;je<N.length;je++){var tt=N[je];if(oe[tt]&M)for(var lt=je-1;lt>=-1;lt--){var rt=lt===-1?Te:oe[N[lt]];if(rt&a){rt===q&&v(tt,C);break}}}if(b.get(q))for(var nt=0;nt<N.length;nt++){var He=N[nt];oe[He]&q&&v(He,P)}if(b.get(S)||b.get(I))for(var it=1;it<N.length-1;it++){var Qe=N[it];if(oe[Qe]&(S|I)){for(var mt=0,dn=0,bt=it-1;bt>=0&&(mt=oe[N[bt]],!!(mt&c));bt--);for(var Sn=it+1;Sn<N.length&&(dn=oe[N[Sn]],!!(dn&c));Sn++);mt===dn&&(oe[Qe]===S?mt===M:mt&(M|C))&&v(Qe,mt)}}if(b.get(M))for(var $e=0;$e<N.length;$e++){var It=N[$e];if(oe[It]&M){for(var Tt=$e-1;Tt>=0&&oe[N[Tt]]&(U|c);Tt--)v(N[Tt],M);for($e++;$e<N.length&&oe[N[$e]]&(U|c|M);$e++)oe[N[$e]]!==M&&v(N[$e],M)}}if(b.get(U)||b.get(S)||b.get(I))for(var dt=0;dt<N.length;dt++){var At=N[dt];if(oe[At]&(U|S|I)){v(At,G);for(var Un=dt-1;Un>=0&&oe[N[Un]]&c;Un--)v(N[Un],G);for(var Kt=dt+1;Kt<N.length&&oe[N[Kt]]&c;Kt++)v(N[Kt],G)}}if(b.get(M))for(var Ps=0,Ho=Te;Ps<N.length;Ps++){var Wo=N[Ps],Ds=oe[Wo];Ds&M?Ho===T&&v(Wo,T):Ds&a&&(Ho=Ds)}if(b.get(o)){var Zi=P|M|C,Xo=Zi|T,Pr=[];{for(var gi=[],_i=0;_i<N.length;_i++)if(oe[N[_i]]&o){var Ji=xe[N[_i]],Yo=void 0;if(x(Ji)!==null)if(gi.length<63)gi.push({char:Ji,seqIndex:_i});else break;else if((Yo=R(Ji))!==null)for(var Qi=gi.length-1;Qi>=0;Qi--){var Us=gi[Qi].char;if(Us===Yo||Us===R(w(Ji))||x(w(Us))===Ji){Pr.push([gi[Qi].seqIndex,_i]),gi.length=Qi;break}}}Pr.sort(function(Ft,nn){return Ft[0]-nn[0]})}for(var Ls=0;Ls<Pr.length;Ls++){for(var qo=Pr[Ls],Dr=qo[0],Is=qo[1],jo=!1,tn=0,Fs=Dr+1;Fs<Is;Fs++){var Ko=N[Fs];if(oe[Ko]&Xo){jo=!0;var Zo=oe[Ko]&Zi?P:T;if(Zo===ke){tn=Zo;break}}}if(jo&&!tn){tn=Te;for(var Ns=Dr-1;Ns>=0;Ns--){var Jo=N[Ns];if(oe[Jo]&Xo){var Qo=oe[Jo]&Zi?P:T;Qo!==ke?tn=Qo:tn=ke;break}}}if(tn){if(oe[N[Dr]]=oe[N[Is]]=tn,tn!==ke){for(var $i=Dr+1;$i<N.length;$i++)if(!(oe[N[$i]]&c)){f(xe[N[$i]])&W&&(oe[N[$i]]=tn);break}}if(tn!==ke){for(var er=Is+1;er<N.length;er++)if(!(oe[N[er]]&c)){f(xe[N[er]])&W&&(oe[N[er]]=tn);break}}}}for(var Ln=0;Ln<N.length;Ln++)if(oe[N[Ln]]&o){for(var $o=Ln,Os=Ln,Bs=Te,tr=Ln-1;tr>=0;tr--)if(oe[N[tr]]&c)$o=tr;else{Bs=oe[N[tr]]&Zi?P:T;break}for(var el=Le,nr=Ln+1;nr<N.length;nr++)if(oe[N[nr]]&(o|c))Os=nr;else{el=oe[N[nr]]&Zi?P:T;break}for(var ks=$o;ks<=Os;ks++)oe[N[ks]]=Bs===el?Bs:ke;Ln=Os}}}for(var zt=j.start;zt<=j.end;zt++){var wu=O[zt],Ur=oe[zt];if(wu&1?Ur&(T|M|C)&&O[zt]++:Ur&P?O[zt]++:Ur&(C|M)&&(O[zt]+=2),Ur&c&&(O[zt]=zt===0?j.level:O[zt-1]),zt===j.end||f(xe[zt])&(V|F))for(var Lr=zt;Lr>=0&&f(xe[Lr])&l;Lr--)O[Lr]=j.level}}return{levels:O,paragraphs:$};function tl(Ft,nn){for(var Nt=Ft;Nt<xe.length;Nt++){var In=oe[Nt];if(In&(P|q))return 1;if(In&(F|T)||nn&&In===J)return 0;if(In&i){var nl=Ru(Nt);Nt=nl===-1?xe.length:nl}}return 0}function Ru(Ft){for(var nn=1,Nt=Ft+1;Nt<xe.length;Nt++){var In=oe[Nt];if(In&F)break;if(In&J){if(--nn===0)return Nt}else In&i&&nn++}return-1}}var me="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",de;function ge(){if(!de){var xe=_(me,!0),ue=xe.map,ye=xe.reverseMap;ye.forEach(function(oe,De){ue.set(De,oe)}),de=ue}}function D(xe){return ge(),de.get(xe)||null}function Fe(xe,ue,ye,oe){var De=xe.length;ye=Math.max(0,ye==null?0:+ye),oe=Math.min(De-1,oe==null?De-1:+oe);for(var b=new Map,v=ye;v<=oe;v++)if(ue[v]&1){var O=D(xe[v]);O!==null&&b.set(v,O)}return b}function Ae(xe,ue,ye,oe){var De=xe.length;ye=Math.max(0,ye==null?0:+ye),oe=Math.min(De-1,oe==null?De-1:+oe);var b=[];return ue.paragraphs.forEach(function(v){var O=Math.max(ye,v.start),ne=Math.min(oe,v.end);if(O<ne){for(var $=ue.levels.slice(O,ne+1),j=ne;j>=O&&f(xe[j])&l;j--)$[j]=v.level;for(var Se=v.level,he=1/0,we=0;we<$.length;we++){var Ce=$[we];Ce>Se&&(Se=Ce),Ce<he&&(he=Ce|1)}for(var le=Se;le>=he;le--)for(var fe=0;fe<$.length;fe++)if($[fe]>=le){for(var ve=fe;fe+1<$.length&&$[fe+1]>=le;)fe++;fe>ve&&b.push([ve+O,fe+O])}}}),b}function be(xe,ue,ye,oe){var De=Me(xe,ue,ye,oe),b=[].concat(xe);return De.forEach(function(v,O){b[O]=(ue.levels[v]&1?D(xe[v]):null)||xe[v]}),b.join("")}function Me(xe,ue,ye,oe){for(var De=Ae(xe,ue,ye,oe),b=[],v=0;v<xe.length;v++)b[v]=v;return De.forEach(function(O){for(var ne=O[0],$=O[1],j=b.slice(ne,$+1),Se=j.length;Se--;)b[$-Se]=j[Se]}),b}return e.closingToOpeningBracket=R,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=pe,e.getMirroredCharacter=D,e.getMirroredCharactersMap=Fe,e.getReorderSegments=Ae,e.getReorderedIndices=Me,e.getReorderedString=be,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}const mu=/\bvoid\s+main\s*\(\s*\)\s*{/g;function xo(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=Ke[n];return i?xo(i):r}return s.replace(e,t)}const wt=[];for(let s=0;s<256;s++)wt[s]=(s<16?"0":"")+s.toString(16);function __(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wt[s&255]+wt[s>>8&255]+wt[s>>16&255]+wt[s>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]).toUpperCase()}const ei=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},v_=Date.now(),vc=new WeakMap,xc=new Map;let x_=1e10;function So(s,e){const t=E_(e);let r=vc.get(s);if(r||vc.set(s,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(l,u){s.onBeforeCompile.call(this,l,u);const h=this.customProgramCacheKey()+"|"+l.vertexShader+"|"+l.fragmentShader;let f=xc[h];if(!f){const d=S_(this,l,e,t);f=xc[h]=d}l.vertexShader=f.vertexShader,l.fragmentShader=f.fragmentShader,ei(l.uniforms,this.uniforms),e.timeUniform&&(l.uniforms[e.timeUniform]={get value(){return Date.now()-v_}}),this[n]&&this[n](l)},a=function(){return o(e.chained?s:s.clone())},o=function(l){const u=Object.create(l,c);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:x_++}),u.uuid=__(),u.uniforms=ei({},l.uniforms,e.uniforms),u.defines=ei({},l.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=ei({},l.extensions,e.extensions),u._listeners=void 0,u},c={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:l=>{s.type=l}},isDerivedFrom:{writable:!0,configurable:!0,value:function(l){const u=this.baseMaterial;return l===u||u.isDerivedMaterial&&u.isDerivedFrom(l)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(l){this[n]=l}},copy:{writable:!0,configurable:!0,value:function(l){return s.copy.call(this,l),!s.isShaderMaterial&&!s.isDerivedMaterial&&(ei(this.extensions,l.extensions),ei(this.defines,l.defines),ei(this.uniforms,Zc.clone(l.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const l=new s.constructor;return o(l).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let l=this._depthMaterial;return l||(l=this._depthMaterial=So(s.isDerivedMaterial?s.getDepthMaterial():new nu({depthPacking:Vc}),e),l.defines.IS_DEPTH_MATERIAL="",l.uniforms=this.uniforms),l}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let l=this._distanceMaterial;return l||(l=this._distanceMaterial=So(s.isDerivedMaterial?s.getDistanceMaterial():new iu,e),l.defines.IS_DISTANCE_MATERIAL="",l.uniforms=this.uniforms),l}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:l,_distanceMaterial:u}=this;l&&l.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return r[t]=a,new a}function S_(s,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:c,fragmentDefs:l,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=r;if(i=i||"",a=a||"",o=o||"",l=l||"",u=u||"",h=h||"",(c||d)&&(e=xo(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=xo(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(f){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(_.push(m),"")),h=`${f}
${_.join(`
`)}
${h}`}if(g){const _=`
uniform float ${g};
`;i=_+i,l=_+l}return c&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${c}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,m,p,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,p))?m:`troika_${m}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Sc(e,n,i,a,o),t=Sc(t,n,l,u,h),{vertexShader:e,fragmentShader:t}}function Sc(s,e,t,r,n){return(r||n||t)&&(s=s.replace(mu,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),s}function M_(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let y_=0;const Mc=new Map;function E_(s){const e=JSON.stringify(s,M_);let t=Mc.get(e);return t==null&&Mc.set(e,t=++y_),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function b_(){return typeof window>"u"&&(self.window=self),(function(s){var e={parse:function(n){var i=e._bin,a=new Uint8Array(n);if(i.readASCII(a,0,4)=="ttcf"){var o=4;i.readUshort(a,o),o+=2,i.readUshort(a,o),o+=2;var c=i.readUint(a,o);o+=4;for(var l=[],u=0;u<c;u++){var h=i.readUint(a,o);o+=4,l.push(e._readFont(a,h))}return l}return[e._readFont(a,0)]},_readFont:function(n,i){var a=e._bin,o=i;a.readFixed(n,i),i+=4;var c=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2;for(var l=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<c;f++){var d=a.readASCII(n,i,4);i+=4,a.readUint(n,i),i+=4;var g=a.readUint(n,i);i+=4;var _=a.readUint(n,i);i+=4,h[d]={offset:g,length:_}}for(f=0;f<l.length;f++){var m=l[f];h[m]&&(u[m.trim()]=e[m.trim()].parse(n,h[m].offset,h[m].length,u))}return u},_tabOffset:function(n,i,a){for(var o=e._bin,c=o.readUshort(n,a+4),l=a+12,u=0;u<c;u++){var h=o.readASCII(n,l,4);l+=4,o.readUint(n,l),l+=4;var f=o.readUint(n,l);if(l+=4,o.readUint(n,l),l+=4,h==i)return f}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,a){for(var o=[],c=0;c<a;c++)o.push(e._bin.readUshort(n,i+2*c));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,a){for(var o="",c=0;c<a;c++)o+=String.fromCharCode(n[i+c]);return o},readUnicode:function(n,i,a){for(var o="",c=0;c<a;c++){var l=n[i++]<<8|n[i++];o+=String.fromCharCode(l)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,a){var o=e._bin._tdec;return o&&i==0&&a==n.length?o.decode(n):e._bin.readASCII(n,i,a)},readBytes:function(n,i,a){for(var o=[],c=0;c<a;c++)o.push(n[i+c]);return o},readASCIIArray:function(n,i,a){for(var o=[],c=0;c<a;c++)o.push(String.fromCharCode(n[i+c]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,a,o,c){var l=e._bin,u={},h=i;l.readFixed(n,i),i+=4;var f=l.readUshort(n,i);i+=2;var d=l.readUshort(n,i);i+=2;var g=l.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,c),u},e._lctf.readLookupList=function(n,i,a){var o=e._bin,c=i,l=[],u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,c+f,a);l.push(d)}return l},e._lctf.readLookupTable=function(n,i,a){var o=e._bin,c=i,l={tabs:[]};l.ltype=o.readUshort(n,i),i+=2,l.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var h=l.ltype,f=0;f<u;f++){var d=o.readUshort(n,i);i+=2;var g=a(n,h,c+d,l);l.tabs.push(g)}return l},e._lctf.numOfOnes=function(n){for(var i=0,a=0;a<32;a++)(n>>>a&1)!=0&&i++;return i},e._lctf.readClassDef=function(n,i){var a=e._bin,o=[],c=a.readUshort(n,i);if(i+=2,c==1){var l=a.readUshort(n,i);i+=2;var u=a.readUshort(n,i);i+=2;for(var h=0;h<u;h++)o.push(l+h),o.push(l+h),o.push(a.readUshort(n,i)),i+=2}if(c==2){var f=a.readUshort(n,i);for(i+=2,h=0;h<f;h++)o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var a=0;a<n.length;a+=3){var o=n[a],c=n[a+1];if(n[a+2],o<=i&&i<=c)return a}return-1},e._lctf.readCoverage=function(n,i){var a=e._bin,o={};o.fmt=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=a.readUshorts(n,i,c)),o.fmt==2&&(o.tab=a.readUshorts(n,i,3*c)),o},e._lctf.coverageIndex=function(n,i){var a=n.tab;if(n.fmt==1)return a.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(a,i);if(o!=-1)return a[o+2]+(i-a[o])}return-1},e._lctf.readFeatureList=function(n,i){var a=e._bin,o=i,c=[],l=a.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var h=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),c.push(d)}return c},e._lctf.readFeatureTable=function(n,i){var a=e._bin,o=i,c={},l=a.readUshort(n,i);i+=2,l>0&&(c.featureParams=o+l);var u=a.readUshort(n,i);i+=2,c.tab=[];for(var h=0;h<u;h++)c.tab.push(a.readUshort(n,i+2*h));return c},e._lctf.readScriptList=function(n,i){var a=e._bin,o=i,c={},l=a.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var h=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2,c[h.trim()]=e._lctf.readScriptTable(n,o+f)}return c},e._lctf.readScriptTable=function(n,i){var a=e._bin,o=i,c={},l=a.readUshort(n,i);i+=2,l>0&&(c.default=e._lctf.readLangSysTable(n,o+l));var u=a.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=a.readASCII(n,i,4);i+=4;var d=a.readUshort(n,i);i+=2,c[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return c},e._lctf.readLangSysTable=function(n,i){var a=e._bin,o={};a.readUshort(n,i),i+=2,o.reqFeature=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);return i+=2,o.features=a.readUshorts(n,i,c),o},e.CFF={},e.CFF.parse=function(n,i,a){var o=e._bin;(n=new Uint8Array(n.buffer,i,a))[i=0],n[++i],n[++i],n[++i],i++;var c=[];i=e.CFF.readIndex(n,i,c);for(var l=[],u=0;u<c.length-1;u++)l.push(o.readASCII(n,i+c[u],c[u+1]-c[u]));i+=c[c.length-1];var h=[];i=e.CFF.readIndex(n,i,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,i+h[u],i+h[u+1]));i+=h[h.length-1];var d=f[0],g=[];i=e.CFF.readIndex(n,i,g);var _=[];for(u=0;u<g.length-1;u++)_.push(o.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var m=[];for(u=0;u<g.length-1;u++)m.push(o.readBytes(n,i+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){i=d.FDArray;var p=[];for(i=e.CFF.readIndex(n,i,p),d.FDArray=[],u=0;u<p.length-1;u++){var y=e.CFF.readDict(n,i+p[u],i+p[u+1]);e.CFF._readFDict(n,y,_),d.FDArray.push(y)}i+=p[p.length-1],i=d.FDSelect,d.FDSelect=[];var E=n[i];if(i++,E!=3)throw E;var x=o.readUshort(n,i);for(i+=2,u=0;u<x+1;u++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,i,a){var o;for(var c in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(c)!=-1&&(i[c]=a[i[c]-426+35])},e.CFF.readSubrs=function(n,i,a){var o=e._bin,c=[];i=e.CFF.readIndex(n,i,c);var l,u=c.length;l=u<1240?107:u<33900?1131:32768,a.Bias=l,a.Subrs=[];for(var h=0;h<c.length-1;h++)a.Subrs.push(o.readBytes(n,i+c[h],c[h+1]-c[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==i)return a;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,a){e._bin;var o=[".notdef"],c=n[i];if(i++,c!=0)throw"error: unknown encoding format: "+c;var l=n[i];i++;for(var u=0;u<l;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,a){var o=e._bin,c=[".notdef"],l=n[i];if(i++,l==0)for(var u=0;u<a;u++){var h=o.readUshort(n,i);i+=2,c.push(h)}else{if(l!=1&&l!=2)throw"error: format: "+l;for(;c.length<a;){h=o.readUshort(n,i),i+=2;var f=0;for(l==1?(f=n[i],i++):(f=o.readUshort(n,i),i+=2),u=0;u<=f;u++)c.push(h),h++}}return c},e.CFF.readIndex=function(n,i,a){var o=e._bin,c=o.readUshort(n,i)+1,l=n[i+=2];if(i++,l==1)for(var u=0;u<c;u++)a.push(n[i+u]);else if(l==2)for(u=0;u<c;u++)a.push(o.readUshort(n,i+2*u));else if(l==3)for(u=0;u<c;u++)a.push(16777215&o.readUint(n,i+3*u-1));else if(c!=1)throw"unsupported offset size: "+l+", count: "+c;return(i+=c*l)-1},e.CFF.getCharString=function(n,i,a){var o=e._bin,c=n[i],l=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,h=null,f=null;c<=20&&(h=c,u=1),c==12&&(h=100*c+l,u=2),21<=c&&c<=27&&(h=c,u=1),c==28&&(f=o.readShort(n,i+1),u=3),29<=c&&c<=31&&(h=c,u=1),32<=c&&c<=246&&(f=c-139,u=1),247<=c&&c<=250&&(f=256*(c-247)+l+108,u=2),251<=c&&c<=254&&(f=256*-(c-251)-l-108,u=2),c==255&&(f=o.readInt(n,i+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(n,i,a){for(var o=i+a,c=e._bin,l=[];i<o;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=c.readShort(n,i+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=c.readInt(n,i+1)/65535,f=5),l.push(g??"o"+d),i+=f}return l},e.CFF.readDict=function(n,i,a){for(var o=e._bin,c={},l=[];i<a;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;if(u==28&&(g=o.readShort(n,i+1),f=3),u==29&&(g=o.readInt(n,i+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=o.readInt(n,i+1)/65535,f=5,"unknown number";if(u==30){var _=[];for(f=1;;){var m=n[i+f];f++;var p=m>>4,y=15&m;if(p!=15&&_.push(p),y!=15&&_.push(y),y==15)break}for(var E="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],R=0;R<_.length;R++)E+=x[_[R]];g=parseFloat(E)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(c[d]=l.length==1?l[0]:l,l=[]):l.push(g),i+=f}return c},e.cmap={},e.cmap.parse=function(n,i,a){n=new Uint8Array(n.buffer,i,a),i=0;var o=e._bin,c={};o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2;var u=[];c.tables=[];for(var h=0;h<l;h++){var f=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var _="p"+f+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=c.tables.length,u.push(g);var y=o.readUshort(n,g);y==0?p=e.cmap.parse0(n,g):y==4?p=e.cmap.parse4(n,g):y==6?p=e.cmap.parse6(n,g):y==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+y,f,d,g),c.tables.push(p)}if(c[_]!=null)throw"multiple tables for one platform+encoding";c[_]=m}return c},e.cmap.parse0=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,o.map=[];for(var l=0;l<c-6;l++)o.map.push(n[i+l]);return o},e.cmap.parse4=function(n,i){var a=e._bin,o=i,c={};c.format=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2;var u=a.readUshort(n,i);i+=2;var h=u/2;c.searchRange=a.readUshort(n,i),i+=2,c.entrySelector=a.readUshort(n,i),i+=2,c.rangeShift=a.readUshort(n,i),i+=2,c.endCount=a.readUshorts(n,i,h),i+=2*h,i+=2,c.startCount=a.readUshorts(n,i,h),i+=2*h,c.idDelta=[];for(var f=0;f<h;f++)c.idDelta.push(a.readShort(n,i)),i+=2;for(c.idRangeOffset=a.readUshorts(n,i,h),i+=2*h,c.glyphIdArray=[];i<o+l;)c.glyphIdArray.push(a.readUshort(n,i)),i+=2;return c},e.cmap.parse6=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,o.firstCode=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var l=0;l<c;l++)o.glyphIdArray.push(a.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,i+=2,a.readUint(n,i),i+=4,a.readUint(n,i),i+=4;var c=a.readUint(n,i);i+=4,o.groups=[];for(var l=0;l<c;l++){var u=i+12*l,h=a.readUint(n,u+0),f=a.readUint(n,u+4),d=a.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,i,a,o){for(var c=[],l=0;l<o.maxp.numGlyphs;l++)c.push(null);return c},e.glyf._parseGlyf=function(n,i){var a=e._bin,o=n._data,c=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var l={};if(l.noc=a.readShort(o,c),c+=2,l.xMin=a.readShort(o,c),c+=2,l.yMin=a.readShort(o,c),c+=2,l.xMax=a.readShort(o,c),c+=2,l.yMax=a.readShort(o,c),c+=2,l.xMin>=l.xMax||l.yMin>=l.yMax)return null;if(l.noc>0){l.endPts=[];for(var u=0;u<l.noc;u++)l.endPts.push(a.readUshort(o,c)),c+=2;var h=a.readUshort(o,c);if(c+=2,o.length-c<h)return null;l.instructions=a.readBytes(o,c,h),c+=h;var f=l.endPts[l.noc-1]+1;for(l.flags=[],u=0;u<f;u++){var d=o[c];if(c++,l.flags.push(d),(8&d)!=0){var g=o[c];c++;for(var _=0;_<g;_++)l.flags.push(d),u++}}for(l.xs=[],u=0;u<f;u++){var m=(2&l.flags[u])!=0,p=(16&l.flags[u])!=0;m?(l.xs.push(p?o[c]:-o[c]),c++):p?l.xs.push(0):(l.xs.push(a.readShort(o,c)),c+=2)}for(l.ys=[],u=0;u<f;u++)m=(4&l.flags[u])!=0,p=(32&l.flags[u])!=0,m?(l.ys.push(p?o[c]:-o[c]),c++):p?l.ys.push(0):(l.ys.push(a.readShort(o,c)),c+=2);var y=0,E=0;for(u=0;u<f;u++)y+=l.xs[u],E+=l.ys[u],l.xs[u]=y,l.ys[u]=E}else{var x;l.parts=[];do{x=a.readUshort(o,c),c+=2;var R={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(l.parts.push(R),R.glyphIndex=a.readUshort(o,c),c+=2,1&x){var w=a.readShort(o,c);c+=2;var T=a.readShort(o,c);c+=2}else w=a.readInt8(o,c),c++,T=a.readInt8(o,c),c++;2&x?(R.m.tx=w,R.m.ty=T):(R.p1=w,R.p2=T),8&x?(R.m.a=R.m.d=a.readF2dot14(o,c),c+=2):64&x?(R.m.a=a.readF2dot14(o,c),c+=2,R.m.d=a.readF2dot14(o,c),c+=2):128&x&&(R.m.a=a.readF2dot14(o,c),c+=2,R.m.b=a.readF2dot14(o,c),c+=2,R.m.c=a.readF2dot14(o,c),c+=2,R.m.d=a.readF2dot14(o,c),c+=2)}while(32&x);if(256&x){var P=a.readUshort(o,c);for(c+=2,l.instr=[],u=0;u<P;u++)l.instr.push(o[c]),c++}}return l},e.GDEF={},e.GDEF.parse=function(n,i,a,o){var c=i;i+=4;var l=e._bin.readUshort(n,i);return{glyphClassDef:l===0?null:e._lctf.readClassDef(n,c+l)}},e.GPOS={},e.GPOS.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,a,o){var c=e._bin,l=a,u={};if(u.fmt=c.readUshort(n,a),a+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var h=c.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,h+l)}if(i==1&&u.fmt==1){var f=c.readUshort(n,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,a,f))}else if(i==2&&u.fmt>=1&&u.fmt<=2){f=c.readUshort(n,a),a+=2;var d=c.readUshort(n,a);a+=2;var g=e._lctf.numOfOnes(f),_=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=c.readUshort(n,a);a+=2;for(var p=0;p<m;p++){var y=l+c.readUshort(n,a);a+=2;var E=c.readUshort(n,y);y+=2;for(var x=[],R=0;R<E;R++){var w=c.readUshort(n,y);y+=2,f!=0&&(C=e.GPOS.readValueRecord(n,y,f),y+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,y,d),y+=2*_),x.push({gid2:w,val1:C,val2:I})}u.pairsets.push(x)}}if(u.fmt==2){var T=c.readUshort(n,a);a+=2;var P=c.readUshort(n,a);a+=2;var M=c.readUshort(n,a);a+=2;var S=c.readUshort(n,a);for(a+=2,u.classDef1=e._lctf.readClassDef(n,l+T),u.classDef2=e._lctf.readClassDef(n,l+P),u.matrix=[],p=0;p<M;p++){var U=[];for(R=0;R<S;R++){var C=null,I=null;f!=0&&(C=e.GPOS.readValueRecord(n,a,f),a+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,a,d),a+=2*_),U.push({val1:C,val2:I})}u.matrix.push(U)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,c.readUshort(n,a)+l),u.baseCoverage=e._lctf.readCoverage(n,c.readUshort(n,a+2)+l),u.markClassCount=c.readUshort(n,a+4),u.markArray=e.GPOS.readMarkArray(n,c.readUshort(n,a+6)+l),u.baseArray=e.GPOS.readBaseArray(n,c.readUshort(n,a+8)+l,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,c.readUshort(n,a)+l),u.mark2Coverage=e._lctf.readCoverage(n,c.readUshort(n,a+2)+l),u.markClassCount=c.readUshort(n,a+4),u.mark1Array=e.GPOS.readMarkArray(n,c.readUshort(n,a+6)+l),u.mark2Array=e.GPOS.readBaseArray(n,c.readUshort(n,a+8)+l,u.markClassCount);else{if(i==9&&u.fmt==1){var F=c.readUshort(n,a);a+=2;var V=c.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=F;else if(o.ltype!=F)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,l+V)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,a){var o=e._bin,c=[];return c.push(1&a?o.readShort(n,i):0),i+=1&a?2:0,c.push(2&a?o.readShort(n,i):0),i+=2&a?2:0,c.push(4&a?o.readShort(n,i):0),i+=4&a?2:0,c.push(8&a?o.readShort(n,i):0),i+=8&a?2:0,c},e.GPOS.readBaseArray=function(n,i,a){var o=e._bin,c=[],l=i,u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,l+o.readUshort(n,i))),i+=2;c.push(f)}return c},e.GPOS.readMarkArray=function(n,i){var a=e._bin,o=[],c=i,l=a.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var h=e.GPOS.readAnchorRecord(n,a.readUshort(n,i+2)+c);h.markClass=a.readUshort(n,i),o.push(h),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var a=e._bin,o={};return o.fmt=a.readUshort(n,i),o.x=a.readShort(n,i+2),o.y=a.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,a,o){var c=e._bin,l=a,u={};if(u.fmt=c.readUshort(n,a),a+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var h=c.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,l+h)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=c.readShort(n,a),a+=2;else if(u.fmt==2){var f=c.readUshort(n,a);a+=2,u.newg=c.readUshorts(n,a,f),a+=2*u.newg.length}}else if(i==2&&u.fmt==1){f=c.readUshort(n,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var g=c.readUshort(n,a)+l;a+=2;var _=c.readUshort(n,g);u.seqs.push(c.readUshorts(n,g+2,_))}}else if(i==4)for(u.vals=[],f=c.readUshort(n,a),a+=2,d=0;d<f;d++){var m=c.readUshort(n,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(n,l+m))}else if(i==5&&u.fmt==2){if(u.fmt==2){var p=c.readUshort(n,a);a+=2,u.cDef=e._lctf.readClassDef(n,l+p),u.scset=[];var y=c.readUshort(n,a);for(a+=2,d=0;d<y;d++){var E=c.readUshort(n,a);a+=2,u.scset.push(E==0?null:e.GSUB.readSubClassSet(n,l+E))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=c.readUshort(n,a),a+=2;for(var x=[],R=0;R<f;R++)x.push(e._lctf.readCoverage(n,l+c.readUshort(n,a+2*R)));a+=2*f,d==0&&(u.backCvg=x),d==1&&(u.inptCvg=x),d==2&&(u.ahedCvg=x)}f=c.readUshort(n,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(i==7&&u.fmt==1){var w=c.readUshort(n,a);a+=2;var T=c.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,l+T)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var a=e._bin.readUshort,o=i,c=[],l=a(n,i);i+=2;for(var u=0;u<l;u++){var h=a(n,i);i+=2,c.push(e.GSUB.readSubClassRule(n,o+h))}return c},e.GSUB.readSubClassRule=function(n,i){var a=e._bin.readUshort,o={},c=a(n,i),l=a(n,i+=2);i+=2,o.input=[];for(var u=0;u<c-1;u++)o.input.push(a(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,l),o},e.GSUB.readSubstLookupRecords=function(n,i,a){for(var o=e._bin.readUshort,c=[],l=0;l<a;l++)c.push(o(n,i),o(n,i+2)),i+=4;return c},e.GSUB.readChainSubClassSet=function(n,i){var a=e._bin,o=i,c=[],l=a.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var h=a.readUshort(n,i);i+=2,c.push(e.GSUB.readChainSubClassRule(n,o+h))}return c},e.GSUB.readChainSubClassRule=function(n,i){for(var a=e._bin,o={},c=["backtrack","input","lookahead"],l=0;l<c.length;l++){var u=a.readUshort(n,i);i+=2,l==1&&u--,o[c[l]]=a.readUshorts(n,i,u),i+=2*o[c[l]].length}return u=a.readUshort(n,i),i+=2,o.subst=a.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var a=e._bin,o=i,c=[],l=a.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var h=a.readUshort(n,i);i+=2,c.push(e.GSUB.readLigature(n,o+h))}return c},e.GSUB.readLigature=function(n,i){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2;for(var l=0;l<c-1;l++)o.chain.push(a.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,a){var o=e._bin,c={};return o.readFixed(n,i),i+=4,c.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,c.flags=o.readUshort(n,i),i+=2,c.unitsPerEm=o.readUshort(n,i),i+=2,c.created=o.readUint64(n,i),i+=8,c.modified=o.readUint64(n,i),i+=8,c.xMin=o.readShort(n,i),i+=2,c.yMin=o.readShort(n,i),i+=2,c.xMax=o.readShort(n,i),i+=2,c.yMax=o.readShort(n,i),i+=2,c.macStyle=o.readUshort(n,i),i+=2,c.lowestRecPPEM=o.readUshort(n,i),i+=2,c.fontDirectionHint=o.readShort(n,i),i+=2,c.indexToLocFormat=o.readShort(n,i),i+=2,c.glyphDataFormat=o.readShort(n,i),i+=2,c},e.hhea={},e.hhea.parse=function(n,i,a){var o=e._bin,c={};return o.readFixed(n,i),i+=4,c.ascender=o.readShort(n,i),i+=2,c.descender=o.readShort(n,i),i+=2,c.lineGap=o.readShort(n,i),i+=2,c.advanceWidthMax=o.readUshort(n,i),i+=2,c.minLeftSideBearing=o.readShort(n,i),i+=2,c.minRightSideBearing=o.readShort(n,i),i+=2,c.xMaxExtent=o.readShort(n,i),i+=2,c.caretSlopeRise=o.readShort(n,i),i+=2,c.caretSlopeRun=o.readShort(n,i),i+=2,c.caretOffset=o.readShort(n,i),i+=2,i+=8,c.metricDataFormat=o.readShort(n,i),i+=2,c.numberOfHMetrics=o.readUshort(n,i),i+=2,c},e.hmtx={},e.hmtx.parse=function(n,i,a,o){for(var c=e._bin,l={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=c.readUshort(n,i),i+=2,h=c.readShort(n,i),i+=2),l.aWidth.push(u),l.lsBearing.push(h);return l},e.kern={},e.kern.parse=function(n,i,a,o){var c=e._bin,l=c.readUshort(n,i);if(i+=2,l==1)return e.kern.parseV1(n,i-2,a,o);var u=c.readUshort(n,i);i+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){i+=2,a=c.readUshort(n,i),i+=2;var d=c.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,h)}return h},e.kern.parseV1=function(n,i,a,o){var c=e._bin;c.readFixed(n,i),i+=4;var l=c.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},h=0;h<l;h++){c.readUint(n,i),i+=4;var f=c.readUshort(n,i);i+=2,c.readUshort(n,i),i+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,a){var o=e._bin,c=-1,l=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<l;u++){var h=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,h!=c&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(f),g.vals.push(d),c=h}return i},e.loca={},e.loca.parse=function(n,i,a,o){var c=e._bin,l=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)l.push(c.readUshort(n,i+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)l.push(c.readUint(n,i+(f<<2)));return l},e.maxp={},e.maxp.parse=function(n,i,a){var o=e._bin,c={},l=o.readUint(n,i);return i+=4,c.numGlyphs=o.readUshort(n,i),i+=2,l==65536&&(c.maxPoints=o.readUshort(n,i),i+=2,c.maxContours=o.readUshort(n,i),i+=2,c.maxCompositePoints=o.readUshort(n,i),i+=2,c.maxCompositeContours=o.readUshort(n,i),i+=2,c.maxZones=o.readUshort(n,i),i+=2,c.maxTwilightPoints=o.readUshort(n,i),i+=2,c.maxStorage=o.readUshort(n,i),i+=2,c.maxFunctionDefs=o.readUshort(n,i),i+=2,c.maxInstructionDefs=o.readUshort(n,i),i+=2,c.maxStackElements=o.readUshort(n,i),i+=2,c.maxSizeOfInstructions=o.readUshort(n,i),i+=2,c.maxComponentElements=o.readUshort(n,i),i+=2,c.maxComponentDepth=o.readUshort(n,i),i+=2),c},e.name={},e.name.parse=function(n,i,a){var o=e._bin,c={};o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=i+=2,d=0;d<l;d++){var g=o.readUshort(n,i);i+=2;var _=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var y=o.readUshort(n,i);i+=2;var E=o.readUshort(n,i);i+=2;var x,R=h[p],w=f+12*l+E;if(g==0)x=o.readUnicode(n,w,y/2);else if(g==3&&_==0)x=o.readUnicode(n,w,y/2);else if(_==0)x=o.readASCII(n,w,y);else if(_==1)x=o.readUnicode(n,w,y/2);else if(_==3)x=o.readUnicode(n,w,y/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;x=o.readASCII(n,w,y),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var T="p"+g+","+m.toString(16);c[T]==null&&(c[T]={}),c[T][R!==void 0?R:p]=x,c[T]._lang=m}for(var P in c)if(c[P].postScriptName!=null&&c[P]._lang==1033)return c[P];for(var P in c)if(c[P].postScriptName!=null&&c[P]._lang==0)return c[P];for(var P in c)if(c[P].postScriptName!=null&&c[P]._lang==3084)return c[P];for(var P in c)if(c[P].postScriptName!=null)return c[P];for(var P in c){u=P;break}return console.debug("returning name table with languageID "+c[u]._lang),c[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,a){var o=e._bin.readUshort(n,i);i+=2;var c={};if(o==0)e["OS/2"].version0(n,i,c);else if(o==1)e["OS/2"].version1(n,i,c);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,c);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,c)}return c},e["OS/2"].version0=function(n,i,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,i),i+=2,a.usWeightClass=o.readUshort(n,i),i+=2,a.usWidthClass=o.readUshort(n,i),i+=2,a.fsType=o.readUshort(n,i),i+=2,a.ySubscriptXSize=o.readShort(n,i),i+=2,a.ySubscriptYSize=o.readShort(n,i),i+=2,a.ySubscriptXOffset=o.readShort(n,i),i+=2,a.ySubscriptYOffset=o.readShort(n,i),i+=2,a.ySuperscriptXSize=o.readShort(n,i),i+=2,a.ySuperscriptYSize=o.readShort(n,i),i+=2,a.ySuperscriptXOffset=o.readShort(n,i),i+=2,a.ySuperscriptYOffset=o.readShort(n,i),i+=2,a.yStrikeoutSize=o.readShort(n,i),i+=2,a.yStrikeoutPosition=o.readShort(n,i),i+=2,a.sFamilyClass=o.readShort(n,i),i+=2,a.panose=o.readBytes(n,i,10),i+=10,a.ulUnicodeRange1=o.readUint(n,i),i+=4,a.ulUnicodeRange2=o.readUint(n,i),i+=4,a.ulUnicodeRange3=o.readUint(n,i),i+=4,a.ulUnicodeRange4=o.readUint(n,i),i+=4,a.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,a.fsSelection=o.readUshort(n,i),i+=2,a.usFirstCharIndex=o.readUshort(n,i),i+=2,a.usLastCharIndex=o.readUshort(n,i),i+=2,a.sTypoAscender=o.readShort(n,i),i+=2,a.sTypoDescender=o.readShort(n,i),i+=2,a.sTypoLineGap=o.readShort(n,i),i+=2,a.usWinAscent=o.readUshort(n,i),i+=2,a.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,a){var o=e._bin;return i=e["OS/2"].version0(n,i,a),a.ulCodePageRange1=o.readUint(n,i),i+=4,a.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,a){var o=e._bin;return i=e["OS/2"].version1(n,i,a),a.sxHeight=o.readShort(n,i),i+=2,a.sCapHeight=o.readShort(n,i),i+=2,a.usDefault=o.readUshort(n,i),i+=2,a.usBreak=o.readUshort(n,i),i+=2,a.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,a){var o=e._bin;return i=e["OS/2"].version2(n,i,a),a.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,a.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,a){var o=e._bin,c={};return c.version=o.readFixed(n,i),i+=4,c.italicAngle=o.readFixed(n,i),i+=4,c.underlinePosition=o.readShort(n,i),i+=2,c.underlineThickness=o.readShort(n,i),i+=2,c},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var c=a.tables[o];if(c.format==0)return i>=c.map.length?0:c.map[i];if(c.format==4){for(var l=-1,u=0;u<c.endCount.length;u++)if(i<=c.endCount[u]){l=u;break}return l==-1||c.startCount[l]>i?0:65535&(c.idRangeOffset[l]!=0?c.glyphIdArray[i-c.startCount[l]+(c.idRangeOffset[l]>>1)-(c.idRangeOffset.length-l)]:i+c.idDelta[l])}if(c.format==12){if(i>c.groups[c.groups.length-1][1])return 0;for(u=0;u<c.groups.length;u++){var h=c.groups[u];if(h[0]<=i&&i<=h[1])return h[2]+(i-h[0])}return 0}throw"unknown cmap table format "+c.format},e.U.glyphToPath=function(n,i){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var c={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},l=n.CFF,u=n.CFF.Private;if(l.ROS){for(var h=0;l.FDSelect[h+2]<=i;)h+=2;u=l.FDArray[l.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],c,l,u,a)}else n.glyf&&e.U._drawGlyf(i,n,a);return a},e.U._drawGlyf=function(n,i,a){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,i,a))},e.U._simpleGlyph=function(n,i){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,c=n.endPts[a],l=o;l<=c;l++){var u=l==o?c:l-1,h=l==c?o:l+1,f=1&n.flags[l],d=1&n.flags[u],g=1&n.flags[h],_=n.xs[l],m=n.ys[l];if(l==o)if(f){if(!d){e.U.P.moveTo(i,_,m);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+_)/2,(n.ys[u]+m)/2);f?d&&e.U.P.lineTo(i,_,m):g?e.U.P.qcurveTo(i,_,m,n.xs[h],n.ys[h]):e.U.P.qcurveTo(i,_,m,(_+n.xs[h])/2,(m+n.ys[h])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,a){for(var o=0;o<n.parts.length;o++){var c={cmds:[],crds:[]},l=n.parts[o];e.U._drawGlyf(l.glyphIndex,i,c);for(var u=l.m,h=0;h<c.crds.length;h+=2){var f=c.crds[h],d=c.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<c.cmds.length;h++)a.cmds.push(c.cmds[h])}},e.U._getGlyphClass=function(n,i){var a=e._lctf.getInterval(i,n);return a==-1?0:i[a+2]},e.U._applySubs=function(n,i,a,o){for(var c=n.length-i-1,l=0;l<a.tabs.length;l++)if(a.tabs[l]!=null){var u,h=a.tabs[l];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[i]))!=-1){if(a.ltype==1)n[i],h.fmt==1?n[i]=n[i]+h.delta:n[i]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],_=g.chain.length;if(!(_>c)){for(var m=!0,p=0,y=0;y<_;y++){for(;n[i+p+(1+y)]==-1;)p++;g.chain[y]!=n[i+p+(1+y)]&&(m=!1)}if(m){for(n[i]=g.nglyph,y=0;y<_+p;y++)n[i+y+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var E=e._lctf.getInterval(h.cDef,n[i]),x=h.cDef[E+2],R=h.scset[x],w=0;w<R.length;w++){var T=R[w],P=T.input;if(!(P.length>c)){for(m=!0,y=0;y<P.length;y++){var M=e._lctf.getInterval(h.cDef,n[i+1+y]);if(E==-1&&h.cDef[M+2]!=P[y]){m=!1;break}}if(m){var S=T.substLookupRecords;for(d=0;d<S.length;d+=2)S[d],S[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,i-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,i)||!e.U._glsCovered(n,h.ahedCvg,i+h.inptCvg.length))continue;var U=h.lookupRec;for(w=0;w<U.length;w+=2){E=U[w];var C=o[U[w+1]];e.U._applySubs(n,i+E,C,o)}}}}},e.U._glsCovered=function(n,i,a){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,a){for(var o={cmds:[],crds:[]},c=0,l=0;l<i.length;l++){var u=i[l];if(u!=-1){for(var h=l<i.length-1&&i[l+1]!=-1?i[l+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+c),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),c+=n.hmtx.aWidth[u],l<i.length-1&&(c+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,a){n.cmds.push("M"),n.crds.push(i,a)},e.U.P.lineTo=function(n,i,a){n.cmds.push("L"),n.crds.push(i,a)},e.U.P.curveTo=function(n,i,a,o,c,l,u){n.cmds.push("C"),n.crds.push(i,a,o,c,l,u)},e.U.P.qcurveTo=function(n,i,a,o,c){n.cmds.push("Q"),n.crds.push(i,a,o,c)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,a,o,c){for(var l=i.stack,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open,g=0,_=i.x,m=i.y,p=0,y=0,E=0,x=0,R=0,w=0,T=0,P=0,M=0,S=0,U={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,U);var C=U.val;if(g+=U.size,C=="o1"||C=="o18")l.length%2!=0&&!h&&(f=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,h=!0;else if(C=="o3"||C=="o23")l.length%2!=0&&!h&&(f=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,h=!0;else if(C=="o4")l.length>1&&!h&&(f=l.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(c),m+=l.pop(),e.U.P.moveTo(c,_,m),d=!0;else if(C=="o5")for(;l.length>0;)_+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,_,m);else if(C=="o6"||C=="o7")for(var I=l.length,F=C=="o6",V=0;V<I;V++){var G=l.shift();F?_+=G:m+=G,F=!F,e.U.P.lineTo(c,_,m)}else if(C=="o8"||C=="o24"){I=l.length;for(var Q=0;Q+6<=I;)p=_+l.shift(),y=m+l.shift(),E=p+l.shift(),x=y+l.shift(),_=E+l.shift(),m=x+l.shift(),e.U.P.curveTo(c,p,y,E,x,_,m),Q+=6;C=="o24"&&(_+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,_,m))}else{if(C=="o11")break;if(C=="o1234"||C=="o1235"||C=="o1236"||C=="o1237")C=="o1234"&&(y=m,E=(p=_+l.shift())+l.shift(),S=x=y+l.shift(),w=x,P=m,_=(T=(R=(M=E+l.shift())+l.shift())+l.shift())+l.shift(),e.U.P.curveTo(c,p,y,E,x,M,S),e.U.P.curveTo(c,R,w,T,P,_,m)),C=="o1235"&&(p=_+l.shift(),y=m+l.shift(),E=p+l.shift(),x=y+l.shift(),M=E+l.shift(),S=x+l.shift(),R=M+l.shift(),w=S+l.shift(),T=R+l.shift(),P=w+l.shift(),_=T+l.shift(),m=P+l.shift(),l.shift(),e.U.P.curveTo(c,p,y,E,x,M,S),e.U.P.curveTo(c,R,w,T,P,_,m)),C=="o1236"&&(p=_+l.shift(),y=m+l.shift(),E=p+l.shift(),S=x=y+l.shift(),w=x,T=(R=(M=E+l.shift())+l.shift())+l.shift(),P=w+l.shift(),_=T+l.shift(),e.U.P.curveTo(c,p,y,E,x,M,S),e.U.P.curveTo(c,R,w,T,P,_,m)),C=="o1237"&&(p=_+l.shift(),y=m+l.shift(),E=p+l.shift(),x=y+l.shift(),M=E+l.shift(),S=x+l.shift(),R=M+l.shift(),w=S+l.shift(),T=R+l.shift(),P=w+l.shift(),Math.abs(T-_)>Math.abs(P-m)?_=T+l.shift():m=P+l.shift(),e.U.P.curveTo(c,p,y,E,x,M,S),e.U.P.curveTo(c,R,w,T,P,_,m));else if(C=="o14"){if(l.length>0&&!h&&(f=l.shift()+a.nominalWidthX,h=!0),l.length==4){var W=l.shift(),q=l.shift(),Y=l.shift(),L=l.shift(),H=e.CFF.glyphBySE(a,Y),ee=e.CFF.glyphBySE(a,L);e.U._drawCFF(a.CharStrings[H],i,a,o,c),i.x=W,i.y=q,e.U._drawCFF(a.CharStrings[ee],i,a,o,c)}d&&(e.U.P.closePath(c),d=!1)}else if(C=="o19"||C=="o20")l.length%2!=0&&!h&&(f=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,h=!0,g+=u+7>>3;else if(C=="o21")l.length>2&&!h&&(f=l.shift()+o.nominalWidthX,h=!0),m+=l.pop(),_+=l.pop(),d&&e.U.P.closePath(c),e.U.P.moveTo(c,_,m),d=!0;else if(C=="o22")l.length>1&&!h&&(f=l.shift()+o.nominalWidthX,h=!0),_+=l.pop(),d&&e.U.P.closePath(c),e.U.P.moveTo(c,_,m),d=!0;else if(C=="o25"){for(;l.length>6;)_+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,_,m);p=_+l.shift(),y=m+l.shift(),E=p+l.shift(),x=y+l.shift(),_=E+l.shift(),m=x+l.shift(),e.U.P.curveTo(c,p,y,E,x,_,m)}else if(C=="o26")for(l.length%2&&(_+=l.shift());l.length>0;)p=_,y=m+l.shift(),_=E=p+l.shift(),m=(x=y+l.shift())+l.shift(),e.U.P.curveTo(c,p,y,E,x,_,m);else if(C=="o27")for(l.length%2&&(m+=l.shift());l.length>0;)y=m,E=(p=_+l.shift())+l.shift(),x=y+l.shift(),_=E+l.shift(),m=x,e.U.P.curveTo(c,p,y,E,x,_,m);else if(C=="o10"||C=="o29"){var te=C=="o10"?o:a;if(l.length==0)console.debug("error: empty stack");else{var Z=l.pop(),z=te.Subrs[Z+te.Bias];i.x=_,i.y=m,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d,e.U._drawCFF(z,i,a,o,c),_=i.x,m=i.y,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open}}else if(C=="o30"||C=="o31"){var k=l.length,J=(Q=0,C=="o31");for(Q+=k-(I=-3&k);Q<I;)J?(y=m,E=(p=_+l.shift())+l.shift(),m=(x=y+l.shift())+l.shift(),I-Q==5?(_=E+l.shift(),Q++):_=E,J=!1):(p=_,y=m+l.shift(),E=p+l.shift(),x=y+l.shift(),_=E+l.shift(),I-Q==5?(m=x+l.shift(),Q++):m=x,J=!0),e.U.P.curveTo(c,p,y,E,x,_,m),Q+=4}else{if((C+"").charAt(0)=="o")throw console.debug("Unknown operation: "+C,n),C;l.push(C)}}}i.x=_,i.y=m,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d};var t=e,r={Typr:t};return s.Typr=t,s.default=r,Object.defineProperty(s,"__esModule",{value:!0}),s})({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function T_(){return(function(s){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(C,I){for(var F=new t(31),V=0;V<31;++V)F[V]=I+=1<<C[V-1];var G=new r(F[30]);for(V=1;V<30;++V)for(var Q=F[V];Q<F[V+1];++Q)G[Q]=Q-F[V]<<5|V;return[F,G]},c=o(n,2),l=c[0],u=c[1];l[28]=258,u[258]=28;for(var h=o(i,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(C,I,F){for(var V=C.length,G=0,Q=new t(I);G<V;++G)++Q[C[G]-1];var W,q=new t(I);for(G=0;G<I;++G)q[G]=q[G-1]+Q[G-1]<<1;{W=new t(1<<I);var Y=15-I;for(G=0;G<V;++G)if(C[G])for(var L=G<<4|C[G],H=I-C[G],ee=q[C[G]-1]++<<H,te=ee|(1<<H)-1;ee<=te;++ee)W[f[ee]>>>Y]=L}return W},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var y=_(m,9),E=_(p,5),x=function(C){for(var I=C[0],F=1;F<C.length;++F)C[F]>I&&(I=C[F]);return I},R=function(C,I,F){var V=I/8|0;return(C[V]|C[V+1]<<8)>>(7&I)&F},w=function(C,I){var F=I/8|0;return(C[F]|C[F+1]<<8|C[F+2]<<16)>>(7&I)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],P=function(C,I,F){var V=new Error(I||T[C]);if(V.code=C,Error.captureStackTrace&&Error.captureStackTrace(V,P),!F)throw V;return V},M=function(C,I,F){var V=C.length;if(!V||F&&!F.l&&V<5)return I||new e(0);var G=!I||F,Q=!F||F.i;F||(F={}),I||(I=new e(3*V));var W,q=function(ve){var Re=I.length;if(ve>Re){var Ee=new e(Math.max(2*Re,ve));Ee.set(I),I=Ee}},Y=F.f||0,L=F.p||0,H=F.b||0,ee=F.l,te=F.d,Z=F.m,z=F.n,k=8*V;do{if(!ee){F.f=Y=R(C,L,1);var J=R(C,L+1,3);if(L+=3,!J){var pe=C[(ye=((W=L)/8|0)+(7&W&&1)+4)-4]|C[ye-3]<<8,me=ye+pe;if(me>V){Q&&P(0);break}G&&q(H+pe),I.set(C.subarray(ye,me),H),F.b=H+=pe,F.p=L=8*me;continue}if(J==1)ee=y,te=E,Z=9,z=5;else if(J==2){var de=R(C,L,31)+257,ge=R(C,L+10,15)+4,D=de+R(C,L+5,31)+1;L+=14;for(var Fe=new e(D),Ae=new e(19),be=0;be<ge;++be)Ae[a[be]]=R(C,L+3*be,7);L+=3*ge;var Me=x(Ae),xe=(1<<Me)-1,ue=_(Ae,Me);for(be=0;be<D;){var ye,oe=ue[R(C,L,xe)];if(L+=15&oe,(ye=oe>>>4)<16)Fe[be++]=ye;else{var De=0,b=0;for(ye==16?(b=3+R(C,L,3),L+=2,De=Fe[be-1]):ye==17?(b=3+R(C,L,7),L+=3):ye==18&&(b=11+R(C,L,127),L+=7);b--;)Fe[be++]=De}}var v=Fe.subarray(0,de),O=Fe.subarray(de);Z=x(v),z=x(O),ee=_(v,Z),te=_(O,z)}else P(1);if(L>k){Q&&P(0);break}}G&&q(H+131072);for(var ne=(1<<Z)-1,$=(1<<z)-1,j=L;;j=L){var Se=(De=ee[w(C,L)&ne])>>>4;if((L+=15&De)>k){Q&&P(0);break}if(De||P(2),Se<256)I[H++]=Se;else{if(Se==256){j=L,ee=null;break}var he=Se-254;if(Se>264){var we=n[be=Se-257];he=R(C,L,(1<<we)-1)+l[be],L+=we}var Ce=te[w(C,L)&$],le=Ce>>>4;if(Ce||P(3),L+=15&Ce,O=h[le],le>3&&(we=i[le],O+=w(C,L)&(1<<we)-1,L+=we),L>k){Q&&P(0);break}G&&q(H+131072);for(var fe=H+he;H<fe;H+=4)I[H]=I[H-O],I[H+1]=I[H+1-O],I[H+2]=I[H+2-O],I[H+3]=I[H+3-O];H=fe}}F.l=ee,F.p=j,F.b=H,ee&&(Y=1,F.m=Z,F.d=te,F.n=z)}while(!Y);return H==I.length?I:(function(ve,Re,Ee){(Ee==null||Ee>ve.length)&&(Ee=ve.length);var Ge=new(ve instanceof t?t:ve instanceof r?r:e)(Ee-Re);return Ge.set(ve.subarray(Re,Ee)),Ge})(I,0,H)},S=new e(0),U=typeof TextDecoder<"u"&&new TextDecoder;try{U.decode(S,{stream:!0})}catch{}return s.convert_streams=function(C){var I=new DataView(C),F=0;function V(){var de=I.getUint16(F);return F+=2,de}function G(){var de=I.getUint32(F);return F+=4,de}function Q(de){pe.setUint16(me,de),me+=2}function W(de){pe.setUint32(me,de),me+=4}for(var q={signature:G(),flavor:G(),length:G(),numTables:V(),reserved:V(),totalSfntSize:G(),majorVersion:V(),minorVersion:V(),metaOffset:G(),metaLength:G(),metaOrigLength:G(),privOffset:G(),privLength:G()},Y=0;Math.pow(2,Y)<=q.numTables;)Y++;Y--;for(var L=16*Math.pow(2,Y),H=16*q.numTables-L,ee=12,te=[],Z=0;Z<q.numTables;Z++)te.push({tag:G(),offset:G(),compLength:G(),origLength:G(),origChecksum:G()}),ee+=16;var z,k=new Uint8Array(12+16*te.length+te.reduce((function(de,ge){return de+ge.origLength+4}),0)),J=k.buffer,pe=new DataView(J),me=0;return W(q.flavor),Q(q.numTables),Q(L),Q(Y),Q(H),te.forEach((function(de){W(de.tag),W(de.origChecksum),W(ee),W(de.origLength),de.outOffset=ee,(ee+=de.origLength)%4!=0&&(ee+=4-ee%4)})),te.forEach((function(de){var ge,D=C.slice(de.offset,de.offset+de.compLength);if(de.compLength!=de.origLength){var Fe=new Uint8Array(de.origLength);ge=new Uint8Array(D,2),M(ge,Fe)}else Fe=new Uint8Array(D);k.set(Fe,de.outOffset);var Ae=0;(ee=de.outOffset+de.origLength)%4!=0&&(Ae=4-ee%4),k.set(new Uint8Array(Ae).buffer,de.outOffset+de.origLength),z=ee+Ae})),J.slice(0,z)},Object.defineProperty(s,"__esModule",{value:!0}),s})({}).convert_streams}function A_(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,a=4,o=8,c=16,l=32;let u;function h(T){if(!u){const P={R:i,L:n,D:a,C:c,U:l,T:o};u=new Map;for(let M in r){let S=0;r[M].split(",").forEach(U=>{let[C,I]=U.split("+");C=parseInt(C,36),I=I?parseInt(I,36):0,u.set(S+=C,P[M]);for(let F=I;F--;)u.set(++S,P[M])})}}return u.get(T)||l}const f=1,d=2,g=3,_=4,m=[null,"isol","init","fina","medi"];function p(T){const P=new Uint8Array(T.length);let M=l,S=f,U=-1;for(let C=0;C<T.length;C++){const I=T.codePointAt(C);let F=h(I)|0,V=f;F&o||(M&(n|a|c)?F&(i|a|c)?(V=g,(S===f||S===g)&&P[U]++):F&(n|l)&&(S===d||S===_)&&P[U]--:M&(i|l)&&(S===d||S===_)&&P[U]--,S=P[C]=V,M=F,U=C,I>65535&&C++)}return P}function y(T,P){const M=[];for(let U=0;U<P.length;U++){const C=P.codePointAt(U);C>65535&&U++,M.push(s.U.codeToGlyph(T,C))}const S=T.GSUB;if(S){const{lookupList:U,featureList:C}=S;let I;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,V=[];C.forEach(G=>{if(F.test(G.tag))for(let Q=0;Q<G.tab.length;Q++){if(V[G.tab[Q]])continue;V[G.tab[Q]]=!0;const W=U[G.tab[Q]],q=/^(isol|init|fina|medi)$/.test(G.tag);q&&!I&&(I=p(P));for(let Y=0;Y<M.length;Y++)(!I||!q||m[I[Y]]===G.tag)&&s.U._applySubs(M,Y,W,U)}})}return M}function E(T,P){const M=new Int16Array(P.length*3);let S=0;for(;S<P.length;S++){const F=P[S];if(F===-1)continue;M[S*3+2]=T.hmtx.aWidth[F];const V=T.GPOS;if(V){const G=V.lookupList;for(let Q=0;Q<G.length;Q++){const W=G[Q];for(let q=0;q<W.tabs.length;q++){const Y=W.tabs[q];if(W.ltype===1){if(s._lctf.coverageIndex(Y.coverage,F)!==-1&&Y.pos){I(Y.pos,S);break}}else if(W.ltype===2){let L=null,H=U();if(H!==-1){const ee=s._lctf.coverageIndex(Y.coverage,P[H]);if(ee!==-1){if(Y.fmt===1){const te=Y.pairsets[ee];for(let Z=0;Z<te.length;Z++)te[Z].gid2===F&&(L=te[Z])}else if(Y.fmt===2){const te=s.U._getGlyphClass(P[H],Y.classDef1),Z=s.U._getGlyphClass(F,Y.classDef2);L=Y.matrix[te][Z]}if(L){L.val1&&I(L.val1,H),L.val2&&I(L.val2,S);break}}}}else if(W.ltype===4){const L=s._lctf.coverageIndex(Y.markCoverage,F);if(L!==-1){const H=U(C),ee=H===-1?-1:s._lctf.coverageIndex(Y.baseCoverage,P[H]);if(ee!==-1){const te=Y.markArray[L],Z=Y.baseArray[ee][te.markClass];M[S*3]=Z.x-te.x+M[H*3]-M[H*3+2],M[S*3+1]=Z.y-te.y+M[H*3+1];break}}}else if(W.ltype===6){const L=s._lctf.coverageIndex(Y.mark1Coverage,F);if(L!==-1){const H=U();if(H!==-1){const ee=P[H];if(x(T,ee)===3){const te=s._lctf.coverageIndex(Y.mark2Coverage,ee);if(te!==-1){const Z=Y.mark1Array[L],z=Y.mark2Array[te][Z.markClass];M[S*3]=z.x-Z.x+M[H*3]-M[H*3+2],M[S*3+1]=z.y-Z.y+M[H*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const G=U();if(G!==-1){const Q=T.kern.glyph1.indexOf(P[G]);if(Q!==-1){const W=T.kern.rval[Q].glyph2.indexOf(F);W!==-1&&(M[G*3+2]+=T.kern.rval[Q].vals[W])}}}}return M;function U(F){for(let V=S-1;V>=0;V--)if(P[V]!==-1&&(!F||F(P[V])))return V;return-1}function C(F){return x(T,F)===1}function I(F,V){for(let G=0;G<3;G++)M[V*3+G]+=F[G]||0}}function x(T,P){const M=T.GDEF&&T.GDEF.glyphClassDef;return M?s.U._getGlyphClass(P,M):0}function R(...T){for(let P=0;P<T.length;P++)if(typeof T[P]=="number")return T[P]}function w(T){const P=Object.create(null),M=T["OS/2"],S=T.hhea,U=T.head.unitsPerEm,C=R(M&&M.sTypoAscender,S&&S.ascender,U),I={unitsPerEm:U,ascender:C,descender:R(M&&M.sTypoDescender,S&&S.descender,0),capHeight:R(M&&M.sCapHeight,C),xHeight:R(M&&M.sxHeight,C),lineGap:R(M&&M.sTypoLineGap,S&&S.lineGap),supportsCodePoint(F){return s.U.codeToGlyph(T,F)>0},forEachGlyph(F,V,G,Q){let W=0;const q=1/I.unitsPerEm*V,Y=y(T,F);let L=0;const H=E(T,Y);return Y.forEach((ee,te)=>{if(ee!==-1){let Z=P[ee];if(!Z){const{cmds:z,crds:k}=s.U.glyphToPath(T,ee);let J="",pe=0;for(let Fe=0,Ae=z.length;Fe<Ae;Fe++){const be=t[z[Fe]];J+=z[Fe];for(let Me=1;Me<=be;Me++)J+=(Me>1?",":"")+k[pe++]}let me,de,ge,D;if(k.length){me=de=1/0,ge=D=-1/0;for(let Fe=0,Ae=k.length;Fe<Ae;Fe+=2){let be=k[Fe],Me=k[Fe+1];be<me&&(me=be),Me<de&&(de=Me),be>ge&&(ge=be),Me>D&&(D=Me)}}else me=ge=de=D=0;Z=P[ee]={index:ee,advanceWidth:T.hmtx.aWidth[ee],xMin:me,yMin:de,xMax:ge,yMax:D,path:J}}Q.call(null,Z,W+H[te*3]*q,H[te*3+1]*q,L),W+=H[te*3+2]*q,G&&(W+=G*V)}L+=F.codePointAt(L)>65535?2:1}),W}};return I}return function(P){const M=new Uint8Array(P,0,4),S=s._bin.readASCII(M,0,4);if(S==="wOFF")P=e(P);else if(S==="wOF2")throw new Error("woff2 fonts not supported");return w(s.parse(P)[0])}}const w_=Xi({name:"Typr Font Parser",dependencies:[b_,T_,A_],init(s,e,t){const r=s(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function R_(){return(function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(E){var x=E>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&E))},e.prototype.has=function(E){var x=this.buckets.get(E>>5);return x!==void 0&&(x&1<<(31&E))!=0},e.prototype.serialize=function(){var E=[];return this.buckets.forEach((function(x,R){E.push((+R).toString(36)+":"+x.toString(36))})),E.join(",")},e.prototype.deserialize=function(E){var x=this;this.buckets.clear(),E.split(",").forEach((function(R){var w=R.split(":");x.buckets.set(parseInt(w[0],36),parseInt(w[1],36))}))};var t=Math.pow(2,8),r=t-1,n=~r;function i(E){var x=(function(w){return w&n})(E).toString(16),R=(function(w){return(w&n)+t-1})(E).toString(16);return"codepoint-index/plane"+(E>>16)+"/"+x+"-"+R+".json"}function a(E,x){var R=E&r,w=x.codePointAt(R/6|0);return((w=(w||48)-48)&1<<R%6)!=0}function o(E,x){var R;(R=E,R.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(w){return w.split("-").map((function(T){return parseInt(T.trim(),16)}))}))).forEach((function(w){var T=w[0],P=w[1];P===void 0&&(P=T),x(T,P)}))}function c(E,x){o(E,(function(R,w){for(var T=R;T<=w;T++)x(T)}))}var l={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(E){var x=h.get(E);return x||(x=new e,c(E.ranges,(function(R){return x.add(R)})),h.set(E,x)),x}var g,_=new Map;function m(E,x,R){return E[x]?x:E[R]?R:(function(w){for(var T in w)return T})(E)}function p(E,x){var R=x;if(!E.includes(R)){R=1/0;for(var w=0;w<E.length;w++)Math.abs(E[w]-x)<Math.abs(R-x)&&(R=E[w])}return R}function y(E){return g||(g=new Set,c("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(x){g.add(x)}))),g.has(E)}return s.CodePointSet=e,s.clearCache=function(){l={},u={}},s.getFontsForString=function(E,x){x===void 0&&(x={});var R,w=x.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(R=E)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(R)?"ja":"en");var T=x.category;T===void 0&&(T="sans-serif");var P=x.style;P===void 0&&(P="normal");var M=x.weight;M===void 0&&(M=400);var S=(x.dataUrl||f).replace(/\/$/g,""),U=new Map,C=new Uint8Array(E.length),I={},F={},V=new Array(E.length),G=new Map,Q=!1;function W(L){var H=_.get(L);return H||(H=fetch(S+"/"+L).then((function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then((function(te){if(!Array.isArray(te)||te[0]!==1)throw new Error("Incorrect schema version; need 1, got "+te[0]);return te[1]}))})).catch((function(ee){if(S!==f)return Q||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+S+'", trying default CDN. '+ee.message),Q=!0),S=f,_.delete(L),W(L);throw ee})),_.set(L,H)),H}for(var q=function(L){var H=E.codePointAt(L),ee=i(H);V[L]=ee,l[ee]||G.has(ee)||G.set(ee,W(ee).then((function(te){l[ee]=te}))),H>65535&&(L++,Y=L)},Y=0;Y<E.length;Y++)q(Y);return Promise.all(G.values()).then((function(){G.clear();for(var L=function(ee){var te=E.codePointAt(ee),Z=null,z=l[V[ee]],k=void 0;for(var J in z){var pe=F[J];if(pe===void 0&&(pe=F[J]=new RegExp(J).test(w||"en")),pe){for(var me in k=J,z[J])if(a(te,z[J][me])){Z=me;break}break}}if(!Z){e:for(var de in z)if(de!==k){for(var ge in z[de])if(a(te,z[de][ge])){Z=ge;break e}}}Z||(console.debug("No font coverage for U+"+te.toString(16)),Z="latin"),V[ee]=Z,u[Z]||G.has(Z)||G.set(Z,W("font-meta/"+Z+".json").then((function(D){u[Z]=D}))),te>65535&&(ee++,H=ee)},H=0;H<E.length;H++)L(H);return Promise.all(G.values())})).then((function(){for(var L,H=null,ee=0;ee<E.length;ee++){var te=E.codePointAt(ee);if(H&&(y(te)||d(H).has(te)))C[ee]=C[ee-1];else{H=u[V[ee]];var Z=I[H.id];if(!Z){var z=H.typeforms,k=m(z,T,"sans-serif"),J=m(z[k],P,"normal"),pe=p((L=z[k])===null||L===void 0?void 0:L[J],M);Z=I[H.id]=S+"/font-files/"+H.id+"/"+k+"."+J+"."+pe+".woff"}var me=U.get(Z);me==null&&(me=U.size,U.set(Z,me)),C[ee]=me}te>65535&&(ee++,C[ee]=C[ee-1])}return{fontUrls:Array.from(U.keys()),chars:C}}))},Object.defineProperty(s,"__esModule",{value:!0}),s})({})}function C_(s,e){const t=Object.create(null),r=Object.create(null);function n(a,o){const c=l=>{console.error(`Failure loading font ${a}`,l)};try{const l=new XMLHttpRequest;l.open("get",a,!0),l.responseType="arraybuffer",l.onload=function(){if(l.status>=400)c(new Error(l.statusText));else if(l.status>0)try{const u=s(l.response);u.src=a,o(u)}catch(u){c(u)}},l.onerror=c,l.send()}catch(l){c(l)}}function i(a,o){let c=t[a];c?o(c):r[a]?r[a].push(o):(r[a]=[o],n(a,l=>{l.src=a,t[a]=l,r[a].forEach(u=>u(l)),delete r[a]}))}return function(a,o,{lang:c,fonts:l=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),g=[];a.length||y();const _=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),l&&!Array.isArray(l)&&(l=[l]),l=l.slice().filter(x=>!x.lang||x.lang.test(c)).reverse(),l.length){let T=0;(function P(M=0){for(let S=M,U=a.length;S<U;S++){const C=a.codePointAt(S);if(T===1&&g[d[S-1]].supportsCodePoint(C)||S>0&&/\s/.test(a[S]))d[S]=d[S-1],T===2&&(m[m.length-1][1]=S);else for(let I=d[S],F=l.length;I<=F;I++)if(I===F){const V=T===2?m[m.length-1]:m[m.length]=[S,S];V[1]=S,T=2}else{d[S]=I;const{src:V,unicodeRange:G}=l[I];if(!G||E(C,G)){const Q=t[V];if(!Q){i(V,()=>{P(S)});return}if(Q.supportsCodePoint(C)){let W=_.get(Q);typeof W!="number"&&(W=g.length,g.push(Q),_.set(Q,W)),d[S]=W,T=1;break}}}C>65535&&S+1<U&&(d[S+1]=d[S],S++,T===2&&(m[m.length-1][1]=S))}p()})()}else m.push([0,a.length-1]),p();function p(){if(m.length){const x=m.map(R=>a.substring(R[0],R[1]+1)).join(`
`);e.getFontsForString(x,{lang:c||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:R,chars:w})=>{const T=g.length;let P=0;m.forEach(S=>{for(let U=0,C=S[1]-S[0];U<=C;U++)d[S[0]+U]=w[P++]+T;P++});let M=0;R.forEach((S,U)=>{i(S,C=>{g[U+T]=C,++M===R.length&&y()})})})}else y()}function y(){o({chars:d,fonts:g})}function E(x,R){for(let w=0;w<R.length;w++){const[T,P=T]=R[w];if(T<=x&&x<=P)return!0}return!1}}}const P_=Xi({name:"FontResolver",dependencies:[C_,w_,R_],init(s,e,t){return s(e,t())}});function D_(s,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:_,fonts:m,style:p,weight:y,preResolvedFonts:E,unicodeFontsURL:x},R){const w=({chars:T,fonts:P})=>{let M,S;const U=[];for(let C=0;C<T.length;C++)T[C]!==S?(S=T[C],U.push(M={start:C,end:C,fontObj:P[T[C]]})):M.end=C;R(U)};E?w(E):s(g,w,{lang:_,fonts:m,style:p,weight:y,unicodeFontsURL:x})}function o({text:g="",font:_,lang:m,sdfGlyphSize:p=64,fontSize:y=400,fontWeight:E=1,fontStyle:x="normal",letterSpacing:R=0,lineHeight:w="normal",maxWidth:T=1/0,direction:P,textAlign:M="left",textIndent:S=0,whiteSpace:U="normal",overflowWrap:C="normal",anchorX:I=0,anchorY:F=0,metricsOnly:V=!1,unicodeFontsURL:G,preResolvedFonts:Q=null,includeCaretPositions:W=!1,chunkedBoundsSize:q=8192,colorRanges:Y=null},L){const H=h(),ee={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,R=+R,T=+T,w=w||"normal",S=+S,a({text:g,lang:m,style:x,weight:E,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:G,preResolvedFonts:Q},te=>{ee.fontLoad=h()-H;const Z=isFinite(T);let z=null,k=null,J=null,pe=null,me=null,de=null,ge=null,D=null,Fe=0,Ae=0,be=U!=="nowrap";const Me=new Map,xe=h();let ue=S,ye=0,oe=new f;const De=[oe];te.forEach($=>{const{fontObj:j}=$,{ascender:Se,descender:he,unitsPerEm:we,lineGap:Ce,capHeight:le,xHeight:fe}=j;let ve=Me.get(j);if(!ve){const ae=y/we,_e=w==="normal"?(Se-he+Ce)*ae:w*y,Ie=(_e-(Se-he)*ae)/2,ce=Math.min(_e,(Se-he)*ae),ie=(Se+he)/2*ae+ce/2;ve={index:Me.size,src:j.src,fontObj:j,fontSizeMult:ae,unitsPerEm:we,ascender:Se*ae,descender:he*ae,capHeight:le*ae,xHeight:fe*ae,lineHeight:_e,baseline:-Ie-Se*ae,caretTop:ie,caretBottom:ie-ce},Me.set(j,ve)}const{fontSizeMult:Re}=ve,Ee=g.slice($.start,$.end+1);let Ge,B;j.forEachGlyph(Ee,y,R,(ae,_e,Ie,ce)=>{_e+=ye,ce+=$.start,Ge=_e,B=ae;const ie=g.charAt(ce),Pe=ae.advanceWidth*Re,Oe=oe.count;let Be;if("isEmpty"in ae||(ae.isWhitespace=!!ie&&new RegExp(n).test(ie),ae.canBreakAfter=!!ie&&i.test(ie),ae.isEmpty=ae.xMin===ae.xMax||ae.yMin===ae.yMax||r.test(ie)),!ae.isWhitespace&&!ae.isEmpty&&Ae++,be&&Z&&!ae.isWhitespace&&_e+Pe+ue>T&&Oe){if(oe.glyphAt(Oe-1).glyphObj.canBreakAfter)Be=new f,ue=-_e;else for(let ct=Oe;ct--;)if(ct===0&&C==="break-word"){Be=new f,ue=-_e;break}else if(oe.glyphAt(ct).glyphObj.canBreakAfter){Be=oe.splitAt(ct+1);const ot=Be.glyphAt(0).x;ue-=ot;for(let ft=Be.count;ft--;)Be.glyphAt(ft).x-=ot;break}Be&&(oe.isSoftWrapped=!0,oe=Be,De.push(oe),Fe=T)}let Ve=oe.glyphAt(oe.count);Ve.glyphObj=ae,Ve.x=_e+ue,Ve.y=Ie,Ve.width=Pe,Ve.charIndex=ce,Ve.fontData=ve,ie===`
`&&(oe=new f,De.push(oe),ue=-(_e+Pe+R*y)+S)}),ye=Ge+B.advanceWidth*Re+R*y});let b=0;De.forEach($=>{let j=!0;for(let Se=$.count;Se--;){const he=$.glyphAt(Se);j&&!he.glyphObj.isWhitespace&&($.width=he.x+he.width,$.width>Fe&&(Fe=$.width),j=!1);let{lineHeight:we,capHeight:Ce,xHeight:le,baseline:fe}=he.fontData;we>$.lineHeight&&($.lineHeight=we);const ve=fe-$.baseline;ve<0&&($.baseline+=ve,$.cap+=ve,$.ex+=ve),$.cap=Math.max($.cap,$.baseline+Ce),$.ex=Math.max($.ex,$.baseline+le)}$.baseline-=b,$.cap-=b,$.ex-=b,b+=$.lineHeight});let v=0,O=0;if(I&&(typeof I=="number"?v=-I:typeof I=="string"&&(v=-Fe*(I==="left"?0:I==="center"?.5:I==="right"?1:l(I)))),F&&(typeof F=="number"?O=-F:typeof F=="string"&&(O=F==="top"?0:F==="top-baseline"?-De[0].baseline:F==="top-cap"?-De[0].cap:F==="top-ex"?-De[0].ex:F==="middle"?b/2:F==="bottom"?b:F==="bottom-baseline"?-De[De.length-1].baseline:l(F)*b)),!V){const $=e.getEmbeddingLevels(g,P);z=new Uint16Array(Ae),k=new Uint8Array(Ae),J=new Float32Array(Ae*2),pe={},ge=[1/0,1/0,-1/0,-1/0],D=[],W&&(de=new Float32Array(g.length*4)),Y&&(me=new Uint8Array(Ae*3));let j=0,Se=-1,he=-1,we,Ce;if(De.forEach((le,fe)=>{let{count:ve,width:Re}=le;if(ve>0){let Ee=0;for(let ce=ve;ce--&&le.glyphAt(ce).glyphObj.isWhitespace;)Ee++;let Ge=0,B=0;if(M==="center")Ge=(Fe-Re)/2;else if(M==="right")Ge=Fe-Re;else if(M==="justify"&&le.isSoftWrapped){let ce=0;for(let ie=ve-Ee;ie--;)le.glyphAt(ie).glyphObj.isWhitespace&&ce++;B=(Fe-Re)/ce}if(B||Ge){let ce=0;for(let ie=0;ie<ve;ie++){let Pe=le.glyphAt(ie);const Oe=Pe.glyphObj;Pe.x+=Ge+ce,B!==0&&Oe.isWhitespace&&ie<ve-Ee&&(ce+=B,Pe.width+=B)}}const ae=e.getReorderSegments(g,$,le.glyphAt(0).charIndex,le.glyphAt(le.count-1).charIndex);for(let ce=0;ce<ae.length;ce++){const[ie,Pe]=ae[ce];let Oe=1/0,Be=-1/0;for(let Ve=0;Ve<ve;Ve++)if(le.glyphAt(Ve).charIndex>=ie){let ct=Ve,ot=Ve;for(;ot<ve;ot++){let ft=le.glyphAt(ot);if(ft.charIndex>Pe)break;ot<ve-Ee&&(Oe=Math.min(Oe,ft.x),Be=Math.max(Be,ft.x+ft.width))}for(let ft=ct;ft<ot;ft++){const _t=le.glyphAt(ft);_t.x=Be-(_t.x+_t.width-Oe)}break}}let _e;const Ie=ce=>_e=ce;for(let ce=0;ce<ve;ce++){const ie=le.glyphAt(ce);_e=ie.glyphObj;const Pe=_e.index,Oe=$.levels[ie.charIndex]&1;if(Oe){const Be=e.getMirroredCharacter(g[ie.charIndex]);Be&&ie.fontData.fontObj.forEachGlyph(Be,0,0,Ie)}if(W){const{charIndex:Be,fontData:Ve}=ie,ct=ie.x+v,ot=ie.x+ie.width+v;de[Be*4]=Oe?ot:ct,de[Be*4+1]=Oe?ct:ot,de[Be*4+2]=le.baseline+Ve.caretBottom+O,de[Be*4+3]=le.baseline+Ve.caretTop+O;const ft=Be-Se;ft>1&&u(de,Se,ft),Se=Be}if(Y){const{charIndex:Be}=ie;for(;Be>he;)he++,Y.hasOwnProperty(he)&&(Ce=Y[he])}if(!_e.isWhitespace&&!_e.isEmpty){const Be=j++,{fontSizeMult:Ve,src:ct,index:ot}=ie.fontData,ft=pe[ct]||(pe[ct]={});ft[Pe]||(ft[Pe]={path:_e.path,pathBounds:[_e.xMin,_e.yMin,_e.xMax,_e.yMax]});const _t=ie.x+v,Xt=ie.y+le.baseline+O;J[Be*2]=_t,J[Be*2+1]=Xt;const Yt=_t+_e.xMin*Ve,en=Xt+_e.yMin*Ve,qt=_t+_e.xMax*Ve,jt=Xt+_e.yMax*Ve;Yt<ge[0]&&(ge[0]=Yt),en<ge[1]&&(ge[1]=en),qt>ge[2]&&(ge[2]=qt),jt>ge[3]&&(ge[3]=jt),Be%q===0&&(we={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},D.push(we)),we.end++;const pt=we.rect;if(Yt<pt[0]&&(pt[0]=Yt),en<pt[1]&&(pt[1]=en),qt>pt[2]&&(pt[2]=qt),jt>pt[3]&&(pt[3]=jt),z[Be]=Pe,k[Be]=ot,Y){const fn=Be*3;me[fn]=Ce>>16&255,me[fn+1]=Ce>>8&255,me[fn+2]=Ce&255}}}}}),de){const le=g.length-Se;le>1&&u(de,Se,le)}}const ne=[];Me.forEach(({index:$,src:j,unitsPerEm:Se,ascender:he,descender:we,lineHeight:Ce,capHeight:le,xHeight:fe})=>{ne[$]={src:j,unitsPerEm:Se,ascender:he,descender:we,lineHeight:Ce,capHeight:le,xHeight:fe}}),ee.typesetting=h()-xe,L({glyphIds:z,glyphFontIndices:k,glyphPositions:J,glyphData:pe,fontData:ne,caretPositions:de,glyphColors:me,chunkedBounds:D,fontSize:y,topBaseline:O+De[0].baseline,blockBounds:[v,O-b,v+Fe,O],visibleBounds:ge,timings:ee})})}function c(g,_){o({...g,metricsOnly:!0},m=>{const[p,y,E,x]=m.blockBounds;_({width:E-p,height:x-y})})}function l(g){let _=g.match(/^([\d.]+)%$/),m=_?parseFloat(_[1]):NaN;return isNaN(m)?0:m/100}function u(g,_,m){const p=g[_*4],y=g[_*4+1],E=g[_*4+2],x=g[_*4+3],R=(y-p)/m;for(let w=0;w<m;w++){const T=(_+w)*4;g[T]=p+R*w,g[T+1]=p+R*(w+1),g[T+2]=E,g[T+3]=x}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=f.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new f;return _.data=this.data.splice(g*d.length),_}},f.flyweight=d.reduce((g,_,m,p)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+m]},set(y){this.data[this.index*d.length+m]=y}}),g),{data:null,index:0}),{typeset:o,measure:c}}const li=()=>(self.performance||Date).now(),As=pu();let yc;function U_(s,e,t,r,n,i,a,o,c,l,u=!0){return u?I_(s,e,t,r,n,i,a,o,c,l).then(null,h=>(yc||(console.warn("WebGL SDF generation failed, falling back to JS",h),yc=!0),bc(s,e,t,r,n,i,a,o,c,l))):bc(s,e,t,r,n,i,a,o,c,l)}const _s=[],L_=5;let Mo=0;function gu(){const s=li();for(;_s.length&&li()-s<L_;)_s.shift()();Mo=_s.length?setTimeout(gu,0):0}const I_=(...s)=>new Promise((e,t)=>{_s.push(()=>{const r=li();try{As.webgl.generateIntoCanvas(...s),e({timing:li()-r})}catch(n){t(n)}}),Mo||(Mo=setTimeout(gu,0))}),F_=4,N_=2e3,Ec={};let O_=0;function bc(s,e,t,r,n,i,a,o,c,l){const u="TroikaTextSDFGenerator_JS_"+O_++%F_;let h=Ec[u];return h||(h=Ec[u]={workerModule:Xi({name:u,workerId:u,dependencies:[pu,li],init(f,d){const g=f().javascript.generate;return function(..._){const m=d();return{textureData:g(..._),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,r,n,i).then(({textureData:f,timing:d})=>{const g=li(),_=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)_[m*4+l]=f[m];return As.webglUtils.renderImageData(a,_,o,c,s,e,1<<3-l),d+=li()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{p_(u)},N_)),{timing:d}})}function B_(s){s._warm||(As.webgl.isSupported(s),s._warm=!0)}const k_=As.webglUtils.resizeWebGLCanvasWithoutClearing,fr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},z_=new Ze;function Ui(){return(self.performance||Date).now()}const Tc=Object.create(null);function G_(s,e){s=H_({},s);const t=Ui(),r=[];if(s.font&&r.push({label:"user",src:W_(s.font)}),s.font=r,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||fr.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||fr.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=z_.set(g).getHex()),f[d]=g}s.colorRanges=f}Object.freeze(s);const{textureWidth:n,sdfExponent:i}=fr,{sdfGlyphSize:a}=s,o=n/a*4;let c=Tc[a];if(!c){const f=document.createElement("canvas");f.width=n,f.height=a*256/o,c=Tc[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new Lt(f,void 0,void 0,void 0,$t,$t),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,V_(c)}const{sdfTexture:l,sdfCanvas:u}=c;xu(s).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:_,glyphPositions:m,fontSize:p,timings:y}=f,E=[],x=new Float32Array(d.length*4);let R=0,w=0;const T=Ui(),P=_.map(I=>{let F=c.glyphsByFont.get(I.src);return F||c.glyphsByFont.set(I.src,F=new Map),F});d.forEach((I,F)=>{const V=g[F],{src:G,unitsPerEm:Q}=_[V];let W=P[V].get(I);if(!W){const{path:ee,pathBounds:te}=f.glyphData[G][I],Z=Math.max(te[2]-te[0],te[3]-te[1])/a*(fr.sdfMargin*a+.5),z=c.glyphCount++,k=[te[0]-Z,te[1]-Z,te[2]+Z,te[3]+Z];P[V].set(I,W={path:ee,atlasIndex:z,sdfViewBox:k}),E.push(W)}const{sdfViewBox:q}=W,Y=m[w++],L=m[w++],H=p/Q;x[R++]=Y+q[0]*H,x[R++]=L+q[1]*H,x[R++]=Y+q[2]*H,x[R++]=L+q[3]*H,d[F]=W.atlasIndex}),y.quads=(y.quads||0)+(Ui()-T);const M=Ui();y.sdf={};const S=u.height,U=Math.ceil(c.glyphCount/o),C=Math.pow(2,Math.ceil(Math.log2(U*a)));C>S&&(console.info(`Increasing SDF texture size ${S}->${C}`),k_(u,n,C),l.dispose()),Promise.all(E.map(I=>_u(I,c,s.gpuAccelerateSDF).then(({timing:F})=>{y.sdf[I.atlasIndex]=F}))).then(()=>{E.length&&!c.contextLost&&(vu(c),l.needsUpdate=!0),y.sdfTotal=Ui()-M,y.total=Ui()-t,e(Object.freeze({parameters:s,sdfTexture:l,sdfGlyphSize:a,sdfExponent:i,glyphBounds:x,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{c.contextLost||B_(u)})}function _u({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},a){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:c}=fr,l=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/r)*r,f=Math.floor(u/(o/r))*r,d=e%4;return U_(r,r,s,t,l,c,n,h,f,d,a)}function V_(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const r=[];s.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(_u(i,s,!0))})}),Promise.all(r).then(()=>{vu(s),s.sdfTexture.needsUpdate=!0})})}function H_(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let os;function W_(s){return os||(os=typeof document>"u"?{}:document.createElement("a")),os.href=s,os.href}function vu(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:r,height:n}=e,i=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==r*n*4)&&(a=new Uint8Array(r*n*4),t.image={width:r,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,a)}}const X_=Xi({name:"Typesetter",dependencies:[D_,P_,g_],init(s,e,t){return s(e,t())}}),xu=Xi({name:"Typesetter",dependencies:[X_],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});xu.onMainThread;const Ac={};function Y_(s){let e=Ac[s];return e||(e=Ac[s]=new pi(1,1,s,s).translate(.5,.5,0)),e}const q_="aTroikaGlyphBounds",wc="aTroikaGlyphIndex",j_="aTroikaGlyphColor";class K_ extends nf{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Hi,this.boundingBox=new di}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Y_(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){this.updateAttributeData(q_,e,4),this.updateAttributeData(wc,t,1),this.updateAttributeData(j_,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:a,max:o,sin:c,cos:l}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,_=i((d+u)/h)!==i((g+u)/h)?-f:a(c(d)*f,c(g)*f),m=i((d-u)/h)!==i((g-u)/h)?f:o(c(d)*f,c(g)*f),p=i((d+n)/h)!==i((g+n)/h)?f*2:o(f-l(d)*f,f-l(g)*f);r.min.set(_,e[1],t<0?-p:0),r.max.set(m,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(wc).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Hh(t,r)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const Z_=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,J_=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Q_=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,$_=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function ev(s){const e=So(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ye},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ht(0,0,0,0)},uTroikaClipRect:{value:new ht(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ye},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ze},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new qe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Z_,vertexTransform:J_,fragmentDefs:Q_,fragmentColorTransform:$_,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(mu,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const ko=new Lo({color:16777215,side:mn,transparent:!0}),Rc=8421504,Cc=new ut,ls=new K,ya=new K,cr=[],tv=new K,Ea="+x+y";function Pc(s){return Array.isArray(s)?s[0]:s}let Su=()=>{const s=new Ut(new pi(1,1),ko);return Su=()=>s,s},Mu=()=>{const s=new Ut(new pi(1,1,32,1),ko);return Mu=()=>s,s};const nv={type:"syncstart"},iv={type:"synccomplete"},yu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],rv=yu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Eu extends Ut{constructor(){const e=new K_;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Rc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Ea,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(nv),G_({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(iv),e&&e()})))}onBeforeRender(e,t,r,n,i,a){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return ev(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=ko.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Pc(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Pc(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:c}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(c),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let l=0,u=0,h=0,f,d,g,_=0,m=0;if(t){let{outlineWidth:y,outlineOffsetX:E,outlineOffsetY:x,outlineBlur:R,outlineOpacity:w}=this;l=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(R)||0),f=w,_=this._parsePercent(E)||0,m=this._parsePercent(x)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??Rc),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;r.uTroikaEdgeOffset.value=l,r.uTroikaPositionOffset.value.set(_,m),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=h,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=f??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const y=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(c[0]-y,c[1]-y,c[2]+y,c[3]+y)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Ze;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let a=this.orientation||Ea;if(a!==e._orientation){let o=r.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let c=a!==Ea&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(c){let[,l,u,h,f]=c;ls.set(0,0,0)[u]=l==="-"?1:-1,ya.set(0,0,0)[f]=h==="-"?-1:1,Cc.lookAt(tv,ls.cross(ya),ya),o.setFromMatrix4(Cc)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ye){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new Ye){return ls.copy(e),this.localPositionToTextCoords(this.worldToLocal(ls),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,a=n?Mu():Su(),o=a.geometry,{position:c,uv:l}=o.attributes;for(let u=0;u<l.count;u++){let h=i[0]+l.getX(u)*(i[2]-i[0]);const f=i[1]+l.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),c.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,cr.length=0,a.raycast(e,cr);for(let u=0;u<cr.length;u++)cr[u].object=this,t.push(cr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,rv.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}yu.forEach(s=>{const e="_private_"+s;Object.defineProperty(Eu.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new di;new Ze;const ba=[{id:0,keyword:"Ambition",text_description:"L’ambizione non mi è mai mancata, specialmente se si considera che uno dei miei obiettivi principali è quello di essere pienamente soddisfatto dal lavoro e dei progetti che faccio, ma chiaramente questo non è sempre semplice. <br>Uno dei passi che ho intrapreso per provare ad avvicinarmi al sopracitato obiettivo è stato proprio quello di aprire partita IVA parallelamente al mio lavoro da dipendente full time. Un tentativo che reputo riuscito, considerando che sono riuscito a soddisfare varie necessità personali percepite a livello lavorativo, come quella di avere maggiore ownership sui progetti e una gestione omnicomprensiva del lavoro: a partire dalle prime chiamate esplorative, alla fase di trattative (scope di progetto, durata, compenso, milestones), fino alla consegna del progetto stesso. <br><br>Per molti questi aspetti “laterali”, ma comunque intrinsecamente legati alla professione, possono risultare un impiccio. Invece per me, la loro gestione ha rappresentato un’evoluzione naturale della mia figura lavorativa. Un tassello fondamentale per raggiungere la mia ambizione, quella di lavorare a qualcosa ed esserne soddisfatto, il che si concretizza nel riuscire a produrre un progetto che mi renda orgoglioso di averci messo mano."},{id:1,keyword:"Excellence",text_description:"Questo è un aneddoto che spesso mi capita di rievocare con piacere con i diretti interessati, nonostante la situazione in quel momento fosse tutto meno che tranquilla e rilassata. Un progetto di gruppo universitario che era partito un po’ a rilento, in cui il team faticava un po’ ad ingranare per via di gusti, opinioni e ad oggi possiamo ammettere, anche un po’ di ego personale. La collaborazione all’interno del gruppo comunque si consolida, dopo una fase iniziale di conoscenza e assestamento, purtroppo questo aveva fatto sì che il tempo rimasto a disposizione fosse sempre meno. <br>E qui il nocciolo della questione, il progetto (prototipo, landing page, branding e video promo di un servizio) eravamo riusciti ad instradarlo, noi ci vedevamo tanto potenziale e perciò volevamo un prodotto finale che andasse oltre le aspettative, che eccellesse. Volevamo che gli utenti navigando il prototipo quasi non si accorgessero di star interagendo con un mockup, ma pensassero fosse già un prodotto sviluppato. Tutto ciò però si scontrava ampiamente con le tempistiche, poiché prototipi completamente interattivi hanno una lunga coda di lavoro. Perciò la decisione, quasi subconscia, è stata quella di lavorare al progetto fino a tarda notte quasi quotidianamente per 2 mesi e mezzo. <br> Non consegnare un prodotto che eccedesse le aspettative di tutti quando questa possibilità c’era, avrebbe rappresentato per sempre una grande occasione sprecata. Sono convinto che valga sempre la pena fare quello sforzo in più per raggiungere il risultato."},{id:2,keyword:"Caring",text_description:"Ho sempre avuto un atteggiamento di premura verso le persone che mi circondano. Di recente questo si è dimostrato con il cercare o passare dei clienti/progetti freelance ad amici/colleghi che magari stavano passando un periodo un po’ più scarico e potevano beneficiare in primis dell’entrata economica. Un comportamento che mi viene naturale, ma che ho avuto la fortuna di sperimentare sulla mia pelle a parti inverse quando ero io a chiedere una mano.<br> <br> Totalmente a margine, poiché nella presentazione alla voce “Caring” si parla di “Ti prendi cura dei colleghi…”, vorrei anche menzionare il fatto che 2 mesi fa ho riparato e sostituito il lavandino di un collega che mi aveva chiesto una mano. <br>Sono sicuro che questo non sia uno dei primi esempi che vi verrebbe in mente, però ho pensato fosse simpatico da citare."},{id:3,keyword:"Growth",text_description:"È quasi ironico per me pensare quanto calzi a pennello questa company behavior, specialmente guardando come ho trascorso gli ultimi 6-9 mesi. Dall’inizio del 2025 ho quasi smaniato per la mia crescita personale, a livello sia di hard- che soft-skill. <br> Mi sono attivato autonomamente per partecipare a conferenze; ho cercato, trovato e frequentato talk ed eventi di networking per conoscere esperti del settore, confrontarmi con loro e beneficiare della loro esperienza; ho seguito corsi online per accrescere e migliorare le mie competenze come ad esempio quelle di product manager. <br> In generale quest’anno ho dovuto affrontare varie sfide e difficoltà che mi hanno fatto crescere molto, sia da un punto di vista personale che lavorativo. Trovo difficile trasmettere il mio personale “growth mindset” attraverso il racconto di un singolo episodio proprio per come affronto la crescita personale (o in generale quasi tutte le company behaviors citate): è un impegno costante, una spinta sempre presente."},{id:4,keyword:"Courage",text_description:"Mi trovo a parlare di quella che probabilmente è l’esperienza un po’ più eclatante dal punto di vista del coraggio e dell’intraprendenza. A 20 anni, finita la maturità sapevo di voler studiare design a Milano, però prima di iniziare con l’università ero determinato a fare un’esperienza di vita, sebbene questa tipologie di cose non siano molto incoraggiate in Italia. Volevo andare in Australia a fare un anno di quello che in gergo viene chiamato “Work&Travel”, appunto lavorare e una volta messi sufficienti soldi da parte viaggiare un po’. <br>Così ho fatto, mi sono trasferito a Melbourne dove ho lavorato 3 mesi sostanzialmente come muratore (sono molto dedito a lavori manuali / fai da te, come si evince dalla storia del bagno del collega). Dopo questo primo periodo ho viaggiato con un minivan un mese, arrivando con un amico fino a Brisbane, città scelta perché avevo trovato lavoro come “nanny”, cioè un/a babysitter che di base abita con la famiglia. La scelta era ricaduta su questo perché ciò mi avrebbe permesso di avere vitto e alloggio, per fortuna non in condivisione con altre 6 persone e soprattutto sufficiente tempo libero per iniziare a studiare e prepararmi per i test di ingresso del Politecnico. <br> Un piano impeccabile sulla carta, se non fosse per il fatto che la famiglia non aveva capito che io fossi un ragazzo e non una ragazza e questo rappresentava per loro un enorme problema. Vi risparmio i dettagli delle 6 ore che sono state tra le più tese della mia vita, ma alla fine la situazione si è risolta più o meno bene, riuscendo a trovare una soluzione che andasse bene sia per me che per la famiglia."},{id:5,keyword:"Proactivity",text_description:"Questa è una behavior che mi sembra possa fare da collante tra tutte le altre a cui ho già risposto fino ad ora e che sottende molti comportamenti già menzionati precedentemente. N.B. Le behavior sono state scritte in ordine come elencate all’interno della presentazione. <br><br>I due esempi che invece vorrei portare a dimostrazione della mia proattività sono uno da un contesto più personale, mentre il secondo lavorativo. <br> Alla conferenza IEEE VIS 2024 di Vienna, una speaker all’interno del proprio panel ha parlato di tipologie differenti di viaggiatori, tra cui il “Proactive traveler”. Mi rispecchio molto nella definizione che è stata data di questo viaggiatore, cioè una persona che pianifica il viaggio, le tappe, le cose da vedere con anticipo prima di partire. Una persona che sa cosa andrà a fare mentre è in viaggio così da ottimizzarlo e non perdere tempo a cercare cosa fare e vedere. <br> Questo comportamento fa pienamente parte della mia persona e del mio approccio lavorativo, per ottimizzare passaggi di consegne, anticipare comunicazione e in generale pianificare le attività. È esattamente quello che ho fatto per sfruttare al meglio uno scalo di 7h a San Francisco. Mi ero preparato un breve itinerario da poter vedere, mi ero informato e avevo acquistato un pass giornaliero per le city bikes, così da ottimizzare costi e tempistiche di spostamento. Infine, mi ero salvato un paio di posti in cui poter mangiare in base al quartiere della città in cui sarei stato in quel momento. <br><br>Il secondo esempio è una situazione molto più classica: ho segnalato con largo anticipo una criticità che si stava venendo a delineare, in quanto la metodologia usata iniziava a non essere compatibile con la logica di funzionamento del software che stavamo utilizzando, in questo caso Doxee. Questo ha poi portato a un consistente refactoring del contenuto e dell’impostazione dello stesso per evitare che il software continuasse a crashare a intervalli di 40 minuti. La soluzione è stata applicare principi di atomic design all’interno di un contesto di generazione di polizze assicurative, composte da contenuti statici e dinamici. Questo ha permesso di avere del contenuto dinamico riutilizzabile e riadattabile, riducendo considerevolmente il tempo necessario e l’errore umano."}],Sr=document.getElementById("canvas"),zo=Sr.clientWidth,Go=Sr.clientHeight,Pn=new Vh,Dn=new Qt(45,zo/Go);Dn.position.z=6.5;Dn.position.y=6;const xn=new Hg({antialias:!0});xn.setSize(zo,Go);xn.setClearColor(15461355,1);const Mr=new Jg(Dn,xn.domElement);Mr.enableZoom=!0;Mr.maxDistance=9;Mr.minDistance=5;document.addEventListener("wheel",()=>{var s=Mr.target.distanceTo(Mr.object.position);console.log(s)});var ws=!1,vs=!1,Ta={x:0,y:0},wr=!0;xn.domElement.addEventListener("mousedown",s=>{ws=!0,wr=!1});xn.domElement.addEventListener("mouseup",s=>{ws=!1,console.log(vs),vs&&setTimeout(()=>{wr=!0},800),vs=!1});xn.domElement.addEventListener("mousemove",s=>{if(ws){var e={x:s.offsetX-Ta.x,y:s.offsetY-Ta.y};const t=.005;Pn.rotation.y+=e.x*t,Pn.rotation.x+=e.y*t,vs=!0}Ta={x:s.offsetX,y:s.offsetY}});Sr.appendChild(xn.domElement);var Gn;function sv(){return new Promise((s,e)=>{new Kg().load("../assets/elefantino.obj",r=>{Gn=r,Gn.traverse(function(n){n.isMesh&&(n.material=new tu({color:16777215,wireframe:!1}))}),Gn.scale.set(5,5,5),Gn.position.set(0,-.5,0),Gn.rotation.y=Math.PI/2,Pn.add(Gn),console.log("OBJ model loaded"),s(Gn)})})}sv().then(()=>{console.log("Model loaded"),Au()}).catch(s=>{console.error("Error loading model:",s)});const Dc=3,Rr=new oi,Vo=new oi;for(let s=0;s<ba.length;s++){const e=s/ba.length*Math.PI*2,t=Math.cos(e)*Dc,r=.5,n=Math.sin(e)*Dc,{keyword:i,text_description:a}=ba[s],o=new Fo(.1,45,45),c=new tu({color:255}),l=new Ut(o,c);l.position.set(t,r,n),l.userData={keyword:i,text_description:a},Rr.add(l);const u=new Eu;u.text=l.userData.keyword.toString(),u.fontSize=.2,u.font="CSS/fonts/AG/ApfelGrotezk-Fett.woff",u.color=255,u.position.set(t,r-.3,n),u.anchorX="center",u.anchorY="top",u.rotation.x=-Math.PI/4,u.sync(),Vo.add(u)}Pn.add(Rr);Pn.add(Vo);const av=new tf(16777215);Pn.add(av);const bu=new au(16777215,3);bu.position.set(-2,1,-1);Pn.add(bu);const Tu=new au(16777215,1);Tu.position.set(1,-1,3);Pn.add(Tu);let ri=new Ye,yr=new sf,Dt=null;window.addEventListener("mousemove",s=>{ri.x=s.clientX/zo*2-1,ri.y=-(s.clientY/Go)*2+1;const e=20;Yi.style.transform=`translate(-50%, -50%) rotateX(${-ri.y*e}deg) rotateY(${ri.x*e}deg)`,yr.setFromCamera(ri,Dn);const t=yr.intersectObjects(Rr.children);if(t.length>0){document.body.style.cursor="pointer";const r=t[0].object;Dt!==r&&(r.material.color.set(3355443),console.log("yellohhh")),Dt=r,Dt.material.color.set(1645055),gsap.to(Dt.scale,{x:1.2,y:1.2,z:1.2,duration:.3})}else document.body.style.cursor="default",Dt&&(Dt.material.color.set(255),gsap.to(Dt.scale,{x:1,y:1,z:1,duration:.3}),Dt=null)});xn.domElement.addEventListener("click",s=>{ov()});function ov(){yr.setFromCamera(ri,Dn);const s=yr.intersectObjects(Rr.children);if(s.length>0){document.body.style.cursor="pointer",Dt=s[0].object;const e=Dt.userData.keyword,t=Dt.userData.text_description;uv(e,t),gsap.to(Dt.scale,{x:1.2,y:1.2,z:1.2,duration:.3})}else document.body.style.cursor="default",Dt&&(gsap.to(Dt.scale,{x:1,y:1,z:1,duration:.3}),Dt=null)}const Yi=document.getElementById("3dPopUp"),lv=Yi.querySelector(".popUp-title"),cv=Yi.querySelector(".popUp-descriptionText");function uv(s,e){console.log("This should open popup for "+s),console.log("This is the description: "+e),wr=!1,lv.textContent=s,cv.innerHTML=e,Yi.classList.remove("hidden")}const hv=Yi.querySelector(".close-button");hv.addEventListener("click",()=>{Yi.classList.add("hidden"),wr=!0});function Au(){requestAnimationFrame(Au),wr&&!ws&&(Gn.rotation.y+=.004,Rr.rotation.y+=.001,Vo.rotation.y+=.001),yr.setFromCamera(ri,Dn),xn.render(Pn,Dn)}function fv(){const s=Sr.clientWidth,e=Sr.clientHeight;Dn.aspect=s/e,Dn.updateProjectionMatrix(),xn.setSize(s,e),console.log("resizing")}window.addEventListener("resize",fv);
