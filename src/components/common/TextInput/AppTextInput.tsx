import React from "react";
import { StyleSheet, TextInput, TextInputAndroidProps, TextInputIOSProps, TextInputProps } from "react-native";
import theme from "../../../config/constants/theme.contants";

const AppTextInput = (props: TextInputProps) => {
    return (
        <TextInput
            onChangeText={props.onChangeText}
            style={styles.textInput}
            value={props.value}
            placeholder={props.placeholder}
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: theme.primary,
        padding: 8,
        height: 50,
        borderRadius: 12,
        marginBottom: 12,
    },
});

export default AppTextInput;