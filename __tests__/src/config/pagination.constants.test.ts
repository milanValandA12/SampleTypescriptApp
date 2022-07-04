import { PER_PAGE_RECORDS } from "../../../src/config/constants/pagination.contants";

test('Paginaion Constant test: Check base URL set', () => {
    expect(PER_PAGE_RECORDS).toBe(20);
});