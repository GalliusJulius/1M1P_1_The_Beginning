import '../styles/components/gauge.scss'

const Gauge = ({minValue, maxValue, color, title, valueGauge}) => {
    return(
        <div>
            <p>${title}</p>
            <div className='gauge'>
                <p className='gauge-extremity'>${minValue}</p>
                <div className='gauge-element gauge-fill' style={{width: valueGauge, backgroundColor: color}}></div>
                <div className='gauge-element'></div>
                <p className='gauge-extremity'>${maxValue}</p>
            </div>
        </div>
    )
}

export default Gauge
