import { Pagination } from './../pagination/pagination.interface';
import { Location } from './location.interface';

export interface EndpointLocations {
    pagination: Pagination;
    results: Location[];
}
