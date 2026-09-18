import {getConfig} from '../lib/config';import Landing from './landing';
export const dynamic='force-dynamic';
export default async function Page(){return <Landing initial={await getConfig()}/>}
