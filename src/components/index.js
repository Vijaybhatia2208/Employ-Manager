import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';
import List from './ListEmploy';
import Add from './CreateEmploy';
import Edit from './EditEmploy';
import { deleteEmploy } from '../store';

function Dashboard({ store }) {
    const dispatch = useDispatch();

    const employs = useSelector((state) => state.employs);
    const [selectedEmploy, setSelectedEmploy] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const employ = employs.filter(employ => employ.id === id);
        setSelectedEmploy(employ);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employ] = employs.filter(employ => employ.id === id);


                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employ.firstName} ${employ.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                dispatch(deleteEmploy(id))
            }
        });
    }


    return (

        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    selectedEmploy={selectedEmploy}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard;