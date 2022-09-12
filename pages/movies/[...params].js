//  movies.12211354
import {useRouter} from 'next/router'
import Seo from '../../components/Seo';

export default function Detail({params}){
    const router = useRouter();
    console.log(router.query)
    const [title, id] = params || [];

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${router.query.coverImg}`}></img>
            <Seo title={title}></Seo>
            <h4>{title}</h4>
        </div>
    )

}


export function getServerSideProps({params : {params}}){
console.log(params)
   return {
    props : {
        params
    },
 
   }
}