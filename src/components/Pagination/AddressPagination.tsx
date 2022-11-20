import { useContext, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AddressContext } from '../../context/AddressContext';

export const PersonaPagination = () => {
    const { totalPages, getAddressList } = useContext(AddressContext);
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
        getAddressList(pageNumber);
    }, [pageNumber]);

    return (
        <div>
            {pages.map((item) => (
                <Link key={item} to={`/address?page=${item}`}>
                    {item}
                </Link>
            ))}
        </div>
    )
}
