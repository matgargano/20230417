export const revalidate = 60;


const Page = async () => {

    const req = await fetch('https://api.matgargano.com/api/employees');
    const res = await req.json();

    return res.map(e => {
        return <div key={e.id}>
            <p>{e.name}</p>
        </div>
    })


}

export default Page;