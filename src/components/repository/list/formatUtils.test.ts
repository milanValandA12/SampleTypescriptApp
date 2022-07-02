import formatUtils from "./formatUtils";

const largeString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

describe('formatUtils Repository item test', () => {
    test('formatUtils Repository item test: convertTagsToString when array empty', () => {
        const tags = formatUtils.convertTagsToString([])
        expect(tags).toBe('NA');
    });

    test('formatUtils Repository item test: convertTagsToString when argument is not array', () => {
        const tags = formatUtils.convertTagsToString('not array')
        expect(tags).toBe('NA');
    });

    test('formatUtils Repository item test: convertTagsToString when argument array with strings', () => {
        const tags = formatUtils.convertTagsToString(['tag1', 'tag2'])
        expect(tags).toBe('tag1, tag2');
    });

    test('formatUtils Repository item test: getDescription when string given', () => {
        const descrption = formatUtils.getDescription('Testing')
        expect(descrption).toBe('Testing');
    });

    test('formatUtils Repository item test: getDescription when large string given', () => {
        const descrption = formatUtils.getDescription(largeString)
        expect(descrption).toBe('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...');
    });
});
