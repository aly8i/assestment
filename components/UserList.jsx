import styles from "../styles/adminList.module.scss"
import UserDatatable from "./UserDatatable"
const UserList = ({users}) => {
  return (
    <div className={styles.list}>
      <div className={styles.listContainer}>
        <UserDatatable users={users}/>
      </div>
    </div>
  )
}

export default UserList