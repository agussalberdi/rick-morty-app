import { Character } from './character.interface';
import { Pagination } from './pagination.interface';

export interface EndpointCharacters {
    pagination: Pagination;
    results: Character[];
}
