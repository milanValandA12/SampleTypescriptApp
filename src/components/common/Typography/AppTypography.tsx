import { StyleSheet, Text, TextProps } from "react-native";

const AppTypography = (props: TextProps) => {
    return (
        <Text>{props.children}</Text>
    );
}

const styles = StyleSheet.create({});

export default AppTypography;