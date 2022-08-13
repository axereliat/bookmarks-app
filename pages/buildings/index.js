import BuildingsTable from "../../components/BuildingsTable";
import {Fragment, useState} from "react";
import BuildingFormModal from "../../components/BuildingFormModal";

export default function Buildings() {

    const [modalOpen, setModalOpen] = useState(false);

    function toggle(cb) {
        setModalOpen(!modalOpen);
        console.log(cb);
        if (typeof cb !== 'undefined') {
            cb();
        }
    }

    return (
        <Fragment>
            <BuildingFormModal {...{modalOpen, toggle, modalTitle: 'Add building'}}/>
            <div className="jumbotron">
                <button className="btn btn-primary" onClick={() => toggle()}>Add building</button>
                <BuildingsTable/>
            </div>
        </Fragment>
    )
}
