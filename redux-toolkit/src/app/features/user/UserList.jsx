import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

function UserList() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchUsers())
    }, [dispatch])
  
    const data = useSelector((state) => state.user);

  
    if (data.error) {
      return data.error
    }
  
    return (
      <div className='grid gap-4 grid-cols-2  md:grid-cols-4 lg:grid-cols-8  p-4'>
        {data.loading && <p>loading...</p>}
        {!data.loading && data.error ? <p>{data.error}</p>: null}
        {!data.loading && data.data.length ? data.data.map((content) => (
          <div key={content.id}>
            <p>{content.name}</p>
          </div>
        )):null}
      </div>
    )
}

export default UserList