import GithubContext from '../../context/github/GithubContext';
import { useState, useContext } from 'react';

//
function UsersSearch() {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') {
      alert('Please enter something');
    } else {
      searchUsers(text);
      setText('');
    }
  };
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 nb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit} action=''>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                {' '}
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 ? (
        <div>
          <button
            className='btn btn-secondary btn-lg mb-2'
            onClick={clearUsers}
          >
            Clear List
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default UsersSearch;
