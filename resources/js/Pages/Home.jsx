import { useEffect } from 'react';
import useMenuContext from '../Hooks/use-menu-context';
import useImageContext from '../Hooks/use-image-context';
// import useAdminContext from '../hooks/use-admin-context';
import Header from '../Components/Header/Header';
import Title from '../Components/Header/Title';
// import MenuItemAdd from '../components/Menu/MenuItemAdd';
// import MenuList from '../components/Menu/MenuList';
import AdminHomeActions from '../Components/Admin/AdminHomeActions';
// import { Link } from 'react-router-dom'

function Home () {

    const { getMenu } = useMenuContext();

    // const { admin, getLoginUser } = useAdminContext();

    // useEffect(() => {
    //     getLoginUser()
    // }, [])

    useEffect(() => {
        getMenu()
    }, [])
    
    // const showMenuItemAdd = (admin.username) ? <MenuItemAdd /> : '';
    // const showAdmin = (!admin.username) ? <Link to='/admin'>Admin</Link> : '';


    return (
        <>
            <Header />
            <Title />
            {/* { showMenuItemAdd }
            <MenuList />
            { showAdmin } */}
            <AdminHomeActions />
            Home!
        </>
    )
}

export default Home;