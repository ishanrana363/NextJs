
const getData =async () => {
    let response = await fetch('https://dummyjson.com/products')
    let json = await response.json()
    return json["products"]
}
const Page = async () => {
    let data = await getData()
    return (
        <div>
            {
                data.map((item,i)=>{
                    return(
                        <div key={i} >
                            <h1> { item["title"] } </h1>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Page;