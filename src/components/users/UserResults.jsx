import { useContext } from "react"
import Spinner from "../layouts/Spinner"
import UserItem from "./UserItem"
import GithubContext from "../../contexts/GithubContext"

const UserResults = () => {

    const { users, loading } = useContext(GithubContext)

    if (!loading) {
        
        if (Array.isArray(users.items) && users.items.length > 0) {
            return (
                <>
                    <div className="grid grid-cols-1 gap-0 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                        {users.items.map((user) => (
                            <UserItem key={user.id} user={user} />
                        ))}
                    </div>
                </>
            );
        } else {
            // Handle the case when users.items is an empty array
            return <div>No users found.</div>;
        }
    } else {
        return <Spinner />;
    }


    // if (!loading) {
    //     console.log(users)
    //     return (
    //         <>
    //             <div className="grid grid-cols-1 gap-0 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
    //                 {users.map((user) => (
    //                     <UserItem key={user.id} user={user} />
    //                 ))}
    //             </div>
    //         </>
    //     )
    // } else {
    //     return <Spinner /> 
    // }
}

export default UserResults