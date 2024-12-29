"use client"
import { useEffect, useState } from "react";

export default function UserList() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api/posts")
                const result = await response.json();

                if (result.error) {
                    setError(result.error);
                } else {
                    setData(result.user); // Assuming 'user' is an array
                }
            } catch (err) {
                setError("Failed to fetch data");
            }
        }

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {data.map((user, index) => (
                    <li key={index}>{user.name}</li> // Replace 'name' with the actual field from your database
                ))}
            </ul>
        </div>
    );
}
