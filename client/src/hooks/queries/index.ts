
import { useInfiniteQuery } from "react-query";

import { getMonsters } from "../../api/dnd";

export const useGetAllMonsters = (filters: any) => useInfiniteQuery(['monsters', filters], ({ pageParam = filters }) => getMonsters(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
        if (lastPage.data.next) {
            const pageNumber = allPages.length + 1
            return { ...filters, page: pageNumber }
        } else {
            return undefined
        }
    }
})