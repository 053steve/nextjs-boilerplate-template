import React from 'react';
import {useGlobal} from '../context/global-context';

import {ALERT_TYPE} from '../interfaces/data.interface';

// should be able to change color or mode, success and fail
// should be able to close
// should be able to add title: description

const Alert: React.FC = () => {


    const { state: { alertMsg, showAlert, alertType } } = useGlobal();

    const alertColors = {
        'SUCCESS': {
            bg: 'bg-green-100',
            border: 'border-green-400',
            textColor: 'text-green-700',
            closeColor: ' text-green-500'
        },
        'DANGER': {
            bg: 'bg-red-100',
            border: 'border-red-400',
            textColor: 'text-red-700',
            closeColor: ' text-red-500'
        }
    }

    let alertTab;

    if (showAlert && alertType) {
        alertTab = <div className={`${alertColors[alertType].bg}  border ${alertColors[alertType].border} ${alertColors[alertType].textColor} px-4 py-3 rounded relative`}
             role="alert">
            <strong className="font-bold">Holy smokes!</strong>
            <span className="block sm:inline">{alertMsg}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className={`fill-current h-6 w-6 ${alertColors[alertType].closeColor}`} role="button"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"><title>Close</title><path
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
        </div>;
    }


    return (
        <div>
            {alertTab}
        </div>
    );
}

export default Alert;