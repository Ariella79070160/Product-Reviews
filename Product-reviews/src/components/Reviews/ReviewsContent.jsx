import { useMediaQuery } from '../../usHooks';
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';


const ProductReviewsContext = createContext()

export const useProductReviewsContext = () => useContext(ProductReviewsContext);

const ProductReviewsContextProvider = ({ children }) => {
    const isDesktopView = useMediaQuery('(min-width: 768px)')
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    
    const [curPage, setCurPage] = useState(1)
    const [pagination, setPagination] = useState({
        has_more: false,
        total: 0
    })
    const reviewsPerPage = isDesktopView ? 12 : 10;

    const getReviews = useCallback(
        async (initialFetching = false) => {
            if (initialFetching) {
                setIsLoading(true);
            } else {
                setIsFetching(true);
            }

            const response = await fetch(
                `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/voyager-hoodie/reviews?page=${curPage}&per_page=${reviewsPerPage}`
            )
            const data = await response.json()
            
            if(data){
                setReviews(
                    curPage === 1 ? data.data : (prev) => [...prev, ...data.data]
                )
                setPagination({
                    has_more: data.pagination.has_more,
                    total: data.pagination.total
                })
                setCurPage(data.pagination.page)
            }
            setIsLoading(false)
        },
        [curPage, reviewsPerPage]
    )

    useEffect(() => {
        getReviews(isLoading)
    }, [curPage])


    const value = useMemo(() => {
        return {
            reviews,
            pagination,
            isLoading,
            isFetching,
            curPage,
        }
    },[
        reviews,
        pagination,
        isLoading,
        isFetching,
        curPage
    ])

    return (
        <ProductReviewsContext.Provider value={value}>
            {children}
        </ProductReviewsContext.Provider>
    )
}

export default ProductReviewsContextProvider