import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import zomato from "../api/zomato";
import { ScrollView } from "react-native-gesture-handler";

const RestaurantScreen = (props) => {
    let restaurantId = props.navigation.getParam('id');
    const [response, setResponse] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const getRestaurantDetails = async (restaurantId) => {
        try {
            const response = await zomato.get('/restaurant', {
                params: {
                    res_id: restaurantId
                }
            });
            setResponse(response.data);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Sorry, Something went wrong!');
        }
    }
    useEffect(() => {
        getRestaurantDetails(restaurantId);
    }, []);

    if (!response) { return null }

    return (
        <>
            <View style={styles.appbg}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.titleStyle}>{response.name}</Text>
                    <Image source={{ uri: response.featured_image }} style={styles.imageStyling} />
                    <Text style={styles.titleStyle}>{response.location.address}</Text>
                    <Text style={styles.titleStyle}>{response.timings}</Text>
                    <Text style={styles.titleStyle}>{response.phone_numbers}</Text>
                    <FlatList
                        data={response.highlights}
                        keyExtractor={(result) => result}
                        renderItem={({ item }) => {
                            return (
                                <Text>{item}</Text>
                            );
                        }}
                    />
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    appbg: {
        flex: 1,
        marginHorizontal: 15
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10
    },
    imageStyling: {
        height: 300,
        marginVertical: 5
    }
});

export default RestaurantScreen;
