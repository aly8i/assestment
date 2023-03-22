import styles from "../styles/adminDatatable.module.scss"
import Tooltip from '@mui/material/Tooltip';
export const userColumns = [
  { field: "_id", headerName: "ID", width: 300,
  renderCell: (params) => {
    return (
      <Tooltip title={params.row._id} placement="bottom">
        <div className={styles.id}>{params.row._id.substring(0,5)+"..."}</div>
      </Tooltip>       
      );
  },},
  {
    field: "name",
    headerName: "Name",
    width: 300,
    renderCell: (params) => {
      return (
        <div className={styles.cellWithImg}>
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "phonenumber",
    headerName: "Phone Number",
    width: 300,
    renderCell: (params) => {
      return (
        <div className={styles.cellWithImg}>
          {params.row.phonenumber}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Address",
    width: 300,
    renderCell: (params) => {
      return (
        <div className={styles.cellWithImg}>
          {params.row.address}
        </div>
      );
    },
  },
  
];