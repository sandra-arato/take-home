import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { accounts, categories, trackers, transactions } from "./mockData";

const app = new Hono();

app
  .get("/accounts", (c) => {
    return c.json(accounts);
  })
  .get("/categories", (c) => {
    return c.json(categories);
  })
  .get("/transactions", (c) => {
    return c.json(transactions);
  })
  .get('/trackers', (c) => { return c.json(trackers) });

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
