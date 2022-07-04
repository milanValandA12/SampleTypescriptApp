import { baseURL } from "../../../src/config/constants/api.constants";

test('API Constant test: Check base URL set', () => {
    expect(baseURL).toBeDefined();
});