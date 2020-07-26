import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/resultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.restaurant.price_range === price;
        });
    };

    return (
        <>
            <View style={styles.appbg}>
                <SearchBar
                    searchTerm={searchTerm}
                    onChangeSearchTerm={setSearchTerm}
                    onSubmitSearchTerm={() => { searchApi(searchTerm); }}
                />
                {/* {errorMessage ? <Text>{errorMessage}</Text> : <Text>We have found {results.length} results</Text>} */}
                <ScrollView>
                    <ResultsList
                        title="Cost Effective"
                        results={filterResultsByPrice(1)}
                    />
                    <ResultsList
                        title="Bit Pricer"
                        results={filterResultsByPrice(2)}
                    />
                    <ResultsList
                        title="Big Spender"
                        results={filterResultsByPrice(3)}
                    />
                    <ResultsList
                        title="Richie Rich"
                        results={filterResultsByPrice(4)}
                    />
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    appbg: {
        backgroundColor: "#ffffff",
        flex: 1
    }
});

export default SearchScreen;
