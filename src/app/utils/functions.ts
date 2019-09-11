import { ProviderResultItem } from '../core/providers/providers-result.type';
import { SortDirectionEnum, SortInterface } from '../root-store/filters-store/state';

/**
 * Sorting with help of localeCompare
 * @param items
 * @param sort
 */
export const customSort = (
    items: ProviderResultItem[],
    sort: SortInterface,
): ProviderResultItem[] => {
    const arrayToSort = [ ...items ];

    arrayToSort.sort((a: ProviderResultItem, b: ProviderResultItem) => {
        const compare = ('' + a[sort.sortBy]).localeCompare(b[sort.sortBy] + '');

        return sort.direction === SortDirectionEnum.ASC ? compare : compare * -1;
    });

    return arrayToSort;
};
