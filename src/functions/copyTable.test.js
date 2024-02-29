import copyElement from "./copyTable";
import { describe, expect, expectTypeOf, it, test, vi } from "vitest";
import { JSDOM } from "jsdom";

// Create DOM environment with JSDOM
const dom = new JSDOM();
global.document = dom.window.document;

// Mock the navigator object
global.navigator = {
  clipboard: {
    write: vi.fn(), // Mock the clipboard.write method
  },
};

// Define a mock ClipboardItem class
class MockClipboardItem {
  constructor(data) {
    this.data = data;
  }
}
global.ClipboardItem = MockClipboardItem;

describe("copyElement", () => {
  it("copies the inner text of an element to the clipboard", () => {
    const el = document.createElement("div");
    el.innerText = "Test text";
    copyElement(el);
    expect(navigator.clipboard.write).toHaveBeenCalledWith([
      new MockClipboardItem({
        "text/plain": new Blob(["Test text"], { type: "text/plain" }),
      }),
    ]);
  });
});
