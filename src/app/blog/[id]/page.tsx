export default async function BlogDetailsPage({params,}:{params:Promise<{id:number}>}){
    const {id} = await params
    return(
        <div>
            <h1>blog deatils page: {id}</h1>
        </div>
    )
}