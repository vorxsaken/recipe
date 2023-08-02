import { ReactElement, useState, forwardRef, useImperativeHandle } from 'react'
import Observer from './Observer'

interface InfiniteViewUI {
    url: string,
    body: {
        method: string,
        body: any
    },
    emptyView: ReactElement,
    successView: (res: any) => ReactElement,
    increaseSkip: () => void,
    endPage: number
}

const InfiniteFetch = forwardRef(({
    url,
    body,
    emptyView,
    successView,
    increaseSkip,
    endPage
}: InfiniteViewUI, ref) => {
    const [data, setData] = useState<any[]>([]);
    const [showLoad, setShowLoad] = useState(true);

    const fetcher = () => {
        fetch(url, body)
            .then(req => req.json())
            .then(res => {
                if (res.length < endPage) setShowLoad(false);
                setData([...data, ...res])
                increaseSkip();
            })
            .catch(error => console.log(error));
    }

    const datas = data.length > 0 && successView(data);
    const loading = showLoad ? (
        <>
            <Observer trigger={() => fetcher()} small />
        </>
    ) : data.length === 0 && emptyView

    useImperativeHandle(ref, () => ({
        refetch() {
            setData([])
            setShowLoad(true);
        }
    }))
    
    return (
        <>
            {datas}
            {loading}
        </>
    )
})

export default InfiniteFetch