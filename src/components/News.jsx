import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { getNews } from "../store/actions"
import { kitcut } from "../utils/kitcut"


const News = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news)

    useEffect(() => {
        dispatch(getNews())
    }, [])

    return(
        <div className="news">
            <div className="news__title">Новости</div>
            <ul className="news__list">
            {news.map(item => {
                return(
                    <li key={item.title} className="news__item">
                        <div className="new">
                            <div className="new__title">
                                <a target='_blank'  href={item.link} className="new__link">{item.title}</a>
                            </div>
                            <div className="new__date">{item.pubDate}</div>
                            <div className="new__desc">{kitcut(String(item.description), 100)}</div>
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default News