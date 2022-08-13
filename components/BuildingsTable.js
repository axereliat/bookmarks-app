import classes from '../styles/BuildingTable.module.css';
import {useSelector} from "react-redux";

export default function BuildingsTable() {
    const buildings = useSelector(state => state.building);

    return (
        <table className="table">
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
                    <td>{b.image ? <img src={b.image} width="20%" className="img-thumbnail" alt="no image" /> : 'No image'}</td>
                    <td>edit or delete</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
