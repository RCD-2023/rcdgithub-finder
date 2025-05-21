import UserResults from '../components/users/UserResults';
import UsersSearch from '../components/users/UsersSearch';

function Home() {
  return (
    <>
      <UsersSearch />
      <UserResults />
      {/* <h1 className='text-6xl'>wELCOME</h1>
      {import.meta.env.VITE_APP_GITHUB_TOKEN} */}
    </>
  );
}

export default Home;
