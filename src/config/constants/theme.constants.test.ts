import theme from "./theme.contants";

test('Theme Constant test: Check base URL set', () => {
    expect(theme.primary).toBeDefined();
    expect(theme.secondary).toBeDefined();
    expect(theme.primaryLight).toBeDefined();
    expect(theme.link).toBeDefined();
});