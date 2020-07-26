import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = (props) => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={30} style={styles.iconStyle} />
            <TextInput
                placeholder="Search"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={props.onChangeSearchTerm}
                onEndEditing={props.onSubmitSearchTerm}
                style={styles.inputStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginVertical: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;
