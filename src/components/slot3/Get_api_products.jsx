import { useEffect, useState } from "react";
import axios from "axios";

export default function ToyList() {
    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchToys = async () => {
            try {
                const res = await axios.get("http://localhost:8080/customers");
                console.log(res.data);
                setToys(res.data || []);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchToys();
    }, []);
    
    if (loading) return <h2>Loading...</h2>;

    return (
        // <div>
        //   <h1>Toy List</h1>

        //   {toys.map((toy) => (
        //     <div
        //       key={toy.id}
        //       style={{
        //         border: "1px solid #ccc",
        //         marginBottom: "10px",
        //         padding: "10px",
        //       }}
        //     >
        //       <img
        //         src={toy.thumbnail}
        //         alt={toy.title}
        //         width="120"
        //       />

        //       <h3>{toy.title}</h3>

        //       <p>Price: ${toy.price}</p>
        //     </div>
        //   ))}
        // </div>
        <div>
            <h1>Customer List</h1>

            {toys.map((toy) => (
                <div
                    key={toy.id}
                    style={{
                        border: "1px solid #ccc",
                        marginBottom: "10px",
                        padding: "10px",
                    }}
                >

                    <h3>{toy.name}</h3>
                    <p>Phone: {toy.phone}</p>
                    <p>Address: {toy.address}</p>
                </div>
            ))}
        </div>
    );
}