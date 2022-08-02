import { render } from "@testing-library/react";
import React from "react";

import Icon from "../Icon";

describe("Icon", () => {
  test("Renders to screen", () => {
    const { baseElement } = render(<Icon name='arrow-left' testId='icon' />);
    expect(baseElement).toBeTruthy();
  });
});
