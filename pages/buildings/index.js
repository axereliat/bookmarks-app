import {Fragment, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import toastr from 'toastr';
import BuildingFormModal from "../../components/BuildingFormModal";
import ConfirmModal from "../../components/ConfirmModal";
import {destroy} from "../../store/buildingSlicer";

export default function Buildings() {

    const buildings = useSelector(state => state.building.buildings);
    const dispatch = useDispatch();

    const [formModalOpen, setFormModalOpen] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [selectedBuildingId, setSelectedBuildingId] = useState(null);

    const [loading, setLoading] = useState(false);

    const [buildingToEdit, setBuildingToEdit] = useState({});

    function toggleFormModal(cb, buildingId) {
        setBuildingToEdit({});
        if (typeof buildingId !== 'undefined') {
            setSelectedBuildingId(buildingId);

            if (buildingId === null) return;

            const building = buildings.filter(b => b.id.toString() === buildingId.toString())[0];
            setBuildingToEdit(building);
        }
        setFormModalOpen(!formModalOpen);
        if (typeof cb !== 'undefined') {
            cb();
        }
    }

    function toggleConfirmModal(cb, buildingId) {
        setConfirmModalOpen(!confirmModalOpen);
        if (typeof buildingId !== 'undefined') {
            setSelectedBuildingId(buildingId);
        }
        if (typeof cb !== 'undefined' && cb !== null) {
            cb();
        }
    }

    function deleteBuilding() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            dispatch(destroy(selectedBuildingId));
            toastr.success('Building was successfully removed');
        }, 500);
    }

    if (loading) {
        return (
            <div className="jumbotron">
                <h3 className="text-center">Please wait...</h3>
            </div>
        );
    }

    return (
        <Fragment>
            <ConfirmModal {...{
                modalOpen: confirmModalOpen,
                toggle: toggleConfirmModal,
                toggleCallback: deleteBuilding,
                modalTitle: 'Delete building confirmation'
            }}/>
            <BuildingFormModal {...{
                modalOpen: formModalOpen, toggle: toggleFormModal,
                modalTitle: selectedBuildingId ? 'Edit building' : 'Add building',
                building: buildingToEdit
            }}/>
            <div className="jumbotron">
                <button className="btn btn-primary" onClick={() => toggleFormModal()}>Add building</button>

                {buildings.length > 0 ? <table className="table">
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Area</th>
                        <th>Location</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                    {buildings.map(b => (
                        <tr key={b.id}>
                            <td>{b.id}</td>
                            <td>{b.name}</td>
                            <td>{b.area}</td>
                            <td>{b.location}</td>
                            <td>{b.image ?
                                <img src={b.image} width="20%" className="img-thumbnail"
                                     alt="no image"/> : 'No image'}</td>
                            <td>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-secondary mr-2" onClick={() => toggleFormModal(undefined, b.id)}>Edit
                                    </button>
                                    <button className="btn btn-danger"
                                            onClick={() => toggleConfirmModal(null, b.id)}>Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table> : <h3>No buildings...</h3>}
            </div>
        </Fragment>
    )
}
