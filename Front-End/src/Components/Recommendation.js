import getPatientName from '../methods/patientName';
const Recommendation = () => {
    const patientName = getPatientName();
    console.log(patientName)
    return (
        <div>
            Here is my recommendation
        </div>
    )
}

export default Recommendation;