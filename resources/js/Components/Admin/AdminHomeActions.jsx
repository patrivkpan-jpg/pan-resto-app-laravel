import ImageAdd from '../Images/ImageAdd'
import MenuItemAdd from '../Menu/MenuItemAdd';

function AdminHomeActions () {
    return (
        <footer className="admin-home-actions">
            <MenuItemAdd className="admin-home-actions-item" />
            <ImageAdd className="admin-home-actions-item" />
        </footer>
    )
}

export default AdminHomeActions;