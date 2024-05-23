import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import test from "node:test";

import { domains, isPrivateEmail, isPublicEmail } from "../src";

test("public-email-list", async (t) => {
  await t.test("public domains", async (tt) => {
    for (const domain of domains) {
      await tt.test(domain, () => {
        const email = `${randomUUID()}@${domain}`;
        assert(isPublicEmail(email));
        assert(!isPrivateEmail(email));
      });
    }
  });

  await t.test("private domains", async (tt) => {
    const domain = `${randomUUID()}.com`;
    await tt.test(domain, () => {
      const email = `${randomUUID()}@${domain}`;
      assert(!isPublicEmail(email));
      assert(isPrivateEmail(email));
    });
  });
});
