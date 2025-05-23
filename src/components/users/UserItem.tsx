import { User, UserItemProps } from '../../types/User';
import { Link } from 'react-router-dom';

//
// type UserItemProps = {
//   user: User;
// };
//

function UserItem({ user: { login, avatar_url } }: UserItemProps) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center  space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='Profile' />
            </div>
          </div>
          <h2>{login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/users/${login}`}
          >
            Visit profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
