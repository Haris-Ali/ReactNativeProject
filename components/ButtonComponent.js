import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
    if (props.disabled) 
        var btnColor = 'gray'
    else
        var btnColor = props.color != undefined ? props.color : 'cornflowerblue';
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPressEvent} disabled={props.disabled}>
            <View style={{ ...styles.buttonContainer, backgroundColor: btnColor }}>
                <Text style={{fontSize: props.textSize, color: props.textColor, fontFamily: props.textFamily}}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 15,
        padding: 10,
        borderRadius: 50,
    },

})

export default CustomButton;