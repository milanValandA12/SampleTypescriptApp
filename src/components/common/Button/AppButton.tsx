import { Button, ButtonProps, StyleSheet } from "react-native";

interface AppButtonProps {
    loading: boolean;
    textKey: string;
}
const AppButton = (props: ButtonProps & AppButtonProps) => {
    return (
        <Button
            title={props.loading ? 'Please wait...' : props.textKey}
            onPress={props.onPress}
        />
    );
}

const styles = StyleSheet.create({
});

export default AppButton;