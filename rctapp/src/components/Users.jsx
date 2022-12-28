import { Outlet, useSearchParams } from "react-router-dom"

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    return (
        <>
          <div>New user</div>
          <div>Current user</div>
          <button onClick={() => setSearchParams({filter: 'active'})}>Log in</button>
          <button onClick={() => setSearchParams({})}>Log out</button>
          <Outlet />
          {
            showActiveUsers ? (<h3>Showing active users</h3>) : (<h3>No active users</h3>)
          }
        </>
    )
}