import { Linking } from "react-native";

const URLLinkingUtils = {
    openURL: (url:string) => {
        Linking.canOpenURL(url).then(() => {
            Linking.openURL(url);
            return true;
        })
        .catch(() => {
            return false;
        })
    }
};

export default URLLinkingUtils;
