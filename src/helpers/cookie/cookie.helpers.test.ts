import { beforeEach, describe, expect, it } from "vitest";

import { checkCookie } from "./checkCookie.helper";
import { deleteCookie } from "./deleteCookie.helper";
import { getCookie } from "./getCookie.helper";
import { setCookie } from "./setCookie.helper";

const COOKIE_NAME = "test_cookie";

// reset before each test
beforeEach(() => {
  deleteCookie(COOKIE_NAME);
  document.cookie = "";
});

describe("cookie helpers", () => {
  it("setCookie and getCookie work together", () => {
    setCookie({ name: COOKIE_NAME, value: "value", hours: 1 });
    expect(getCookie(COOKIE_NAME)).toBe("value");
  });

  it("checkCookie returns true if cookie exists", () => {
    setCookie({ name: COOKIE_NAME, value: "value", hours: 1 });
    expect(checkCookie(COOKIE_NAME)).toBe(true);
  });

  it("checkCookie returns false if cookie does not exist", () => {
    expect(checkCookie(COOKIE_NAME)).toBe(false);
  });

  it("deleteCookie removes cookie", () => {
    setCookie({ name: COOKIE_NAME, value: "value", hours: 1 });
    deleteCookie(COOKIE_NAME);
    expect(getCookie(COOKIE_NAME)).toBeUndefined();
  });
});
