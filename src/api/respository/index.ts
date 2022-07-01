
import { api } from "..";
import { PER_PAGE_RECORDS } from "../../config/constants/pagination.contants";
import { PaginationInterface } from "../../interfaces/common/Pagination.interface";

export const getRepositoryByCriteria = (body: PaginationInterface) => {
  return api.get(`search/repositories?q=${body.query}&page=${body.page}&per_page=${PER_PAGE_RECORDS}&sort=${body.sort}&order=${body.order}`);
};
