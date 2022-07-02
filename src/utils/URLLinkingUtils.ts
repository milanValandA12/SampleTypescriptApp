import { Linking } from "react-native";

const URLLinkingUtils = {
    openURL: (url:string): Promise<boolean> => {
        return new Promise((resolve) => {
            Linking.canOpenURL(url).then(() => {
                Linking.openURL(url);
                resolve(true);
            })
            .catch(() => {
                resolve(false);
            })
        })
    }
};

export default URLLinkingUtils;
