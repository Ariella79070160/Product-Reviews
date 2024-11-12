import clsx from 'clsx';



const ProgressBar = ({value, color, className}) => {
    return (
        <div
            className={clsx('h-2 grow rounded-lg bg-gray-200', className)}>
                <div
                    className="h-full rounded-lg"
                    style={{
                        width: `${value}%`,
                        backgroundColor: color || 'bg-orange-500',
                    }}>

                </div>
        </div>
    )
}

export default ProgressBar