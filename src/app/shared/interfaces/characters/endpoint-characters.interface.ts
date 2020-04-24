import { Character } from './character.interface';
import { Pagination } from '../pagination/pagination.interface';

export interface EndpointCharacters {
    pagination: Pagination;
    results: Character[];
}
