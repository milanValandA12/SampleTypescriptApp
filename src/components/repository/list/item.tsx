import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../../../config/constants/theme.contants";
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
    const { t } = useTranslation();
    return (
        <View style={style.container}>
            <AppTypography>
                {item.full_name} ({item.language})
            </AppTypography>
            <AppTypography style={style.description}>
                {formatUtils.getDescription(item.description)}
            </AppTypography>
            <AppTypography style={style.openIssue}>
                {t('home:openIssue')}: {item.open_issues_count}
            </AppTypography>
            <AppTypography style={style.tags}>
                {t('home:tags')}: {formatUtils.convertTagsToString(item.topics)}
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
        borderColor: theme.primary,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: theme.secondary,
        padding: 8,
    },
    description: {
        color: theme.primaryLight,
        marginVertical: 8,
    },
    tags: {
        marginVertical: 4,
    },
    openIssue: {
        marginVertical: 4,
    },
    link: {
        textDecorationLine: 'underline',
        color: theme.link,
    }
});

export default RepositoryItem;
