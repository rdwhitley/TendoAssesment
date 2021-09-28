import data from '../data/patient-feedback-raw-data.json';

const getPatientName = () => {
    const patient = data.entry.filter(item => item.resource.resourceType === 'Patient')[0];
    const fullName = patient.resource.name[0].text.split(" ");
    const firstName = fullName[0];
    return firstName;
}

export default getPatientName;