import React from 'react'
import PropTypes from 'prop-types'
import camelcase from 'camelcase-keys'
import FormManager from 'modules/form-manager-module'
import s from './index.scss'
import Drawer from 'components/drawer'
import defaultFields from './default-fields'
import { Link } from 'react-router-dom'
import Format from 'utils/format'
import StyleVariables from 'style/style.variables.scss'

const FieldCheckbox = FormManager.FieldCheckbox
const Field = FormManager.Field

const { $lightGray } = camelcase(StyleVariables.global)

PurchaseForm.propTypes = {
  fieldValues: PropTypes.objectOf(PropTypes.string),
  submit: PropTypes.func.isRequired
}

function addFilledClass({ className = '', ...props }) {
  return { className: `${className} ${s['filled']}`, ...props }
}

function CField(props) {
  return <Field filled={addFilledClass} {...props} />
}

export default function PurchaseForm({ fieldValues, submit }) {
  const fullFields = Format.objectMap(defaultFields, (name, field) => {
    if (fieldValues[name]) {
      return { [name]: { ...field, value: fieldValues[name] } }
    }
    return { [name]: field }
  })

  return (
    <FormManager submit={submit} fields={fullFields}>
      {({ managedFields, managedSubmit }) => {
        const canSubmit = managedFields.hasAgreed.value

        const submitStyle = canSubmit ? {} : { backgroundColor: $lightGray }

        return (
          <form className={s['form']} onSubmit={managedSubmit}>
            <div className={s['row']}>
              <CField
                fieldId="first"
                fields={managedFields}
                placeholder="First Name"
              />
              <CField
                fieldId="last"
                fields={managedFields}
                placeholder="Last Name"
              />
            </div>
            <CField
              fieldId="email"
              fields={managedFields}
              type="email"
              placeholder="Email"
            />
            <div className={s['company-section']}>
              <label htmlFor="isForCompany">
                <FieldCheckbox
                  fieldId="isForCompany"
                  fields={managedFields}
                  className={s['checkbox']}
                />
                Are you redeeming on behalf of a corporation?
              </label>
              <Drawer isOpen={managedFields.isForCompany.value}>
                <CField
                  fieldId="company"
                  fields={managedFields}
                  placeholder="Company / Organization"
                />
              </Drawer>
            </div>
            <CField
              fieldId={'phone'}
              fields={managedFields}
              placeholder="Phone Number"
            />
            <CField
              fieldId={'addressLineOne'}
              fields={managedFields}
              placeholder="Address Line 1"
            />
            <CField
              fieldId={'addressLineTwo'}
              fields={managedFields}
              placeholder="Address Line 2"
            />
            <div className={s['row']}>
              <CField
                fieldId={'country'}
                fields={managedFields}
                placeholder="Country"
              />
              <CField
                fieldId={'state'}
                fields={managedFields}
                placeholder="state"
              />
            </div>
            <div className={s['row']}>
              <CField
                fieldId={'city'}
                fields={managedFields}
                placeholder="city"
              />
              <CField
                fieldId={'zip'}
                fields={managedFields}
                placeholder="zip"
              />
            </div>
            <CField
              fieldId={'linkedin'}
              fields={managedFields}
              placeholder="Linkedin - optional"
            />
            <CField
              fieldId={'github'}
              fields={managedFields}
              placeholder="Github - optional"
            />
            <div className={s['checkout-section']}>
              <label htmlFor="hasAgreed">
                <FieldCheckbox
                  fieldId="hasAgreed"
                  fields={managedFields}
                  className={s['checkbox']}
                />
                I have read and agree to the terms of service&nbsp;
                <Link to="/tos/co2kn-terms-and-conditions" target="_blank">
                  terms of service
                </Link>
              </label>
              <div className={s['submit-display']}>
                <button type="submit" style={submitStyle}>
                  Checkout with CCC
                </button>
              </div>
            </div>
          </form>
        )
      }}
    </FormManager>
  )
}
