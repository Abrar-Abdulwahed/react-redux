import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

function UserList() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchUsers())
    }, [dispatch])
  
    const contents = useSelector((state) => state.user.data)
    const isLoading = useSelector((state) => state.user.loading)
    const error = useSelector((state) => state.user.error)
  
    if (isLoading) {
      return 'loading...'
    }
  
    if (error) {
      return error
    }
  
    return (
      <div className='grid gap-4 grid-cols-2  md:grid-cols-4 lg:grid-cols-8  p-4'>
        {contents.map((content) => (
          <div key={content.id}>
            <p>{content.name}</p>
          </div>
        ))}
      </div>
    )
}

export default UserList