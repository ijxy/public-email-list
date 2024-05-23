import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import test from "node:test";

import * as pel from "../src";

test("public-email-list", async (t) => {
  await t.test("public domains", async (tt) => {
    for (const domain of pel.domains) {
      await tt.test(domain, () => {
        const email = `${randomUUID()}@${domain}`;
        assert(pel.isPublicEmail(email));
        assert(!pel.isPrivateEmail(email));
      });
    }
  });

  await t.test("private domains", async (tt) => {
    const domain = `${randomUUID()}.com`;
    await tt.test(domain, () => {
      const email = `${randomUUID()}@${domain}`;
      assert(!pel.isPublicEmail(email));
      assert(pel.isPrivateEmail(email));
    });
  });
});
