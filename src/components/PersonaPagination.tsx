import { useContext, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PersonasContext } from '../context/PersonasContext';

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
        <div>
            {pages.map((item) => (
                <Link key={item} to={`/dashboard?page=${item}`}>
                    {item}
                </Link>
            ))}
        </div>
    )
}
