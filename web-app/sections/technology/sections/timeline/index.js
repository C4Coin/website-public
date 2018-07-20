import React from 'react'
import PropTypes from 'prop-types'
import TimelineData from 'modules/timeline-data'
import s from './index.scss'

Timeline.propTypes = {
  phases: PropTypes.array.isRequired
}

function Timeline({ phases, ...rest }) {
  return (
    <section className={s['container']}>
      <h2 className={s['title']}>Timeline</h2>
      <div className={s['graphic']}>
        {phases.map(({ name, milestones }, phaseIndex) => (
          <div className={s['phase']} key={phaseIndex}>
            <h3 className={s['phase-title-area']}>
              <span className={s['phase-title-box']}>
                <span className={s['phase-title']}>{name}</span>
              </span>
            </h3>
            {phaseIndex < phases.length - 1 && (
              <div className={s['line-container']}>
                <span className={s['line']} />
              </div>
            )}
            {milestones &&
              milestones.map(({ name, date }, milestoneIndex) => (
                <div
                  className={s['milestone']}
                  key={`${phaseIndex}-${milestoneIndex}`}
                >
                  <div className={s['milestone-marker']}>
                    {date && <div className={s['milestone-complete']} />}
                  </div>
                  <h4 className={s['milestone-title']}>{name}</h4>
                  {date && (
                    <div className={s['date-container']}>
                      <p className={s['milestone-date']}>{date}</p>
                      <span className={s['date-connection']} />
                    </div>
                  )}
                  <div className={s['line-container']}>
                    <span className={s['line']} />
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TimelineData.inject(Timeline)
