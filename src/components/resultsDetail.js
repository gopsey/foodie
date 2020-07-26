import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyling} source={ props.image_url ? { uri: props.image_url } : null} />
            <Text style={styles.titleStyle}>{props.restaurantName}</Text>
            <Text style={styles.titleStyle}>{props.rating} stars, {props.reviews_count} reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyling: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    titleStyle: {
        fontWeight: "bold"
    },
    container: {
        marginLeft: 15,
        marginBottom: 10
    }
});

export default ResultsDetail;
