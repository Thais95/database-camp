import { useContext, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PersonasContext } from '../../../context/PersonasContext';
import { PaginationContainer } from './PersonaPagination.styled';

export const PersonaPagination = () => {
    const { totalPages, getPersonasList } = useContext(PersonasContext);
    const [searchParam] = useSearchParams();
    const pageNumber = (searchParam.get('page') || '1');

    const pages = useMemo(() => {
        const pageList: number[] = [];

        for (let i = 1; i <= totalPages; i++) {
            pageList.push(i);
        }
        return pageList

    }, [totalPages]);

    useEffect(() => {
        getPersonasList(pageNumber);
    }, [pageNumber]);

    return (
        <PaginationContainer>
            {pages.map((item) => (
                <Link key={item} to={`/people?page=${item}`}>
                    {item}
                </Link>
            ))}
        </PaginationContainer>
    )
}
