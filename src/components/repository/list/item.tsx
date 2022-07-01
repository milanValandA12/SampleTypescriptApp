import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import URLLinkingUtils from "../../../utils/URLLinkingUtils";
import AppTypography from "../../common/Typography/AppTypography";
import formatUtils from "./formatUtils";

export interface RepositoryItemProp {
    item: {
        created_at: string;
        description: string;
        full_name: string;
        open_issues_count: number;
        language: string;
        topics: string[];
        html_url: string;
    }
}

const RepositoryItem = ({item}: RepositoryItemProp) => {
    return (
        <View style={style.container}>
            <AppTypography>
                {item.full_name} ({item.language})
            </AppTypography>
            <AppTypography style={style.description}>
                {formatUtils.getDescription(item.description)}
            </AppTypography>
            <AppTypography style={style.openIssue}>
                Open Isssue: {item.open_issues_count}
            </AppTypography>
            <AppTypography style={style.tags}>
                Tags: {formatUtils.convertTagsToString(item.topics)}
            </AppTypography>
            <Pressable
                onPress={() => URLLinkingUtils.openURL(item.html_url)}
            >
                <AppTypography style={style.link}>
                    {item.html_url}
                </AppTypography>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        margin: 4,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        padding: 8,
    },
    description: {
        color: 'gray',
        marginVertical: 8,
    },
    tags: {
        marginVertical: 4,
    },
    openIssue: {
        marginVertical: 4,
    },
    link: {
        textDecorationLine: 'underline'
    }
});

export default RepositoryItem;
