import { RouterContext } from 'https://deno.land/x/oak/mod.ts';

class Controller {
  private name: string;
  constructor() {
    this.name = 'abc';
  }

  async call(ctx:any) {
    ctx.response.status = 200;
    ctx.response.body = this.name;
  }
}

export {Controller};