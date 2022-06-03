import { getAccessToken, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"

import { withApollo } from "../../lib/withApollo"
import { useGetProductsQuery } from "../../graphql/generated/graphql"
import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/pagePublic"


function Home(props){
  const {user} = useUser()
  // const {data} = useGetProductsQuery()

  return(
    <>
    <h1>Hello World</h1>
    <pre>
    {JSON.stringify(props, null, 2)}
    </pre>
    <pre>
      {JSON.stringify(user, null, 2)}
    </pre>
    
    </>
  )
}

export const getServerSideProps= withPageAuthRequired({
  getServerSideProps : async (ctx)=>{
    return getServerPageGetProducts(null, ctx)
    


  }
})


export default withApollo(
  ssrGetProducts.withPage()(Home)
)