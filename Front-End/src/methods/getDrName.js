import data from '../data/patient-feedback-raw-data.json';

const getDrName = () => {
    const doctor = data.entry.filter(item => item.resource.resourceType === 'Doctor')[0];
    const lastName = doctor.resource.name[0].family;
    return lastName;
}

export default getDrName;