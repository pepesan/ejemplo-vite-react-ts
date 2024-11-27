import alertify from 'alertifyjs';

const AlertifyComponent = () => {

    const clickHandle = () => {
        alertify.alert('Alert Title', 'Alert Message!', function(){
            alertify.success('Ok');
        });
    }
    return (
        <div>
            <button type="button" onClick={clickHandle}>Pulsame</button>
        </div>
    )
}

export default AlertifyComponent;