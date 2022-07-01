import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

const AppTypography = (props: TextProps) => {
    return (
        <Text style={props.style}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({});

export default AppTypography;