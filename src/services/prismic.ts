import Prismic from '@prismicio/client'

//a documentação pede pra tipar como unknown
export function getPrismicClient(req?:unknown){

const prismic = Prismic.client('https://blogkaka.cdn.prismic.io/api/v2',{
    req
})

return prismic
}