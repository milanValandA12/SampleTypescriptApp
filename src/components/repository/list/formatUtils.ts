const formatUtils = {
    convertTagsToString: (tags: string[]) => {
        if (!Array.isArray(tags)) {
            return 'NA';
        }
        if (Array.isArray(tags) && tags.length <= 0) {
            return 'NA';
        }
        return tags.join(', ');
    },
    getDescription: (text: string) => {
        if (text?.length > 100) {
            return text.substring(0, 100) + '...';
        }
        return text;
    }
};

export default formatUtils;
