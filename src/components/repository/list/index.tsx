import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, View } from "react-native";
import useGetRepository from "../../../hooks/repository/useGetRepository";
import AppTextInput from "../../common/TextInput/AppTextInput";
import RepositoryItem, { RepositoryItemProp } from "./item";

const RepositoryList = () => {
    const { data, fetching, query, setQuery, getRepository } = useGetRepository();
    const { t } = useTranslation();
    return (
        <View>
            <AppTextInput
                value={query}
                onChangeText={text => setQuery(text)}
                placeholder={t('common:search')}
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