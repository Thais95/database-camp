import { useContext, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PersonasContext } from '../../../context/PersonasContext';
import { PaginationContainer } from './PersonaPagination.styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import  { BsThreeDots } from 'react-icons/bs'

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
            {(pageNumber === '1') ? 
            (<>
                <a><FaChevronLeft className='chevron' fill='#ffffff' size={18}/></a>
                <Link style={{color: 'var(--detail-color)'}} to ={`/people?page=${pageNumber}`}>{pageNumber}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 1}`}>{Number(pageNumber) + 1}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 2}`}>{Number(pageNumber) + 2}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 3}`}>{Number(pageNumber) + 3}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 4}`}>{Number(pageNumber) + 4}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 5}`}>{Number(pageNumber) + 5}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 6}`}>{Number(pageNumber) + 6}</Link>
                <a><BsThreeDots fill='#ffffff'/></a>
                <Link to ={`/people?page=${pages.length}`}>{pages.length}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 1}`}><FaChevronRight className='chevron' fill='#ffffff' size={18}/></Link>
            </>) : (Number(pageNumber) === pages.length) ? 

            (<>
                <Link to ={`/people?page=${Number(pageNumber) - 1}`}><FaChevronLeft className='chevron' fill='#ffffff' size={18}/></Link>
                <Link to ={`/people?page=1`}>1</Link>
                <a><BsThreeDots fill='#ffffff'/></a>
                <Link to ={`/people?page=${Number(pageNumber) - 6}`}>{Number(pageNumber) - 6}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 5}`}>{Number(pageNumber) - 5}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 4}`}>{Number(pageNumber) - 4}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 3}`}>{Number(pageNumber) - 3}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 2}`}>{Number(pageNumber) - 2}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 1}`}>{Number(pageNumber) - 1}</Link>
                <Link style={{color: 'var(--detail-color)'}} to ={`/people?page=${pageNumber}`}>{pageNumber}</Link>
                <a><FaChevronRight className='chevron' fill='#ffffff' size={18}/></a>
            </>) : (Number(pageNumber) === 2) ?
                    
            (<>
                <Link to ={`/people?page=${Number(pageNumber) - 1}`}><FaChevronLeft className='chevron' fill='#ffffff' size={18}/></Link>
                <Link to ={`/people?page=1`}>1</Link>
                <Link style={{color: 'var(--detail-color)'}} to ={`/people?page=${pageNumber}`}>{pageNumber}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 1}`}>{Number(pageNumber) + 1}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 2}`}>{Number(pageNumber) + 2}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 3}`}>{Number(pageNumber) + 3}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 4}`}>{Number(pageNumber) + 4}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 5}`}>{Number(pageNumber) + 5}</Link>
                <a><BsThreeDots fill='#ffffff'/></a>
                <Link to ={`/people?page=${pages.length}`}>{pages.length}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 1}`}><FaChevronRight className='chevron' fill='#ffffff' size={18}/></Link>
            </>) : (Number(pageNumber) > 2 && Number(pageNumber) < 4) ?
                    
            (<>
                <Link to ={`/people?page=${Number(pageNumber) - 1}`}><FaChevronLeft className='chevron' fill='#ffffff' size={18}/></Link>
                <Link to ={`/people?page=1`}>1</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 1}`}>{Number(pageNumber) - 1}</Link>
                <Link style={{color: 'var(--detail-color)'}} to ={`/people?page=${pageNumber}`}>{pageNumber}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 1}`}>{Number(pageNumber) + 1}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 2}`}>{Number(pageNumber) + 2}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 3}`}>{Number(pageNumber) + 3}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 4}`}>{Number(pageNumber) + 4}</Link>
                <a><BsThreeDots fill='#ffffff'/></a>
                <Link to ={`/people?page=${pages.length}`}>{pages.length}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 1}`}><FaChevronRight className='chevron' fill='#ffffff' size={18}/></Link>
            </>) : (Number(pageNumber) === (pages.length - 1)) ? 

            (<>
                <Link to ={`/people?page=${Number(pageNumber) - 1}`}><FaChevronLeft className='chevron' fill='#ffffff' size={18}/></Link>
                <Link to ={`/people?page=1`}>1</Link>
                <a><BsThreeDots fill='#ffffff'/></a>
                <Link to ={`/people?page=${Number(pageNumber) - 5}`}>{Number(pageNumber) - 5}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 4}`}>{Number(pageNumber) - 4}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 3}`}>{Number(pageNumber) - 3}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 2}`}>{Number(pageNumber) - 2}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 1}`}>{Number(pageNumber) - 1}</Link>
                <Link style={{color: 'var(--detail-color)'}} to ={`/people?page=${pageNumber}`}>{pageNumber}</Link>
                <Link to ={`/people?page=${pages.length}`}>{pages.length}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 1}`}><FaChevronRight className='chevron' fill='#ffffff' size={18}/></Link>
            </>) : (Number(pageNumber) === (pages.length - 2)) ? 

            (<>
                <Link to ={`/people?page=${Number(pageNumber) - 1}`}><FaChevronLeft className='chevron' fill='#ffffff' size={18}/></Link>
                <Link to ={`/people?page=1`}>1</Link>
                <a><BsThreeDots fill='#ffffff'/></a>
                <Link to ={`/people?page=${Number(pageNumber) - 4}`}>{Number(pageNumber) - 4}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 3}`}>{Number(pageNumber) - 3}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 2}`}>{Number(pageNumber) - 2}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 1}`}>{Number(pageNumber) - 1}</Link>
                <Link style={{color: 'var(--detail-color)'}} to ={`/people?page=${pageNumber}`}>{pageNumber}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 1}`}>{Number(pageNumber) + 1}</Link>
                <Link to ={`/people?page=${pages.length}`}>{pages.length}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 1}`}><FaChevronRight className='chevron' fill='#ffffff' size={18}/></Link>
            </>) :
            
            (<>
                <Link to ={`/people?page=${Number(pageNumber) - 1}`}><FaChevronLeft className='chevron' fill='#ffffff' size={18}/></Link>
                <Link to ={`/people?page=1`}>1</Link>
                <a><BsThreeDots fill='#ffffff'/></a>
                <Link to ={`/people?page=${Number(pageNumber) - 2}`}>{Number(pageNumber) - 2}</Link>
                <Link to ={`/people?page=${Number(pageNumber) - 1}`}>{Number(pageNumber) - 1}</Link>
                <Link style={{color: 'var(--detail-color)'}} to ={`/people?page=${pageNumber}`}>{pageNumber}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 1}`}>{Number(pageNumber) + 1}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 2}`}>{Number(pageNumber) + 2}</Link>
                <a><BsThreeDots fill='#ffffff'/></a>
                <Link to ={`/people?page=${pages.length}`}>{pages.length}</Link>
                <Link to ={`/people?page=${Number(pageNumber) + 1}`}><FaChevronRight className='chevron' fill='#ffffff' size={18}/></Link>

            </>) 
            }
        </PaginationContainer>
    )
}
