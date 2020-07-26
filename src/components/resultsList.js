import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import ResultsDetail from "../components/resultsDetail";

const ResultsList = (props) => {
    /* 
        withNavigation is used to access props from this component for navigation 
        instead of passing down from parent as props
    */
    
    // To return null when no data is returned for a category
    if (!props.results) { return null }

    return (
        <View>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.results}
                keyExtractor={(result) => result.restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => props.navigation.navigate('RestaurantScreen', { id: item.restaurant.id })}>
                            <ResultsDetail
                                restaurantName={item.restaurant.name}
                                image_url={item.restaurant.featured_image}
                                reviews_count={item.restaurant.all_reviews_count}
                                rating={item.restaurant.user_rating.aggregate_rating}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
});

export default withNavigation(ResultsList);
