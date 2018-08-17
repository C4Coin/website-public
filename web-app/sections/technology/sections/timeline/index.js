import React from 'react'
import PropTypes from 'prop-types'
import Cms from 'modules/cms'
import formatTimelineData from '../../utils/format-timeline-data'
import s from './index.scss'
import format from 'utils/format'

Timeline.propTypes = {
  phases: PropTypes.array.isRequired
}

function Timeline({ phases, ...rest }) {
  return (
    <section className={s['container']}>
      <h2 className={s['title']}>Timeline</h2>
      <div className={s['graphic']}>
        {phases.map(({ title, milestones }, phaseIndex) => (
          <div className={s['phase']} key={phaseIndex}>
            <h3 className={s['phase-title-area']}>
              <span className={s['phase-title-box']}>
                <span className={s['phase-title']}>{title}</span>
              </span>
            </h3>
            {phaseIndex < phases.length - 1 && (
              <div className={s['line-container']}>
                <span className={s['line']} />
              </div>
            )}
            {milestones &&
              milestones.map(
                ({ title, date, isDatePublished }, milestoneIndex) => (
                  <div
                    className={s['milestone']}
                    key={`${phaseIndex}-${milestoneIndex}`}
                  >
                    <div className={s['milestone-marker']}>
                      {date && <div className={s['milestone-complete']} />}
                    </div>
                    <h4 className={s['milestone-title']}>{title}</h4>
                    {isDatePublished && (
                      <div className={s['date-container']}>
                        <p className={s['milestone-date']}>
                          {format.longDate(date)}
                        </p>
                        <span className={s['date-connection']} />
                      </div>
                    )}
                    <div className={s['line-container']}>
                      <span className={s['line']} />
                    </div>
                  </div>
                )
              )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cms.injectTimeline(Timeline, formatTimelineData)
