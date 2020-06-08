import { Episode } from './episode.interface';
import { Pagination } from '../pagination/pagination.interface';

export interface EndpointEpisodes {
    pagination: Pagination;
    results: Episode[];
}
