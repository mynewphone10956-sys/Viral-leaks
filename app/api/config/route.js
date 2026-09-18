import {authorized,getConfig,saveConfig} from '../../../lib/config';
export const dynamic='force-dynamic';
export async function GET(req){if(!authorized(req))return Response.json({error:'Wrong password'},{status:401});return Response.json(await getConfig())}
export async function POST(req){if(!authorized(req))return Response.json({error:'Wrong password'},{status:401});const data=await req.json();if(!data.siteName||!Array.isArray(data.videos))return Response.json({error:'Invalid settings'},{status:400});await saveConfig(data);return Response.json({ok:true})}
