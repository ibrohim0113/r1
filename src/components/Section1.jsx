import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Section1 = () => {
    let api = "http://localhost:3000/curs"
    let [products, setProducts] = useState(null)
  const {id} = useParams()
    async function get() {
        try {
            let { data } = await axios.get(`${api}/${id}`)
            setProducts(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        get()
    }, [])

if(!products) return <div>loading...</div>

    return (
        <>
            <h1 className='pt-[100px]'>{products.title}</h1>
        </>

    )

}

export default Section1
