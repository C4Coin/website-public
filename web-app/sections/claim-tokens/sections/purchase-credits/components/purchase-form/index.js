import React from 'react'
import FormManager from 'modules/form-manager-module'
import s from './index.scss'
import qs from 'qs'
import ReactMotion from 'react-motion'
import Drawer from 'components/drawer'
import appConfig from 'app.config'
import defaultFields from './default-fields'
import { Link } from 'react-router-dom'
import Format from 'utils/format'

const FieldCheckbox = FormManager.FieldCheckbox
const Field = FormManager.Field
const { cccIntegrationForm: cmCcc } = appConfig.campaignMonitor

export default function PurchaseForm({ fieldValues, submit }) {
  const fullFields = Format.objectMap(defaultFields, (name, field) => {
    if (fieldValues[name]) {
      console.log()
      return { [name]: { ...field, value: fieldValues[name] } }
    }
    return { [name]: field }
  })

  console.log(fullFields)

  return (
    <FormManager submit={submit} fields={fullFields}>
      {({ managedFields, managedSubmit }) => (
        <form className={s['form']} onSubmit={managedSubmit}>
          <div className={s['row']}>
            <Field
              fieldId="first"
              fields={managedFields}
              placeholder="First Name"
            />
            <Field
              fieldId="last"
              fields={managedFields}
              placeholder="Last Name"
            />
          </div>
          <Field
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
              <Field
                fieldId="company"
                fields={managedFields}
                placeholder="Company / Organization"
              />
            </Drawer>
          </div>
          <Field
            fieldId={'phone'}
            fields={managedFields}
            placeholder="Phone Number"
          />
          <Field
            fieldId={'addressLineOne'}
            fields={managedFields}
            placeholder="Address Line 1"
          />
          <Field
            fieldId={'addressLineTwo'}
            fields={managedFields}
            placeholder="Address Line 2"
          />
          <div className={s['row']}>
            <Field
              fieldId={'country'}
              fields={managedFields}
              placeholder="Country"
            />
            <Field
              fieldId={'state'}
              fields={managedFields}
              placeholder="state"
            />
          </div>
          <div className={s['row']}>
            <Field fieldId={'city'} fields={managedFields} placeholder="city" />
            <Field fieldId={'zip'} fields={managedFields} placeholder="zip" />
          </div>
          <Field
            fieldId={'linkedin'}
            fields={managedFields}
            placeholder="Linkedin"
          />
          <Field
            fieldId={'github'}
            fields={managedFields}
            placeholder="Github"
          />
          <label htmlFor="hasAgreed">
            <FieldCheckbox
              fieldId="hasAgreed"
              fields={managedFields}
              className={s['checkbox']}
            />
            I have read and agree to the terms of service&nbsp;
            <Link to="/terms-of-service" target="_blank">
              terms of service
            </Link>
          </label>
          <div className={s['checkout']}>
            <button type="submit">Checkout with CCC</button>
          </div>
        </form>
      )}
    </FormManager>
  )
}
