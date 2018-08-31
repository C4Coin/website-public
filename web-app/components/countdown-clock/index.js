import React from 'react'
import PropTypes from 'prop-types'
import s from './index.scss'

const Value = props => <div className={s['value']} {...props} />
const Label = props => <div className={s['label']} {...props} />

const timeFormats = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

CountdownClock.propTypes = {
  days: timeFormats.isRequired,
  hours: timeFormats.isRequired,
  minutes: timeFormats.isRequired,
  seconds: timeFormats.isRequired,
  className: PropTypes.string
}

export default function CountdownClock({
  days,
  hours,
  minutes,
  seconds,
  className = '',
  ...rest
}) {
  return (
    <div className={`${s['container']} ${className}`}>
      <div className={s['title']}>
        <span className={s['line']} /> Starts In <span className={s['line']} />
      </div>
      <div className={s['display']}>
        <div className={s['values-display']}>
          <Value>{days}</Value>
          <Value>{hours}</Value>
          <Value>{minutes}</Value>
          <Value>{seconds}</Value>
        </div>
        <div className={s['labels-display']}>
          <Label>Days</Label>
          <Label>Hours</Label>
          <Label>Minutes</Label>
          <Label>Seconds</Label>
        </div>
      </div>
    </div>
  )
}
