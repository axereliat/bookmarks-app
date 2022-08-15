import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import FileBase64 from 'react-file-base64';
import {useState} from "react";
import toastr from "toastr";
import {useDispatch, useSelector} from "react-redux";
import {add} from "../store/buildingSlicer";

export default function BuildingFormModal({modalTitle, toggle, modalOpen}) {

    const buildings = useSelector(state => state.building);
    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [area, setArea] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');

    const [loading, setLoading] = useState(false);

    function getFile(file) {
        setImage(file.base64);
    }

    function handleSubmit() {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            const existsId = buildings.buildings.filter(b => b.id.toString() === id.toString()).length > 0;

            if (id && existsId) {
                toastr.error('Building with id ' + id + ' already exists.');
                return;
            }
            if (!id || !name || !area) {
                toastr.error('Id, name and area are required.');
                return;
            }

            dispatch(add({id, name, area, location, image}));

            toastr.success('The building was successfully added.');

            toggle(clearFields);
        }, 500);
    }

    function clearFields() {
        setId('');
        setName('');
        setArea('');
        setLocation('');
        setImage('');
    }

    return (
        <Modal isOpen={modalOpen} toggle={toggle} size="l">
            <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label htmlFor="buildingId">Id<small className="text-danger">*</small></label>
                        <input type="number" className="form-control" id="buildingId"
                               onChange={e => setId(e.target.value)} value={id}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name<small className="text-danger">*</small></label>
                        <input type="text" className="form-control" id="name" onChange={e => setName(e.target.value)}
                               value={name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="area">Area<small className="text-danger">*</small></label>
                        <input type="number" className="form-control" id="area" onChange={e => setArea(e.target.value)}
                               value={area}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" className="form-control" id="location"
                               onChange={e => setLocation(e.target.value)} value={location}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <FileBase64
                            onDone={getFile}/>
                    </div>
                    {image.length > 0 ?
                        <img src={image} className="img-thumbnail" width="20%" alt="building image"/> : null}
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSubmit} disabled={loading}>{loading ? 'Please wait...' : 'Save'}</Button>{' '}
                <Button color="secondary" onClick={() => toggle(clearFields)}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
