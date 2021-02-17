import BootstrapTable from 'react-bootstrap-table-next';
import Delete  from '../../assets/images/delete.svg';
import Edit  from '../../assets/images/edit.svg';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { noScrollbarsClassName } from 'react-remove-scroll-bar';

function Dashboard (props) {

    const products = [{
            id: '1234',
            role: 'All users',
            description: 'all users can view and edit',
            permission: 'Add Edit Security Roles',
            actions: <><img src={Delete} height='20' width='20' />&nbsp;&nbsp;<img src={Edit} height='20' width='20' /></>
        }, {
            id: '2345',
            role: 'Engineer',
            description: 'The person who can edit',
            permission: 'Delete Division Names',
            actions: <><img src={Delete} height='20' width='20' />&nbsp;&nbsp;<img src={Edit} height='20' width='20' /></>
        }, {
            id: '3456',
            role: 'Analyst',
            description: 'The perso who can analyze',
            permission: 'Add Security Roles',
            actions: <><img src={Delete} height='20' width='20' />&nbsp;&nbsp;<img src={Edit} height='20' width='20' /></>
        }, {
            id: '4567',
            role: 'Analyst',
            description: 'The perso who can analyze',
            permission: 'Add Security Roles',
            actions: <><img src={Delete} height='20' width='20' />&nbsp;&nbsp;<img src={Edit} height='20' width='20' /></>
        }, {
            id: '5678',
            role: 'Analyst',
            description: 'The perso who can analyze',
            permission: 'Add Security Roles',
            actions: <><img src={Delete} height='20' width='20' />&nbsp;&nbsp;<img src={Edit} height='20' width='20' /></>
        }, {
            id: '6789',
            role: 'Analyst',
            description: 'The perso who can analyze',
            permission: 'Add Security Roles',
            actions: <><img src={Delete} height='20' width='20' />&nbsp;&nbsp;<img src={Edit} height='20' width='20' /></>
        }, {
            id: '7890',
            role: 'Analyst',
            description: 'The perso who can analyze',
            permission: 'Add Security Roles',
            actions: <><img src={Delete} height='20' width='20' />&nbsp;&nbsp;<img src={Edit} height='20' width='20' /></>
        }];

    const columns = [{
        dataField: 'id',
        text: 'Security Key',
        sort: true
      }, {
        dataField: 'role',
        text: 'Security Role',
        sort: true
      }, {
        dataField: 'description',
        text: 'Security Description',
        sort: true
      },
      {
        dataField: 'permission',
        text: 'Permission',
        sort: true
      },
      {
        dataField: 'actions',
        text: 'Actions',
        sort: true
      }];
      
      const defaultSorted = [{
        dataField: 'name',
        order: 'asc'
      }];

      const options = {
        // pageStartIndex: 0,
        sizePerPage: 4,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true
      };
      
    return (
        <div className={noScrollbarsClassName} style={{overflowX: 'hidden'} }>
            <h1>Dashboard</h1>
            <BootstrapTable
                bootstrap4
                keyField="id"
                data={ products }
                columns={ columns }
                defaultSorted={ defaultSorted } 
                pagination={ paginationFactory(options) }
            />
        </div>
    )
}

export default Dashboard;