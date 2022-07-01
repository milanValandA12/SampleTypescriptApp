import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RepositoryItemProp } from "../../components/repository/list/item";
import { PaginationInterface } from "../../interfaces/common/Pagination.interface";
import { getRepositoryRequest } from "../../screens/main/home/home.actions";

const useGetRepository = () => {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('');
    const [order, setOrder] = useState('');

    const dispatch = useDispatch();
    const repositoryData = useSelector((state: any) => state.getRepository);

    const getRepository = useCallback(() => {
        const pagationQuery : PaginationInterface = {
            query,
            page,
            sort,
            order
        }
        dispatch(getRepositoryRequest(pagationQuery));
    },[query, page, sort, order]);

    useEffect(() => {
        if (query && query.length > 3) {
            getRepository()
        }
    }, [getRepository, query, page, sort, order]);

    return {
        getRepository,
        data: repositoryData?.data?.items,
        fetching: repositoryData?.fetching,
        query,
        page,
        sort,
        order,
        setQuery,
        setOrder,
        setSort,
        setPage,
    }
};

export default useGetRepository;
