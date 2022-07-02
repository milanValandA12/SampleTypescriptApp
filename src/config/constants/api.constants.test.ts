import { baseURL } from "./api.constants";

test('API Constant test: Check base URL set', () => {
    expect(baseURL).toBeDefined();
});