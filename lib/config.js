import {list,put} from '@vercel/blob';
export const defaults={siteName:'Viral Video Hub',heading:'Watch the latest clips',description:'Preview the newest videos and download the app securely.',apkUrl:'',videos:[1,2,3,4].map((n)=>({title:`Featured video 0${n}`,video:'',poster:'',quality:n===2?'1080p':'HD',duration:'00:30'}))};
export async function getConfig(){try{const {blobs}=await list({prefix:'settings/site-config.json',limit:1});if(!blobs[0])return defaults;const r=await fetch(`${blobs[0].url}?t=${Date.now()}`,{cache:'no-store'});return r.ok?await r.json():defaults}catch{return defaults}}
export async function saveConfig(data){await put('settings/site-config.json',JSON.stringify(data),{access:'public',addRandomSuffix:false,allowOverwrite:true,contentType:'application/json'});return data}
export function authorized(req){return req.headers.get('authorization')===`Bearer ${process.env.ADMIN_PASSWORD||'admin123'}`}
