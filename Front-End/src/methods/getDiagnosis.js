import data from '../data/patient-feedback-raw-data.json';

const getDiagnosis = () => {
    const diagnoses = data.entry.filter(item => item.resource.resourceType === 'Diagnosis')[0];
    const diagnosis = diagnoses.resource.code.coding[0].name;
    return diagnosis;
}

export default getDiagnosis;