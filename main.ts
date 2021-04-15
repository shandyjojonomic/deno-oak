import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { Controller } from './controller.ts';

const app = new Application();
const router = new Router();
const cont = new Controller();

router.get('/call', cont.call);

app.use(router.routes());
app.use(router.allowedMethods());

console.log('port 8000');
await app.listen({ port: 8000 });
