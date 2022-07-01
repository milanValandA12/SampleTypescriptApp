import React from "react";
import { StyleSheet, TextInput, TextInputAndroidProps, TextInputIOSProps, TextInputProps } from "react-native";

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
        borderColor: '#000000',
        padding: 8,
        height: 50,
        borderRadius: 12,
        marginBottom: 12,
    },
});

export default AppTextInput;