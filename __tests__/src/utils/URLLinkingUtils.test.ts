import URLLinkingUtils from "../../../src/utils/URLLinkingUtils";

const validURL = 'https://google.com';

describe('URLLinkingUtils test', () => {
    test('URLLinkingUtils test: Valid URL', async () => {
        const isValid = await URLLinkingUtils.openURL(validURL);
        expect(isValid).toBe(true);
    });
});
