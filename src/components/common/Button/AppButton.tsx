import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native";
import theme from "../../../config/constants/theme.contants";
import AppTypography from "../Typography/AppTypography";

interface AppButtonProps {
    loading: boolean;
    textKey: string;
    title: string;
}
const AppButton = (props: TouchableOpacityProps & AppButtonProps) => {
    const { t } = useTranslation();
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress}
        >
            <AppTypography style={styles.text}>
                {props.loading ? t('commons:loading') : props.textKey}
            </AppTypography>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.primary,
        minWidth: 100,
        padding: 8,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        height: 40,
    },
    text: {
        color: theme.secondary
    }
});

export default AppButton;