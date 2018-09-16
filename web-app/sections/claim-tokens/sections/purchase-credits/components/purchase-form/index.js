import React from 'react'
import FormManager from 'modules/form-manager-module'
import s from './index.scss'
import queryString from 'query-string'
import ReactMotion from 'react-motion'
import Drawer from 'components/drawer'

const FieldCheckbox = FormManager.FieldCheckbox
const Field = FormManager.Field

const defaultFields = {
  first: '',
  last: '',
  email: '',
  isForCompany: false,
  company: '',
  phone: '',
  addressLineOne: '',
  addressLineTwo: '',
  country: '',
  state: '',
  city: '',
  zip: '',
  linkedin: '',
  github: ''
}

function submitPurchase(fieldValues) {
  if (canSubmit(fieldValues)) {
    console.log(queryString.stringify(fieldValues))

    // window.location.href = cccEndpoint(fieldValues)
    return true
  } else {
    console.log('Cant submit')
    console.log(fieldValues)
    return false
  }
}

function canSubmit(fields) {
  return true
}

function cccEndpoint(fieldValues) {
  const { first } = fieldValues

  const cccWebsite = 'https://dev.carboncreditcapital.com'
  const item = '5307'
  return `${cccWebsite}/checkout/?add-to-cart=${item}&quantity=1&first=${first}`
}

export default function PurchaseForm({ fields }) {
  const fullFields = Object.assign({}, defaultFields, fields)

  return (
    <FormManager submit={submitPurchase} fields={fullFields}>
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
          <div className={s['checkout']}>
            <button type="submit">Checkout with CCC</button>
          </div>
        </form>
      )}
    </FormManager>
  )
}
