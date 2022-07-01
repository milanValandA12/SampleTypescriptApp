import React from "react";
import { FlatList, View } from "react-native";
import useGetRepository from "../../../hooks/repository/useGetRepository";
import AppTextInput from "../../common/TextInput/AppTextInput";
import RepositoryItem, { RepositoryItemProp } from "./item";

const RepositoryList = () => {
    const { data, fetching, query, setQuery, getRepository } = useGetRepository();
    console.log({ data, fetching })
    return (
        <View>
            <AppTextInput
                value={query}
                onChangeText={text => setQuery(text)}
                placeholder="search"
            />
            <FlatList
                data={data}
                renderItem={({item}) => <RepositoryItem item={item} />}
                refreshing={fetching}
                onRefresh={() => getRepository()}
            />
        </View>
    )
}

export default RepositoryList;